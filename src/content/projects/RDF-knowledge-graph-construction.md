---
title: "RDF Knowledge Graph Construction"
description: "Transforming Pathogen Data Network Resources to RDF using Large Language Models"
tags:
github: "https://github.com/NIAID-BRC-Codeathons/RDF-knowledge-graph-construction"
  ["Knowledge Graphs", "RDF", "Linked Data", "Semantic Web", "Data Integration"]
---

\*\*Project Theme

**Automated Knowledge Extraction and Curation**

\*\*Team Information

**Team Name:** PDN2RDF

**Team Lead(s):**

- Name: Panayiotis Smeros
- Affiliation: Swiss Institute of Bioinformatics (SIB)
- Email: panayiotis.smeros@sib.swiss

- Name: Imane Lboukili
- Affiliation: Swiss Institute of Bioinformatics (SIB)
- Email: imane.lboukili@sib.swiss

**Team Members (4-6 members recommended):**

| Name              | Affiliation                             | Role / Expertise |
| ----------------- | --------------------------------------- | ---------------- |
| Panayiotis Smeros | Swiss Institute of Bioinformatics (SIB) | LLM, RDF, SPARQL |
| Imane Lboukili    | Swiss Institute of Bioinformatics (SIB) | LLM              |
| TBD               | -                                       | -                |
| TBD               | -                                       | -                |

\*\*Project Summary

In this project, we will explore the use of Large Language Models (LLMs) to automatically generate RDF triples from Pathogen Data Network (PDN) resources to enhance the interoperability of these resources within the Linked Data ecosystem of the Swiss Institute of Bioinformatics (SIB). Our approach will leverage the reasoning and pattern recognition capabilities of LLMs together with domain-expert guidance and reinforcement. In the codeathon, we will put effort into defining: i) a curated schema/ontology to ensure semantic consistency, ii) potential links of the PDN resources to other resources in the SIB ecosystem to enable cross-resource integration, and iii) example research questions and related SPARQL queries illustrating the insights that can be extracted from the interconnected data. The project aims to streamline data harmonization, improve accessibility, and enlarge the linked biodata maintained by SIB.

\*\*Goals and Objectives

1. **Generate RDF triples from PDN resources**
2. **Enhance the interoperability of these resources within the data ecosystem of SIB**

\*\*Approach

**Methods and AI/ML Approaches:**

- Large Language Models (GPT-4, Claude 3, Mistral Large) for automated RDF triple generation
- Curated ontology/schema development for semantic consistency
- Domain-expert guidance and reinforcement for data transformation
- SPARQL query generation for knowledge extraction
- Cross-resource integration within the SIB ecosystem

**Implementation Steps:**

1. Define the PDN resources to be transformed
2. Explore the access methods and the format of these resources
3. Define/Revise a curated ontology for enabling data transformation
4. Utilize LLMs together with the ontology to transform the resources
5. Interconnect these resources with related resources from SIB (optional)
6. Form example research questions and related SPARQL queries

\*\*Data and Resources Required

| Resource Type         | Source / Link                                           | Description / Purpose                                                                             |
| --------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Data**              | PDN resources, Other SIB resources                      | For transformation and interlinking                                                               |
| **Tools / Services**  | RDF parsers, SPARQL endpoint providers (e.g., Virtuoso) | For parsing and storing the transformed data                                                      |
| **LLMs / AI Models**  | GPT-4, Claude 3, Mistral Large                          | For transforming the data – we will explore the performance of all available LLMs                 |
| **Compute / Storage** | Normal computational power and storage                  | For lightweight computations – we will appropriately offload most of the computations to the LLMs |

\*\*Expected Outcomes / Deliverables

By the end of the Codeathon, we expect to deliver:

- **Curated ontology for transformation** - Schema/ontology ensuring semantic consistency
- **Prototype RDF transformer powered by LLMs** - Working system for automated RDF triple generation
- **Example queries and use-cases** - Research questions and related SPARQL queries demonstrating insights
- **Code Repository:** GitHub repo with documentation and transformation tools
- **Documentation:** User guides for the RDF transformation pipeline
- **Presentation:** Demo showing the transformation process and query capabilities

\*\*Potential Impact and Next Steps

**Impact on:**

- **Infectious disease research or surveillance:** This project aims to streamline data harmonization, improve accessibility, and enlarge the linked biodata maintained by SIB, enabling better pathogen data integration and discovery
- **AI/ML automation and interpretability:** Demonstrates advanced use of LLMs for automated knowledge graph construction and semantic data transformation
- **Public health preparedness or education:** Enhanced data interoperability will facilitate faster access to pathogen information and cross-resource insights

**Next Steps After Codeathon:**

- Stabilize the prototype and optimize performance
- Use the system for large-scale transformations of additional PDN resources
- Extend the framework for other types of biological resources
- Integration with existing SIB data infrastructure
- Community adoption and feedback collection

\*\*Technical Support Needed

- Datasets preloaded
- GPU / LLM access
- API keys
- Mentor support
  Other: [Specify]

\*\*Additional Comments

This project focuses on leveraging the power of Large Language Models to automatically transform pathogen data into semantic web formats, enabling better data integration and knowledge discovery within the biomedical research ecosystem. The approach combines cutting-edge AI with established semantic web technologies to create a scalable solution for data harmonization.
