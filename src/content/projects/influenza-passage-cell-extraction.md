---
title: "Extracting Influenza Passaging Cell Type from GenBank Records"
description: "Fine-tuning question answering LLMs to extract passaging cell type metadata from unstructured influenza GenBank records"
tags: ["LLM", "Metadata Extraction", "Influenza", "GenBank", "RoBERTa"]
github: "https://github.com/NIAID-BRC-Codeathons/influenza-passage-cell-extraction"
---

**Project Themes:**

- Other

**Team Name:**

**Team Lead(s):**

- Name: Jamie Overbeek
- Affiliation: Argonne
- Email: joverbeek@anl.gov

**Suggested Team Members and Roles \[4-6 members\]**

| Name | Affiliation | Role / Expertise |
| ---- | ----------- | ---------------- |
|      |             |                  |
|      |             |                  |
|      |             |                  |
|      |             |                  |
|      |             |                  |

**Project Summary**

Public data and sequence resources such as Genbank are of great value to the community, but many questions we would like to address require the extraction of specific metadata from unstructured or loosely structured input fields. We would like to fine-tune a question answering LLM like Roberta to extract passaging cell type(s) from influenza Genbank records to enable downstream sequence analysis for passaging signals. A dataset of metadata records associated with the correct cell type would be used as input. A limited number of possible cell types exist (e.g. egg, MDCK, monkey kidney), but there are no standardized fields or formats/abbreviations for this data so manual review is currently required for each file. This approach, if successful, could be applied to any unstructured metadata for which someone is willing to curate a subset of training examples.

**Goals and Objectives**

- Goal 1: Develop a method for scoring responses
- Goal 2: Fine-tune an LLM to extract passaging cell type
- Goal 3 (optional): Push Github repo as an example for future problems

**Approach**

**Inputs:**

- LLM (RoBERTa, DistilBERT)
- File containing Genbank influenza records
- Curated passaging designations for a subset of records

**Steps:**

1. Convert the input files to a question-and-answer format required by the model
2. Fine-tune the model with the Huggingface transformers library
3. Evaluate model on hold-out dataset (presumably unlabeled data) and quantify amount of training data needed.
4. Leave code in good shape for possible integration into a service or BRC data curation

**Data and Resources Required**

| Resource Type     | Source / Link                                         | Description / Purpose |
| ----------------- | ----------------------------------------------------- | --------------------- |
| Data              | Genbank influenza records with curated passage labels |                       |
| Tools / Services  | e.g., BV-BRC analysis tools, APIs, BV-BRC CLI         |                       |
| LLMs / AI Models  | Roberta                                               |                       |
| Compute / Storage | Argonne mid-size machines (lambdas)                   |                       |

**Expected Outcomes / Deliverables**

- Fine-tuned model

- Full set of passaging cell type predictions

**Potential Impact and Next Steps**

The BRCs provide a comprehensive suite of tools for sequence analysis, and many experiments are now bottlenecked by the process of extracting relevant metadata from unstructured text. An LLM for automatically extracting fields of interest from public data would be useful behind the scenes to expand the amount of metadata the BRCs can curate, as well as a possible service to allow users to target questions of interest. Code generated here could be expanded to any metadata characteristic with a significant presence in public databases. Estimates of how much data is required for a good model would also be useful in minimizing human curation effort required. After developing a prototype, feedback from the community could help us build new models for the highest “value added” data types.

**Technical Support Needed**

- GPU / LLM access

**Additional Comments**

[Image placeholder - to be added]
