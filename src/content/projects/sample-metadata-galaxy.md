---
title: "Sample Metadata That Survives Analysis in Galaxy"
description: "Giving LLMs the structured, validatable, actionable sample metadata they need to reason over analyses—preserved end-to-end through Galaxy and exportable as a portable, standards-based record."
year: 2026
order: 4
tags: ["Galaxy", "ISA-Tab", "Metadata", "Reproducibility", "MCP"]
github: "https://github.com/NIAID-BRC-Codeathons/sample-metadata-galaxy"
proposal: "https://gist.github.com/dannon/bc321e5b8d208431a8f41942d566625b"
---

## Goal

Enable LLMs to meaningfully reason over biological samples by ensuring the metadata describing those samples is **structured**, **programmatically validatable**, and **actionable** throughout the analysis lifecycle.

Today, sample metadata lives in free-text fields, inconsistent schemas, or repository-specific formats that LLMs cannot reliably parse, validate, or act on. An agent asked to "select all respiratory samples from 2024 and run outbreak surveillance" cannot confidently ground that request in machine-readable metadata. This project closes that gap by adopting **ISA-Tab** as the canonical, standards-based format—chosen because it is programmatically validatable via the ISA-API—and by translating that metadata into **Galaxy typed sample collections and sample sheets** so it is directly actionable in analysis workflows. The result is metadata that survives every step of a Galaxy analysis and can be exported as a portable record that another scientist—or another LLM—can independently audit and reproduce.

## Three-Day MVP

Build bidirectional conversion between ISA-Tab and Galaxy typed sample collections; ingest BioProject/BioSample/SRA metadata into ready-to-run collections, using Metadata Rescue outputs where available; and create a checker that identifies workflow steps where typed metadata is lost.

Use **Galaxy Orbit** as the primary testing ground, running the workflow in an MCP-native agentic environment where an LLM selects samples, constructs collections, and launches analyses grounded in the validated metadata—with guardrails against unresolved data-selection ambiguities.

## Evaluation

ISA-API and Galaxy validation, metadata round-trip fidelity, registry-wide metadata-loss rate, and an independent reproducibility test in which a new team member—or a fresh LLM session—audits and reruns a completed analysis from the exported record.

## Team

Team assignments are being finalized ahead of the codeathon. Participants can review project teams, and request reassignment, in the shared participant spreadsheet circulated by the organizing team.
