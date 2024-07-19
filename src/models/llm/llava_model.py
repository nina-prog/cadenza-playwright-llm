from LLaVA.llava.constants import (
    IMAGE_TOKEN_INDEX,
    DEFAULT_IMAGE_TOKEN,
    DEFAULT_IM_START_TOKEN,
    DEFAULT_IM_END_TOKEN,
    IMAGE_PLACEHOLDER,
)

from LLaVA.llava.conversation import conv_templates
from LLaVA.llava.model.builder import load_pretrained_model
from LLaVA.llava.utils import disable_torch_init

from LLaVA.llava.mm_utils import (
    process_images,
    tokenizer_image_token,
    get_model_name_from_path,
)

from PIL import Image
from io import BytesIO
import requests
import torch
import re

import sqlite3

from main import main_cluster
from src.data.database import fetch_relevant_items, map_items_to_args
from src.data.data_loading import load_config

import argparse


class LLaVAModel:

    def __init__(self, model_path, model_base, sep, temperature, top_p, num_beams, max_new_tokens):
        disable_torch_init()

        self.model_name = get_model_name_from_path(model_path)
        self.tokenizer, self.model, self.image_processor, self.context_len = load_pretrained_model(
            model_path, model_base, self.model_name
        )

        self.sep = sep
        self.temperature = temperature
        self.top_p = top_p
        self.num_beams = num_beams
        self.max_new_tokens = max_new_tokens

    def run_inference(self, input_model):
        qs = input_model['prompt']
        image_file = input_model['image_path']

        if "llama-2" in self.model_name.lower():
            conv_mode = "llava_llama_2"
        elif "mistral" in self.model_name.lower():
            conv_mode = "mistral_instruct"
        elif "v1.6-34b" in self.model_name.lower():
            conv_mode = "chatml_direct"
        elif "v1" in self.model_name.lower():
            conv_mode = "llava_v1"
        elif "mpt" in self.model_name.lower():
            conv_mode = "mpt"
        else:
            conv_mode = "llava_v0"

        if conv_mode is not None and conv_mode != conv_mode:
            print(
                "[WARNING] the auto inferred conversation mode is {}, while `--conv-mode` is {}, using {}".format(
                    conv_mode, conv_mode, conv_mode
                )
            )
        else:
            conv_mode = conv_mode

        conv = conv_templates[conv_mode].copy()

        conv.append_message(conv.roles[0], qs)
        conv.append_message(conv.roles[1], None)
        prompt = conv.get_prompt()

        image_files = self.image_parser(image_file, self.sep)
        images = self.load_images(image_files)
        image_sizes = [x.size for x in images]
        images_tensor = process_images(
            images,
            self.image_processor,
            self.model.config
        ).to(self.model.device, dtype=torch.float16)

        input_ids = (
            tokenizer_image_token(prompt, self.tokenizer, IMAGE_TOKEN_INDEX, return_tensors="pt")
            .unsqueeze(0)
            .cuda()
        )
        # TODO: DELETE
        print(input_ids)

        with torch.inference_mode():
            output_ids = self.model.generate(
                input_ids,
                images=images_tensor,
                image_sizes=image_sizes,
                do_sample=True if self.temperature > 0 else False,
                temperature=self.temperature,
                top_p=self.top_p,
                num_beams=self.num_beams,
                max_new_tokens=self.max_new_tokens,
                use_cache=True,
            )

        outputs = self.tokenizer.batch_decode(output_ids, skip_special_tokens=True)[0].strip()
        # TODO: DELETE
        print(outputs)

        return outputs

    @staticmethod
    def image_parser(image_file, sep):
        out = image_file.split(sep)
        return out

    @staticmethod
    def load_image(image_file):
        if image_file.startswith("http") or image_file.startswith("https"):
            response = requests.get(image_file)
            image = Image.open(BytesIO(response.content)).convert("RGB")
        else:
            image = Image.open(image_file).convert("RGB")
        return image

    def load_images(self, image_files):
        out = []
        for image_file in image_files:
            image = self.load_image(image_file)
            out.append(image)
        return out


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-path", type=str, required=True)
    args = parser.parse_args()

    # Connect to the database
    config = load_config("./config/config.yaml")

    conn = sqlite3.connect('./data/raw/playwright_script.db')
    cursor = conn.cursor()

    res = cursor.execute("SELECT * FROM tests")
    items = res.fetchall()

    print("There are {} data.".format(len(items)))

    args_init = {'model_path': args.model_path,
                 'model_base': None,
                 "sep": ",",
                 "temperature": 0,
                 "top_p": None,
                 "num_beams": 1,
                 "max_new_tokens": 512
                 }

    model = LLaVAModel(**args_init)

    ids = [i[0] for i in items]

    for current_id in ids:
        relevant_items = fetch_relevant_items(cursor, current_id)
        print(current_id)
        print(relevant_items)
        args = map_items_to_args(relevant_items, config)
        args['image_path'] = args['image_path'].replace('\\', '/')
        args['html_path'] = args['html_path'].replace('\\', '/')
        args['precondition_path'] = args['precondition_path'].replace('\\', '/')
        args['validation_path'] = args['validation_path'].replace('\\', '/')
        print(args)
        args['model'] = model
        main_cluster(**args)
