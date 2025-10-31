---
title: "Viral Structural Phylogenetics"
description: "Optimizing protein language model to predict viral protein structures at scale"
tags:
github: "https://github.com/NIAID-BRC-Codeathons/viral-phylogenetics"
  [
    "AI",
    "Structural Biology",
    "Phylogenetics",
    "Protein Language Models",
    "Virology",
  ]
---

\*\*Project Theme

**Other** - Viral Structural Phylogenetics

\*\*Team Information

**Team Name:** virAllSpark

**Team Lead(s):**

- Name: David Moi
- Affiliation: University of Lausanne
- Email: david.moi@unil.ch

- Name: Dongwook Kim
- Affiliation: University of Lausanne
- Email: dongwook.kim@unil.ch

**Team Members (4-6 members recommended):**

| Name         | Affiliation            | Role / Expertise                                                                                                            |
| ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| David Moi    | University of Lausanne | Project leader (model development) / AI, ML, snakemake, HPC, docker, structural biology, phylogenetics                      |
| Dongwook Kim | University of Lausanne | Project leader (validation and integration) / Phylogenetics, sequence analysis, protein structures, Protein Language Models |
| TBD          | -                      | Model development part / AI expert(s) on transformer models, biological language models, sequence embeddings                |
| TBD          | -                      | Validation part / Biology and/or Bioinformatics expert(s) on virology, viral taxonomy, sequence analysis, sequence database |

\*\*Project Summary

In this project, we will zero in on producing a fast and accurate language model for viral structure prediction. Current state-of-the-art models, such as ProstT5, are shown robust in species with a wealth of sequences, while suffering from under-represented species like viruses. For this, we will fine-tune the ProstT5 model weights with the LoRA optimization layer, where we can exploit the recent expansion on viral protein structure databases. We will validate the model by reconstructing viral taxonomy with structurally conserved core genes. Integrating this model into the Foldseek framework will allow us to predict structures from massive, possibly all publicly available, viral sequence databases.

\*\*Goals and Objectives

1. **Develop a protein language model for viral structural token prediction**
2. **Validate the model with ground-truth viral structures and taxonomy**
3. **Integrate the model into Foldseek and apply on massive databases**

\*\*Approach

**Methods and AI/ML Approaches:**

- Fine-tuning ProstT5 model with LoRA optimization
- Hugging Face transformers and tokenizers for biological language models
- Structural phylogenetics using 3Di token predictions
- Foldseek framework integration for large-scale structure prediction

**Implementation Steps:**

1. **Milestone 1: Fine-tuning the ProstT5 model with viral sequence/structure pairs**
   - BFVD dataset transformed to 3di and ready to train
   - Prepare large corpus of structural tokens to train virus-specific ProstT5 model
   - Tokenization and training using Hugging Face tokenizer with fill-in and translation tasks
   - LoRA optimization of ProstT5 weights using the Hugging Face interface
   - If necessary, split into clade-specific models
   - Inference: Transform UniProt proteomic data to 3di

2. **Milestone 2: Validation of the model with viral taxonomy reconstruction**
   - Prepare ground-truth dataset of viruses with well-studied taxonomic relationships
   - Run fine-tuned model to predict 3Di strings and compare with known structures
   - Define structural core genes to conduct structural phylogeny of virus species
   - Estimate model quality by comparing results with pre-established taxonomy

3. **Milestone 3: Foldseek framework integration and applications**
   - Integrate updated weights into Foldseek-ProstT5 framework
   - Run model on viral subset of NCBI/UniProt protein databases
   - Convert to 3Di strings as valuable resource for structural analysis

\*\*Data and Resources Required

| Resource Type         | Source / Link                                         | Description / Purpose                                                                           |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Data**              | BFVD dataset (https://bfvd.steineggerlab.workers.dev) | Key component to train protein language model tailored for viral structure prediction           |
| **Data**              | Viro3d structures, UniProt Viral sequences            | Datasets for model refinement and inference                                                     |
| **Compute / Storage** | Argonne HPC – GPU resources                           | Required for model training, benchmarking, and post-application of the model on large databases |
| **Compute / Storage** | Argonne HPC – Storage                                 | Required to store prerequisite, intermediate, resulting data produced during the development    |

\*\*Expected Outcomes / Deliverables

By the end of the Codeathon, we expect to deliver:

- **Working prototype protein language model** that can rapidly predict viral 3Di characters from amino acids
- **Proof of concept validation** that the model works; Core genes and phylogenetic trees generated with predicted 3Di strings using smaller ground-truth dataset of virus with known taxonomy
- **Predicted 3Di database** from publicly available viral proteins from NCBI and UniProt (if possible)
- **Code Repository:** GitHub repo with documentation and integration guides
- **Documentation:** Model usage guides and API documentation
- **Presentation:** Demo showing model performance and validation results

\*\*Potential Impact and Next Steps

**Impact on:**

- **Infectious disease research or surveillance:** Development of a robust model will enable viral protein structural prediction at unprecedented scale. The resulting knowledgebase will unlock large-scale, deep comparative genomics across viral species with their protein structures, which has been limited by the scarcity of viral structure data.
- **AI/ML automation and interpretability:** Demonstrates advanced fine-tuning techniques for biological language models and structural prediction at scale
- **Public health preparedness or education:** Will catalyze downstream advances, including structure-based reclassification of viruses, structure-guided viral identification methods, or metagenomic expansion

**Next Steps After Codeathon:**

- Expand model to cover broader viral families and clades
- Integrate with existing viral databases and phylogenetic tools
- Develop web interface for community access
- Publish methodology and make model weights publicly available
- Apply to outbreak surveillance and viral evolution studies

\*\*Technical Support Needed

- Datasets preloaded - Pre-downloaded BFVD datasets to save time
- GPU / LLM access - Access to the ANL GPU resources (for fine-tuning and database-scale prediction)
  API keys
  Mentor support
  Other: [Specify]

\*\*Additional Comments

This project focuses on addressing the under-representation of viral proteins in current state-of-the-art structural prediction models. By fine-tuning ProstT5 specifically for viral sequences, we aim to create a specialized tool that can handle the unique characteristics of viral proteins and enable large-scale structural analysis across viral species.
