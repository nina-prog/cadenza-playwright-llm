# cadenza-playwright-llm
This repository provides tools for automated UI test generation for the Disy Cadenza web app using Playwright and local language models (LLM). It demonstrates leveraging LLMs to create robust and maintainable UI test suites, enhancing the efficiency and quality of the testing process. This is part of the "Praktikum: Smart Data Analytics" SS24 at KIT (Karlsruher Institute of Technology).

# Overview
Short overview of the project.

# Project Structure
```
📦 cadenza-playwright-llm
│
├── 📄 README.md                              ← Documentation Overview of the project.
├── 📂 config/                                ← Configuration files for the project.
│   └── 📄 config.yaml                        ← Configuration file with all necessary parameters.
├── 📂 data/                                  ← Data used for the project.
│   ├── 📂 external/                          ← External data sources.
│   ├── 📂 raw/                               ← Raw data, not to be modified, provided by the supervisors.
│   └── 📂 processed/                         ← Processed data, modified during development (with timestamp as ID).
├── 📂 docs/                                  ← Documentation of the project, including task descriptions and plots.
│   └── 📂 images/                            ← Images used in the documentation.
├── 📂 notebooks/                             ← Jupyter Notebooks with the following naming convention: <date>_<author>_<topic>.ipynb
├── 📂 src/                                   ← Source code of the project.
│   ├── 📂 data/                              ← Data-related scripts.
│   │   ├── 📄 data_loading.py                ← Script for loading data.
│   │   └── 📄 data_preprocessing.py          ← Script for preprocessing data.
│   ├── 📂 models/                            ← Model-related scripts.
│   ├── 📂 pipelines/                         ← Pipeline scripts for training and inference.
│   ├── 📂 ui_tests/                          ← Directory for UI test generation and execution scripts.
│   ├── 📂 utils/                             ← Utility scripts.
│   │   ├── 📄 helpers.py                     ← Helper functions.
│   │   ├── 📄 logger.py                      ← Logging functionality.
│   └── 📄 __init__.py                        ← Initialize the src package.
├── 📂 scripts/                               ← Standalone scripts for running various tasks.
│   ├── 📄 evaluate.py                        ← Script for evaluating models.
│   ├── 📄 generate_tests.py                  ← Script for initiating the test generation process.
│   ├── 📄 run_tests.py                       ← Script for running the generated UI tests.
│   └── 📄 train.py                           ← Script for training models.
├── 📂 tests/                                 ← Test scripts for the project.
│   └── 📄 __init__.py                        ← Initialize the tests package.
├── 📄 .gitignore                             ← Files and directories to be ignored by git.
├── 📄 .pre-commit-config.yaml                ← Configuration file for pre-commit hooks.
├── 📄 requirements.in                        ← Requirements file for the project.
├── 📄 requirements.txt                       ← Requirements file for reproducing the environment.
├── 📂 .github/                               ← GitHub Actions configuration files.
│   └── 📂 workflows/                         ← Directory for GitHub Actions workflows.
│       └── 📄 ci.yml                         ← Continuous Integration workflow.
```

# Setup
Detailed setup instructions.

# Usage
Guide on how to use the tools.

# References
List of references used in the project.
