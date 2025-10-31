---
title: "Expanding Rhea for Automated Workflow Generation"
description: "Extending the Rhea platform with MCP+RAG to enable automated workflow generation leveraging Galaxy and BV-BRC for infectious disease analysis"
tags: ["Rhea", "Workflow Automation", "Galaxy", "MCP", "RAG"]
github: "https://github.com/NIAID-BRC-Codeathons/rhea-workflow-automation"
---

**Project Themes:**

- Automated Workflow Generation and Execution

**Team Name: Rhea Workflow Team**

**Team Lead(s):**

- Name: Chris Grams, Oleksandr Narykov
- Affiliation: Argonne National Laboratory, BV-BRC
- Email: [To be added]

**Suggested Team Members and Roles \[4-6 members\]**

| Name               | Affiliation                 | Role / Expertise                   |
| ------------------ | --------------------------- | ---------------------------------- |
| Chris Grams        | Argonne National Laboratory | Lead Developer, Galaxy Integration |
| Oleksandr Narykov  | Argonne National Laboratory | Workflow Automation Engineer       |
| Arvind Ramanathan  | Argonne National Laboratory | AI Systems Integration Advisor     |
| CEPI collaborators | -                           | Use-case Alignment and Testing     |

**Project Summary**

This project extends the Rhea platform—an MCP+RAG-based environment that dynamically serves scientific tools—to enable automated workflow generation leveraging Galaxy and BV-BRC functionalities. By integrating BV-BRC's pathogen data pipelines with Galaxy's execution engine, the system will auto-generate end-to-end workflows for infectious disease analysis. This supports rapid hypothesis testing, reproducibility, and scalable execution of complex analyses across both ecosystems.

**Goals and Objectives**

- Goal 1: Integrate BV-BRC APIs and Galaxy tool registries into Rhea's orchestration layer
- Goal 2: Implement LLM-driven workflow synthesis that identifies compatible BV-BRC and Galaxy modules
- Goal 3: Demonstrate automated workflow generation for at least two priority pathogens

**Approach**

Rhea will use retrieval-augmented generation (RAG) to identify relevant BV-BRC tools and Galaxy workflows via semantic search and metadata tagging. The system will then employ an LLM-based synthesis engine to auto-compose workflow specifications (e.g., CWL/YAML) executable within Galaxy. The team will test interoperability, runtime efficiency, and reproducibility using selected CEPI priority pathogens.

**Data and Resources Required**

| Resource Type     | Source / Link                                   | Description / Purpose              |
| ----------------- | ----------------------------------------------- | ---------------------------------- |
| Data              | BV-BRC genomes, CEPI priority pathogen datasets | Training and workflow inputs       |
| Tools / Services  | BV-BRC APIs, Galaxy server                      | Workflow integration and execution |
| LLMs / AI Models  | Rhea MCP model, GPT-5                           | Tool reasoning and synthesis       |
| Compute / Storage | Argonne HPC / Galaxy cluster                    | Execution backend                  |

**Expected Outcomes / Deliverables**

- Integrated prototype showing end-to-end automated workflow synthesis
- Validation datasets
- Interoperability report for BV-BRC + Galaxy toolchains

**Potential Impact and Next Steps**

This project will provide a foundation for automated workflow assembly in bioinformatics, enhancing reproducibility and scalability for CEPI and BV-BRC researchers. Follow-up activities may include connecting Rhea to HiPerRAG for data retrieval and integrating Co-Scientist reasoning modules for workflow evaluation.

**Technical Support Needed**

- GPU / LLM access
- API keys
- Mentor support

**Additional Comments**
