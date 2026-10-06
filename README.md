# CRANIO.SYSTEMS

CRANIO is a human-first system for understanding the human being as a SYSTEM OF SYSTEMS.

## Core model

Human experience
→ Recognition
→ Understanding
→ Configuration
→ Observation
→ Optimization
→ Verification
→ Continuity

CRANIO uses the cranium as the entry point into a larger systems perspective. The public website starts with what a person experiences, not with anatomy or technical terminology.

## System of systems

A car, home, computer and business are all systems composed of interacting subsystems. The human being is also a system of systems: biological, mechanical, sensory, cognitive and adaptive.

CRANIO focuses on human configuration: how interacting systems are organized, observed and changed over time.

## Method

OBSERVE → CALIBRATE → IDENTIFY → OPTIMIZE → VERIFY

## TwinMind

TwinMind is the continuity layer:

Experience → Context → State → Observation → History → Pattern → Next State

Your story should not start from zero every time.

## Public architecture

The visitor enters through a real experience and progressively discovers the deeper model.

Experience → CRANIO model → Method → Observation → TwinMind

Deep areas include:

- Experience Library
- Head & Neck
- C0–C1
- Primordocciput
- Method
- Technology
- Cases
- Logbook
- Education
- TwinMind
- Your CRANIO
- Explore
- Start

## Semantic domain architecture

Primary identity:

CRANIO.SYSTEMS

Potential semantic nodes:

- CRANIO.EXPOSED — discovery
- CRANIO.OBSERVER — observation and continuity
- CRANIO.SCIENCE — research and evidence
- CRANIO.WORK — execution
- CRANIO.PLACE — physical environment
- CRANIO.LIFE — human context

Domains are semantic architecture, not random marketing aliases.

## Epistemic discipline

Distinguish:

- Observed
- Measured
- Reported
- Hypothesis

Do not convert individual observations into universal causal claims.

## Deployment

Current development deployment:

https://dr-atlant57.github.io/cranium/

Future custom domain:

https://cranio.systems/

The same repository must work in both environments. Asset and navigation paths must therefore use a coherent base-path strategy.

## Design principle

Simple for the human.
Precise for the system.
Deep underneath.

The website is the front door.
TwinMind is what remembers.
CRANIO.SYSTEMS is the system.

## Rebrand and audit — 2026-10-06

Brand: CRANIO / CRANIO SYSTEMS. Domain: https://cranio.systems/. Repository and historical /your-cranium/ routes are retained for compatibility. Relative links and assets support both the custom domain and GitHub Pages project hosting.

The theme runtime must target button[data-theme], never [data-theme]: the root html element also receives data-theme, and assigning textContent to it erases the entire page.

Content limitations: several translations are partial; localized pages use generic templates; Cases contains a documentation framework rather than published case records; Education has no enrollment or course delivery; TwinMind has no backend, account, or persistent observation history. Start forms report the disconnected state without sending user text.

## International navigation and preferences

All public pages expose the same eight translated navigation links. Each of the 12 languages has a complete library of 24 experience detail routes. Core pages and Start are rendered from `content/locales.json` by `python scripts/build_site.py`. The generator keeps the existing deep-page content and produces versioned JS/CSS asset names.

Opening an unlocalized URL chooses the saved manual language, then the first supported browser language, then English. Explicit language URLs remain authoritative. The language selector offers Auto to return to the browser preference. Theme choices are Auto, Light, Neutral and Dark; Auto follows `prefers-color-scheme`, while manual choices persist and do not change when the browser preference changes. Local storage failures do not prevent rendering.

Validation: `node tests/preferences.test.cjs` and `python tests/site_contract.py`.
