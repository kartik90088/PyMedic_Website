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

const TV_UP = [['#7', '#8', '#9', '#15', '#4'], ['#8', '#9', '#10', '#15', '#4'], ['#9', '#10', '#11', '#16', '#5'], ['#10', '#11', '#12', '#16', '#5']];
const TV_DOCS = [['Dr. Sharma', 'General medicine · Room 2'], ['Dr. Iyer', 'Orthopaedics · Room 3'], ['Dr. Rao', 'Paediatrics · Room 5']];
const Tv = ({ live, compact }) => {
  const t = useTick(4, 2600);
  const fixed = live !== undefined;
  const nums = [fixed ? live : `#${6 + t}`, `#${14 + (fixed ? 0 : t >> 1)}`, `#${3 + (fixed ? 0 : (t === 3 ? 1 : 0))}`];
  return (
    <div className={`tv${compact ? ' tv-compact' : ''}`}>
      {!compact && (
        <div className="tv-head">
          <span className="tv-brand"><AppBrand light /><span className="tv-sep" aria-hidden="true" />City Care Clinic · OPD</span>
          <span className="tv-livebadge"><i aria-hidden="true" />Live</span>
        </div>
      )}
      {!compact && <p className="tv-label">Now serving</p>}
      <div className="tv-grid">
        {TV_DOCS.map(([d, room], i) => (
          <div key={d} className={`tv-cell${i === 0 ? ' on' : ''}`}>
            <small>{d}</small>
            {!compact && <span className="tv-room">{room}</span>}
            <b key={nums[i]} className="pop">{nums[i]}</b>
            {!compact && i === 0 && <span className="tv-go">Please proceed</span>}
          </div>
        ))}
      </div>
      {!compact && (
        <div className="tv-next">
          <span>Up next</span>
          <div key={t} className="tv-chips">{TV_UP[t].map((n, i) => <i key={n} className="pop" style={{ animationDelay: `${i * 60}ms` }}>{n}</i>)}</div>
          <span className="tv-wait">Avg wait · {9 - t} min</span>
        </div>
      )}
    </div>
  );
};

/* ---------- Multi-tenant diagram: platform layer + isolated clinic workspaces ---------- */
export function TenancyDiagram({ clinics = ['Your clinic', 'Clinic B', 'Clinic C'] }) {
  const shared = [['rx', 'Medicine database'], ['clock', 'Test catalogue'], ['chat', 'WhatsApp gateway'], ['bill', 'Payments']];
  const own = [['desk', 'Patients'], ['steth', 'Doctors'], ['bill', 'Invoices'], ['chat', 'WhatsApp number']];
  return (
    <div className="iso" aria-label="Each clinic's data is kept separate on the shared PyMedic platform">
      <div className="plat">
        <div className="plat-top">
          <MarkTile />
          <div><b>PyMedic platform</b><small>Shared by every clinic</small></div>
        </div>
        <ul className="plat-shared">{shared.map(([ic, l]) => <li key={l}><Icon name={ic} size={15} />{l}</li>)}</ul>
      </div>
      <div className="iso-links" aria-hidden="true"><i /><i /><i /></div>
      <div className="cl">
        {clinics.map((c, i) => (
          <div key={c} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
            <span className="lock"><Icon name="lock" size={14} />Private</span>
            <b>{c}</b>
            <ul>{own.map(([ic, l]) => <li key={l}><Icon name={ic} size={14} />{l}</li>)}</ul>
          </div>
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
    <div className="meter-label" style={{ color: pct >= 75 ? 'var(--warn)' : 'var(--muted)' }}><span>{label}</span><b>{pct}%</b></div>
  </>
);

function AppointmentsScreen() {
  const t = useTick(4, 2200);
  const booked = [['9:00', 'x'], ['9:20', t >= 2 ? 'x' : ''], ['9:40', 'x'], ['10:00', t >= 3 ? 'x' : ''], ['10:20', 'x'], ['10:40', t >= 1 ? 'x' : 'sel'], ['11:00', t >= 1 ? 'sel' : ''], ['11:20', '']];
  const via = [['Online', 0], ['Walk-in', 1], ['Referral', 2], ['Follow-up', 3]];
  const recent = [
    ['#6', 'Priya R.', '10:40 · Online booking', 'Confirmed', 'p-ok'],
    ['#7', 'Arjun M.', '11:00 · Walk-in', t >= 1 ? 'Booked' : 'Holding', t >= 1 ? 'p-blue' : 'p-warn'],
    ['#8', 'Fatima K.', '11:20 · Referral · Dr. Iyer', 'Booked', 'p-blue'],
  ];
  const free = [4, 3, 2, 1][t];
  return (
    <div className="app-main">
      <div className="stats three">
        <div className="card stat"><b key={`b${t}`} className="pop">{14 + t}</b><small>Booked today</small></div>
        <div className="card stat"><b key={`f${t}`} className="pop">{free}</b><small>Free slots</small></div>
        <div className="card stat"><b>1</b><small>No-show</small></div>
      </div>
      <div className="card"><h5>Weekly hours</h5>Mon–Fri · 9:00 AM – 1:00 PM · 20 min</div>
      <div className="card"><h5>Tuesday slots</h5>
        <div className="slots">{booked.map(([time, c]) => <span key={time} className={c || undefined}>{time}</span>)}</div>
      </div>
      <div className="card"><h5>Latest bookings</h5>
        {recent.map(([tok, name, sub, pill, tone]) => <Row key={name} tok={tok} name={name} sub={sub} pill={pill} tone={tone} />)}
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
  statuses: [[['p-mute', 'Completing…']], [['p-ok', '✓ Sent to WhatsApp']], [['p-ok', '✓ Sent to WhatsApp'], ['p-warn', 'Counselling case C-22 opened']], [['p-ok', '✓ Sent to WhatsApp'], ['p-warn', 'Counselling case C-22 opened'], ['p-blue', 'Invoice CONS-0152 created']], [['p-ok', '✓ Sent to WhatsApp'], ['p-warn', 'Counselling case C-22 opened'], ['p-blue', 'Invoice CONS-0152 created'], ['p-mute', 'ABHA linking via ABDM · coming soon']]] };

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
      <div className="card"><Row tok="C-21" now name="Priya R. · 38 F" sub="Referred by Dr. Sharma · laparoscopic cholecystectomy" pill="Counselling" tone="p-blue" /></div>
      <div className="card"><h5>Counselling checklist</h5>
        <div className="steps-mini">
          {steps.map(([l, st, tone, pill]) => <div key={l}><i className={st || undefined} /><span>{l}</span><span key={pill} className={`pill ${tone} pop`}>{pill}</span></div>)}
        </div>
      </div>
      <div className="card"><h5>Package · ₹45,000</h5>
        <div className="vit">{[['Room', '₹12,000'], ['Surgeon', '₹18,000'], ['Anaesthesia', '₹8,000'], ['Tests', '₹7,000']].map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
      </div>
      <div className="sent"><span key={t} className={`pill ${t >= 3 ? 'p-ok' : 'p-mute'} pop`}>{t >= 3 ? '✓ Surgery scheduled · Thu 16 Oct' : 'Awaiting decision'}</span></div>
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
      <div className="stats three">
        <div className="card stat"><b key={`s${t}`} className="pop">{126 + t * 3}</b><small>Sent today</small></div>
        <div className="card stat"><b>98%</b><small>Delivered</small></div>
        <div className="card stat"><b key={`r${t}`} className="pop">{t === 0 ? 1 : 2}</b><small>Need reply</small></div>
      </div>
      <div className="card"><h5>Inbox</h5>{rows.map(([tok, name, sub, pill, tone]) => <Row key={name} tok={tok} name={name} sub={sub} pill={pill} tone={tone} />)}</div>
      <div className="card wa-thread"><h5>Priya R. · conversation</h5>
        <div className="bub">Is the lipid test fasting?<small>10:42</small></div>
        <div className="bub me">Yes, please fast for 10–12 hours before the test.<small>10:44 ✓✓</small></div>
      </div>
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
  const collected = [16250, 16750, 17550, 17970][t];
  return (
    <div className="app-main">
      <div className="stats three">
        <div className="card stat"><b key={collected} className="pop">₹{collected.toLocaleString('en-IN')}</b><small>Collected today</small></div>
        <div className="card stat"><b key={`i${t}`} className="pop">{39 + t}</b><small>Invoices today</small></div>
        <div className="card stat"><b>₹6,200</b><small>Outstanding</small></div>
      </div>
      <div className="streams">
        {INVOICES.map(([n, sub], i) => (
          <div key={n} className={`stream${i > t ? ' pending' : ''}`}><b>{i > t ? 'Pending…' : n}</b><small>{sub}</small>{i <= t && <span key={n} className="pill p-ok pop">Generated</span>}</div>
        ))}
      </div>
      <div className="card"><h5>Corporate partner · monthly credit</h5>
        <Meter pct={pct} label={pct >= 75 ? 'Used · admin alerted' : 'Used of ₹5,00,000'} />
      </div>
      <div className="card"><h5>Recent payments</h5>
        <Row tok="UPI" name="Priya R." sub="CONS-0147 · consultation" pill="₹500" tone="p-ok" />
        <Row tok="CARD" name="Arjun M." sub="DIAG-0089 · lipid profile" pill="₹800" tone="p-ok" />
        <Row tok="CORP" name="Karan V." sub="Billed to Nimbus Technologies" pill="₹400" tone="p-blue" />
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
  const touch = [['Walk-in enquiry', 'Mon 10:12'], ['WhatsApp: health checkup price', 'Mon 14:40'], ['Call back · interested', 'Tue 11:05'], ['Package offer sent', 'Wed 09:30'], ['Booked · converted to patient', 'Thu 12:15']];
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
      <div className="card"><h5>Meera N. · touchpoints</h5>
        <div className="steps-mini">
          {touch.map(([l, when], i) => <div key={l}><i className={i < t ? 'done' : i === t ? 'cur' : undefined} /><span>{l}</span><span className="pill p-mute">{when}</span></div>)}
        </div>
      </div>
      <div className="sent"><span key={t} className={`pill ${t === 4 ? 'p-ok' : 'p-blue'} pop`}>{t === 4 ? '✓ Meera N. added to patients · no re-entry' : `Meera N. moved to ${STAGES[t]}`}</span></div>
    </div>
  );
}

/* ---------- Customer appointments: WhatsApp on one side, AI calling on the other ---------- */
const CALLS = [
  ['Priya R.', 'Tue 10:40 · Dr. Sharma', 'Confirmed', 'p-ok'],
  ['Arjun M.', 'Tue 11:00 · Dr. Sharma', 'Rescheduled to 11:20', 'p-blue'],
  ['Meera N.', 'Wed 09:30 · Dr. Iyer', 'Reminder delivered', 'p-ok'],
];
function CustomerAppointmentsScreen() {
  const t = useTick(4, 2400);
  const live = CALLS[t % 3];
  return (
    <div className="app-main">
      <div className="stats three">
        <div className="card stat"><b key={`c${t}`} className="pop">{32 + t}</b><small>Appointments confirmed</small></div>
        <div className="card stat"><b key={`w${t}`} className="pop">{21 + t}</b><small>via WhatsApp</small></div>
        <div className="card stat"><b key={`a${t}`} className="pop">{11 + (t >> 1)}</b><small>via AI calls</small></div>
      </div>
      <div className="ca-split">
        <div className="card ca-wa">
          <h5><span className="ca-dot wa" />WhatsApp</h5>
          <div className="bub">Appointment confirmed with Dr. Sharma, Tue 10:40 AM. Token #6.<small>9:02</small></div>
          <div className="bub me">Thank you! I'll be there.<small>9:03 ✓✓</small></div>
          <div key={t} className="bub pop">Reminder: your appointment is tomorrow at 10:40 AM.<small>Mon 18:00</small></div>
        </div>
        <div className="card ca-ai">
          <h5><span className="ca-dot ai" />AI calling</h5>
          <div className="ca-call">
            <span className="ca-ring" aria-hidden="true"><Icon name="phone" size={18} /></span>
            <div><b key={live[0]} className="pop">{live[0]}</b><small>{live[1]}</small></div>
            <Wave bars={[10, 20, 14, 24, 12, 18]} />
          </div>
          <p className="ca-line" key={`l${t}`}>"Hi {live[0].split(' ')[0]}, this is City Care Clinic confirming your appointment. Press 1 to confirm."</p>
          {CALLS.map(([n, when, st, tone], i) => (
            <Row key={n} tok={i === t % 3 ? 'LIVE' : 'AI'} now={i === t % 3} name={n} sub={when} pill={i < t % 3 || t === 3 ? st : i === t % 3 ? 'Calling…' : 'Queued'} tone={i < t % 3 || t === 3 ? tone : i === t % 3 ? 'p-warn' : 'p-mute'} />
          ))}
        </div>
      </div>
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
  customer: { title: 'Customer appointments · WhatsApp & AI calling', body: CustomerAppointmentsScreen },
  billing: { title: 'Billing', body: BillingScreen },
  corporate: { title: 'Corporate partners · Nimbus Technologies', body: CorporateScreen },
  tenancy: { title: 'Platform · Workspaces', body: () => <div className="app-main"><TenancyDiagram /></div> },
  leadflow: { title: 'Lead management · Pipeline', body: LeadFlowScreen },
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
        <div className="card wf-patient">
          <span className="wf-av">AM</span>
          <div><b>Arjun M. · 32 M</b><small>Booked online · first visit · Token #7</small></div>
          <div className="wf-vitals"><span>BP <b>122/80</b></span><span>Temp <b>100.8°F</b></span><span>SpO2 <b>98%</b></span></div>
        </div>
        <div key={t} className="fade wf-panel"><Panel /></div>
        <div className="wf-progress" aria-hidden="true">
          <div className="wf-bar"><i style={{ width: `${((t + 1) / WF_STEPS.length) * 100}%` }} /></div>
          <small>{t + 1 < WF_STEPS.length ? <>Next: <b>{WF_STEPS[t + 1]}</b></> : <b>Visit complete · reminders scheduled</b>}</small>
        </div>
      </div>
    </div>
  );
}
