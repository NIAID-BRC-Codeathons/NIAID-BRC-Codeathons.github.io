---
title: "AI-Powered Analysis Pathfinder: From Research Questions to Data and Workflows"
description: "Enabling bench scientists to start with analysis goals and receive both relevant datasets and executable workflows—a complete path from question to execution."
tags: ["AI", "Dataset Discovery", "Workflow Recommendation", "LLM", "ENA"]
github: "https://github.com/NIAID-BRC-Codeathons/ai-dataset-and-analysis-discovery"
---

**Project Themes:**

- Automated Workflow Generation and Execution

**Team Name: BRC Analysis Pathfinder**

**Team Lead(s):**

- Name: Dannon Baker
- Affiliation: Johns Hopkins University, BRC Analytics
- Email: dannon.baker@jhu.edu

**Suggested Team Members and Roles [4-6 members]**

| Name       | Affiliation   | Role / Expertise                    |
| ---------- | ------------- | ----------------------------------- |
| [Member 1] | [Institution] | AI/ML Engineer - LLM Integration    |
| [Member 2] | [Institution] | Bioinformatician - Domain Knowledge |
| [Member 3] | [Institution] | Backend Developer - API Integration |
| [Member 4] | [Institution] | Frontend Developer - User Interface |
| [Member 5] | [Institution] | Data Scientist - Query Optimization |

**Project Summary**

Bench scientists know what analysis they want to perform but lack expertise to find appropriate datasets and workflows. This project creates an AI-powered system where researchers start with analysis goals ("identify AMR genes in K. pneumoniae") and receive both relevant datasets and executable Galaxy workflows—a complete path from question to execution. The system uses large language models to extract data requirements and analysis intent from natural language queries, searches ENA for matching datasets, and recommends compatible IWC workflows with parameter guidance.

**Goals and Objectives**

- **Goal 1:** Implement natural language query interpretation that extracts data requirements and analysis intent from research questions.
- **Goal 2:** Build ENA integration that retrieves and ranks datasets based on extracted parameters.
- **Goal 3:** Integrate workflow recommendation from IWC catalog with parameter guidance.
- **Goal 4 (Stretch):** Enhance results with study descriptions and sample annotations for biological context.

**Approach**

- **Natural Language Query Processing:** LLMs extract data requirements and analysis goals from queries, outputting structured parameters for ENA search and workflow matching.
- **ENA Integration:** Translate parameters to ENA Portal API queries, retrieve dataset metadata, and rank results.
- **Workflow Recommendation:** Match analysis goals with compatible IWC Galaxy workflows based on dataset characteristics, providing parameter guidance.

**Milestones**

- **Day 1:** Backend implementation with pydantic-ai agents, query interpretation prompts, ENA API client, FastAPI endpoints, workflow catalog indexing.
- **Day 2:** Frontend development, dataset display, workflow recommendation integration, initial testing.
- **Day 3:** Optimization, end-to-end testing with domain experts, demonstration preparation.

**Data and Resources Required**

| Resource Type     | Source / Link                                     | Description / Purpose                                                                     |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Sequencing Data   | European Nucleotide Archive (ENA) Portal API      | Public repository of sequencing experiments and metadata for infectious disease pathogens |
| Workflow Catalog  | Intergalactic Workflow Commission (IWC)           | Curated Galaxy workflows for genomic analysis (variant calling, RNA-seq, metagenomics)    |
| LLMs / AI Models  | LLM API access (e.g., Claude Sonnet/Haiku, GPT-4) | Query interpretation, workflow matching                                                   |
| Framework         | pydantic-ai                                       | Type-safe LLM agent framework with structured outputs and provider abstraction            |
| Compute / Storage | BRC cluster nodes or cloud deployment             | Backend FastAPI service, Next.js frontend                                                 |

**Expected Outcomes / Deliverables**

- Functional search API with RESTful endpoints and OpenAPI documentation
- Web interface for describing analysis goals, viewing datasets, and browsing workflow recommendations
- Query interpretation evaluation on 50+ test queries
- End-to-end validation from analysis goal → dataset → workflow (target 80%+ completion)
- Documentation: user guide, API docs, prompt engineering best practices

**Potential Impact and Next Steps**

This project addresses a critical barrier for bench scientists: the fragmented path from research question to analysis execution. Our system transforms this into a single conversation enabling researchers to move from question to analysis in minutes rather than days. For outbreak response, this enables rapid identification of comparable datasets and establishment of analysis workflows within seconds.

_Follow-up activities: BV-BRC integration for federated search, multi-repository support (NCBI SRA, DDBJ), semantic enhancement with vector embeddings, analysis templates for common scenarios, Galaxy integration enhancements, and publication as open-source tool._

**Technical Support Needed**

- API keys (LLM providers - e.g., Anthropic, OpenAI)

**Additional Comments**

The system uses pydantic-ai for structured outputs to prevent hallucination and ensure type safety. Key technical challenges include dual-intent query understanding, workflow-data compatibility verification, and prompt engineering for consistent interpretation. Success metrics: query-to-workflow response time <3 seconds, user satisfaction >4/5, and 80% successful completion rate.
