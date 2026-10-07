// Mock product screens (sample data). Replace with real screenshots via <ProductScreenshot src="..."/>.
import { AppBrand, MarkTile } from '../Brand.jsx';
import Icon from '../Icon.jsx';
import { useTick } from '../../hooks.js';

export const Wave = ({ bars = [12, 24, 18, 28, 14, 22, 10, 20] }) => (
  <div className="wave" aria-hidden="true">
    {bars.map((h, i) => <i key={i} style={{ height: h, animationDelay: `${i * 0.1}s` }} />)}
  </div>
);

const Row = ({ tok, now, name, sub, pill, tone = 'p-mute', mono }) => (
  <div className="row in">
    <span className={`tok${now ? ' now' : ''}`}>{tok}</span>
    <div className="who"><b className={mono ? 'num' : undefined}>{name}</b><small>{sub}</small></div>
    {typeof pill === 'string' ? <span className={`pill ${tone}`}>{pill}</span> : pill}
  </div>
);

const Med = ({ name, dose, sub }) => (
  <div className="med"><b>{name}</b><span>{dose}</span><small>{sub}</small></div>
);

const Vitals = ({ items }) => (
  <div className="vit">{items.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
);

const TV_UP = ['#7 · #8 · #9 · #15 · #4', '#8 · #9 · #10 · #15 · #4', '#9 · #10 · #11 · #16 · #5', '#10 · #11 · #12 · #16 · #5'];
const Tv = ({ live, compact }) => {
  const t = useTick(4, 2600);
  const fixed = live !== undefined;
  const a = fixed ? live : `#${6 + t}`;
  return (
    <div className="tv" style={compact ? { padding: 12 } : undefined}>
      {!compact && <div className="tv-head"><AppBrand light /><span>City Care Clinic · OPD</span><span className="live"><i aria-hidden="true" />Live</span></div>}
      <div className="tv-grid">
        <div className="tv-cell live"><small>Dr. Sharma · Room 2</small><b key={a} className="pop">{a}</b></div>
        <div className="tv-cell"><small>Dr. Iyer · Room 3</small><b key={t >> 1} className="pop">#{14 + (fixed ? 0 : t >> 1)}</b></div>
        <div className="tv-cell"><small>Dr. Rao · Room 5</small><b key={t === 3 ? 1 : 0} className="pop">#{3 + (fixed ? 0 : (t === 3 ? 1 : 0))}</b></div>
      </div>
      {!compact && <div style={{ fontSize: 13, color: '#9FB6E0' }}>Up next: <b key={t} className="pop" style={{ color: '#fff' }}>{TV_UP[t]}</b></div>}
    </div>
  );
};

/* ---------- Multi-tenant diagram: platform layer + isolated clinic workspaces ---------- */
export function TenancyDiagram({ clinics = ['Your clinic', 'Clinic B', 'Clinic C'] }) {
  return (
    <div className="iso" aria-label="Each clinic's data is kept separate on the shared PyMedic platform">
      <div className="plat">
        <MarkTile />
        <div><b>PyMedic platform</b><small>Shared: medicine database, test catalogue, WhatsApp gateway, payments</small></div>
      </div>
      <div className="cl">
        {clinics.map((c) => (
          <div key={c}><span className="lock"><Icon name="lock" size={13} />Private</span><b>{c}</b><small>Patients, doctors, invoices, WhatsApp</small></div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Hero: doctor's Today screen (runs on the token counter from Hero.jsx) ---------- */
const QUEUE = [
  ['Priya R.', 'Follow-up'], ['Arjun M.', 'Booked online'], ['Fatima K.', 'Walk-in'], ['Ravi S.', 'Referral'],
  ['Meera N.', 'Booked online'], ['Imran A.', 'Walk-in'], ['Sunita P.', 'Follow-up'],
];
const STATUS = [['With you', 'p-blue'], ['Waiting', 'p-mute'], ['Waiting', 'p-mute'], ['On the way', 'p-warn']];

export function HeroDashboard({ token }) {
  const i = Math.max(0, Math.min(token - 6, QUEUE.length - 4));
  const rows = QUEUE.slice(i, i + 4);
  const stats = [[18, 'Booked'], [11 + i, 'Checked in'], [4, 'Walk-ins'], [6 + i, 'Rx sent']];
  return (
    <div className="app">
      <div className="app-side" aria-hidden="true">
        <AppBrand />
        {['My OPD', 'Appointments', 'Prescriptions', 'WhatsApp', 'Counselling', 'Billing'].map((s, i) => (
          <span key={s} className={i === 0 ? 'on' : undefined}>{s}</span>
        ))}
      </div>
      <div className="app-main">
        <div className="app-top">
          <div><h4>Good morning, Dr. Sharma</h4><small>OPD 9:00 AM – 1:00 PM · 20-minute slots</small></div>
          <span className="pill p-ok"><i className="dot" />Clinic open</span>
        </div>
        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l} className="card stat"><b key={n} className="pop">{n}</b><small>{l}</small></div>
          ))}
        </div>
        <div className="split">
          <div className="card">
            <h5>Waiting now</h5>
            {rows.map(([name, sub], r) => (
              <Row key={name} tok={`#${token + r}`} now={r === 0} name={name} sub={sub} pill={STATUS[r][0]} tone={STATUS[r][1]} />
            ))}
          </div>
          <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
            <div className="serving">
              <div><small>Now serving</small><span key={token} className="big pop">#{token}</span></div>
              <button key={`b${token}`} className="callnext flash" type="button" tabIndex={-1}>Call Next</button>
            </div>
            <div className="card"><h5>Voice note</h5><Wave /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Consultation walkthrough stages ---------- */
export const CONSULT_SCREENS = [
  () => (
    <>
      <div className="serving">
        <div><small>Now serving</small><span className="big">#7</span></div>
        <button className="callnext" type="button" tabIndex={-1}>Call Next ✓</button>
      </div>
      <div className="card"><h5>Waiting-room screen</h5><Tv live="#7" compact /></div>
      <div className="card">
        <Row tok="#7" now name="Arjun M." sub="Booked online · first visit" pill="Called in" tone="p-blue" />
        <Row tok="#8" name="Fatima K." sub="Walk-in" pill="Next" />
      </div>
    </>
  ),
  () => (
    <>
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span className="check"><span className="pill p-warn" style={{ fontSize: 11 }}>● REC</span> Recording consultation</span>
        <Wave bars={[12, 26, 18, 28, 14, 22]} />
      </div>
      <div className="note"><b>Notes (from voice):</b> Fever for <mark>3 days</mark>, body ache, mild sore throat. No breathlessness. Advised rest and fluids.</div>
      <Vitals items={[['BP', '122/80'], ['Temp', '100.8°F'], ['SpO2', '98%'], ['BMI', '23.4']]} />
    </>
  ),
  () => (
    <>
      <div className="search">Viral fe<span className="caret" /><span className="pill p-blue" style={{ marginLeft: 'auto' }}>Medicine Pack</span></div>
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <b>Viral Fever Pack applied</b><span className="pill p-ok">3 added in 1 click</span>
      </div>
      <div className="card">
        <Med name="Paracetamol 500 mg" dose="1-0-1" sub="Tablet · 5 days · after food" />
        <Med name="Cetirizine 10 mg" dose="0-0-1" sub="Tablet · 5 days" />
        <Med name="Multivitamin" dose="1-0-0" sub="Tablet · 10 days" />
      </div>
    </>
  ),
  () => (
    <>
      <div className="rx">
        <div className="rx-head"><AppBrand /><small style={{ color: 'var(--muted)' }}>City Care Clinic · Dr. Sharma</small></div>
        <div className="rx-body">
          <b>Arjun M. · 32 M</b>
          <span>Paracetamol 500 mg · 1-0-1 · 5 days</span>
          <span>Cetirizine 10 mg · 0-0-1 · 5 days</span>
          <span>Multivitamin · 1-0-0 · 10 days</span>
        </div>
        <div className="rx-foot">
          <span><i style={{ fontFamily: 'cursive', color: 'var(--navy)' }}>Dr. Sharma</i> · digitally signed</span>
          <span className="qr" role="img" aria-label="QR verification code" />
        </div>
      </div>
      <div className="sent">
        <span className="pill p-ok">✓ Sent to WhatsApp</span>
        <span className="pill p-blue">Bill CONS-0148 created</span>
        <span className="pill p-mute">Follow-up reminders set</span>
      </div>
    </>
  ),
];

/* ---------- Feature screens (keyed by FEATURES[].id). Each one runs a small loop so it reads as a live product. ---------- */
const Meter = ({ pct, label }) => (
  <>
    <div className="meter"><i style={{ width: `${pct}%` }} /></div>
    <small key={label} className="pop" style={{ color: pct >= 75 ? 'var(--warn)' : 'var(--muted)', display: 'block' }}>{label}</small>
  </>
);

function AppointmentsScreen() {
  const t = useTick(4, 2200);
  const booked = [['9:00', 'x'], ['9:20', t >= 2 ? 'x' : ''], ['9:40', 'x'], ['10:00', t >= 3 ? 'x' : ''], ['10:20', 'x'], ['10:40', t >= 1 ? 'x' : 'sel'], ['11:00', t >= 1 ? 'sel' : ''], ['11:20', '']];
  const via = [['Online', 0], ['Walk-in', 1], ['Referral', 2], ['Follow-up', 3]];
  return (
    <div className="app-main">
      <div className="card"><h5>Weekly hours</h5>Mon–Fri · 9:00 AM – 1:00 PM · 20 min</div>
      <div className="card"><h5>Tuesday slots</h5>
        <div className="slots">{booked.map(([time, c]) => <span key={time} className={c || undefined}>{time}</span>)}</div>
      </div>
      <div className="card"><h5>Booked via</h5>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {via.map(([l, i]) => <span key={l} className={`pill ${i === t ? 'p-blue' : 'p-mute'}`}>{l}{i === t && ' · booking'}</span>)}
        </div>
      </div>
    </div>
  );
}

const MEDS = [['Paracetamol 500 mg', '1-0-1', 'Tablet · 5 days · after food'], ['Cetirizine 10 mg', '0-0-1', 'Tablet · 5 days'], ['Multivitamin', '1-0-0', 'Tablet · 10 days']];
function EmrScreen() {
  const t = useTick(4, 1800);
  return (
    <div className="app-main">
      <Vitals items={[['BP', '130/85'], ['Pulse', t % 2 ? '78' : '80'], ['SpO2', '98%'], ['BMI', '24.1']]} />
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <span><b>Medicine Pack:</b> Viral Fever</span><span key={t} className="pill p-blue pop">{Math.min(t, 3)} of 3 added</span>
      </div>
      <div className="card">{MEDS.slice(0, Math.max(1, Math.min(t, 3))).map(([n, d, sub]) => <Med key={n} name={n} dose={d} sub={sub} />)}</div>
    </div>
  );
}

export const RX_MEERA = { doctor: 'Dr. Iyer', patient: 'Meera N. · 45 F · Token #12', lines: ['Amlodipine 5 mg · 1-0-0 · 30 days · morning', 'Metformin 500 mg · 1-0-1 · 30 days · after food', 'Atorvastatin 10 mg · 0-0-1 · 30 days · at night', 'Tests: Lipid profile · HbA1c · Follow-up: Mon 3 Nov'] };
export const RX_ARJUN = { doctor: 'Dr. Sharma', patient: 'Arjun M. · 32 M · Token #7', lines: ['Paracetamol 500 mg · 1-0-1 · 5 days · after food', 'Cetirizine 10 mg · 0-0-1 · 5 days', 'Multivitamin · 1-0-0 · 10 days', 'Tests: CBC · Follow-up: Tue 14 Oct'] };

export const RX_PRIYA = { doctor: 'Dr. Sharma', patient: 'Priya R. · 38 F · Token #9', lines: ['Pantoprazole 40 mg · 1-0-0 · 14 days · before breakfast', 'Ondansetron 4 mg · 1-0-1 · 5 days · if nausea', 'Tests: Ultrasound abdomen · LFT', 'Surgery suggested: laparoscopic cholecystectomy · Follow-up: Fri 24 Oct'],
  statuses: [[['p-mute', 'Completing…']], [['p-ok', '✓ Sent to WhatsApp']], [['p-ok', '✓ Sent to WhatsApp'], ['p-warn', 'Counselling case C-22 opened']], [['p-ok', '✓ Sent to WhatsApp'], ['p-warn', 'Counselling case C-22 opened'], ['p-blue', 'Invoice CONS-0152 created']]] };

const RX_STATUS = [[['p-mute', 'Generating PDF…']], [['p-ok', '✓ Sent to WhatsApp']], [['p-ok', '✓ Sent to WhatsApp'], ['p-blue', 'In patient portal']]];

export function PrescriptionScreen({ rx = RX_MEERA }) {
  const seq = rx.statuses || RX_STATUS;
  const t = useTick(seq.length, 2200);
  const status = seq[t];
  return (
    <div className="app-main">
      <div className="rx">
        <div className="rx-head"><AppBrand /><small style={{ color: 'var(--muted)' }}>City Care Clinic · {rx.doctor}</small></div>
        <div className="rx-body">
          <b>{rx.patient}</b>
          {rx.lines.map((l) => <span key={l}>{l}</span>)}
        </div>
        <div className="rx-foot">
          <span><i style={{ fontFamily: 'cursive', color: 'var(--navy)' }}>{rx.doctor}</i> · digitally signed</span>
          <span className="qr" role="img" aria-label="QR verification code" />
        </div>
      </div>
      <div className="sent">{status.map(([c, l]) => <span key={l} className={`pill ${c} pop`}>{l}</span>)}</div>
    </div>
  );
}

const TESTS = [['Complete blood count (CBC)', 'Fasting not required'], ['Blood sugar (fasting)', '12-hour fast'], ['Liver function test', ''], ['Kidney function test', '']];
function DiagnosticsScreen() {
  const t = useTick(5, 1600);
  const n = Math.min(t + 1, 4);
  return (
    <div className="app-main">
      <div className="search">Pre-surg<span className="caret" /><span className="pill p-blue" style={{ marginLeft: 'auto' }}>Test Panel</span></div>
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <b>Pre-Surgery Blood Workup applied</b><span key={n} className="pill p-ok pop">{n} tests added</span>
      </div>
      <div className="card">{TESTS.slice(0, n).map(([name, sub]) => <Med key={name} name={name} dose="Pathology" sub={sub} />)}</div>
      <div className="sent">
        <span className={`pill ${t === 4 ? 'p-ok' : 'p-blue'}`}>{t === 4 ? '✓ Invoice DIAG-0090 created' : 'Invoice DIAG-0090 pending'}</span>
        <span className="pill p-mute">Listed on WhatsApp message</span>
      </div>
    </div>
  );
}

function SurgeryScreen() {
  const t = useTick(4, 2400);
  const steps = [
    ['Risks explained', 'done', 'p-ok', 'Done'],
    ['Package shown · ₹45,000', 'done', 'p-ok', 'Done'],
    ['Insurance pre-authorisation', t >= 2 ? 'done' : 'cur', t >= 2 ? 'p-ok' : 'p-warn', t >= 2 ? 'Approved' : 'Applied'],
    ['Patient decision', t >= 3 ? 'done' : t >= 2 ? 'cur' : '', t >= 3 ? 'p-ok' : t >= 2 ? 'p-warn' : 'p-mute', t >= 3 ? 'Proceed' : 'Considering'],
  ];
  return (
    <div className="app-main">
      <div className="card"><h5>Priya R. · minor procedure</h5>
        <div className="steps-mini">
          {steps.map(([l, st, tone, pill]) => <div key={l}><i className={st || undefined} /><span>{l}</span><span key={pill} className={`pill ${tone} pop`}>{pill}</span></div>)}
        </div>
      </div>
      <div className="sent"><span className={`pill ${t >= 3 ? 'p-ok' : 'p-mute'}`}>{t >= 3 ? '✓ Surgery scheduled · Thu 16 Oct' : 'Awaiting decision'}</span></div>
    </div>
  );
}

const INBOX = [
  ['PR', 'Priya R.', 'Is the lipid test fasting?', 'New', 'p-blue'],
  ['AM', 'Arjun M.', 'Prescription delivered', 'Sent', 'p-ok'],
  ['+91', 'Unknown number', 'Do you do health checkups?', 'Add as patient', 'p-warn'],
  ['FK', 'Fatima K.', 'Thank you doctor 🙏', 'New', 'p-blue'],
];
function WhatsAppScreen() {
  const t = useTick(4, 2400);
  const rows = t === 0 ? INBOX.slice(0, 3) : [INBOX[3], ...INBOX.slice(0, 3)];
  const day = [['Day 3 sent', 'p-ok'], [t >= 2 ? 'Day 7 sent' : 'Day 7 scheduled', t >= 2 ? 'p-ok' : 'p-blue'], [t >= 3 ? 'Day 14 scheduled' : 'Day 14', t >= 3 ? 'p-blue' : 'p-mute']];
  return (
    <div className="app-main">
      <div className="card">{rows.map(([tok, name, sub, pill, tone]) => <Row key={name} tok={tok} name={name} sub={sub} pill={pill} tone={tone} />)}</div>
      <div className="card"><h5>Follow-up sequence</h5>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{day.map(([l, c]) => <span key={l} className={`pill ${c} pop`}>{l}</span>)}</div>
      </div>
    </div>
  );
}

const INVOICES = [['CONS-0147', 'Consultation · ₹500'], ['DIAG-0089', 'Lipid profile · ₹800'], ['PHAR-0312', 'Pharmacy · ₹420']];
function BillingScreen() {
  const t = useTick(4, 2000);
  const pct = [62, 70, 78, 78][t];
  return (
    <div className="app-main">
      <div className="streams">
        {INVOICES.map(([n, sub], i) => (
          <div key={n} className={`stream${i > t ? ' pending' : ''}`}><b>{i > t ? 'Pending…' : n}</b><small>{sub}</small>{i <= t && <span key={n} className="pill p-ok pop">Generated</span>}</div>
        ))}
      </div>
      <div className="card"><h5>Corporate partner · monthly credit</h5>
        <Meter pct={pct} label={`${pct}% used${pct >= 75 ? ' · admin alerted' : ''}`} />
      </div>
    </div>
  );
}

const CORP_ROWS = [
  ['CONS', 'Priya R. · consultation', 'CONS-0147 · ₹500', 'Company', 'p-blue'],
  ['DIAG', 'Priya R. · lipid profile', 'DIAG-0089 · ₹800', 'Company', 'p-blue'],
  ['CONS', 'Karan V. · consultation', 'CONS-0151 · ₹500 · co-pay ₹100', 'Co-pay', 'p-warn'],
];
function CorporateScreen() {
  const t = useTick(4, 2200);
  const used = [372000, 380000, 388000, 390000][t];
  const pct = Math.round(used / 5000);
  return (
    <div className="app-main">
      <div className="card">
        <h5>Partner</h5>
        <div className="app-top"><div><b>Nimbus Technologies · Bengaluru</b><br /><small>20% discount · SPOC: HR benefits team</small></div><span className="pill p-ok"><i className="dot" />Active</span></div>
      </div>
      <div className="card"><h5>Monthly credit · ₹5,00,000</h5>
        <Meter pct={pct} label={`₹${used.toLocaleString('en-IN')} used · settlement on 1 Nov${pct >= 75 ? ' · admin alerted at 75%' : ''}`} />
      </div>
      <div className="card">
        <h5>Billed to company this month</h5>
        {CORP_ROWS.slice(0, Math.min(t + 1, 3)).map(([tok, name, sub, pill, tone]) => <Row key={sub} tok={tok} name={name} sub={sub} pill={pill} tone={tone} />)}
      </div>
    </div>
  );
}

const STAGES = ['New', 'Contacted', 'Interested', 'Negotiation', 'Converted'];
function LeadFlowScreen() {
  const t = useTick(5, 2000);
  const base = [['Website form', 'WhatsApp'], ['Phone call'], ['Health checkup'], ['Corporate'], ['New patient']];
  return (
    <div className="app-main">
      <div className="pipe">
        {STAGES.map((h, i) => (
          <div key={h} className={i === t ? 'hot' : undefined}><h6>{h}</h6>
            {i === t && <span key={`m${t}`} className="mv">Walk-in · Meera N.</span>}
            {base[i].map((x) => <span key={x}>{x}</span>)}
          </div>
        ))}
      </div>
      <div className="sent"><span key={t} className={`pill ${t === 4 ? 'p-ok' : 'p-blue'} pop`}>{t === 4 ? '✓ Meera N. added to patients · no re-entry' : `Meera N. moved to ${STAGES[t]}`}</span></div>
    </div>
  );
}

export const FEATURE_SCREENS = {
  appointments: { title: 'Book · Dr. Sharma · Tuesday', body: AppointmentsScreen },
  queue: { title: 'Waiting room display', body: () => <div className="app-main"><Tv /></div> },
  emr: { title: 'Prescription · Priya R.', body: EmrScreen },
  prescription: { title: 'Prescription · Meera N. · PDF', body: PrescriptionScreen },
  diagnostics: { title: 'Tests · Priya R.', body: DiagnosticsScreen },
  surgery: { title: 'Counselling · Case C-21', body: SurgeryScreen },
  whatsapp: { title: 'WhatsApp inbox', body: WhatsAppScreen },
  billing: { title: 'Billing', body: BillingScreen },
  corporate: { title: 'Corporate partners · Nimbus Technologies', body: CorporateScreen },
  tenancy: { title: 'Platform · Workspaces', body: () => <div className="app-main"><TenancyDiagram /></div> },
  leadflow: { title: 'LeadFlow · Pipeline', body: LeadFlowScreen },
};

/* ---------- Consultation page: the ten-step workflow, played in order on one screen ---------- */
const WF_STEPS = ['Call Next', 'Record', 'Notes', 'Vitals', 'Medicines', 'Medicine pack', 'Tests', 'Prescription', 'Send', 'Next steps'];

export function WorkflowScreen() {
  const t = useTick(WF_STEPS.length, 2300);
  const panels = [
    () => (
      <>
        <div className="serving"><div><small>Now serving</small><span className="big pop">#7</span></div><button className="callnext flash" type="button" tabIndex={-1}>Call Next ✓</button></div>
        <div className="card"><Row tok="#7" now name="Arjun M." sub="Booked online · first visit" pill="In progress" tone="p-blue" /><Row tok="#8" name="Fatima K." sub="Walk-in" pill="Next" /></div>
      </>
    ),
    () => (
      <>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span className="check"><span className="pill p-warn" style={{ fontSize: 11 }}>● REC</span> Recording consultation</span><Wave bars={[12, 26, 18, 28, 14, 22]} />
        </div>
        <div className="note" style={{ color: 'var(--muted)' }}>Listening… the conversation is being captured.</div>
      </>
    ),
    () => (
      <>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}><b>Notes from voice</b><span className="pill p-ok pop">Converted to text</span></div>
        <div className="note"><b>Notes:</b> Fever for <mark>3 days</mark>, body ache, mild sore throat. No breathlessness. Advised rest and fluids.</div>
      </>
    ),
    () => (
      <>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}><b>Vitals</b><span className="pill p-blue pop">BMI calculated</span></div>
        <Vitals items={[['BP', '122/80'], ['Pulse', '84'], ['Temp', '100.8°F'], ['SpO2', '98%'], ['Resp', '18'], ['Height', '172 cm'], ['Weight', '69 kg'], ['BMI', '23.4']]} />
      </>
    ),
    () => (
      <>
        <div className="search">Parace<span className="caret" /><span className="pill p-mute" style={{ marginLeft: 'auto' }}>Master medicine database</span></div>
        <div className="card"><Med name="Paracetamol 500 mg" dose="1-0-1" sub="Tablet · 5 days · after food" /></div>
      </>
    ),
    () => (
      <>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}><b>Viral Fever Pack applied</b><span className="pill p-ok pop">3 added in 1 click</span></div>
        <div className="card">{MEDS.map(([n, d, sub]) => <Med key={n} name={n} dose={d} sub={sub} />)}</div>
      </>
    ),
    () => (
      <>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}><b>Test Panel · Pre-Surgery Blood Workup</b><span className="pill p-ok pop">4 tests added</span></div>
        <div className="card">{TESTS.map(([name, sub]) => <Med key={name} name={name} dose="Pathology" sub={sub} />)}</div>
      </>
    ),
    () => (
      <div className="rx">
        <div className="rx-head"><AppBrand /><small style={{ color: 'var(--muted)' }}>City Care Clinic · Dr. Sharma</small></div>
        <div className="rx-body"><b>Arjun M. · 32 M · Token #7</b><span>Paracetamol 500 mg · 1-0-1 · 5 days</span><span>Cetirizine 10 mg · 0-0-1 · 5 days</span><span>Tests: CBC, FBS, LFT, KFT · Follow-up: Tue 14 Oct</span></div>
        <div className="rx-foot"><span><i style={{ fontFamily: 'cursive', color: 'var(--navy)' }}>Dr. Sharma</i> · digitally signed</span><span className="qr" role="img" aria-label="QR verification code" /></div>
      </div>
    ),
    () => (
      <>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}><b>Prescription.pdf</b><span className="pill p-ok pop">✓ Sent to WhatsApp</span></div>
        <div className="sent"><span className="pill p-blue pop">Available in patient portal</span><span className="pill p-mute">Delivered 11:04</span></div>
      </>
    ),
    () => (
      <div className="card"><h5>Triggered automatically</h5>
        <div className="steps-mini">
          <div><i className="done" /><span>Invoice CONS-0148 created</span><span className="pill p-ok pop">Done</span></div>
          <div><i className="done" /><span>Counselling case opened</span><span className="pill p-ok pop">Assigned</span></div>
          <div><i className="cur" /><span>Follow-up reminders · Day 3, 7, 14</span><span className="pill p-warn pop">Scheduled</span></div>
        </div>
      </div>
    ),
  ];
  const Panel = panels[t];
  return (
    <div className="app wf">
      <ol className="wf-steps" aria-label="Workflow steps">
        {WF_STEPS.map((l, i) => <li key={l} className={i < t ? 'done' : i === t ? 'cur' : undefined}><i /><span>{l}</span></li>)}
      </ol>
      <div className="app-main">
        <div className="app-top"><div><h4>Consultation · Arjun M.</h4><small>Step {t + 1} of {WF_STEPS.length} · {WF_STEPS[t]}</small></div><span className="pill p-ok"><i className="dot" />In progress</span></div>
        <div key={t} className="fade" style={{ display: 'grid', gap: 12 }}><Panel /></div>
      </div>
    </div>
  );
}
