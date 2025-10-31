---
title: "AI-Powered Analysis Pathfinder: From Research Questions to Data and Workflows"
description: "Enabling bench scientists to start with analysis goals and receive both relevant datasets and executable workflows—a complete path from question to execution."
tags: ["AI", "Dataset Discovery", "Workflow Recommendation", "LLM", "ENA"]
---

**Project Themes:**
- Automated Workflow Generation and Execution

## Team Name: BRC Analysis Pathfinder

## Team Lead(s)

* Name: Dannon Baker
* Affiliation: Johns Hopkins University, BRC Analytics
* Email: dannon.baker@jhu.edu

## Suggested Team Members and Roles [4-6 members]

| Name | Affiliation | Role / Expertise |
| ----- | ----- | ----- |
| [Member 1] | [Institution] | AI/ML Engineer - LLM Integration |
| [Member 2] | [Institution] | Bioinformatician - Domain Knowledge |
| [Member 3] | [Institution] | Backend Developer - API Integration |
| [Member 4] | [Institution] | Frontend Developer - User Interface |
| [Member 5] | [Institution] | Data Scientist - Query Optimization |

## Project Summary

Bench scientists know what analysis they want to perform but lack expertise to find appropriate datasets and workflows. This project creates an AI-powered system where researchers start with analysis goals ("identify AMR genes in K. pneumoniae") and receive both relevant datasets and executable Galaxy workflows—a complete path from question to execution.

The system uses large language models to understand natural language queries, extracting both what data the researcher needs (organism, sequencing type, temporal constraints) and what analysis they want to perform. It searches ENA for matching datasets and recommends compatible IWC workflows with parameter guidance specific to the discovered data.

As a stretch goal, we'll enhance search by incorporating study descriptions and sample annotations to provide biological context beyond structured metadata fields, helping researchers verify dataset relevance.

## Goals and Objectives

* **Goal 1:** Implement natural language query interpretation that extracts both data requirements (organism, experiment type, platform, dates) and analysis intent from conversational queries, successfully parsing 80%+ of diverse research questions.

* **Goal 2:** Build robust ENA integration that retrieves and ranks datasets based on extracted parameters, with efficient result handling and metadata display.

* **Goal 3:** Integrate workflow recommendation suggesting 3-5 compatible Galaxy workflows from IWC catalog based on dataset characteristics and stated analysis goals, with parameter guidance and compatibility explanations.

* **Goal 4 (Stretch):** Enhance search results by retrieving and displaying study descriptions and sample annotations, providing biological context beyond structured metadata to help researchers assess dataset relevance.

## Approach

The system provides a complete analysis path through three core components:

* **Natural Language Query Processing:** Large language models (e.g., Claude Sonnet) extract both data requirements and analysis goals from queries. The system distinguishes between pure data search ("find RNA-seq data") and analysis-driven queries ("perform differential expression analysis"), recognizing organism names, experiment types, sequencing platforms, and temporal constraints. Outputs structured parameters for both ENA search and workflow matching.

* **ENA Integration & Search:** Translates extracted parameters into ENA Portal API queries, retrieves dataset metadata (organism, library type, dates, read counts), handles pagination, and ranks results by relevance and quality metrics.

* **Integrated Workflow Recommendation:** Indexes IWC Galaxy workflows and matches analysis goals with compatible options based on dataset characteristics (taxonomy, data type, study design). Provides parameter guidance specific to discovered datasets, compatibility explanations, and alternatives.

**Stretch Enhancement:** If time permits, retrieve and display study descriptions and sample annotations alongside structured metadata, allowing researchers to understand biological context and verify dataset relevance beyond what structured fields provide.

## Milestones

* **Day 1 - Core Backend:** Implement pydantic-ai agents with LLM models, develop prompts for query interpretation (data requirements + analysis intent extraction), build ENA API client with metadata retrieval, create FastAPI endpoints, and establish workflow catalog indexing.

* **Day 2 - Frontend & Integration:** Develop React interface for analysis-first workflow, implement dataset display with metadata, integrate workflow recommendation system with parameter guidance, connect frontend to backend, and conduct initial testing with sample queries.

* **Day 3 - Polish & Stretch Goals:** Optimize query interpretation and workflow matching based on testing, refine end-to-end user experience, test with domain experts at hackathon, prepare demonstration. **Stretch:** If core functionality complete, add study description retrieval and display for enhanced biological context.

## Data and Resources Required

| Resource Type | Source / Link | Description / Purpose |
| ----- | ----- | ----- |
| Sequencing Data | European Nucleotide Archive (ENA) Portal API | Public repository of sequencing experiments and metadata for infectious disease pathogens |
| Workflow Catalog | Intergalactic Workflow Commission (IWC) | Curated Galaxy workflows for genomic analysis (variant calling, RNA-seq, metagenomics) |
| LLMs / AI Models | LLM API access (e.g., Claude Sonnet/Haiku, GPT-4) | Query interpretation, workflow matching |
| Framework | pydantic-ai | Type-safe LLM agent framework with structured outputs and provider abstraction |
| Compute / Storage | BRC cluster nodes or cloud deployment | Backend FastAPI service, Next.js frontend |

## Expected Outcomes / Deliverables

* **Functional Search API:** RESTful endpoints for analysis-driven search and workflow recommendation with OpenAPI documentation.

* **Web Interface:** Interface where users describe analysis goals, view datasets with metadata, browse workflow recommendations with parameter guidance, and export to Galaxy.

* **Query Interpretation Report:** Evaluation on 50+ test queries covering diverse analysis goals, measuring successful extraction of data requirements and analysis intent.

* **Complete Path Validation:** End-to-end testing from analysis goal → dataset discovery → workflow recommendation, measuring completion rate (target 80%+) with feedback from domain experts at hackathon.

* **Documentation:** User guide, API documentation, and prompt engineering best practices.

* **Stretch Deliverable:** If achieved, demonstration of enhanced results showing study descriptions alongside metadata for biological context validation.

## Potential Impact and Next Steps

This project addresses a critical barrier for bench scientists: the fragmented path from research question to analysis execution. Researchers without bioinformatics support typically must search for data manually, figure out what analysis is appropriate, find compatible workflows, and attempt parameter configuration—each step requiring specialized knowledge.

Our system transforms this into a single conversation: state your analysis goal ("identify AMR genes in K. pneumoniae") → receive matching datasets → get compatible workflows with parameter guidance → export to Galaxy for execution. This complete analysis path is transformative for labs without dedicated bioinformatics teams, enabling researchers to move from question to analysis in minutes rather than days.

For outbreak response, rapid analysis initiation is critical. When novel pathogens emerge, researchers need to quickly identify comparable datasets and establish analysis workflows. Our AI-powered system enables this by translating urgent research questions into executable analysis paths within seconds.

The complete path pattern extends broadly to any domain where end users need both data and tools but lack technical expertise to navigate complex ecosystems. As a stretch enhancement, incorporating study descriptions provides additional biological context to help researchers verify dataset relevance—addressing the common problem of metadata being incomplete or incorrect.

### Next Steps After Codeathon

* **Enhanced Biological Context:** If not achieved during hackathon, implement comprehensive study description and sample annotation retrieval and analysis to provide biological context beyond structured metadata.

* **Expand Text Corpus:** Incorporate BioProject descriptions, GEO summaries, linked publications, and preprints for richer biological context assessment.

* **BV-BRC Integration:** Extend complete analysis path to BV-BRC's pathogen genome database for federated search across repositories.

* **Multi-Repository Support:** Add NCBI SRA, DDBJ, and other repositories for unified search across databases.

* **Semantic Enhancement:** Implement vector embeddings for improved recommendation accuracy using semantic similarity.

* **Analysis Templates:** Develop pre-configured paths for common scenarios (AMR screening, outbreak phylogenetics, host response profiling).

* **User Feedback Loop:** Collect analytics and feedback to refine prompts, improve ranking, and identify workflow gaps.

* **Galaxy Integration Enhancement:** Add automatic parameter pre-filling, batch submission, and real-time job monitoring.

* **Publication and Adoption:** Document architecture and validation results, release as open-source tool, promote across BRC community.

## Technical Support Needed

Indicate additional requirements:

☐ Datasets preloaded
☐ GPU / LLM access
☒ API keys (LLM providers - e.g., Anthropic, OpenAI)
☐ Mentor support
☐ Other ( )

## Additional Comments

The system uses pydantic-ai for structured outputs to prevent hallucination and ensure type safety, with provider abstraction enabling flexibility across LLM providers.

Key technical challenges include dual-intent query understanding (distinguishing data search from analysis goals and extracting appropriate parameters), workflow-data compatibility verification across technical and biological constraints (file formats, coverage requirements, taxonomy, ploidy), and prompt engineering for consistent interpretation across diverse biological contexts.

Success metrics: query-to-workflow response time <3 seconds, user satisfaction >4/5 from domain experts, and 80% successful query→dataset→workflow completion rate on test scenarios.

This project demonstrates how AI can eliminate barriers for researchers without computational support, providing a complete analysis path from research question through data discovery to executable workflows. The complete path approach—combining natural language understanding, intelligent data matching, and workflow recommendation—represents a fundamental improvement in how bench scientists engage with public sequencing data and bioinformatics tools.
