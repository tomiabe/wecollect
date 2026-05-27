# Current Site Audit — UX, IA, Messaging, and Credibility

This audit is based on the screenshots in `deliverables/assets/current-site/` and the stated target positioning (CEO brief).

## Evidence screenshots (current site)

- Home: `assets/current-site/1 - Home.png`
- Products (“Innovations”): `assets/current-site/screencapture-wecollect-tech-innovations-2026-05-26-21_20_20.png`
- Use cases (“Applicable cases”): `assets/current-site/screencapture-wecollect-tech-applicable-cases-2026-05-26-21_20_46.png`
- Projects: `assets/current-site/screencapture-wecollect-tech-our-project-2026-05-26-21_22_26.png`
- Product page (“Smart Data Collection App”): `assets/current-site/screencapture-wecollect-tech-smart-data-collection-2026-05-26-21_24_26.png`
- Download: `assets/current-site/screencapture-wecollect-tech-download-2026-05-26-21_27_40.png`

## Executive summary (what’s broken)

1) **Positioning mismatch:** The site presents WeCollect as a generic “field project management / data collection app”, not as infrastructure for field process + verified data.

2) **Offering confusion:** Navigation and page taxonomy mix “Products”, “Use cases”, “Projects”, and “Download”, but do not cleanly map to the CEO’s offering breakdown (Data collection, M&E, validation, reporting) and packaging (tool+people vs tool-only).

3) **Credibility debt:** Placeholder/lorem copy, generic testimonials, and stock visuals create “template vibes” that reduce trust for enterprise and government buyers.

4) **Conversion path inconsistency:** Competing CTAs (“Get a Quote”, “Get started for free”, “Book a demo”, “Try it for free”, newsletter subscribe) with no single primary path for enterprise buyers.

5) **Design system drift:** The UI feels partially aligned with the brand palette but shows inconsistent typography, spacing, component styles, and gradients.

## Heuristic evaluation (high-signal findings)

### A) Clarity & relevance (Above-the-fold problem)

**Observed:** Home headline: “Your all-in-one Tool for Field Project Management”.

**Gap vs CEO brief:** “Field Project Management” is narrower and reads like task software. CEO wants “field process + data collection infrastructure” with data integrity and operations capability.

**Impact:** High-intent enterprise users may not realize:

- this is for rigorous field research + integrity
- you provide the tool + people network

**Fix direction:** Replace with a precise category statement + proof anchors:

- “Field data infrastructure for Africa — offline capture, validation, and reporting, powered by a distributed agent network.”

### B) Information architecture & navigation

**Observed (top nav):** About Us, Products, Use Cases, Projects, Download, Sign in, Get a Quote.

**Issues:**

- “Products” and “Use Cases” overlap conceptually.
- “Projects” and “Use Cases” also overlap (projects are often use cases with proof).
- “Download” is prominent, which implies mobile-app-first, not infrastructure + enterprise service.
- “Get a Quote” suggests services; “Get started for free” suggests SaaS self-serve. Mixed buying motions.

**Fix direction (principle):** Organize navigation around buyer intent:

- What it is (Platform), What you do (Solutions/Offerings), Proof (Case Studies), Resources, Company, Contact/Sales.

### C) Trust, proof, and differentiation

**Observed:** Logo strip present; testimonials appear generic; case/project pages show minimal outcomes; some pages include placeholder text.

**Issues:**

- “Trust the data” claim is not supported with visible mechanisms (validation layers, audit trails, geofencing, QC loops) and compliance posture (NDPR/GDPR etc).
- No clear articulation of coverage and operating capability for the “people” part (network scale, QA process, training, supervision).

**Fix direction:** Build proof as a system:

- Security + integrity page (technical proof)
- Case studies with measurable outcomes
- “Network coverage” / operations model
- Clear buyer FAQ: procurement, onboarding, SLAs, data handling

### D) Visual consistency and brand alignment (quick)

Brand guide (as provided) calls out:

- Primary colors: **#4747D6** (blue) and **#1E1E1E** (black)
- Type: Merriweather + Helvetica Neue

**Observed issues:**

- The site uses multiple gradient treatments and UI styles that read as “template”, not a coherent system.
- Typography hierarchy looks inconsistent (heavy serif headings in places but not clearly systemized).

**Fix direction:** Re-implement a modern, consistent system:

- Define tokens (color, type scale, spacing, radii, shadows)
- Standardize components (buttons, cards, section patterns)
- Make the site feel like “infrastructure-grade” (clean, confident, not playful)

## Page-by-page notes (what to change)

### 1) Home (`deliverables/assets/current-site/1 - Home.png`)

![Home (current)](assets/current-site/1%20-%20Home.png)

Primary problems:

- Category positioning is too narrow and not Africa/infrastructure-specific.
- Proof and differentiation are too light upfront.
- Too many mixed CTAs (free, demo, subscribe).

Keep / strengthen:

- Your platform visuals can work, but should be contextualized with integrity + operations.

### 2) Products (`deliverables/assets/current-site/screencapture-wecollect-tech-innovations-2026-05-26-21_20_20.png`)

![Products / Innovations (current)](assets/current-site/screencapture-wecollect-tech-innovations-2026-05-26-21_20_20.png)

Primary problems:

- “WeCollect Learning” block contains placeholder text — this is a must-fix because it undermines everything.
- Product list doesn’t map to the CEO’s 4 offerings.

Fix direction:

- Replace “Products” with “Platform” (tooling) + “Services/Operations” (people/network).
- Or rename to “Offerings” with the 4 categories.

### 3) Use cases (`deliverables/assets/current-site/screencapture-wecollect-tech-applicable-cases-2026-05-26-21_20_46.png`)

![Use cases / Applicable cases (current)](assets/current-site/screencapture-wecollect-tech-applicable-cases-2026-05-26-21_20_46.png)

Primary problems:

- Use cases read like generic business ops (inventory, brand visibility) rather than research + field integrity.
- Copy is broad and not outcome-led.

Fix direction:

- Reframe use cases around high-value buyer contexts (government surveys, health/humanitarian, ESG/impact, consumer research) consistent with the feature PDF.

### 4) Projects (`deliverables/assets/current-site/screencapture-wecollect-tech-our-project-2026-05-26-21_22_26.png`)

![Projects (current)](assets/current-site/screencapture-wecollect-tech-our-project-2026-05-26-21_22_26.png)

Primary problems:

- Project cards are thin; no outcomes, scale, methodology, or proof.

Fix direction:

- Convert to case studies with a consistent template (Problem → Approach → Scale → Integrity methods → Outcome).

### 5) Smart Data Collection App (`deliverables/assets/current-site/screencapture-wecollect-tech-smart-data-collection-2026-05-26-21_24_26.png`)

![Smart Data Collection App (current)](assets/current-site/screencapture-wecollect-tech-smart-data-collection-2026-05-26-21_24_26.png)

Primary problems:

- Reads like a simple mobile app landing page; doesn’t express the full infra story.
- Testimonials appear generic.

Fix direction:

- Reframe as part of the platform; integrate validation + reporting + M&E + operations story.

### 6) Download (`deliverables/assets/current-site/screencapture-wecollect-tech-download-2026-05-26-21_27_40.png`)

![Download (current)](assets/current-site/screencapture-wecollect-tech-download-2026-05-26-21_27_40.png)

Primary problems:

- “Download” being a primary nav item suggests app-store-first buying.

Fix direction:

- Make “Download” secondary (footer or resources) unless the strategy is truly app-first.
