---
title: "Optimizing Protein Language Model for Viral Structure Prediction"
description: "Fine-tuning ProstT5 with LoRA optimization to predict viral protein structures at scale, integrating with Foldseek for massive database analysis"
tags:
  [
    "Protein Language Model",
    "Structure Prediction",
    "Virology",
    "Machine Learning",
  ]
---

**Project Themes:**

- Assign Functions to Uncharacterized Genes

**Team Name: _virAllSpark_**

**Team Leads:**

- Name: David Moi
- Affiliation: University of Lausanne
- Email: david.moi@unil.ch
-
- Name: Dongwook Kim
- Affiliation: University of Lausanne
- Email: dongwook.kim@unil.ch

**Suggested Team Members and Roles \[4-6 members\]**

| Name         | Affiliation            | Role / Expertise                                                                                                            |
| ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| David Moi    | University of Lausanne | Project leader (model development) / AI, ML, snakemake, HPC, docker, structural biology, phylogenetics                      |
| Dongwook Kim | University of Lausanne | Project leader (validation and integration) / Phylogenetics, sequence analysis, protein structures, Protein Language Models |
| TBD          | \-                     | Model development part / AI expert(s) on transformer models, biological language models, sequence embeddings                |
| TBD          | \-                     | Validation part / Biology and/or Bioinformatics expert(s) on virology, viral taxonomy, sequence analysis, sequence database |

**Project Summary**

In this project, we will zero in on producing a fast and accurate language model for viral structure prediction. Current state-of-the-art models, such as ProstT5, are shown robust in species with a wealth of sequences, while suffering from under-represented species like viruses. For this, we will fine-tune the ProstT5 model weights with the LoRA optimization layer, where we can exploit the recent expansion on viral protein structure databases. We will validate the model by reconstructing viral taxonomy with structurally conserved core genes. Integrating this model into the Foldseek framework will allow us to predict structures from massive, possibly all publicly available, viral sequence databases.

**Goals and Objectives**

- Goal 1: Develop a protein language model for viral structural token prediction
- Goal 2: Validate the model with ground-truth viral structures and taxonomy
- Goal 3: Integrate the model into Foldseek and apply on massive databases

**Approach**

Milestone 1\. Fine-tuning the ProstT5 model with viral sequence/structure pairs

- BFVD dataset transformed to 3di and ready to train. We will prepare a large corpus of structural tokens to train the virus-specific prostT5 model
- Tokenization and training working using huggingface tokenizer using fill in and translation tasks. The tokenizers and setup for both problems will be tested before training is launched.
- LoRA optimization of ProstT5 weights using the huggingface interface. The model will be trained using GPU resources to fine tune its predictive capabilities for viral datasets.
  - If necessary, split into clade specific models
- Inference: Transform uniprot proteomic data to 3di.

Milestone 2\. Validation of the model with viral taxonomy reconstruction

- We will preliminarily prepare a small ground-truth dataset of viruses, in which their taxonomic relationship is well-studied and their structures are experimentally validated.
- We will run our fine-tuned model on this set, predict their 3Di strings to compare them with the known structures.
- Utilizing our toolbase, we will define strucutural core genes to conduct structural phylogeny of given virus species. We can estimate the quality of our model by comparing the results with the pre-established taxonomy.

Milestone 3\. Foldseek framework integration and applications

- Updated weights can be readily integrated into the Foldseek-ProstT5 framework.
- We will run the model on the viral subset of NCBI/UniProt protein databases with this integrated framework, convert them into 3Di strings, which will become a valuable resource for structural analysis of viral species.

**Data and Resources Required**

| Resource Type | Source / Link                                       | Description / Purpose                                                                           |
| ------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Data          | BFVD dataset https://bfvd.steineggerlab.workers.dev | Key component to train protein language model tailored for viral structure precition            |
| Data          | Viro3d structures Uniprot Viral sequences           | Datasets for model refinement and inference                                                     |
| Compute       | Argonne HPC – GPU resources                         | Required for model training, benchmarking, and post-application of the model on large databases |
| Storage       | Argonne HPC – Storage                               | Required to store prerequisite, intermediate, resulting data produced during the development    |

**Expected Outcomes / Deliverables**

- Working prototype protein language model that can rapidly predict viral 3Di characters from amino acids
- Proof of concept that the model works; Core genes and phylogenetic trees generated with predicted 3Di strings using smaller ground-truth dataset of virus with known taxonomy
- If possible, deliver the predicted 3Di database from publicly available viral proteins from NCBI and UniProt

**Potential Impact and Next Steps**

Development of a robust model will enable viral protein structural prediction at unprecedented scale. The resulting knowledgebase will unlock large-scale, deep comparative genomics across viral species with their protein structures, which has been limited by the scarcity of viral structure data. It will also catalyze downstream advances, including structure-based reclassification of viruses, structure-guided viral identification methods, or metagenomic expansion.

**Technical Support Needed**

- Datasets preloaded (Pre-downloaded BFVD datasets to save time)
- GPU / LLM access (Access to the ANL GPU resources for fine-tuning and database-scale prediction)

**Additional Comments**
