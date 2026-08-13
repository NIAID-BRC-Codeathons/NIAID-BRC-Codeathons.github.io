---
title: "Structure-to-Function: Hypothetical Protein and Binding-Evidence Factory"
description: "Automating functional interpretation of poorly characterized pathogen proteins by combining sequence, structure, binding databases, and literature evidence."
year: 2026
order: 9
tags: ["Protein Structure", "Function Prediction", "Binding Evidence", "BV-BRC"]
github: "https://github.com/NIAID-BRC-Codeathons/structure-to-function"
---

## Goal

Automate functional interpretation of poorly characterized pathogen proteins by combining sequence, structure, binding databases, and literature evidence.

## Three-Day MVP

Analyze 50–100 hypothetical proteins from a selected pathogen group such as _Chlamydiales_. The agent should retrieve sequences from BV-BRC, run similarity and structure tools, identify structural neighbors, search PDB/BindingDB/ChEMBL evidence, extract supporting statements from papers, and generate ranked functional annotations.

AutoPDB components can create a provenance-aware training dataset of protein–ligand or protein–protein interactions.

## Model and Evaluation

Train or calibrate an embedding-based function classifier or evidence-ranking model. Compare recommendations with curated annotations or held-out known proteins.

## Team

Team assignments are being finalized ahead of the codeathon. Participants can review project teams, and request reassignment, in the shared participant spreadsheet circulated by the organizing team.
