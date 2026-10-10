// All website text lives here. Edit this file to change copy without touching components.
// Source of truth for product facts: the PyMedic Project Explanation document. Do not add capabilities that are not in it.

export const SITE_CONFIG = {
  domain: 'https://www.pymedic.in',
  // YouTube / Vimeo link or an MP4 path, e.g. "https://www.youtube.com/watch?v=XXXX" or "/media/pymedic-demo.mp4"
  video: '/media/pymedic-demo-gemini.mp4',
  videoPoster: '/media/pymedic-demo-poster.jpg', // still frame shown before the preview starts
  videoCaptions: '', // optional .vtt file for MP4
  videoAspect: '16 / 9', // shape of the MP4 frame before it loads (the real ratio is read from the file)
  // Where the demo form posts JSON, e.g. "/api/demo-request". Empty = validate only.
  formEndpoint: '',
  company: 'VeriRight Management Solutions Pvt. Ltd.',
  city: 'Bengaluru',
  tagline: 'Hospital & clinic practice management software',
  // Contact details shown in the footer. Replace the placeholders before launch.
  email: 'info@pymedic.in',
  phone: '+91 00000 00000',
  offices: [
    { title: 'Headquarters', lines: ['Address line 1', 'Address line 2', 'Bengaluru, Karnataka 5600XX'] },
    { title: 'Regional office', lines: ['Address line 1', 'Address line 2', 'City, State PIN'] },
  ],
  // Social profiles: leave `href` empty to hide an icon.
  social: [
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'youtube', label: 'YouTube', href: '#' },
    { name: 'linkedin', label: 'LinkedIn', href: '#' },
    { name: 'instagram', label: 'Instagram', href: '#' },
  ],
};

/** One-sentence entity definition, reused in structured data and the footer. */
export const ENTITY =
  'PyMedic is a hospital and clinic practice management system by VeriRight Management Solutions Pvt. Ltd. It connects appointments, OPD queue management, consultation and EMR, digital prescriptions, WhatsApp patient engagement, surgery counselling, billing, corporate healthcare billing, Lead management enquiry tracking and patient follow-up on one platform.';

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/for-doctors', label: 'For Doctors' },
  { href: '/features', label: 'Features' },
  { href: '/for-patients', label: 'For Patients' },
  { href: '/for-admin-team', label: 'For Admin Team' },
  // { href: '/demo-video', label: 'Demo Video' }, // hidden from the menu; the page still exists at /demo-video
  { href: '/faq', label: 'FAQ' },
];

/** Per-page SEO. Keys match route paths. */
export const SEO = {
  '/': {
    title: 'Clinic & Patient Management Software | PyMedic',
    description: 'PyMedic is clinic and patient management software for clinics and hospitals: appointments, OPD queues, consultation and EMR, prescriptions, WhatsApp patient engagement, billing and follow-up in one platform.',
    ogTitle: 'PyMedic · One connected platform for the complete patient journey',
    ogDescription: 'Appointments, OPD queue, consultation, prescriptions, WhatsApp, billing and follow-up, connected in one hospital and clinic management platform.',
  },
  '/for-doctors': {
    title: 'For Doctors: Medical Consultation Software | PyMedic',
    description: 'Record the consultation by voice, enter vitals, apply medicine packs and test panels, and send a signed PDF prescription to WhatsApp. See the PyMedic consultation and EMR workflow step by step.',
    ogTitle: 'PyMedic for Doctors · More time with the patient',
    ogDescription: 'Voice-recorded notes, vitals, medicine packs, test panels and a signed PDF prescription delivered on WhatsApp.',
    crumb: 'For Doctors',
  },
  '/features': {
    title: 'Hospital Management Software Features | PyMedic',
    description: "Explore PyMedic's clinic and hospital management software features by workflow: appointments, OPD queue, consultation and EMR, prescriptions, diagnostics, surgery counselling, WhatsApp, billing, corporate B2B, Lead management and multi-location architecture.",
    ogTitle: 'PyMedic Features · Every workflow around the visit',
    ogDescription: 'Eleven connected capabilities, organised the way a patient visit actually happens.',
    crumb: 'Features',
  },
  '/for-patients': {
    title: 'Patient Engagement Software: Booking, Queue Tracking & WhatsApp | PyMedic',
    description: 'How patients experience a PyMedic clinic: online booking, WhatsApp confirmation, live queue position, digital prescription delivery, online payment and follow-up reminders, with no app to install.',
    ogTitle: 'PyMedic for Patients · Informed from booking to follow-up',
    ogDescription: 'Booking, queue position, prescriptions and reminders, all on WhatsApp.',
    crumb: 'For Patients',
  },
  '/for-admin-team': {
    title: 'For Admin Team: Clinic & Hospital Admin Software | PyMedic',
    description: 'What hospital admins, doctors, front-desk coordinators and business teams get from PyMedic: doctor schedules, OPD queue, consultation tools, counselling cases, corporate billing and enquiry tracking.',
    ogTitle: 'PyMedic for Admin Team · Every role sees what it owns',
    ogDescription: 'Hospital admins, doctors, front desk and business teams on one connected platform.',
    crumb: 'For Admin Team',
  },
  '/demo-video': {
    title: 'Hospital Management Software Demo Video | PyMedic',
    description: 'Watch a PyMedic demo: one patient visit from booking and check-in to consultation, prescription on WhatsApp, billing and follow-up, on one connected platform.',
    ogTitle: 'PyMedic Demo Video · One visit, start to finish',
    ogDescription: 'Follow a patient from booking to follow-up through PyMedic.',
    crumb: 'Demo Video',
  },
  '/faq': {
    title: 'PyMedic FAQ: Appointments, OPD Queue, Prescriptions, WhatsApp & Billing',
    description: 'Answers to common questions about PyMedic: who it is for, how it manages appointments and OPD queues, how prescriptions reach WhatsApp, how billing and corporate accounts work, and how multiple clinics share one platform.',
    ogTitle: 'PyMedic FAQ',
    ogDescription: 'Questions clinics and hospitals ask before choosing PyMedic.',
    crumb: 'FAQ',
  },
  '/book-demo': {
    title: 'Book a PyMedic Demo',
    description: 'Book a demo of PyMedic for your clinic or hospital. See appointments, OPD queue, consultation, WhatsApp engagement and billing with your own practice in mind.',
    ogTitle: 'Book a PyMedic Demo',
    ogDescription: 'A live walkthrough of PyMedic built around your doctors, branches and current tools.',
    crumb: 'Book a Demo',
  },
};

/**
 * Photography. Three spots only; product screens stay the dominant visual.
 * Put files in public/photos/ (WebP, about 1600×1200) and set `src`, e.g. '/photos/opd-front-desk.webp'.
 * Use real, licensed photos of real settings. No stock-looking "smiling doctor" images.
 */
// Photos: Unsplash (free licence). Replace with your own clinic photography when available; keep the alt text descriptive.
export const PHOTOS = {
  'home-problem': { src: '/photos/front-desk.jpg', alt: 'An empty hospital reception desk with signage, before the morning OPD rush', brief: 'A real OPD front desk or waiting area, candid, mid-morning.' },
  'consultation-hero': { src: '/photos/consultation.jpg', alt: 'A doctor with a tablet talking with a patient across a desk, with the patient record panel showing medical history, prescriptions, lab reports, consultations and health metrics', brief: 'Doctor facing the patient, not the screen. Tablet visible but secondary.' },
  'team-hero': { src: '/photos/team-hero.jpg', alt: 'A clinician at a desk using the PyMedic dashboard, with hospital admins, doctors, front desk and patient coordinators, business and marketing teams and patient care teams connected around it', brief: 'Clinic team around the shared record.' },
  'patients-journey': { src: '/photos/patient-journey.jpg', alt: 'A patient relaxing in an armchair booking an appointment on her phone, with a doctor list, calendar, location, lab test and secure-record icons around her', brief: 'A patient booking and tracking a visit on her phone.' },
};

/* ------------------------------------------------------------------ HOME */

export const HERO = {
  kicker: 'Clinic & patient management software',
  titleStart: 'Scheduling, records and patient engagement.',
  titleEmphasis: 'One connected platform.',
  lead: 'PyMedic connects appointments, OPD queues, consultations, EMR, prescriptions, WhatsApp patient engagement, billing and follow-up in one healthcare management platform. Nothing is re-entered, and nothing is lost between steps.',
  // Display helpers for the hero. The full `lead` above stays in the page for search engines and screen readers.
  keywords: ['Scheduling', 'records', 'patient engagement'],
  rotate: ['appointments', 'OPD queues', 'consultations', 'EMR', 'prescriptions', 'WhatsApp patient engagement', 'billing', 'follow-up'],
  rotateLine: ['PyMedic connects', 'in one healthcare management platform.'],
  promises: ['Nothing is re-entered', 'Nothing is lost between steps'],
  primary: { href: '/book-demo', label: 'Book a Demo' },
  secondary: { href: '#journey', label: 'See How PyMedic Works' },
  points: [
    { icon: 'mic', text: 'Voice-recorded consultations' },
    { icon: 'chat', text: 'Prescriptions delivered on WhatsApp' },
    { icon: 'queue', text: 'Live OPD token queue' },
  ],
};

export const CAPABILITIES = ['Appointments', 'Queue management', 'Consultation & EMR', 'WhatsApp engagement', 'Reminders', 'AI support', 'Billing', 'Follow-up'];

export const PROBLEM = {
  title: 'Healthcare operations break down when every workflow',
  accent: 'lives somewhere else.',
  lead: 'A single patient visit spans scheduling, the OPD queue, consultation, prescriptions, billing and follow-up. In most clinics, each of these runs on a separate tool, paper register or manual process.',
  items: [
    ['Appointments', 'in a diary or a phone line nobody else can see'],
    ['The OPD queue', 'run on paper tokens and a crowded lobby'],
    ['Consultation notes', 'handwritten, or typed while the patient waits'],
    ['Prescriptions', 'written by hand and handed over, never stored'],
    ['Patient messages', 'sent from personal phones, with no record'],
    ['Billing', 'in a ledger or spreadsheet, disconnected from the visit'],
    ['Follow-ups', 'left to the patient to remember'],
    ['Enquiries', 'tracked in a separate sheet, if tracked at all'],
  ],
  // One photo per card above (same order). Clicking a card swaps the photo.
  images: [
    { src: '/photos/problem-1.jpg', alt: 'An open paper appointment diary on a desk' },
    { src: '/photos/problem-2.jpg', alt: 'Patients waiting on benches along a crowded hospital corridor' },
    { src: '/photos/problem-3.jpg', alt: 'A doctor writing consultation notes by hand on a clipboard while the patient waits' },
    { src: '/photos/problem-4.jpg', alt: 'A doctor writing a prescription by hand next to a stethoscope' },
    { src: '/photos/problem-5.jpg', alt: 'Hands texting a patient from a personal smartphone' },
    { src: '/photos/problem-6.jpg', alt: 'A calculator and pens on a handwritten paper ledger' },
    { src: '/photos/problem-7.jpg', alt: 'A patient picking tablets from a weekly pill organiser, remembering their own medicines' },
    { src: '/photos/problem-8.jpg', alt: 'A staff member taking an enquiry by phone at a computer' },
  ],
  bridgeTitle: 'PyMedic connects the workflow.',
  bridgeText: 'Every one of these steps happens inside the same platform, in the order the visit happens. When one step is completed, the next one is already waiting.',
};

export const JOURNEY = {
  kicker: 'The PyMedic difference',
  title: 'One patient journey.',
  accent: 'One connected platform.',
  lead: 'Eleven steps, each one handing over to the next automatically.',
  stages: [
    { stage: 'Book', icon: 'cal', module: 'Appointment booking', text: 'Pick a doctor, date and slot online.' },
    { stage: 'Check in', icon: 'desk', module: 'Patient check-in', text: 'Get a token at the desk or kiosk.' },
    { stage: 'Wait', icon: 'clock', module: 'Queue management', text: 'Track your turn on screen and WhatsApp.' },
    { stage: 'Consult', icon: 'steth', module: 'Consultation & EMR', text: 'Notes recorded by voice, vitals on screen.' },
    { stage: 'Prescribe', icon: 'rx', module: 'Digital prescription', text: 'A signed PDF, sent on WhatsApp.' },
    { stage: 'Pay', icon: 'bill', module: 'Billing & payments', text: 'Invoices created as care is delivered.' },
    { stage: 'Medicines', icon: 'pill', module: 'Pharmacy & dispensing', text: 'Dispensed at the clinic pharmacy.' },
    { stage: 'Follow up', icon: 'chat', module: 'Patient follow-up', text: 'Check-ins on Day 3, 7 and 14.' },
    { stage: 'Reminder', icon: 'bell', module: 'Reminder tracking', text: 'Every reminder tracked until booked.' },
    { stage: 'Manage', icon: 'build', module: 'Clinic management', text: 'All branches on one dashboard.' },
    { stage: 'Assist', icon: 'spark', module: 'AI support', text: 'AI suggestions; the doctor decides.' },
  ],
};

/** Six core modules (home overview). Detailed descriptions live in FEATURE_SECTIONS, not here. */
export const MODULES = [
  { n: '01', icon: 'cal', title: 'Appointment & Smart Slot Engine', text: 'Weekly availability becomes bookable slots. Online, walk-in, referral and follow-up bookings move through one lifecycle.', href: '/features#appointments', cta: 'Explore appointment management' },
  { n: '02', icon: 'queue', title: 'Live Token Queue & Kiosk', text: 'Digital tokens, a waiting-room display and a queue link on the patient\'s phone. The doctor presses Call Next.', href: '/features#queue', cta: 'Explore the OPD queue' },
  { n: '03', icon: 'rx', title: 'Digital Consultation, Prescription & EMR', text: 'Voice-recorded notes, vitals, medicine packs and test panels, ending in a signed PDF on the patient record.', href: '/for-doctors', cta: "See the doctor's workflow" },
  { n: '04', icon: 'heart', title: 'Surgery Counselling Desk', text: 'One tick on the prescription opens a counselling case with costs, insurance pre-authorisation and the patient\'s decision.', href: '/features#surgery', cta: 'Explore surgery counselling' },
  { n: '05', icon: 'chat', title: 'WhatsApp Patient Engagement', text: 'Confirmations, prescription delivery, follow-up sequences and two-way chat, from the clinic\'s number, inside PyMedic.', href: '/features#pyzap', cta: 'Explore WhatsApp engagement' },
  { n: '06', icon: 'bill', title: 'Billing & Corporate B2B', text: 'Three invoice series, corporate partners with credit limits and monthly settlement, coupons and online payment.', href: '/features#billing', cta: 'Explore billing' },
  { n: '07', icon: 'bell', title: 'Reminders & Follow-up Tracking', text: 'Medicine, test and follow-up reminders on WhatsApp, with each one tracked from sent to booked so no patient drops off.', href: '/features#pyzap', cta: 'Explore reminders' },
  { n: '08', icon: 'branch', title: 'Clinic & Multi-branch Management', text: 'Doctors, schedules, branches, revenue and patient flow on one admin dashboard, with every clinic keeping its own data.', href: '/features#multi-location', cta: 'Explore clinic management' },
  { n: '09', icon: 'mic', title: 'AI Support for Doctors', text: 'Speech-to-text consultation notes and AI suggestions on the prescription, with the doctor always making the final call.', href: '/for-doctors', cta: 'See AI support in the workflow' },
];

export const CONSULT_HIGHLIGHT = {
  kicker: 'Consultation & EMR',
  title: 'The doctor talks.',
  accent: 'PyMedic writes.',
  text: 'Press Start Recording and the conversation becomes text notes. Enter vitals, search a medicine or apply a pack, order a test panel, and press Complete. The signed prescription reaches the patient\'s WhatsApp before they reach the front desk.',
  cta: { href: '/for-doctors', label: 'See the consultation workflow' },
};

export const PYZAP = {
  kicker: 'WhatsApp engagement',
  title: 'Talk to patients',
  accent: 'where they already are.',
  lead: 'PyMedic has WhatsApp built in. It uses the WhatsApp Business API with pre-approved message templates, so the clinic can reach patients outside a live conversation.',
  types: [
    { icon: 'cal', title: 'Confirmations and alerts', text: 'Doctor, date, time, token number and a live queue link, sent the moment a booking is made.' },
    { icon: 'rx', title: 'Prescription and report delivery', text: 'The PDF prescription with a visit summary, the tests ordered and the follow-up date.' },
    { icon: 'bell', title: 'Follow-up sequences', text: 'Timed check-ins after the visit, with a one-tap link to book the follow-up.' },
    { icon: 'chat', title: 'Two-way chat', text: 'Patient replies land in the PyMedic inbox. A message from an unknown number can be turned into a registered patient.' },
  ],
  numbers: 'Messages go out from the doctor\'s own WhatsApp number if one is configured, otherwise the clinic\'s number, otherwise the platform number. Credentials are stored with AES-256 encryption.',
};

export const BILLING = {
  kicker: 'Billing & corporate B2B',
  title: 'Bills that follow the visit,',
  accent: 'not the other way round.',
  text: 'An invoice is created as each service is delivered: CONS- for the consultation, DIAG- for tests and PHAR- for pharmacy. Separate series keep accounting, GST filing and audits clean.',
  corporate: {
    title: 'Company-paid patients, settled monthly',
    steps: [
      'Add the corporate partner with agreed discounts, a credit limit and a contact person.',
      'Mark the employee as a corporate patient at booking or walk-in; the discount applies itself.',
      'The invoice is billed to the company. The patient pays nothing, or a co-pay.',
      'One consolidated invoice at month end. PyMedic alerts the admin as the limit approaches.',
    ],
  },
};

export const LEADFLOW = {
  kicker: 'Lead management',
  title: 'From first enquiry',
  accent: 'to patient.',
  lead: 'Lead management is the business-growth layer inside PyMedic, for the team that brings in new patients and corporate partners.',
  sources: ['Website form', 'WhatsApp', 'Phone call', 'Walk-in'],
  stages: ['New', 'Contacted', 'Interested', 'Negotiation', 'Converted'],
  points: [
    'Every call, email, WhatsApp message and meeting is logged as a touchpoint.',
    'Leads can become patients or corporate partners.',
    'A converted lead flows into the patient record with no re-entry.',
  ],
};

export const TENANCY = {
  kicker: 'Multi-location architecture',
  title: 'One platform.',
  accent: 'Separate workspaces.',
  lead: 'PyMedic runs many hospitals and clinics on one platform. Each organisation\'s data stays its own.',
  shared: ['Master medicine database', 'Diagnostic test catalogue', 'WhatsApp gateway', 'Payment processing'],
  isolated: ['Patients and records', 'Doctors and schedules', 'Appointments and tokens', 'Invoices', 'WhatsApp credentials', 'Corporate partners and coupons'],
  branches: 'A group with several branches manages all of them from one admin view, with one dashboard for the owner, while each branch keeps its own data.',
};

export const DATA_FLOW = {
  kicker: 'The connected data flow',
  title: 'Every action moves',
  accent: 'the next one forward.',
  lead: 'Nothing waits for someone to remember. Each step is created by the one before it.',
  steps: [
    ['Appointment booked', 'Confirmation sent on WhatsApp with the token number'],
    ['Queue token created', 'Appears on the waiting-room display'],
    ['Patient checked in', 'Queue link shows their live position'],
    ['Doctor starts consultation', 'Status moves to In progress; start time recorded'],
    ['Prescription generated', 'Signed PDF saved to the patient record'],
    ['WhatsApp delivers the prescription', 'With tests ordered and the follow-up date'],
    ['Billing created', 'Consultation, diagnostic or pharmacy invoice, or billed to the corporate partner'],
    ['Follow-up triggered', 'Day 3, 7 and 14 reminders with a booking link'],
  ],
};

export const VIDEO = {
  kicker: 'Demo video',
  title: 'See PyMedic in action.',
  lead: 'Follow a patient journey from appointment booking to consultation, prescription, billing and follow-up, all through one connected platform.',
  posterText: 'PyMedic · one patient visit, start to finish',
  chapters: ['Booking', 'Confirmation', 'Check-in & queue', 'Consultation', 'Prescription on WhatsApp', 'Counselling', 'Billing', 'Follow-up'],
  playLabel: 'Watch Demo',
};

export const OUTCOMES = {
  kicker: 'What changes',
  title: 'Built around',
  accent: 'better healthcare operations.',
  items: [
    { icon: 'cal', title: 'More organised appointments', text: 'Slots generated from doctor hours; every booking tagged by source and status.' },
    { icon: 'queue', title: 'Clearer patient flow', text: 'Tokens, a waiting-room display and queue links replace the crowd at the desk.' },
    { icon: 'mic', title: 'Less manual documentation', text: 'Notes come from the conversation; medicines and tests come from packs and panels.' },
    { icon: 'chat', title: 'Connected patient communication', text: 'Confirmations, prescriptions, reminders and replies from one clinic number, with a record.' },
    { icon: 'build', title: 'Better operational visibility', text: 'Revenue, outstanding corporate amounts, patient flow and campaigns in one place.' },
    { icon: 'bill', title: 'Structured billing', text: 'Three invoice series and corporate accounts that settle monthly.' },
    { icon: 'bell', title: 'Follow-up continuity', text: 'Reminders run on a schedule, and surgical recommendations become tracked cases.' },
    { icon: 'funnel', title: 'Better lead tracking', text: 'Enquiries from every channel move through one pipeline into the patient database.' },
  ],
};

export const TRUST = {
  kicker: 'Data & access',
  title: "Your patients' data stays",
  accent: 'with your clinic.',
  items: [
    { title: 'Separate by design', text: "Every clinic's patients, invoices and partners are isolated. No other clinic on the platform can see them." },
    { title: 'Encrypted WhatsApp credentials', text: 'WhatsApp tokens are stored with AES-256 encryption.' },
    { title: 'Access by role', text: 'Doctors, front desk and admins each see only what their job needs.' },
    { title: 'Verifiable prescriptions', text: 'A digital signature and QR verification code on every prescription PDF.' },
  ],
  // Certifications: add only confirmed compliance details here. None are claimed by default.
};

/** ABDM: rendered only when `enabled` is true and the facts below have been confirmed. */
export const ABDM = {
  enabled: false,
  kicker: 'ABDM',
  title: "Designed for India's connected digital healthcare ecosystem",
  text: '[Confirmed ABDM capabilities go here. Do not claim compliance, certification or specific API integrations until verified.]',
  faq: { q: 'Does PyMedic support ABDM?', a: '[Confirmed answer pending.]' },
};

/* ------------------------------------------------------------ CONSULTATION */

/** For Doctors: ABDM integration. Status is 'coming soon' until it ships; change `soon` to false then. */
export const DOCTOR_ABDM = {
  soon: true,
  badge: 'ABDM integration · coming soon',
  title: 'ABDM integration.',
  accent: 'Prescriptions that follow the patient.',
  lead: 'PyMedic is adding Ayushman Bharat Digital Mission (ABDM) integration, so the records you create can travel with the patient beyond your clinic.',
  points: [
    { icon: 'desk', title: 'Link to ABHA', text: "Consultation and prescription records linked to the patient's ABHA (Ayushman Bharat Health Account), with their consent." },
    { icon: 'globe', title: 'Records travel with the patient', text: 'Other ABDM-connected providers can see the history the patient chooses to share.' },
    { icon: 'check', title: 'No extra steps for the doctor', text: 'Linking happens in the background when you press Complete.' },
  ],
  flow: [
    { icon: 'rx', title: 'Prescription completed', text: 'The doctor presses Complete; the record is ready to share.' },
    { icon: 'check', title: 'Patient consent', text: 'The patient approves sharing on their phone.' },
    { icon: 'desk', title: 'Linked to ABHA', text: "The record joins the patient's ABHA health record." },
  ],
  cta: { href: '/book-demo', label: 'Ask about ABDM on a demo' },
};

export const CONSULTATION_PAGE = {
  kicker: 'For doctors',
  h1: 'For doctors: more time with the patient, less time documenting the visit.',
  lead: 'PyMedic records the consultation by voice, turns it into notes, and builds the prescription from your vitals, medicines and tests. The signed PDF is on the patient\'s WhatsApp before they leave the room.',
  primary: { href: '/book-demo', label: 'Book a Demo' },
  secondary: { href: '#walkthrough', label: 'Try the walkthrough' },
  workflow: [
    ['Start the consultation', 'Press Call Next. The token appears on the waiting-room screen and the appointment moves to In progress.'],
    ['Capture the conversation', 'Press Start Recording. PyMedic captures the audio of the visit.'],
    ['Convert to notes', 'Speech-to-text turns the recording into consultation notes. No typing during the visit.'],
    ['Record vitals', 'BP, pulse, temperature, SpO2, respiratory rate, height and weight. BMI is calculated.'],
    ['Select medicines', 'Type a few letters and pick from the master medicine database, with form, strength, frequency, duration and instructions.'],
    ['Apply a medicine pack', 'Common conditions have a pre-built pack. One click adds all of its medicines.'],
    ['Order diagnostic tests', 'Pick individual tests or a test panel, such as a pre-surgery blood workup.'],
    ['Generate the prescription', 'A PDF on the clinic letterhead with your digital signature and a QR verification code.'],
    ['Send the prescription', "Delivered to the patient's WhatsApp and available in the patient portal. Linking to the patient's ABHA through ABDM is coming soon."],
    ['Trigger what comes next', 'The consultation invoice is created, a counselling case opens if you ticked Surgery Suggested, and follow-up reminders are scheduled.'],
  ],
  workflowFacts: [
    { icon: 'mic', title: 'No typing during the visit', text: 'The conversation becomes notes while you talk.' },
    { icon: 'rx', title: 'One click for common cases', text: 'Medicine packs and test panels fill the prescription.' },
    { icon: 'chat', title: 'Sent before the patient leaves', text: 'The signed PDF reaches WhatsApp the moment you press Complete.' },
  ],
  walkthrough: {
    kicker: 'On your screen',
    title: 'Four moments',
    accent: 'of a consultation.',
    lead: 'Select a step to see what the doctor sees.',
  },
  compare: {
    kicker: 'Before and after',
    title: 'A paper visit,',
    accent: 'and a connected one.',
    heads: ['Step', 'Disconnected', 'With PyMedic'],
    rows: [
      ['Notes', 'Handwritten or typed while the patient waits', 'Spoken, converted to text as you talk'],
      ['Vitals', 'On a slip, copied later', 'Entered once; BMI calculated'],
      ['Medicines', 'Written one by one, from memory', 'Searched from the database, or applied as a pack'],
      ['Tests', 'Listed by hand', 'Ordered as a panel in one click'],
      ['Prescription', 'Paper, handed over', 'Signed PDF with QR code, on WhatsApp and in the portal'],
      ['Health record', 'Stays in the clinic\'s own files', 'Linked to the patient\'s ABHA through ABDM (coming soon)'],
      ['After the visit', 'Depends on someone remembering', 'Invoice, counselling case and reminders created automatically'],
    ],
  },
  triggers: {
    kicker: 'When you press Complete',
    title: 'Three things happen',
    accent: 'without another click.',
    items: [
      { icon: 'chat', title: 'The prescription is delivered', text: 'The PDF is sent to the patient on WhatsApp.' },
      { icon: 'heart', title: 'A counselling case opens', text: 'If Surgery Suggested is ticked, the case is assigned to your counsellor.' },
      { icon: 'bill', title: 'The invoice is created', text: 'A CONS- series invoice for the consultation fee.' },
    ],
  },
  faq: [
    { q: 'Which vitals can be recorded during a consultation?', a: 'Blood pressure, pulse, temperature, oxygen saturation (SpO2), respiratory rate, height and weight. PyMedic calculates BMI from height and weight.' },
    { q: 'What is a Medicine Pack?', a: 'A pre-configured set of medicines for a common condition, built by your clinic admin. Applying a pack adds all of its medicines to the prescription in one click. Test Panels work the same way for diagnostic tests.' },
    { q: 'Where is the consultation stored?', a: "Notes, vitals, medicines, tests and the prescription PDF are saved to the patient's record in PyMedic, and the prescription is also available in the patient portal." },
    { q: 'Does PyMedic integrate with ABDM?', a: "ABDM integration is coming soon. It will let doctors link consultation and prescription records to the patient's ABHA (Ayushman Bharat Health Account), with the patient's consent, so the record can follow the patient across ABDM-connected providers. Ask on a demo call for the current timeline." },
  ],
  next: { href: '/features', label: 'See every PyMedic feature' },
};

/* ---------------------------------------------------------------- FEATURES */

export const FEATURES_PAGE = {
  kicker: 'Features',
  h1: 'Every workflow around the visit, in one clinic and hospital management platform.',
  lead: 'Organised the way a patient visit actually happens: from the booking to the bill, and on to the next visit.',
  primary: { href: '/book-demo', label: 'Book a Demo' },
  secondary: { href: '/for-admin-team', label: 'See it by role' },
};

export const ORBIT = {
  kicker: 'Platform map',
  title: 'Every module.',
  accent: 'One PyMedic.',
  lead: 'Every capability on this page runs on the same platform and the same patient record. Select a module to jump back to its section.',
  // Capabilities described elsewhere on the site that are not separate sections on this page.
  extra: [
    { name: 'Reminders', icon: 'bell', href: '#pyzap', ring: 'inner' },
    { name: 'AI support', icon: 'spark', href: '/for-doctors', ring: 'inner' },
    { name: 'Pharmacy', icon: 'pill', href: '#billing' },
    { name: 'Patient portal', icon: 'desk', href: '/for-patients' },
    { name: 'ABDM', icon: 'globe', href: '/for-doctors#abdm', soon: true },
  ],
};

// `screen` keys map to FEATURE_SCREENS in components/mocks/Screens.jsx
export const FEATURE_SECTIONS = [
  { id: 'appointments', icon: 'cal', name: 'Appointments', screen: 'appointments', title: 'Doctor hours become bookable slots.',
    text: 'The admin sets each doctor\'s weekly availability once. PyMedic generates individual slots from it and shows them on the booking page.',
    bullets: ['Slot durations of 15, 20, 30, 45 or 60 minutes, set per doctor', 'Holidays remove their slots automatically', 'Four booking channels, each tagged: online, walk-in, referral, follow-up', 'Lifecycle: Booked, Confirmed, In progress, Completed, No-show, Cancelled', 'Corporate patients tagged at booking for billing later'],
    benefit: 'Fewer phone calls, fewer double bookings, and a record of where every patient came from.' },
  { id: 'queue', icon: 'queue', name: 'Queue & OPD', screen: 'queue', title: 'A digital token for every patient in the room.',
    text: 'Patients check in at the front desk or a self-service kiosk and receive a token. The waiting room sees the queue on a TV; the patient sees it on their phone.',
    bullets: ['Waiting-room display shows the current token for each doctor', 'WhatsApp queue link with live position', 'Call Next from the doctor\'s screen', 'Consultation start time recorded for wait-time reporting'],
    benefit: 'Patients can step out and return on time, and the front desk stops answering "how much longer?".' },
  { id: 'consultation', icon: 'mic', name: 'Consultation & EMR', screen: 'emr', title: 'Notes from the conversation, not from the keyboard.',
    text: 'Voice recording is converted to text notes. Vitals are entered once and saved to the patient record alongside medicines, tests and the prescription.',
    bullets: ['Start Recording captures the visit; speech-to-text produces the notes', 'BP, pulse, temperature, SpO2, respiratory rate, height, weight and calculated BMI', 'Full history on the patient record'],
    benefit: 'The doctor looks at the patient, not the screen.', href: '/for-doctors', cta: 'Walk through a consultation' },
  { id: 'prescription', icon: 'rx', name: 'Prescription', screen: 'prescription', title: 'A signed PDF, on the clinic letterhead.',
    text: 'Medicines come from the master database with form, strength, frequency, duration and instructions. Medicine Packs add a whole set in one click.',
    bullets: ['Auto-suggest from the master medicine database', 'Medicine Packs configured by the admin', 'Digital signature and QR verification code on every PDF', 'Delivered on WhatsApp and available in the patient portal'],
    benefit: 'Legible, verifiable and already in the patient\'s hands.' },
  { id: 'diagnostics', icon: 'clock', name: 'Diagnostics', screen: 'diagnostics', title: 'Order a panel, not a list.',
    text: 'The master test catalogue covers pathology and imaging. Test Panels group related tests so a workup is ordered in one click.',
    bullets: ['Central catalogue of lab tests and imaging', 'Panels such as a diabetes panel or pre-surgery workup', 'Ordered tests appear on the prescription message to the patient', 'A DIAG- series invoice is generated for the tests'],
    benefit: 'Nothing is forgotten from a standard workup, and the bill is ready.' },
  { id: 'surgery', icon: 'heart', name: 'Surgery Counselling', screen: 'surgery', title: 'Every surgical recommendation becomes a case.',
    text: 'The doctor ticks Surgery Suggested on the prescription. PyMedic creates a counselling case and assigns it to the clinic\'s counsellor.',
    bullets: ['Risks discussion recorded', 'Package options: room, surgeon, anaesthesia, tests and the out-of-pocket total', 'Insurance pre-authorisation tracked: Applied, Approved, Rejected', 'Patient decision: Proceed, Considering or Declined'],
    benefit: 'No recommendation leaves the building without an owner.' },
  { id: 'pyzap', icon: 'chat', name: 'WhatsApp', screen: 'whatsapp', title: 'The clinic\'s WhatsApp, inside PyMedic.',
    text: 'PyMedic sends automated confirmations, prescriptions and reminders through the WhatsApp Business API using pre-approved templates, and gives staff an inbox for replies.',
    bullets: ['Templates: health checkup promotion, appointment confirmed, prescription delivered, follow-up reminder', 'Follow-up sequences on Day 3, 7 and 14', 'Two-way chat from the PyMedic inbox, not personal phones', 'Number selection: doctor\'s number, then clinic number, then platform number', 'Credentials encrypted with AES-256'],
    benefit: 'Every message has a sender the clinic controls and a record the clinic keeps.' },
  { id: 'billing', icon: 'bill', name: 'Billing', screen: 'billing', title: 'Three invoice series, generated as care is delivered.',
    text: 'Consultation, diagnostic and pharmacy charges each get their own numbered series, so accounting, GST filing and audits need no manual sorting.',
    bullets: ['CONS- for consultations, DIAG- for tests and imaging, PHAR- for pharmacy', 'Discount coupons: flat or percentage, with a cap, a minimum bill and service restrictions', 'Online payment for patients'],
    benefit: 'The bill exists the moment the service does.' },
  { id: 'corporate', icon: 'build', name: 'Corporate B2B', screen: 'corporate', title: 'Company-paid patients on a running account.',
    text: 'Corporate partners are set up with agreed discounts, a monthly credit limit and a point of contact. Their employees\' bills go to the company.',
    bullets: ['Patient marked as corporate at booking or walk-in', 'Invoice billed to the company; patient pays nothing or a co-pay', 'Consolidated invoice at month end', 'Admin alerted as the credit limit approaches'],
    benefit: 'Corporate tie-ups without a separate spreadsheet.' },
  { id: 'leadflow', icon: 'funnel', name: 'Lead management', screen: 'leadflow', title: 'Enquiries become leads. Leads become patients.',
    text: 'PyMedic gives the marketing and business-development team a pipeline for enquiries from the website, WhatsApp, phone and walk-ins.',
    bullets: ['Stages: New, Contacted, Interested, Negotiation, Converted or Lost', 'Every call, email, message and meeting logged as a touchpoint', 'Converted leads flow into the patient database without re-entry', 'Corporate partnership leads tracked in the same pipeline'],
    benefit: 'The team that brings patients in works on the same platform as the team that treats them.' },
  { id: 'multi-location', icon: 'branch', name: 'Multi-location architecture', screen: 'tenancy', title: 'Many clinics, one platform, separate data.',
    text: 'PyMedic is multi-tenant. The medicine database, test catalogue, WhatsApp gateway and payments are shared; everything about a clinic is its own.',
    bullets: ['Each clinic\'s patients, doctors, slots, invoices, WhatsApp credentials, partners and coupons are isolated', 'Admins manage several branches; owners see all of them on one dashboard', 'Each clinic or doctor can use their own WhatsApp number'],
    benefit: 'Grow to a second branch without a second system.' },
];

/* ------------------------------------------------------------ FOR PATIENTS */

export const PATIENTS_PAGE = {
  kicker: 'For patients',
  h1: 'A visit that keeps patients informed, from booking to follow-up.',
  lead: 'Patients of a PyMedic clinic book online, know their place in the queue, receive their prescription on WhatsApp and get reminded about what comes next.',
  leadAccent: 'There is no app to install.',
  primary: { href: '/demo-video', label: 'Watch the Demo' },
  secondary: { href: '/book-demo', label: 'Book a Demo' },
  flow: [
    { icon: 'cal', title: 'Book', sub: 'Online' },
    { icon: 'queue', title: 'Get token', sub: 'Instantly' },
    { icon: 'clock', title: 'Check queue', sub: 'Live updates' },
    { icon: 'steth', title: 'Consult', sub: 'Your doctor' },
    { icon: 'rx', title: 'Get prescription', sub: 'On WhatsApp' },
    { icon: 'bell', title: 'Stay updated', sub: 'Follow-up reminders' },
  ],
  badges: [
    { icon: 'globe', title: 'No app required' },
    { icon: 'chat', title: 'WhatsApp updates' },
    { icon: 'lock', title: 'Secure & private' },
  ],
  heroPhoto: { src: '/photos/patient-dashboard.jpg', alt: 'PyMedic patient portal dashboard showing upcoming and completed appointments, total spent, a booked appointment with the doctor, date, time and location, and quick actions to find a doctor or view appointments' },
  journey: [
    ['Find', 'Browse doctors by specialisation, location and availability on the clinic\'s booking page.'],
    ['Book', 'Choose a doctor, a date and a slot, in person or by video consultation.'],
    ['Confirm', 'A WhatsApp message with the doctor, time, token number and a queue link.'],
    ['Check in', 'At the front desk or the self-service kiosk. The token is activated.'],
    ['Track the queue', 'The waiting-room screen and the phone show the live position and estimated wait.'],
    ['Consult', 'The doctor records the visit by voice and spends the time on the patient.'],
    ['Receive the prescription', 'A PDF on WhatsApp with the medicines, tests and the follow-up date. Also in the patient portal.'],
    ['Pay', 'Consultation, test and pharmacy bills, payable online or covered by an employer.'],
    ['Follow up', 'Reminders on Day 3, 7 and 14, with a one-tap link to book the next visit.'],
  ],
  // One photo per journey step, same order; all cropped to 800x1200 (2:3) so they fill the frame exactly.
  journeyImages: [
    { src: '/photos/step-1.jpg', alt: 'A patient on her phone browsing a list of doctors' },
    { src: '/photos/step-2.jpg', alt: 'Hands booking an appointment slot in a phone app' },
    { src: '/photos/step-3.jpg', alt: 'A patient reading a confirmation message on her phone' },
    { src: '/photos/step-4.jpg', alt: 'A clinic reception desk where patients check in' },
    { src: '/photos/step-5.jpg', alt: 'Patients waiting in a hospital corridor for their turn' },
    { src: '/photos/step-6.jpg', alt: 'A doctor with a tablet talking with a patient during a consultation' },
    { src: '/photos/step-7.jpg', alt: 'A pharmacist explaining prescribed medicine to a patient' },
    { src: '/photos/step-8.jpg', alt: 'A patient paying the bill with a phone at a card reader' },
    { src: '/photos/step-9.jpg', alt: 'A patient taking tablets from a weekly pill organiser after a reminder' },
  ],
  highlights: {
    kicker: 'What patients notice',
    title: 'Fewer questions at the desk.',
    accent: 'More answers on the phone.',
    items: [
      { icon: 'cal', title: 'Easier booking', text: 'Doctor, date and slot in a few taps, with the booking source recorded for the clinic.' },
      { icon: 'clock', title: 'Queue visibility', text: '"You are #3, about 9 minutes." Patients can step out and come back on time.' },
      { icon: 'chat', title: 'Communication on WhatsApp', text: 'Confirmations, prescriptions and replies come from the clinic\'s number, not a personal one.' },
      { icon: 'rx', title: 'Digital prescription', text: 'A legible, signed PDF with a QR code, kept in the chat and in the portal.' },
      { icon: 'bell', title: 'Follow-up reminders', text: 'Medicines, tests and the next appointment, remembered by the clinic.' },
    ],
  },
  phone: { kicker: 'On the patient\'s phone', title: 'What one visit looks like', accent: 'in the chat.' },
  next: { href: '/demo-video', label: 'Watch the full visit in the demo video' },
};

/* ---------------------------------------------------------- FOR YOUR TEAM */

export const TEAM_PAGE = {
  kicker: 'For admin team',
  h1: 'Every role sees the part of the visit it owns.',
  lead: 'PyMedic is role-based. Hospital admins, doctors, front-desk coordinators and business teams each get their own view of the same connected record.',
  primary: { href: '/book-demo', label: 'Book a Demo' },
  secondary: { href: '/features', label: 'Browse all features' },
  roles: [
    { id: 'admin', icon: 'build', title: 'Hospital admins', sub: 'Clinic operations managers and owners', screen: 'billing',
      lead: 'Set the clinic up once, then watch it run.',
      items: ['Clinic profile, working hours and branches', 'Doctors, their weekly availability and slot lengths, including video consultations', 'Medicine Packs and Test Panels for your doctors', 'Corporate partners with discounts, credit limits and monthly settlement', 'Discount coupons', 'Revenue, outstanding payments and corporate receivables'] },
    { id: 'doctors', icon: 'steth', title: 'Doctors', sub: 'Consultants and visiting physicians', screen: 'emr', featured: true,
      lead: 'The whole consultation on one screen.',
      items: ['Today\'s list with slot, source and visit type', 'Call Next, with the token shown in the waiting room', 'Voice-recorded notes and vitals with BMI', 'Medicine search, packs and test panels', 'Surgery Suggested, which hands the case to your counsellor', 'WhatsApp replies from the PyMedic inbox'] },
    { id: 'frontdesk', icon: 'desk', title: 'Front desk & patient coordinators', sub: 'Reception, kiosk and surgery counsellors', screen: 'surgery',
      lead: 'A queue that runs itself, and cases that arrive assigned.',
      items: ['Walk-in registration with the next available slot', 'Token kiosk and check-in', 'Corporate patient tagging at the desk', 'Counselling cases created by the doctor\'s tick', 'Risks, package costs and the patient\'s decision recorded', 'Insurance pre-authorisation status'] },
    { id: 'business', icon: 'funnel', title: 'Business & marketing teams', sub: 'Growth, partnerships and campaigns', screen: 'leadflow',
      lead: 'Enquiries, campaigns and partners on the same platform as the clinic.',
      items: ['Health checkup promotions sent on WhatsApp', 'Leads from website, WhatsApp, phone and walk-ins', 'Pipeline stages from New to Converted', 'Touchpoints logged for every interaction', 'Converted leads become patients without re-entry'] },
  ],
  groups: {
    kicker: 'Multi-branch groups',
    title: 'All branches on one platform,',
    accent: 'each with its own data.',
    text: 'Admins manage every branch, the owner sees them from one dashboard, and each clinic keeps its own patients, invoices and WhatsApp number.',
    href: '/features#multi-location', cta: 'How multi-location works',
  },
};

/* --------------------------------------------------------------- DEMO VIDEO */

export const DEMO_PAGE = {
  kicker: 'Demo video',
  h1: 'See PyMedic in action.',
  lead: 'One patient, one visit, every module. The demo follows a booking through check-in, the queue, the consultation, the prescription on WhatsApp, counselling, billing and the follow-up reminders.',
  covers: {
    kicker: 'What the demo shows',
    title: 'Eight chapters,',
    accent: 'one connected visit.',
    items: [
      ['Booking', 'A patient picks Dr. Sharma, Tuesday, 10:40 AM from the slots PyMedic generated.'],
      ['Confirmation', 'The WhatsApp message with token #6 and the queue link.'],
      ['Check-in & queue', 'The token on the waiting-room TV and the position on the phone.'],
      ['Consultation', 'Call Next, voice recording, vitals and notes.'],
      ['Prescription on WhatsApp', 'A medicine pack, a test panel and the signed PDF, delivered.'],
      ['Counselling', 'A Surgery Suggested tick becomes a case with a package and pre-authorisation.'],
      ['Billing', 'CONS- and DIAG- invoices, billed to a corporate partner.'],
      ['Follow-up', 'Day 3 and Day 7 reminders, and the follow-up booking.'],
    ],
  },
  live: { title: 'Prefer a live walkthrough with your own OPD in mind?', text: 'A demo call covers your doctors, branches and current tools, then walks through a consultation end to end.', href: '/book-demo', label: 'Book a Demo' },
};

/* ---------------------------------------------------------------------- FAQ */

export const FAQ_PAGE = {
  kicker: 'FAQ',
  h1: 'Questions clinics and hospitals ask before choosing PyMedic.',
  lead: 'Short answers based on how the product works today. For anything not covered here, ask on a demo call.',
};

export const FAQ_GROUPS = [
  { title: 'About PyMedic', items: [
    { id: 'what', q: 'What is PyMedic?', a: 'PyMedic is a hospital and clinic practice management system from VeriRight Management Solutions Pvt. Ltd. It handles appointments, the OPD token queue, consultation notes and EMR, digital prescriptions, surgery counselling, WhatsApp patient engagement through billing with corporate accounts, and enquiry tracking through Lead management, on one connected platform.' },
    { id: 'who', q: 'Who can use PyMedic?', a: 'Individual doctors, clinics, multi-speciality hospitals and multi-branch groups. Inside an organisation, hospital admins, doctors, front-desk staff and counsellors each have their own role-based view, and patients interact through the booking page and WhatsApp.' },
    { id: 'clinics', q: 'Is PyMedic suitable for a single clinic?', a: 'Yes. A clinic sets up its profile, doctors and hours, connects a WhatsApp number and starts booking. The queue, consultation, prescription, billing and follow-up modules work the same way at one branch as at many.' },
    { id: 'hospitals', q: 'Is PyMedic suitable for hospitals?', a: 'Yes. Hospitals use the OPD queue across several doctors and rooms, the surgery counselling desk with insurance pre-authorisation, three separate invoice series for GST and audit, corporate B2B accounts, and multi-branch management from one admin view.' },
  ] },
  { title: 'Appointments and the OPD queue', items: [
    { id: 'appointments', q: 'How does PyMedic manage appointments?', a: "The admin sets each doctor's weekly availability and slot length (15 to 60 minutes). PyMedic generates bookable slots, removes them on holidays, and accepts bookings online, at the front desk for walk-ins, by referral and as follow-ups. Each appointment moves through Booked, Confirmed, In progress and Completed, or No-show and Cancelled." },
    { id: 'queue', q: 'How does PyMedic manage OPD queues?', a: 'Each checked-in patient gets a digital token, issued at the front desk or a self-service kiosk. A waiting-room display shows the current token for each doctor. The doctor presses Call Next to bring the next patient in, which also records the consultation start time.' },
    { id: 'track', q: 'Can patients track their queue position?', a: 'Yes. The WhatsApp confirmation includes a link that shows their live position and estimated wait, so they can step out of the waiting room and return in time.' },
  ] },
  { title: 'Consultation and prescriptions', items: [
    { id: 'voice', q: 'Does the doctor have to type during the consultation?', a: 'No. The doctor presses Start Recording and PyMedic converts the conversation into text notes using speech-to-text. Vitals are entered in the same screen and BMI is calculated.' },
    { id: 'prescriptions', q: 'How does PyMedic support digital prescriptions?', a: 'Medicines are picked from the master database, individually or as a Medicine Pack, and tests individually or as a Test Panel. On Complete, PyMedic produces a PDF on the clinic letterhead with the doctor\'s digital signature and a QR verification code, sends it to the patient on WhatsApp and stores it in the patient portal.' },
    { id: 'surgery', q: 'What happens when a doctor recommends surgery?', a: 'A Surgery Suggested tick on the prescription is enough. PyMedic creates a counselling case for the front-desk counsellor, who records the risks discussion, shows package costs, tracks insurance pre-authorisation and records whether the patient will proceed, is considering, or has declined.' },
  ] },
  { title: 'WhatsApp', items: [
    { id: 'pyzap', q: 'How does WhatsApp messaging work in PyMedic?', a: 'WhatsApp is built into PyMedic. It sends automated confirmations, prescription PDFs and follow-up reminders through the WhatsApp Business API using pre-approved message templates, and it gives doctors and staff an inbox for two-way chat with patients.' },
    { id: 'number', q: 'Whose WhatsApp number do patients see?', a: "The doctor's own number if one is configured, otherwise the clinic's official number, otherwise the platform's default number. Each number's WhatsApp credentials are held under AES-256 encryption and are never visible to another clinic." },
    { id: 'app', q: 'Do patients need to install an app?', a: 'No. Confirmations, queue links, prescriptions and reminders arrive on WhatsApp, and the prescription is also available in the web patient portal.' },
  ] },
  { title: 'Billing and corporate healthcare', items: [
    { id: 'billing', q: 'How does PyMedic handle billing?', a: 'Invoices are generated as services are delivered, in three series: CONS- for consultations, DIAG- for tests and imaging, PHAR- for pharmacy. Discount coupons can be flat or percentage with caps, minimum bill and service restrictions, and patients can pay online.' },
    { id: 'corporate', q: 'How does PyMedic support corporate healthcare?', a: "A corporate partner is set up with agreed discounts, a monthly credit limit and a contact person. Employees are tagged as corporate patients, their invoices are billed to the company, and a consolidated invoice is raised at month end. PyMedic alerts the admin as the credit limit approaches." },
  ] },
  { title: 'Platform', items: [
    { id: 'multi', q: 'Can PyMedic support multiple clinics or branches?', a: "Yes. PyMedic is multi-tenant: the medicine database, test catalogue, WhatsApp gateway and payments are shared, while each clinic's patients, doctors, slots, invoices, WhatsApp credentials, partners and coupons are isolated. Admins manage several branches and owners see them on one dashboard." },
    { id: 'leadflow', q: 'How does PyMedic track enquiries and leads?', a: 'PyMedic has an enquiry and lead pipeline inside PyMedic for marketing and business-development teams. Enquiries from the website, WhatsApp, phone and walk-ins become leads, move through New, Contacted, Interested, Negotiation and Converted or Lost, and converted leads become patients or corporate partners without re-entry.' },
    { id: 'data', q: 'Who can see our clinic\'s data?', a: 'Only your organisation. Clinic data is isolated from every other clinic on the platform, access inside the clinic is by role, and WhatsApp credentials are encrypted.' },
  ] },
];

/** FAQ ids shown as a preview on the home page. */
export const FAQ_PREVIEW_IDS = ['what', 'who', 'queue', 'multi'];

/* ---------------------------------------------------------------- BOOK DEMO */

export const DEMO = {
  kicker: 'Book a demo',
  title: 'See PyMedic with your own OPD in mind.',
  lead: "Tell us a little about your practice. We'll show you the parts that matter to you.",
  expect: [
    'A short call to understand your doctors, branches and current tools.',
    'A live walkthrough of a consultation, from Call Next to WhatsApp.',
    'Answers on setup, WhatsApp numbers and moving your data.',
  ],
  orgTypes: ['Individual doctor', 'Clinic', 'Multi-speciality hospital', 'Multi-branch group', 'Diagnostic centre', 'Other'],
  sizes: ['1', '2–5', '6–20', '21–50', '50+'],
};

export const START_STEPS = [
  { title: 'We set up your clinic', text: 'Your clinic gets its own space on PyMedic, with your name, address, hours and branches.' },
  { title: 'Add doctors and hours', text: "Enter each doctor's weekly availability. Bookable slots are created automatically." },
  { title: 'Connect WhatsApp and go live', text: "Use your clinic's or doctors' numbers, or start on the platform number." },
];

/* ------------------------------------------------------------------- FOOTER */

export const FOOTER = [
  { title: 'Product', links: [['/for-doctors', 'For doctors'], ['/features', 'Features'], ['/features#pyzap', 'WhatsApp engagement'], ['/features#billing', 'Billing & corporate'], ['/features#leadflow', 'Lead management'], ['/features#multi-location', 'Multi-location']] },
  { title: 'Company', links: [['/for-admin-team', 'For admin team'], ['/for-patients', 'For patients'], ['/demo-video', 'Demo video'], ['/faq', 'FAQ'], ['/book-demo', 'Book a demo'], ['/book-demo', 'Contact']] },
];

export const LEGAL = [['#privacy', 'Privacy Policy'], ['#terms', 'Terms'], ['#cookies', 'Cookie Policy']];
