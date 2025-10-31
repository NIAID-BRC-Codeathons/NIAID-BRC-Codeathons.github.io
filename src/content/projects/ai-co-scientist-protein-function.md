---
title: "AI Co-Scientist for Protein Function Prediction and Hypothesis Generation"
description: "Extending the Co-Scientist framework to build reasoning agents for protein function prediction using CEPI and BV-BRC datasets for priority pathogens"
tags: ["AI Co-Scientist", "Protein Function", "Hypothesis Generation", "Reasoning Agents", "Jnana"]
github: "https://github.com/NIAID-BRC-Codeathons/ai-co-scientist-protein-function"
---

**Project Themes:**

- Virtual AI Co-scientist

**Team Lead(s):**

- Name: Arvind Ramanathan
- Affiliation: Argonne National Laboratory
- Email: [To be added]

**Suggested Team Members and Roles \[4-6 members\]**

| Name                 | Affiliation                      | Role / Expertise                        |
| -------------------- | -------------------------------- | --------------------------------------- |
| Arvind Ramanathan    | Argonne National Laboratory      | Principal Investigator, AI Systems Architect |
| Ozan                 | Argonne National Laboratory      | RAG and Data Integration Specialist     |
| BV-BRC Developers    | -                                | Model integration and deployment        |
| CEPI Scientists      | -                                | Use-case definition and validation      |

**Project Summary**

This project extends the open-source Co-Scientist framework (https://github.com/acadev/Jnana) to build reasoning agents for protein function prediction, using CEPI and BV-BRC datasets as testbeds. The goal is to enable hypothesis-driven dialogue and AI-assisted exploration of uncharacterized genes and proteins relevant to priority pathogens.

**Goals and Objectives**

- Goal 1: Deploy Co-Scientist framework in the BV-BRC environment
- Goal 2: Implement a reasoning module for protein function prediction using multi-modal evidence (sequence, structure, literature)
- Goal 3: Demonstrate AI-guided hypothesis generation for uncharacterized genes in one pathogen model

**Approach**

The Co-Scientist framework will use an agentic reasoning loop combining retrieval (via HiPerRAG), synthesis (via Rhea), and hypothesis refinement through dialogue. The system will be trained on BV-BRC pathogen data and evaluated for its interpretability and accuracy in protein function annotation.

**Data and Resources Required**

| Resource Type     | Source / Link                          | Description / Purpose              |
| ----------------- | -------------------------------------- | ---------------------------------- |
| Data              | BV-BRC genomes, CEPI curated datasets  | Training and evaluation data       |
| Tools / Services  | Jnana (Co-Scientist GitHub repo)       | Agentic reasoning system           |
| LLMs / AI Models  | GPT-4, Claude 3                        | Reasoning and synthesis agents     |
| Compute / Storage | Argonne HPC                            | Experimentation environment        |

**Expected Outcomes / Deliverables**

Prototype AI Co-Scientist agent capable of hypothesis-driven protein function prediction and reasoning trace visualization.

**Potential Impact and Next Steps**

This project showcases autonomous scientific reasoning and interactive discovery for infectious disease research. It will help CEPI and BV-BRC develop transparent, AI-assisted research workflows and foster a foundation for broader agentic science platforms.

**Technical Support Needed**

- GPU / LLM access
- Mentor support
- API keys

**Additional Comments**
