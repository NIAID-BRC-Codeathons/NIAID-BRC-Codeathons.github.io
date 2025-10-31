---
title: "PubMed Miner: AI-Powered Sequence Feature Extraction from Literature"
description: "Automated extraction of viral sequence features, mutations, and epitopes from PubMed literature using LLMs to accelerate outbreak response and genomic analysis"
tags:
github: "https://github.com/NIAID-BRC-Codeathons/pubmed-miner"
  [
    "LLM",
    "PubMed",
    "Literature Mining",
    "Sequence Features",
    "Mutation Detection",
  ]
---

**Project Themes:**

- Automated Knowledge Extraction and Curation

**Team Name: PubMed Miners**

**Team Lead(s):**

- Name: Indresh Singh / Shubham Deshmukh
- Affiliation: J. Craig Venter Institute, BV-BRC
- Email: isingh@jcvi.org, sdeshmuk@jcvi.org

**Suggested Team Members and Roles \[4-6 members\]**

| Name             | Affiliation                       | Role / Expertise            |
| ---------------- | --------------------------------- | --------------------------- |
| Indresh Singh    | J. Craig Venter Institute, BV-BRC | Software engineering, AI/ML |
| Shubham Deshmukh | J. Craig Venter Institute, BV-BRC | Software engineering, AI/ML |
|                  |                                   |                             |
|                  |                                   |                             |
|                  |                                   |                             |

**Project Summary**

Sequence features—including codon usage, conserved motifs, structural domains, mutation patterns, and regulatory elements—are central to understanding viral biology and evolution. They define the functional potential of a virus and serve as key indicators for virulence, transmissibility, immune escape, and drug resistance. However, the extraction and integration of sequence features face significant challenges due to limited availability of the latest experimentally identified mutations in published literature. Public databases like the Immune Epitope Database and UniProt do not contain the latest epitopes or mutations that are critical during outbreaks and pandemics, and reviewing published papers is a slow, manual process. This project aims to use AI/LLMs to expedite the identification and validation of sequence features from PubMed literature, enabling rapid characterization of viral strains and supporting outbreak response.

**Goals and Objectives**

- Goal 1: Apply AI/LLM to identify sequence features of interest in the latest publications based on virus family or species
- Goal 2: Eliminate false positive mutations based on gene name, coordinates, or protein function
- Goal 3 (optional): Explore the applicability of the strategy to other use cases presented during the Codeathon

**Approach**

The project creates a fully automated, end-to-end mining pipeline that queries PubMed to collect relevant review articles, retrieves open-access full texts from PMC, and analyzes them using free-tier large language models such as Gemini and LLaMA via their respective APIs (Google AI Studio and Groq). These models process cleaned and structured article text to extract meaningful biological information—including sequence features, residue positions, and mutation patterns—presented in organized, tabular formats.

The workflow integrates several intelligent components:

- Automated PubMed querying and full-text retrieval
- Text preprocessing and normalization
- Structured LLM-based extraction
- Post-processing validation and false positive filtering
- Cross-checking against gene names, residue coordinates, and protein functions
- Rule-based consistency verification

The system has been tested on review papers from Chikungunya, Dengue, and Influenza A viruses, achieving approximately 75–85% accuracy aligned with expert-curated annotations. A Streamlit-based interface makes the workflow interactive and user-friendly, enabling researchers to configure queries, manage API keys, and download outputs in standard formats.

Current working code is at https://github.com/Shubhs0411/Pubmed_Miner

**Data and Resources Required**

| Resource Type     | Source / Link                  | Description / Purpose |
| ----------------- | ------------------------------ | --------------------- |
| Data              | PubMed corpus                  | Source publications   |
| LLMs / AI Models  | Google Gemini, GPT-4, Claude 3 | Feature extraction    |
| Compute / Storage | Local (small dataset)          | Processing            |

**Expected Outcomes / Deliverables**

- Enhanced working prototype with improved accuracy
- Strategy to eliminate false positive results
- Curated datasets of extracted sequence features
- Integration concept for BRC resources

**Potential Impact and Next Steps**

**Infectious disease research or surveillance:**
PubMed Miner will enable timely identification of new epitopes and mutations during outbreaks, supporting rapid calculation of sequence feature variant types and accelerating outbreak response.

**AI/ML automation and interpretability:**
This approach can be applied to other similar use cases including disease/phenotype associations, pathway and molecular function extraction, genomic function annotation, and gene regulation patterns.

**Public health preparedness:**
Rapid identification of data from publications is key to responding effectively to outbreaks or pandemics.

**Possible follow-up activities:**

- Include sequence feature identification as part of quarterly or yearly processes based on pathogen priority
- Identify new use cases and customize code and prompts to extract knowledge from literature

**Technical Support Needed**

- Mentor support (LLM expert to review current approach and evaluate alternative models)

**Additional Comments**

We request mentorship from an LLM expert to review our current approach and evaluate alternative models.
