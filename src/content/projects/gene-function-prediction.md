---
title: "Assigning Functions to Uncharacterized Genes"
description: "Leveraging machine learning and AI to predict functions of characterized and uncharacterized genes using K-mers, ensemble methods, and LLM embeddings"
tags: ["Machine Learning", "Gene Function", "LLM", "Protein Function"]
---

**Project Themes:**

- Assign Functions to Uncharacterized Genes

**Team Name: Correct Horse Battery Staple**

**Team Lead(s):**

- Name: Marcus Nguyen
- Affiliation: University of Chicago
- Email: marcus.nguyen@anl.gov

**Suggested Team Members and Roles \[4-6 members\]**

| Name            | Affiliation           | Role / Expertise                 |
| --------------- | --------------------- | -------------------------------- |
| Marcus Nguyen   | University of Chicago | Model building and data cleaning |
| Justin Podowski | University of Chicago | Model building and data cleaning |
| Alex Brace???   | University of Chicago | LLM modeling                     |
| James Davis???  | University of Chicago | Model building and data cleaning |

**Project Summary**

In this project, we aim to leverage aspects of machine learning and large language models to predict functoriality from known, characterized genes and proteins. That model can then be used to predict functionality for uncharacterized genes and proteins. The project will utilize traditional ML using K-mers and ensemble methods like XGBoost and random forest while also incorporating aspects of LLMs like GenSLMs and ESM embeddings and, if time permits, fine tuning GenSLMs or ESM models for the task of function classifiction. The BV-BRC functional roles, PGFams, and PLFams will be leveraged as labels while the sequence data itself will be feature-ized to build models.

**Goals and Objectives**

- Goal 1: Build ensemble models utilizing k-mers
- Goal 2: Build ensemble models utilizing LLM embeddings
- Goal 3 (time permitting): Fine tune LLM model for classification task

**Approach**

- Featurizing sequences via K-mers and LLM embeddings for XGBoost or random forest
- Fine tuning GenSLMs

**Data and Resources Required**

| Resource Type     | Source / Link                                                                | Description / Purpose                                                       |
| ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Data              | BV-BRC genome feature sequences and metadata (functional role, PLFam, PGFam) | Raw features and labels                                                     |
| Tools / Services  | BV-BRC FTP and/or CLI                                                        | Download sequence and metadata                                              |
| LLMs / AI Models  | GenSLMs, ESM                                                                 | Embedding sequences and fine tuning models                                  |
| Compute / Storage | Argonne HPC, BRC cluster nodes                                               | BRC cluster nodes to train ML models, HPC possibly needed to fine tune LLMs |

**Expected Outcomes / Deliverables**

- Models that predict protein function

**Potential Impact and Next Steps**

- Infectious disease research or surveillance: characterizing unknown and known genes can be useful to know what genes are in the population
- AI/ML automation and interpretability: the product is an ML/AI/LLM model to predict protein function
- Public health preparedness or education: characterizing unknown and known genes can be useful to know what genes are in the population

_Follow up after the codeathon would include tuning of ML models and more thorough statistical analysis of results. An expansion of the models' scope may also be a possibility as well. Possible publication?_

**Technical Support Needed**

- GPU / LLM access

**Additional Comments**
