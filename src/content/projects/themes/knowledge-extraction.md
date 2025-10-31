---
title: "Automated Knowledge Extraction and Curation"
description: "Apply AI to extract and curate key biological insights from literature and other sources"
tags: ["AI", "Text Mining", "Literature", "Knowledge Graphs"]
---

## Project Theme

**Automated Knowledge Extraction and Curation**

## Project Summary

The scientific literature on infectious diseases grows exponentially, making manual curation increasingly challenging. This project leverages AI and natural language processing to automatically extract, structure, and curate biological knowledge from scientific literature, databases, and other sources. By automating knowledge extraction for gene functions, pathways, protein interactions, and phenotypes, we can enhance BRC data annotations, accelerate database updates, and enable novel knowledge discovery through integrated knowledge graphs.

## Goals and Objectives

1. **Extract biological entities and relationships** from literature using NLP and named entity recognition
2. **Build knowledge graphs** connecting pathogens, genes, proteins, functions, and phenotypes
3. **Validate extracted knowledge** using confidence scoring and cross-referencing
4. **Integrate with BRC curation pipelines** to enhance database annotations

## Approach

**Methods and AI/ML Approaches:**

- Named Entity Recognition (NER) for biological entities (genes, proteins, pathogens, phenotypes)
- Relation extraction using transformer models (BioBERT, SciBERT, PubMedBERT)
- Knowledge graph construction and validation
- LLMs for summarization and hypothesis generation
- Active learning for curator feedback integration

**Implementation Steps:**

1. Collect literature corpus (PubMed, PMC) for priority pathogens
2. Fine-tune NER models on infectious disease texts
3. Extract entities and relationships
4. Build and visualize knowledge graphs
5. Implement confidence scoring and validation
6. Create curator interface for review and correction
7. Generate test cases for integration with BRC databases

## Data and Resources Required

| Resource Type         | Source / Link                    | Description / Purpose              |
| --------------------- | -------------------------------- | ---------------------------------- |
| **Data**              | PubMed, PubMed Central           | Scientific literature corpus       |
| **Data**              | BV-BRC, UniProt, GO              | Reference databases for validation |
| **LLMs / AI Models**  | BioBERT, SciBERT, PubMedBERT     | Domain-specific language models    |
| **Tools / Services**  | spaCy, Hugging Face Transformers | NLP frameworks                     |
| **Tools / Services**  | Neo4j or NetworkX                | Knowledge graph storage            |
| **Compute / Storage** | GPU for model training           | Fine-tuning language models        |

## Expected Outcomes / Deliverables

- **Automated extraction pipeline** from literature to knowledge graphs
- **Knowledge graphs** for priority pathogens with entities and relationships
- **Evaluation metrics** for extraction accuracy and coverage
- **Curator interface prototype** for validation and correction
- **Integration plan** for BRC database enhancement
- **Public repository** with code, trained models, and examples
- **Case study** demonstrating knowledge discovery

## Potential Impact and Next Steps

**Impact on:**

- **Infectious disease research:** Accelerates literature review and knowledge synthesis
- **AI/ML automation:** Demonstrates practical biomedical NLP applications
- **Public health preparedness:** Enables rapid knowledge compilation for emerging pathogens

**Next Steps After Codeathon:**

- Expand to all BRC pathogens and related literature
- Implement continuous monitoring of new publications
- Add multi-language support for non-English literature
- Create automated hypothesis generation from knowledge graphs
- Deploy as a service for BRC users

## Technical Support Needed

- [ ] Access to PubMed API and bulk downloads
- [ ] GPU compute for model training
- [ ] BRC database schemas and curation workflows
- [ ] Gold-standard annotated corpus for evaluation
- [ ] Mentor support from biocuration experts

## Team Information

Teams will be formed during the Codeathon. Ideal team composition:

- **NLP/ML Engineer:** Model development and training
- **Biocurator:** Domain expertise and validation
- **Knowledge Graph Engineer:** Graph database and visualization
- **Backend Developer:** Pipeline and API development
- **Bioinformatician:** BRC integration and use case definition
