# Cadenza-Playwright-LLM
This repository provides tools for automated UI test generation for the Disy Cadenza web app using Playwright and local language models (LLM). It demonstrates leveraging LLMs to create robust and maintainable UI test suites, enhancing the efficiency and quality of the testing process. This is part of the "Praktikum: Smart Data Analytics" SS24 at KIT (Karlsruher Institute of Technology).

## Group Members 👤 
| Forename  | Surname | Matr.#  |
|-----------|---------|---------|
| Nina      | Mertins | - |
| Johannes  | Bordt   | - |
| Christoph | Behrens | - |
| Niklas    | Quendt  | - |
| Frederik  | Broy     | - |

# Project Structure
```
📦 cadenza-playwright-llm
│
├── 📄 README.md                              ← Documentation Overview of the project.
├── 📂 config/                                ← Configuration files for the project.
│   ├── 📄 config.yaml                        ← Configuration file with all necessary parameters.
│   ├── 📄 config_pred_01.yaml                ← Configuration file with predicitions.
│   ├── 📄 config_pred_02.yaml                ← Configuration file with predictions.
│   ├── 📄 config_with_german_template.yaml   ← Configuration with german settings
│   └── 📄 playwright config.ts               ← Playwright configuration
├── 📂 data/                                  ← Data used for the project.
│   ├── 📂 external/                          ← External data sources.
│   ├── 📂 finetuning/                        ← Data used for finetuning.
│   ├── 📂 prediction/                        ← Predicition results.
│   ├── 📂 processed/                         ← Processed data, modified during development (with timestamp as ID).
│   ├── 📂 raw/                               ← Raw data, not to be modified, provided by the supervisors.
│   ├── 📂 scores/                            ← Scores and evaluation metrics.
│   └── 📂 temp/                              ← Temporary data.
├── 📂 docs/                                  ← Documentation of the project, including task descriptions and plots.
│   └── 📂 images/                            ← Images used in the documentation.
│   ├── 📄 introduction_PP_disycadenze.pdf    ← Introduction to Cadenza.
│   └── 📄 uebungsblatt_3.pdf                 ← Description of the initial task. 
├── 📂 notebooks/                             ← Jupyter Notebooks with the following naming convention: <date>_<author>_<topic>.ipynb
│   ├── 📂 notebooks_on_cluster/              ← Notebooks on the cluster.
│   ├── 📂 summary notebooks/                 ← Notebooks summarizing what was done.
├── 📂 scripts/                               ← Standalone scripts for running various tasks.
│   ├── 📄 __init__.py                        ← Initialize the tests package.
│   ├── 📄 evaluation.py                      ← Script for evaluating models.
│   ├── 📄 run_demo_playwright__2_1           ← Script for initiating the test generation process.
│   ├── 📄 run_tests.py                       ← Script for running the generated UI tests.
│   └── 📄 train.py                           ← Script for training models.
├── 📂 src/                                   ← Source code of the project.
│   ├── 📂 data/                              ← Data-related scripts.
│   │   ├── 📄 __init__.py                    ← Initialize the data package.
│   │   ├── 📄 code_processor.py              ← Script for processing code data.
│   │   ├── 📄 data_loading.py                ← Script for loading data.
│   │   ├── 📄 database.py                    ← Script for database interactions.
│   │   ├── 📄 html_processor.py              ← Script for processing HTML data.
│   │   └── 📄 image_processor.py             ← Script for processing image data.
│   ├── 📂 evaluation/                        ← Evaluation-related scripts.
│   ├── 📂 json_generator/                    ← Data-related scripts.
│   │   ├── 📄 __init__.py                    ← Initialize the json_generator package.
│   │   ├── 📄 balanced_split.py              ← Script for creating balanced data splits.
│   │   ├── 📄 generate_json.py               ← Script for generating JSON data.
│   ├── 📂 models/                            ← Model-related scripts.
│   │   ├── 📄 __init__.py                    ← Initialize the models package.
│   │   └── 📂 llm/                           ← Scripts related to LLM.
│   ├── 📂 ui_tests/                          ← Directory for UI test generation and execution scripts.
│   │   ├── 📄 __init__.py                    ← Initialize the ui_tests package.
│   │   ├── 📄 test_execution.py              ← Script for executing UI tests.
│   │   └── 📄 test_generation.py             ← Script for generating UI tests.
│   ├── 📂 utils/                             ← Utility scripts.
│   │   ├── 📄 helpers.py                     ← Helper functions.
│   │   ├── 📄 logger.py                      ← Logging functionality.
│   │   └── 📄 __init__.py                    ← Initialize the src package.
├── 📄 .gitignore                             ← Files and directories to be ignored by git.
├── 📄 .pre-commit-config.yaml                ← Configuration file for pre-commit hooks.
├── 📄 main.py                                ← 
├── 📄 requirements.in                        ← Requirements file for the project.
├── 📂 .github/                               ← GitHub Actions configuration files.
│   └── 📂 workflows/                         ← Directory for GitHub Actions workflows.
│       └── 📄 ci.yml                         ← Continuous Integration workflow.
```

# Setup
**Operating System:** Windows 11 (64-bit), macOS

**Python Version:** 3.10

Clone the repository by running the following command in your terminal:
```
git clone https://github.com/nina-prog/cadenza-playwright-llm
```
Navigate to the project root directory by running the following command in your terminal:

```
cd cadenza-playwright-llm
```


[Optional] Create a virtual environment and activate it. For example, using the built-in venv module in Python:

```
python3 -m venv venv-psda
source venv-psda/bin/activate
```

Install the required packages by running the following command in your terminal:
```
pip install -r requirements.in
```


[Optional] Run Jupyter notebooks (makes sure to have jupyter installed!):
```
python -m ipykernel install --user --name=psda python=3.10 # create kernel for jupyter notebook
jupyter notebook # or open them via IDE (e.g. VSCode or PyCharm)
```


# References
- - - 


