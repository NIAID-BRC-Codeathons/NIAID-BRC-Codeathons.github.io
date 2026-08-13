---
title: "Evidence-Grounded Pathogen Knowledge Extraction"
description: "A reusable literature-curation service that extracts pathogen-related claims and maps them to BRC entities and schemas with passage-level provenance."
year: 2026
order: 1
tags: ["Literature RAG", "Knowledge Extraction", "Provenance", "Entity Linking"]
github: "https://github.com/NIAID-BRC-Codeathons/evidence-grounded-knowledge-extraction"
---

## Goal

Develop a reusable literature-curation service that extracts pathogen-related claims and maps them to BRC entities and schemas with passage-level provenance.

## Three-Day MVP

Process 200–500 open-access papers and extract three relation types, such as pathogen–host phenotype, pathogen–mechanism–disease, and biomarker–disease. Produce structured JSON-LD or RDF, BV-BRC/NCBI identifiers, confidence scores, and a “cite or refuse” validation step. COMIC/InfectioVision and glycan-biomarker extraction can serve as the first two plug-in use cases.

## Model and Evaluation

Calibrate or fine-tune an extraction model on a small manually reviewed training set. Evaluate entity linking, relation precision/recall, citation correctness, and unsupported-claim rate. Incorporate GDB-Lit-style benchmark tasks.

## Team

Team assignments are being finalized ahead of the codeathon. Participants can review project teams, and request reassignment, in the shared participant spreadsheet circulated by the organizing team.
