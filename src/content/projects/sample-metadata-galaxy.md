---
title: "Sample Metadata That Survives Analysis in Galaxy"
description: "Preserving validated sample metadata through Galaxy analysis and exporting it as a portable, standards-based record that another scientist can independently audit and reproduce."
year: 2026
order: 4
tags: ["Galaxy", "ISA-Tab", "Metadata", "Reproducibility", "MCP"]
github: "https://github.com/NIAID-BRC-Codeathons/sample-metadata-galaxy"
proposal: "https://gist.github.com/dannon/bc321e5b8d208431a8f41942d566625b"
---

## Goal

Preserve validated sample metadata from authoritative repositories through Galaxy analysis and export it as a portable, standards-based record that another scientist can independently audit and reproduce.

## Three-Day MVP

Build bidirectional conversion between ISA-Tab and Galaxy typed sample collections; ingest BioProject/BioSample/SRA metadata into ready-to-run collections, using Metadata Rescue outputs where available; and create a checker that identifies workflow steps where typed metadata is lost.

Run the workflow in an MCP-native agentic environment with guardrails against unresolved data-selection ambiguities.

## Evaluation

ISA-API and Galaxy validation, metadata round-trip fidelity, registry-wide metadata-loss rate, and an independent reproducibility test in which a new team member audits and reruns a completed analysis from the exported record.

## Team

Team assignments are being finalized ahead of the codeathon. Participants can review project teams, and request reassignment, in the shared participant spreadsheet circulated by the organizing team.
