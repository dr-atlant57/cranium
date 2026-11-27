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

## Phase 5 — Cases, Technology, Research, TwinMind
Twelve existing RU/EN routes reconstructed: cases, technology, primordocciput, c0-c1, logbook, twinmind. Cases retain three archive narratives with provenance; numbers are author-reported, not verified clinical results. English narrative translations originate from the RU public archive. Technology links to six existing Vita Wellness sections, with the original standalone project untouched. Research provides an entry map, schematic C0–C1–C2 and four evidence types; no invented experiment results. TwinMind is a local memory-only journal with explicit JSON import/export of Navigator, Potential and TwinMind history, capped at 200 records and 500 KB import, no cloud/account or automatic transfer. Legacy main content retained; shared CSS plus local JS. Scoped build: python scripts/build_site.py --product-depth. Browser interaction, complete build recovery, all-language adaptation, public deployment and actual email delivery remain open.

## Phase 6 — international product architecture
Ten additional localized home pages and 30 localized core product pages (Navigator, Configuration, Potential) added or reconstructed, existing legacy content preserved. All 12 language routes now have core product entry points, shared interaction and local export. International home/core fragments are canonical for scoped builds. Potential registered in XML and 13 HTML maps. The original Professional and Corporate pages remain RU; extended Academy, Cases, Technology, Research and TwinMind workspaces remain RU/EN, with existing localized information pages elsewhere. Native-language editorial review, reciprocal hreflang completion and browser/RTL validation remain release gates. No deployment.

## International footer design
Shared language matrix applied to existing footer language links without removing link targets or requiring JavaScript. Twelve native language names, visual flags/globe, green outlined checkmarks, active-language outline, responsive 6/4/3-column grid and focus support. Standalone recognition, specializations and Vita Wellness pages receive equivalent static links and dedicated stylesheet. Checkmarks denote availability of language entry points, not completeness of all localized content. Browser and visual acceptance pending.

## Phase 7 — release gate setup
Merged main changes through 92f73d8e15e65f3d1a64ca68bf24d98c1d613280, preserving new Vita Wellness 1.6 and Electric Human appendix; updated obsolete #electric links. Default build now uses only non-destructive scoped generators. Added all-HTML audit and real Chromium release workflow, including four viewport sizes, local interaction and cross-product file exchange. Reports distinguish strict reconstructed errors from legacy warnings; both block release. Old generator and original test retained for historical comparison. No green test or deployment claimed until actual run results are available.

### Final runtime and focused acceptance
Synchronize app.js and versioned runtime; keep equivalent route in footer language switches, remove duplicate corporate footer and obsolete observation-only capture handler, use localized contact routes. Add original preference behavior tests and visual screenshots across four widths and three themes, RTL route switch and mocked contact-form checks in all 12 languages. Actual email delivery is tested separately once with synthetic content. No claim of confirmed delivery until inbox receipt.

### Acceptance cycle 27 November 2026
The exact revision 122ee9715521efbe59313d45053e449f69856eb5 passed run 45922800604: 571 HTML files, 552 sitemap entries, zero static errors/warnings; 643 successful browser visits; 12 theme/viewport combinations; all 12 mock contact successes. Actual local-origin submissions in run 45922629717 timed out twice and returned HTTP 403 once; no matching message found in corporate inbox or spam. Delivery is not certified. Added explicit draft fallback with preserved fields to 12 contact pages and six native forms, timeout handling and 12 mocked failure tests. Added public-domain probe; no actual delivery claim. Registered 13 SOMA PARADISO public routes in XML and HTML maps. Updated old preview contact. Release remains subject to latest tests and production confirmation.
