# CRANIO SYSTEMS — Product Reconstruction v2.0
27.11.2026 | Phase 1, draft

## Baseline
Main tree dbcfc51fd7ebe010683ac1d9dc5d897e79914e08: 1,148 tree entries; 557 HTML files. Historical target: 481. Twelve language directories. Protect all existing routes, original contents, case distinctions, sitemap and localization. No production changes in this phase.
Read README, MASTER_PAGE_MATRIX_v1.0, VRL_ADOPTION_v1.0, build_site.py (initial architecture), site_contract.py, home source and Vita Wellness source. YISHUBUSINESS main tree has no identifiable PES v1.0 file; the eight principles in the supplied master prompt govern this draft pending retrieval of exact PES. Full page-level inventory and source review remain open.

## Prototype
preview/product-v2/index.html is an isolated RU, noindex prototype. It demonstrates role-driven routing, a simplified illustrative head-tilt diagram (not a measurement), progressive disclosure and ten product entry points. Static route existence verified against main, 13 unique routes including eight role routes. It does not collect health data or promise results. Email link opens the user's mail client; delivery untested.
This is not the new homepage or a production-ready design system. Current inline CSS/JS are prototype-only and must be extracted into shared versioned assets before integration.

## Product route mapping and status
- Personal Navigator: existing RU recognition checklist, full navigator integration pending.
- Configuration: existing localized explanatory routes, prototype model.
- Potential: concept; map individual observations without prediction.
- Professional: existing RU profession routes, expansion pending.
- Cases: existing section, audit published records and provenance.
- Academy: information routes; enrollment and course delivery not established.
- Technology: existing Vita Wellness interactive project; preserve engineering layer, distinguish concept from deployed integration.
- Corporate: RU company route; inquiry, not confirmed operational delivery system.
- Research: C0-C1, Primordocciput, logbook; inventory other concepts.
- TwinMind: existing concept; backend/account/history not established in README.

## Release gates
1. Inventory all 557 HTML files and source ownership; identify obsolete docs and real data. Capture immutable baseline route list.
2. Review exact PES, canonical VRL, existing product modules and current production rendering.
3. Build reusable tokens/components, role data, progressive enhancement and accessible navigation. Preserve relative-path compatibility.
4. Update source fragments and generator together, keeping all existing content and route IDs; adapt tests for prototype exclusions or integration.
5. Run node tests/preferences.test.cjs and python tests/site_contract.py, link/metadata parity and 12-language/RTL checks. Existing test suite has not been executed; new isolated prototype does not yet satisfy its production-page nav/footer contract.
6. Browser checks at 360, 390, 768, 1440; reduced motion, themes, keyboard, menu, all interactions, visual fidelity; no approval implied before checks.
7. Validate corporate form routing and actual Gmail receipt; do not mark delivered from frontend success alone.
8. Publish only after gates; verify published domain. Production main unchanged; public browser retrieval unavailable in this session.

## Phase 2 — product home pilot
Root, EN and RU homepage outputs and source fragments updated in this branch; old live main preserved under content/product-home/legacy_*.fragment and its original sections remain accessible below new product experience. Shared scoped design components in commercial.css. Native radio configuration, role/axis disclosure, ten product routes; no additional JS dependency. Existing header/runtime retained; CSS exposes native fallback nav and compact runtime menu. Source template and locale data are canonical for scoped build; build regenerates rendered fragments and pages from those inputs and protected legacy content. `python scripts/build_site.py --product-home` refreshes only these three pages. The legacy full build is not run: it can reintroduce outdated WhatsApp contact runtime and overwrite custom page markup. Browser, all-language localization, and legacy generator recovery remain open. Do not merge before browser checks.

Focused contract added: `python tests/product_home_contract.py`. Not executed in a full checkout here. Existing full generator/test suite still requires recovery and validation before merging.

## Phase 3 — core product route pilot
Six RU/EN product pages: existing your-cranium and configuration expanded; potential added in both languages. Shared product-core.css and JS, static fragments and scoped build mode. Navigator includes twelve optional observation directions, not a diagnostic score; original RU checklist with 137 checkline elements preserved, old form recipient corrected and automatic observation fields excluded from submission. Configuration contains three schematic independent orientation controls. Potential records optional current/desired self-ratings; potential remains undetermined. All exports local, no backend, no persistence or automatic transfer. Homepage product routes updated. XML sitemap includes two new routes. Full browser tests, HTML map parity, all-language expansion, and Gmail receipt remain release gates. Data JSON is a content reference; static fragments are canonical for the scoped generator.

## Phase 4 — Professional, Corporate, Academy
RU catalog and four existing occupational pages retain all 40 observation scenarios and four distinct workspaces, with a shared professional CSS/JS layer, searchable catalog, and links to the core products. RU corporate route adds a local three-selector brief builder (five participant levels, four formats, three priorities) and an export; no efficiency/price claims or employee data collection. Five existing form recipients migrated to RFS corporate email; situation fields excluded from automatic submission, source/UTM fields retained. Academy RU/EN rebuilt on existing education URLs with the author’s three stages, six proposed competency groups, three entry routes, existing 20-specialization reference and clear enquiry status. Original professional pages saved as text snapshots; Academy legacy fragments preserved. `python scripts/build_site.py --product-academy` is scoped to two existing pages. No new public URLs. Professional/Corporate remain RU; EN and other language routes, full build recovery, browser tests and verified form delivery remain open. The Academy competency matrix is proposed product architecture, not an accredited syllabus.
