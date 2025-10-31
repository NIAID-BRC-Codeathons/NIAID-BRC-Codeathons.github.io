---
title: "HiPerRAG for Literature-based Data Extraction on Priority Pathogens"
description: "Leveraging high-performance retrieval-augmented generation to extract and curate structured biological data for CEPI priority pathogens from scientific literature"
tags:
  [
    "HiPerRAG",
    "Literature Mining",
    "Knowledge Extraction",
    "RAG",
    "Priority Pathogens",
  ]
github: "https://github.com/NIAID-BRC-Codeathons/hiperrag-literature-extraction"
---

**Project Themes:**

- Automated Knowledge Extraction and Curation

**Team Lead(s):**

- Name: Ozan
- Affiliation: Argonne National Laboratory, BV-BRC
- Email: [To be added]

**Suggested Team Members and Roles \[4-6 members\]**

| Name               | Affiliation                 | Role / Expertise                   |
| ------------------ | --------------------------- | ---------------------------------- |
| Ozan               | Argonne National Laboratory | AI/ML Engineer, Data Curation Lead |
| Arvind Ramanathan  | Argonne National Laboratory | Scientific Advisor                 |
| BV-BRC Analysts    | -                           | Data integration and validation    |
| CEPI collaborators | -                           | Priority Pathogen Data Alignment   |

**Project Summary**

This project leverages HiPerRAG—a high-performance retrieval-augmented generation system optimized for large scientific corpora—to extract and curate structured data for priority pathogens. By targeting key relationship types such as protein–protein interactions (PPIs), host–pathogen interactions, and drug–protein binding data, the project aims to produce curated, machine-readable datasets for integration with BV-BRC knowledgebases.

**Goals and Objectives**

- Goal 1: Define target data types relevant to CEPI and BV-BRC (e.g., PPIs, drug-protein interactions)
- Goal 2: Deploy HiPerRAG on relevant literature corpora to extract structured relationships
- Goal 3: Generate curated datasets for 1–2 CEPI priority pathogens (e.g., Nipah, Lassa)

**Approach**

HiPerRAG will be configured to parse biomedical literature and extract relations using fine-tuned retrieval and extraction modules. The system's hybrid pipeline combines dense retrieval, passage reranking, and LLM-based summarization to produce high-confidence knowledge graphs. The team will test both automated and human-in-the-loop curation pipelines.

**Data and Resources Required**

| Resource Type     | Source / Link                 | Description / Purpose                             |
| ----------------- | ----------------------------- | ------------------------------------------------- |
| Data              | PubMed, BV-BRC text corpora   | Literature sources for entity/relation extraction |
| Tools / Services  | HiPerRAG (ArXiv:2505.04846)   | RAG-based extraction framework                    |
| LLMs / AI Models  | Mistral Large, GPT-4 via Rhea | Entity normalization and summarization            |
| Compute / Storage | Argonne HPC, BRC clusters     | Parallel literature processing                    |

**Expected Outcomes / Deliverables**

Curated datasets of structured biological relationships for CEPI priority pathogens, integrated into BV-BRC pipelines.

**Potential Impact and Next Steps**

This project demonstrates scalable AI-driven literature mining for infectious disease research. It will enable automated knowledge enrichment and accelerate understanding of pathogen biology, supporting CEPI's 100-day mission and BV-BRC's informatics goals.

**Technical Support Needed**

- Datasets preloaded
- GPU / LLM access
- Mentor support

**Additional Comments**
