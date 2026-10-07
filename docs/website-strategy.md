# PyMedic website: strategy, content matrix and audits

Source of truth for product facts: *PyMed Complete Project Explanation* (VeriRight, confidential). Everything on the site traces back to it. Items marked **[needs approval]** are not on the site until confirmed.

## 1. Competitor analysis

| Competitor | Main positioning | Strongest UX pattern | Strongest content pattern | What PyMedic learns | What PyMedic must not copy | PyMedic differentiation |
|---|---|---|---|---|---|---|
| DocTrue | Appointments, queue and WhatsApp for clinics; "smoother schedules, happier patients" | "Without / with" problem-solution contrast; 5-step How it Works | Doctor testimonials with credentials; large numeric proof (doctors, patients, wait time saved) | Lead with the OPD problem the doctor feels; show the queue on a TV | Numeric proof we cannot verify; testimonials we do not have | PyMedic covers the *whole* visit (consultation, EMR, counselling, billing), not booking and queue alone |
| Prodoc AI | "Intelligence layer" that connects existing hospital systems; agentic AI | Four-stage journey (acquisition → OPD → IPD → retention); integration diagram | Compliance badge wall; client logos; FAQ on security and EMR integration | Structure the story as a journey; show how modules hand over | AI-first language; certification badges we do not hold; "doesn't replace your systems" (PyMedic *is* the system) | PyMedic is the operational system of record for the OPD, not a layer over other tools |
| Heidi Health | AI care partner / scribe for clinicians | Product videos per capability; role-based navigation | Trust centre and regional compliance pages | Put the consultation moment at the centre; show it, don't describe it | Autonomous-AI framing; freemium CTA | Voice-to-notes is one step inside a connected workflow, described accurately as speech-to-text |
| Practo | Consumer marketplace: find doctors, video consults, lab tests | Category cards by health concern | "Verified doctors / safe and trusted" repetition | Patient-side clarity (token, queue, WhatsApp) | Marketplace framing, consumer CTAs | PyMedic is B2B: the clinic's own platform, with patients as the beneficiaries |

Market pattern: each competitor owns one slice (booking, orchestration, documentation, discovery). PyMedic's distinct space is **connected practice + patient journey + operations** for Indian OPDs.

## 2. Positioning

**One line:** One connected platform for the complete patient journey.

**Paragraph:** PyMedic is hospital and clinic practice management software from VeriRight Management Solutions. It runs the whole visit, from the enquiry and the booking, through the token queue, the voice-recorded consultation and the signed prescription on WhatsApp, to billing, surgery counselling and the follow-up reminder, on one record, so each step triggers the next and nothing is re-entered.

**H1 options considered**
1. Hospital & clinic practice management software built around the complete patient journey. ← **chosen** (keyword + narrative; split so "the complete patient journey" carries the accent)
2. One connected platform for the complete patient journey.
3. From booking to follow-up, one platform runs the visit.
4. Connected care. Connected operations. One platform.
5. The clinic management software where every step triggers the next.

**Hero supporting copy (chosen of 3):** "PyMedic connects appointments, OPD queues, consultations, EMR, prescriptions, WhatsApp patient engagement, billing and follow-up in one healthcare management platform. Nothing is re-entered, and nothing is lost between steps." (Alternatives: a shorter module list; a doctor-first version led by "Speak your notes".)

**Primary CTA:** Book a Demo (over "Request a demo", "Talk to us"). Secondary: See How PyMedic Works (home), Watch Demo (video).

## 3. Information architecture

```
/                 Home: overview and the connected-journey story
/consultation     The doctor's workflow (interactive walkthrough)
/features         Eleven capabilities organised by workflow (anchors: #appointments … #multi-location)
/for-patients     The visit as the patient experiences it
/for-your-team    Role-based: hospital admin, doctors, front desk, business teams
/demo-video       The demo, chaptered
/faq              Grouped Q&A with FAQPage schema
/book-demo        Demo form + the three onboarding steps
Redirects: /patients → /for-patients, /team → /for-your-team, /contact → /book-demo, * → /
```

## 4. Keyword map

| Keyword | Intent | Priority | Page | Use | FAQ | Internal link |
|---|---|---|---|---|---|---|
| hospital and clinic practice management software | commercial | P1 | / | H1, title | What is PyMedic? | → /features |
| hospital management software | commercial | P1 | / , /features | title, lead | Is it suitable for hospitals? | → /for-your-team |
| clinic management software | commercial | P1 | / , /features | lead, H2 | Is it suitable for a clinic? | → /features |
| healthcare practice management platform | commercial | P2 | / , /for-your-team | lead | Who can use PyMedic? | → /for-your-team |
| medical consultation software | commercial | P1 | /consultation | title | Which vitals? | → /features#consultation |
| EMR software for clinics / hospitals | commercial | P2 | /consultation, /features#consultation | H2 | Where is the record stored? | → /consultation |
| clinical documentation software | informational | P3 | /consultation | body | Do doctors type? | → /consultation |
| OPD management software, OPD queue management software | commercial | P1 | /features#queue | H2, bullets | How are OPD queues managed? | → /features#queue |
| appointment management software for clinics | commercial | P2 | /features#appointments | H2 | How are appointments managed? | → /features#appointments |
| digital prescription software | commercial | P2 | /features#prescription, /consultation | H2 | How are prescriptions delivered? | → /consultation |
| clinic billing software | commercial | P2 | /features#billing | H2 | How does billing work? | → /features#billing |
| healthcare WhatsApp automation, patient engagement software | commercial | P1 | /features#pyzap, /for-patients | title (patients), H2 | How does PyZap work? | → /features#pyzap |
| patient queue tracking, WhatsApp patient communication | informational | P2 | /for-patients | H2, steps | Can patients track the queue? | → /demo-video |
| hospital admin software, clinic operations software, doctor practice management | commercial | P2 | /for-your-team | H2 per role | Who can use PyMedic? | → /book-demo |
| hospital management software demo | commercial | P2 | /demo-video | title, H1 | — | → /book-demo |
| what is PyMedic / PyZap / LeadFlow (entity) | AI-search | P1 | /faq, footer, schema | FAQ, SoftwareApplication schema | yes | → relevant feature anchor |
| can multiple clinics share one platform (question) | question | P2 | /faq, /features#multi-location | FAQ | yes | → /features#multi-location |

## 5. Content matrix

| Page | Primary intent | Primary keyword | UVP | Sections | Internal links | CTA | FAQ topics |
|---|---|---|---|---|---|---|---|
| / | Understand what PyMedic is | hospital & clinic practice management software | One connected platform for the whole visit | Hero, capability strip, problem, journey, six modules, consultation highlight, PyZap, billing+corporate, LeadFlow, multi-location, data flow, video, outcomes, FAQ links | → consultation, features#…, for-your-team, demo-video, faq | Book a Demo / See How PyMedic Works | what, who, queue, multi (links only) |
| /consultation | See the doctor's workflow | medical consultation software | Less documenting, more patient | Hero, 10 steps, interactive walkthrough, before/after table, three triggers, 3 FAQs | → features, book-demo | Book a Demo / Try the walkthrough | vitals, medicine packs, storage |
| /features | Evaluate capabilities | hospital management software features | Every workflow, organised as the visit happens | 11 blocks with screens + benefit, trust | → consultation, for-your-team | Book a Demo / See it by role | — |
| /for-patients | Patient experience | patient engagement software | Informed from booking to follow-up, no app | Hero + phone, 9-step journey, 5 highlights | → demo-video, book-demo | Watch the Demo / Book a Demo | — |
| /for-your-team | Fit by role | healthcare practice management software (roles) | Every role sees what it owns | Hero + role index, 4 role sections with screens, multi-branch | → features#multi-location, consultation, book-demo | Book a Demo / Browse features | — |
| /demo-video | Watch the product | hospital management software demo | One visit, every module | Hero, player, 8 chapters, live-demo offer | → book-demo, features | Watch Demo / Book a Demo | — |
| /faq | Answer questions | long-tail questions | Short factual answers | 6 groups, 17 questions, related links | → features anchors, consultation | Book a Demo / Watch Demo | all |
| /book-demo | Convert | book a demo | See it with your OPD in mind | Form, what to expect, 3 onboarding steps | — | Book a Demo | — |

## 6. Internal linking map

Home → Consultation (module 03, highlight) · Features (modules 01/02/04/05/06, tenancy) · For Your Team (final CTA) · Demo Video (video section) · FAQ (preview).
Consultation → Features (next link, final CTA) · Book Demo.
Features → Consultation (consultation block) · For Your Team (hero, final CTA).
For Patients → Demo Video (hero, next link, final CTA) · Book Demo.
For Your Team → Features#multi-location · Consultation (final CTA) · Book Demo.
Demo Video → Book Demo · Features.
FAQ → Features#appointments, /consultation, Features#pyzap, Features#billing, Features#multi-location.
Footer → every page plus feature anchors. All anchor text is descriptive; no "click here".

## 7. Image, screenshot and video requirements

Every product visual is a `<ProductScreenshot>` with a `data-slot`. Replace the sample UI by passing `src` (1600×1000 WebP/AVIF in `public/screens/`). Slots: `screenshot-01` (dashboard), `screenshot-consultation`, `screenshot-02-1…4` (walkthrough), `screenshot-appointments`, `screenshot-queue`, `screenshot-consultation` (features), `screenshot-prescription`, `screenshot-prescription-pdf`, `screenshot-diagnostics`, `screenshot-surgery`, `screenshot-pyzap`, `screenshot-billing`, `screenshot-corporate`, `screenshot-leadflow`, `screenshot-multi-location`, `screenshot-role-*`, `screenshot-phone` (WhatsApp chat), `video-poster`.

Video: 16:9, YouTube/Vimeo/MP4 via `SITE_CONFIG.video`; poster from the product; click-to-play only; chapters as listed on /demo-video. OG image: `public/og/pymedic-og.png` (1200×630) **[to be supplied]**.

No stock photography. No customer logos until real and approved.

## 8. Design system (as implemented in `src/styles/global.css`)

Colours: navy #00003C, blue #0EA5F4, cyan #1BD5FE, background #F9FCFE, white; derived blue-ink #0369A8 for small text. Type: Outfit (display), Figtree (body). Radii 12/20px, soft shadow + glow on screens, pill buttons (min 44–52px tall). Sections: `.sec` spacing, `SectionHead` kicker/H2/lead, alternating `.m-panel` text+screen rows, dark navy bands for the journey and the video. Breakpoints: 1060, 1024, 980, 900, 860, 680, 620, 560, 520, 420px. Reduced-motion respected.

## 9. Technical SEO checklist

- [x] Unique title, meta description, OG/Twitter, canonical per route (`Seo.jsx`)
- [x] One H1 per page; H2/H3 hierarchy
- [x] `robots.txt`, `sitemap.xml`, clean URLs, old URLs redirected
- [x] Organization, WebSite, SoftwareApplication (index.html); BreadcrumbList per page; FAQPage on /faq only
- [x] Descriptive alt/aria-label on every product visual; lazy-loaded images and iframe
- [x] Fonts preconnected; no third-party JS
- [ ] SPA fallback on the host (serve index.html for unknown paths)
- [ ] OG image file
- [ ] Privacy / Terms / Cookie pages (footer links are placeholders)
- [ ] Pre-rendering (e.g. vite-plugin-prerender / SSG) if crawler coverage of client-rendered pages proves insufficient

## 10. Audits

**Duplication (automated, see summary table below):** every route server-rendered; no paragraph, H2, FAQ answer or CTA copy repeated across pages. The only shared strings are sample-screen labels inside reused mock screenshots.

**Unsupported-claim audit:** no numeric outcomes (65% perceived wait, 4–6 min saved, 28% surgery conversion are **[needs approval]** and absent); no HIPAA/ISO/GDPR/DPDPA/SOC 2; no ABDM claim (section and FAQ render only when `ABDM.enabled` is true); no AI diagnosis/clinical-decision language; WhatsApp described as "WhatsApp Business API with pre-approved message templates", as in the source; "AES-256" and "digital signature + QR code" are from the source.

**Terminology:** PyMedic (never PyMed), PyZap, LeadFlow, Medicine Pack, Test Panel, counselling (British), Surgery Suggested, Call Next.

**Conversion review:** Book a Demo in nav, hero, and one closing CTA per page with page-specific copy; mid-page CTAs are stage-appropriate (See How PyMedic Works → See the consultation workflow → Explore features → Watch Demo → Book a Demo). The form validates inline and posts to `SITE_CONFIG.formEndpoint`.

| Page | Primary keyword | H1 | Unique intent | Duplication | CTA |
|---|---|---|---|---|---|
| / | hospital & clinic practice management software | Practice management software built around the complete patient journey. | Overview | pass | Book a Demo |
| /consultation | medical consultation software | Spend more time with the patient. Less time documenting the visit. | Doctor workflow | pass | Book a Demo |
| /features | hospital management software features | Every workflow around the visit, in one clinic and hospital management platform. | Capabilities | pass | Book a Demo |
| /for-patients | patient engagement software | A visit that keeps patients informed, from booking to follow-up. | Patient experience | pass | Watch the Demo |
| /for-your-team | healthcare practice management software | Every role sees the part of the visit it owns. | Role fit | pass | Book a Demo |
| /demo-video | hospital management software demo | See PyMedic in action. | Demonstration | pass | Watch Demo |
| /faq | long-tail questions | Questions clinics and hospitals ask before choosing PyMedic. | Answers | pass | Book a Demo |
| /book-demo | book a demo | See PyMedic with your own OPD in mind. | Conversion | pass | Book a Demo |
