---
title: "Extracting Training Data for Automated Workflow Generation"
description: "Creating structured question-answer training datasets from BRC resources and publications to train LLMs for bioinformatics workflow generation"
tags: ["LLM", "Training Data", "Workflows", "Question Answering"]
---

**Project Themes:**
- Automated Workflow Generation and Execution

**Team Name: Capybara**

**Team Lead(s):** 

* Name: Nicholas Chia  
* Affiliation: ANL  
* Email: chia@anl.gov

**Suggested Team Members and Roles \[4-6 members\]**

| Name | Affiliation | Role / Expertise |
| ----- | ----- | ----- |
| ??? |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

**Project Summary**

*(4-6 sentences describing the problem, its relevance to infectious disease research, and the AI/ML innovation your team will pursue.)*

The problem addressed by this project is the lack of structured, high-quality training data for teaching AI systems to automatically generate bioinformatics workflows from natural language descriptions. In infectious disease research, rapid and reproducible data analysis is essential for understanding pathogen genomics, host-pathogen interactions, and outbreak response—but most workflows remain locked in narrative text rather than machine-executable form. Our project aims to extract question-answer pairs from existing BRC resources, other pipeline documentation, and publications to train large language models on workflow synthesis and reasoning. The AI/ML innovation lies in developing methods to automatically identify, structure, and contextualize these Q\&A pairs to enable models that can generate, explain, and adapt infectious disease research workflows.

**Goals and Objectives**

List 2–4 measurable goals your team aims to achieve during the Codeathon.

* Goal 1: Define the set of target infectious disease workflows, i.e., what makes a workflow worth including into this training set?  
* Goal 2: Define structured input/outputs for training data  
* Goal 3: Build dataset of at least 100 examples during hackathon (with plans to grow after)

* Goal 4 (post workshop): Share learning results and build a publication

**Approach**

* General Training Approach: Multi-turn preference optimization (RL) for learning complex workflows  
* Data Generation Approaches:

  * Extraction into structured format from papers

  * Multi-hop question-answering to generate QA pairs

  * Agentic workflows (light) for generating QA pairs

*(Add a simple block diagram or numbered workflow if useful.)*

**Data and Resources Required**

| Resource Type | Source / Link | Description / Purpose |
| ----- | ----- | ----- |
| Data | PubMed corpus | Extract workflows and questions |
| Tools / Services | BV-BRC analysis tools, APIs, BV-BRC CLI | Run workflows and obtain verified answers |
| LLMs / AI Models | GPT-4, Claude 3, Mistral Large via BV-BRC Copilot | Test difficulty of problems on existing LLMs (i.e., confirm need for special training) |
| Compute / Storage | BRC cluster nodes | Run workflows (and eventually for training) |

**Expected Outcomes / Deliverables**

Describe tangible outputs expected by the end of the Codeathon:

* Workflow(s) for generating data  
* Training dataset in huggingface acceptable format (not to be posted until after submission of paper)

**Potential Impact and Next Steps**

Explain how this project contributes to:

* Infectious disease research or surveillance: Trains automated workflow generation for infectious disease applications.  
* AI/ML automation and interpretability: This project directly trains automation of natural language biology questions into computational biology workflows and answers.  
* Public health preparedness or education: This project makes infectious disease analyses more accessible to public health officials by removing technical and interpretability barriers.

*(Include possible follow-up activities after the Codeathon.)*

**Technical Support Needed**

Indicate additional requirements:

☐ Datasets preloaded  

x☐ GPU / LLM access  

x☐ API keys  

x☐ Mentor support  

☐ Other ( )

**Additional Comments**

