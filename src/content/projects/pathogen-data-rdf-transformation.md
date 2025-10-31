---
title: "Transforming Pathogen Data Network Resources to RDF"
description: "Using LLMs to automatically generate RDF triples from Pathogen Data Network resources for improved semantic interoperability in the Linked Data ecosystem"
tags: ["RDF", "Knowledge Graph", "SPARQL", "LLM", "Semantic Web"]
---

**Project Themes:**
- Automated Knowledge Extraction and Curation

**Team Name: PDN2RDF**

**Team Lead(s):** 

* Name: Panayiotis Smeros  
* Affiliation: Swiss Institute of Bioinformatics (SIB)  
* Email: [panayiotis.smeros@sib.swiss](mailto:panayiotis.smeros@sib.swiss)  
* Name: Imane Lboukili  
* Affiliation: Swiss Institute of Bioinformatics (SIB)  
* Email: imane.lboukili@sib.swiss

**Suggested Team Members and Roles \[4-6 members\]**

| Name | Affiliation | Role / Expertise |
| ----- | ----- | ----- |
| Panayiotis Smeros | Swiss Institute of Bioinformatics (SIB) | LLM, RDF, SPARQL |
| Imane Lboukili | Swiss Institute of Bioinformatics (SIB) | LLM |
| TBD |  |  |
| TBD |  |  |
| TBD |  |  |

**Project Summary**

*In this project, we will explore the use of Large Language Models (LLMs) to automatically generate RDF triples from Pathogen Data Network (PDN) resources to enhance the interoperability of these resources within the Linked Data ecosystem of the Swiss Institute of Bioinformatics (SIB). Our approach will leverage the reasoning and pattern recognition capabilities of LLMs together with domain-expert guidance and reinforcement. In the codathon, we will put effort into defining: i) a curated schema/ontology to ensure semantic consistency, ii) potential links of the PDN resources to other resources in the SIB ecosystem to enable cross-resource integration, and iii) example research questions and related SPARQL queries illustrating the insights that can be extracted from the interconnected data. The project aims to streamline data harmonization, improve accessibility, and enlarge the linked biodata maintained by SIB.*

**Goals and Objectives**

List 2–4 measurable goals your team aims to achieve during the Codeathon.

* Goal 1: Generate RDF triples from PDN resources  
* Goal 2: Enhance the interoperability of these resources within the data ecosystem of SIB

**Approach**

* Define the PDN resources to be transformed  
* Explore the access methods and the format of these resources  
* Define/Revise a curated ontology for enabling data transformation  
* Utilize LLMs together with the ontology to transform the resources  
* Interconnect these resources with related resources from SIB (optional)  
* Form example research questions and related SPARQL queries

**Data and Resources Required**

| Resource Type | Source / Link | Description / Purpose |
| ----- | ----- | ----- |
| Data | PDN resources, Other SIB resources | For transformation and interlinking |
| Tools / Services | RDF parsers, SPARQL endpoint providers (e.g., Virtuoso) | For parsing and storing the transformed data |
| LLMs / AI Models | GPT-4, Claude 3, Mistral Large | For transforming the data – we will explore the performance of all available LLMs |
| Compute / Storage | Normal computational power and storage | For lightweight computations – we will appropriately offload most of the computations to the LLMs |

**Expected Outcomes / Deliverables**

Describe tangible outputs expected by the end of the Codeathon:

* Curated ontology for transformation  
* Prototype RDF transformer powered by LLMs  
* Example queries and use-cases

**Potential Impact and Next Steps**

*This project aims to s*treamline data harmonization, improve accessibility, and enlarge the linked biodata maintained by SIB. Future steps include stabilizing the prototype, using it for large-scale transformations, and extending it for other types of resources.

**Technical Support Needed**

Indicate additional requirements:

☑ Datasets preloaded  

☑ GPU / LLM access  

☑ API keys  

☑ Mentor support