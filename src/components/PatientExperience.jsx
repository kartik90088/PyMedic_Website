import { markUrl } from './Brand.jsx';

const MESSAGES = [
  { text: <>Appointment confirmed with Dr. Sharma, Tue 10:40 AM. Token #6. Track your turn: <u>link</u></>, time: '9:02' },
  { text: 'You are #3. Estimated wait: 9 minutes.', time: '10:31' },
  { file: 'Prescription.pdf', text: 'Tests: lipid profile · Follow-up: next Tuesday', time: '11:04' },
  { text: "Hi Priya, hope you're feeling better. Remember to take your BP medicine.", time: 'Day 3' },
  { me: true, text: 'Thank you! Booking the follow-up now', time: '✓✓' },
];

/** WhatsApp chat as the patient sees it (sample data). Replace with a real screenshot via data-slot="screenshot-phone". */
export function PhoneChat() {
  return (
    <figure style={{ margin: 0 }} data-slot="screenshot-phone" aria-label="WhatsApp messages a patient receives from a PyMedic clinic: confirmation with token, queue position, prescription PDF and a follow-up reminder (sample data)">
      <div className="phone">
        <div className="ph-top">
          <span className="av"><img src={markUrl} alt="" /></span>
          <span>City Care Clinic<small>via PyMedic</small></span>
        </div>
        <div className="chat">
          {MESSAGES.map((m, i) => (
            <div key={i} className={`bub${m.me ? ' me' : ''}`}>
              {m.file && <span className="file"><i />{m.file}</span>}
              {m.text}<small>{m.time}</small>
            </div>
          ))}
          <div className="bub typing" aria-label="Clinic is typing"><i /><i /><i /></div>
        </div>
      </div>
    </figure>
  );
}
