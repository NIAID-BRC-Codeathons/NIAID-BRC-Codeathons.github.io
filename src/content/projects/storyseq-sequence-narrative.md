---
title: "StorySeq: Automated Sequence Narrative Generation"
description: "Automating sequence identification and contextualization using BLAST, database queries, and LLM narrative synthesis to accelerate pathogen and AMR gene discovery"
tags: ["LLM", "BLAST", "Narrative Generation", "Knowledge Extraction"]
---

**Project Themes:**
- Automated Knowledge Extraction and Curation
- Assign Functions to Uncharacterized Genes

**Team Name: StoryTime**

**Team Lead(s):** 

* Name: Andrew Warren  
* Affiliation: UVA  
* Email: asw3xp@virginia.edu

**Suggested Team Members and Roles \[4-6 members\]**

| Name | Affiliation | Role / Expertise |
| ----- | ----- | ----- |
| Dustin Machi | UVA | AI / Software |
| Curtis Hendrickson | UAB | Software development |
|  |  |  |
|  |  |  |
|  |  |  |

**Project Summary**

Identifying and contextualizing sequences from clinical or environmental samples is a slow, manual bottleneck in infectious disease research. Investigators must manually chain together tools like BLAST searches and database queries, a time-consuming process that slows the translation of raw data into insights, such as identification of a pathogen or an antimicrobial resistance gene. To address this challenge, our team will develop StorySeq, a tool that automates this discovery workflow. The key AI/ML innovation is a multi-stage pipeline that first uses classical bioinformatics tools for robust data retrieval and aggregation from public databases. This structured information is then passed to a Large Language Model (LLM) for the final step of narrative synthesis, generating a concise, expert-level summary. By automating this task, StorySeq will dramatically accelerate the time-to-insight for researchers, enabling the rapid assessment of potential health concerns.

**Goals and Objectives**

List 2–4 measurable goals your team aims to achieve during the Codeathon.

* Goal 1: Develop a MVP of the core "Find-Enrich-Narrate" pipeline.  
* Goal 2: Implement a modular architecture for interchangeable backends.  
* Goal 3 (optional): Design and stub out the provider interfaces for search tools and database APIs.

**Approach**

1. **Find:** The workflow begins by using a standard sequence search tool (e.g. NCBI BLAST) to identify the top homologous sequences in public databases.

2. **Extract:** A parser extracts the unique accession numbers from the search results, which serve as primary keys for metadata retrieval.

3. **Enrich:** The system queries public bioinformatics APIs (initially, NCBI E-utilities) to fetch rich, structured metadata (e.g., organism, BioProject, isolation source) for each accession.

4. **Aggregate:** This non-AI step creates a structured summary (e.g., in JSON format) of terms and entities from the enriched metadata, giving a condensed view of the findings.

5. **Narrate:** This is the primary AI/ML step. The structured summary is formatted into a detailed prompt and sent to a standard LLM (e.g., Llama 3 via Ollama) to synthesize the data into a coherent, human-readable paragraph.

**Data and Resources Required**

| Resource Type | Source / Link | Description / Purpose |
| ----- | ----- | ----- |
| Data | BV-BRC genomes, Bioprojects, Biosummary, Large search Indexes e.g. BLAST | Find, Enrich, Extract steps above |
| Tools / Services | Potentially NCBI BLAST, BV-BRC BLAST, BLAST, DIAMOND | Find, Enrich, Extract steps above |
| LLMs / AI Models | Llama, GPT-4, Claude3, etc | Narration step |
| Compute / Storage | Argonne HPC, BRC cluster nodes | Hold the data and tools |

**Expected Outcomes / Deliverables**

● **Prototype, Workflow, or Dashboard:**  
The primary output will be a **command-line prototype of the StorySeq workflow**. This Python-based tool will be executable as a single script that automates the complete "Find-Enrich-Narrate" pipeline. The prototype will have a modular architecture, allowing for the selection of different sequence search tools, metadata APIs, and LLM backends, via command-line flags, demonstrating its designed-for-extensibility approach.

● **Model Outputs or Curated Datasets:**  
We will produce a **curated set of generated narrative summaries for benchmark infectious disease sequences**. These model outputs will serve as concrete examples of the tool's utility. An example set:

1. A well-known antimicrobial resistance (AMR) gene (e.g., NDM-1).

2. A key viral protein-coding sequence (e.g., the SARS-CoV-2 Spike gene).

3. A 16S rRNA gene from a common gut microbe.  
   These generated text files will be saved in an examples/ directory to showcase the quality and nature of the output.

● **Educational or Outreach Material:**  
We will create a **comprehensive README.md file in a public GitHub repository**. This document will serve as the primary educational resource, containing:

1. A clear description of the StorySeq concept and workflow.

2. Step-by-step installation instructions.

3. Usage examples using the benchmark sequences.

4. A developer-focused section explaining the modular "provider" architecture and how to contribute new backends.  
   Additionally, we will create a one-page summary graphic visually depicting the five-stage pipeline, suitable for presentations or outreach.

● **Integration Concept for BRC Resources:**  
We will deliver a documented integration concept for connecting StorySeq to BV-BRC. This will be detailed in the developer section of the README.md. Crucially though, this tool will be interoperable with a number of different resources not just those of a BRC.

**Potential Impact and Next Steps**

● **Infectious Disease Research or Surveillance:**  
StorySeq directly accelerates the "time-to-insight" in infectious disease research. Reduces time-consuming "detective work" process to determine its potential significance. StorySeq automates first-pass analysis, allowing researchers to rapidly triage hundreds of unknown sequences to identify high-priority candidates, such as a new antimicrobial resistance (AMR) gene or a sequence indicative of zoonotic spillover. This speed enables research labs and surveillance programs to react more quickly to emerging threats and focus their expert time on deeper analysis rather than on repetitive preliminary searches.

* **Follow-up Activities:**

  * **Integration with BRC:** We will extend the tool with BV-BRC Blast, providing more relevant context for AMR, virulence factors, and epidemiological data. 

  * **Batch or Genome Processing:** We will enhance the command-line tool to accept multi-FASTA files, allowing it to process an entire set of contigs from a genome assembly and generate a summary report, flagging the most significant findings for the user. Will likely require different prompt development

● **AI/ML Automation and Interpretability:**  
This project serves as an example of leveraging AI/ML for practical automation to augment human-in-the-loop workflows in bioinformatics. The key is its RAG-inspired workflow using traditional sequence similarity search to supply contextual information to an LLM. Instead of using an LLM as a "black box," our pipeline strictly constrains its role to synthesizing structured data retrieved from trusted, primary sources like NCBI. This approach mitigates the risk of model "hallucination," as every statement in the output narrative is grounded in verifiable data from the retrieval stage.

* **Follow-up Activities:**

  * **Interactive Outputs:** We will develop an HTML output option where the generated narrative includes interactive attribution. Clicking a statement in the summary would reveal the specific BLAST hits and metadata records used by the LLM to generate that sentence, providing full traceability.

  * **Semantic Aggregation:**  A future version will use embedding models to semantically cluster the top hits, allowing the LLM to provide a more nuanced summary (e.g., "The sequence has two distinct clusters of homologs: one in marine bacteria and another in human clinical isolates.").

● **Public Health Preparedness or Education:**  
StorySeq contributes to public health by dramatically lowering the barrier to entry for interpreting genomic data. For preparedness, it provides a tool for rapid situational awareness. During an outbreak, public health officials who are not bioinformatics experts can use it to get an immediate, plain-language summary of a newly identified variant. For education, it democratizes access to bioinformatics by translating BLAST results into simple, understandable narratives. This makes it an ideal tool for students, medical professionals, and policymakers, helping to improve general bioinformatics literacy and enabling more people to understand the implications of genomic data in public health.

**Technical Support Needed**

Indicate additional requirements:

X Datasets preloaded  BLAST/DIAMOND/MASH/KRAKEN databases would be handy

X GPU / LLM access  

☐ API keys  

X Mentor support         Advice welcome

☐ Other ( )

**Additional Comments**

