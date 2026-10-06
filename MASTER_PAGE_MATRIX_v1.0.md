# CRANIUM — MASTER PAGE MATRIX v1.0

## Release target

CRANIUM is a multilingual static semantic system.

- Languages: 12
- 40 unique localized page types per language
- x-default root entry: 1
- Target HTML pages: 481

Formula: 40 × 12 + 1 = 481

The 40 unique-page language set consists of 16 core/system pages plus 25 experience routes, with `/experience/` intentionally serving both the EXPERIENCE core role and the E25 Experience Index role and therefore counted once.

## Language matrix

| Code | Language | Root |
|---|---|---|
| en | English | /en/ |
| ru | Русский | /ru/ |
| de | Deutsch | /de/ |
| fr | Français | /fr/ |
| es | Español | /es/ |
| it | Italiano | /it/ |
| pt | Português | /pt/ |
| tr | Türkçe | /tr/ |
| ar | العربية | /ar/ |
| zh | 中文 | /zh/ |
| ja | 日本語 | /ja/ |
| ko | 한국어 | /ko/ |

## CORE / SYSTEM PAGES — 16

| # | Semantic ID | Route | Purpose |
|---:|---|---|---|
| 01 | HOME | / | x-default human-first entry |
| 02 | C0C1 | /c0-c1/ | Cranio-cervical reference |
| 03 | CASES | /cases/ | Cases as structured records |
| 04 | EDUCATION | /education/ | Learning layer |
| 05 | EXPERIENCE | /experience/ | Human experience index |
| 06 | EXPLORE | /explore/ | System discovery/navigation |
| 07 | HEAD_NECK | /head-and-neck/ | Head and neck system |
| 08 | HOW_IT_WORKS | /how-it-works/ | CRANIUM model |
| 09 | LOGBOOK | /logbook/ | Engineering/research log |
| 10 | METHOD | /method/ | OBSERVE → CALIBRATE → IDENTIFY → OPTIMIZE → VERIFY |
| 11 | PRIMORDOCCIPUT | /primordocciput/ | Primary cranial reference |
| 12 | START | /start/ | First action / entry |
| 13 | TECHNOLOGY | /technology/ | Technology layer |
| 14 | TWINMIND | /twinmind/ | Continuity layer |
| 15 | YOUR_CRANIUM | /your-cranium/ | Personal CRANIUM layer |
| 16 | CONFIGURATION | /configuration/ | Configuration as the bridge between experience, state and optimization |

Localized core routes: 16 × 12 = 192, with `/experience/` overlapping E25 and therefore counted once in the unique-page total.

## EXPERIENCE PAGES — 25

These remain separate semantic/indexable pages. They are not collapsed to reduce file count.

| # | Semantic ID | Route | Human entry experience |
|---:|---|---|---|
| E01 | BODY_WORKLOAD | /experience/body-workload/ | The body feels like part of the workload |
| E02 | COGNITIVE_LOAD | /experience/cognitive-load/ | Concentration feels physically expensive |
| E03 | COMFORTABLE_HEAD | /experience/comfortable-head/ | Difficulty finding a comfortable head position |
| E04 | EYES_SCREEN | /experience/eyes-screen/ | Eyes/head fatigue after screen work |
| E05 | FACIAL_ASYMMETRY | /experience/facial-asymmetry/ | Face looks or feels uneven |
| E06 | HEAD_FORWARD | /experience/head-forward/ | Head feels too far forward |
| E07 | HEAD_NECK_SETTLE | /experience/head-neck-settle/ | Head and neck never seem to settle |
| E08 | HEAD_NOT_CENTERED | /experience/head-not-centered/ | Head does not feel centered |
| E09 | HEAD_TENSION | /experience/head-tension/ | Head always feels tense |
| E10 | HEADACHE_CONCENTRATION | /experience/headache-concentration/ | Headache associated with concentration |
| E11 | HEAVY_HEAD | /experience/heavy-head/ | Head feels heavy |
| E12 | HOLDING_MYSELF | /experience/holding-myself/ | Feels like constantly holding oneself up |
| E13 | JAW_TENSION | /experience/jaw-tension/ | Jaw tension |
| E14 | MENTAL_OVERLOAD | /experience/mental-overload/ | Physical experience of mental overload |
| E15 | MORNING_NECK | /experience/morning-neck/ | Waking with a tense/stiff neck |
| E16 | NECK_STIFFNESS | /experience/neck-stiffness/ | Neck feels stiff |
| E17 | NECK_TENSION | /experience/neck-tension/ | Neck is always tense |
| E18 | NECK_WONT_RELAX | /experience/neck-wont-relax/ | Neck will not relax |
| E19 | ONE_SIDE_ACTIVE | /experience/one-side-active/ | One side feels more active |
| E20 | PHYSICAL_FATIGUE | /experience/physical-fatigue/ | Physical fatigue after cognitive work |
| E21 | POSTURE_CORRECTION | /experience/posture-correction/ | Constantly correcting posture |
| E22 | SCREEN_WORK | /experience/screen-work/ | Screen work leaves the person exhausted |
| E23 | SOMETHING_OFF | /experience/something-off/ | Something about head/neck feels off |
| E24 | STANDING_WALKING | /experience/standing-walking/ | Head/body feels different standing or walking |
| E25 | EXPERIENCE_INDEX | /experience/ | Index of all experience entries |

Localized experience routes: 25 × 12 = 300.

## TOTAL

- Localized core routes: 192
- Localized experience routes: 300
- Overlap: `/experience/` counted once
- Unique localized pages: 192 + 300 − 12 = 480
- x-default root: 1
- TOTAL TARGET: 481 HTML pages

## Architecture rules

1. Every experience above remains a separate semantic page.
2. Every language receives the same canonical page architecture.
3. Translations are authored as native static HTML, not runtime translation.
4. Shared CSS/JS are external assets.
5. GitHub Pages project path /cranium/ must work.
6. Future custom domain cranium.systems/ must use the same build.
7. No /cranium/cranium/ paths.
8. No root-relative /styles.css or /app.js paths in project deployment.
9. Every localized page gets canonical + hreflang relationships.
10. Every page has a unique title, description and H1.
11. Experience pages start from lived experience, not anatomy.
12. Epistemic language remains disciplined: Observed / Measured / Reported / Hypothesis.
13. Public positioning is human-first and non-medicalized.
14. Do not invent cases, measurements or outcomes.
15. Method is authoritative: OBSERVE → CALIBRATE → IDENTIFY → OPTIMIZE → VERIFY.
16. TwinMind is the continuity layer, not the homepage opening.
17. Primordocciput is presented as the Primary Cranial Reference; research status is distinguished internally.
18. Navigation must never depend on JavaScript.
19. Theme switching is progressive enhancement, not a prerequisite for rendering.
20. Mobile layout is a first-class requirement.

## Current repository status

The repository currently contains 153 HTML files. This is an incomplete implementation of this matrix.

The current count is not the target. It reflects uneven localization, missing Configuration pages, and incomplete copies of the full Experience family.

Build plan:

MATRIX → NORMALIZE → BUILD IN BATCHES → VALIDATE → DEPLOY → VERIFY

No intentional page reduction is part of this plan.
