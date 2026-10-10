// Stroke icon set. Usage: <Icon name="mic" size={16} />
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

const ICONS = {
  cal: <><rect x="3.5" y="5" width="17" height="15" rx="3" {...P} /><path d="M3.5 10h17M8 3v4M16 3v4" {...P} /></>,
  queue: <><rect x="3" y="4" width="18" height="12" rx="2.5" {...P} /><path d="M8 20h8M12 16v4M8 10h3" {...P} /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" {...P} /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" {...P} /></>,
  rx: <><path d="M7 3h7l4 4v14H7z" {...P} /><path d="M10 11h5M10 15h5" {...P} /></>,
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z" {...P} />,
  chat: <path d="M4 18.5l1.2-3.6A7.5 7.5 0 1 1 8.6 18z" {...P} />,
  bill: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" {...P} /><path d="M9 8h6M9 12h6" {...P} /></>,
  steth: <><path d="M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-2" {...P} /><circle cx="20" cy="11" r="2" {...P} /></>,
  desk: <><circle cx="12" cy="8" r="3.5" {...P} /><path d="M5 20a7 7 0 0 1 14 0" {...P} /></>,
  build: <path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M10 9h4M12 7v4" {...P} />,
  branch: <><circle cx="6" cy="6" r="2.5" {...P} /><circle cx="18" cy="6" r="2.5" {...P} /><circle cx="12" cy="18" r="2.5" {...P} /><path d="M6 8.5v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2M12 13.5v2" {...P} /></>,
  clock: <><circle cx="12" cy="12" r="8.5" {...P} /><path d="M12 7.5V12l3 2" {...P} /></>,
  bell: <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0" {...P} />,
  lock: <><rect x="5" y="10.5" width="14" height="10" rx="2.5" {...P} /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" {...P} /></>,
  funnel: <path d="M4 5h16l-6 7v6l-4 2v-8z" {...P} />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" {...P} strokeWidth={2.5} />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" {...P} />,
  play: <path d="M7 4l13 8-13 8z" fill="currentColor" />,
  pill: <><rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 12)" {...P} /><path d="M9.5 9.5l5 5" {...P} /></>,
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" {...P} />,
  globe: <><circle cx="12" cy="12" r="8.5" {...P} /><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17" {...P} /></>,
  mail: <><rect x="3" y="5.5" width="18" height="13" rx="2.5" {...P} /><path d="M3.5 7l8.5 6 8.5-6" {...P} /></>,
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z" {...P} />,
  pin: <><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" {...P} /><circle cx="12" cy="10" r="2.5" {...P} /></>,
  facebook: <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.5-1.5h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.6v7z" fill="currentColor" />,
  youtube: <><path d="M21.5 8.2a2.4 2.4 0 0 0-1.7-1.7C18.3 6 12 6 12 6s-6.3 0-7.8.5A2.4 2.4 0 0 0 2.5 8.2 25 25 0 0 0 2 12a25 25 0 0 0 .5 3.8 2.4 2.4 0 0 0 1.7 1.7C5.7 18 12 18 12 18s6.3 0 7.8-.5a2.4 2.4 0 0 0 1.7-1.7A25 25 0 0 0 22 12a25 25 0 0 0-.5-3.8z" fill="currentColor" /><path d="M10 14.5v-5l4.5 2.5z" fill="#fff" /></>,
  linkedin: <path d="M6.5 9.5v9H3.7v-9zM5.1 4.8a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM20.3 18.5h-2.8v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5H11.5v-9h2.7v1.2a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3z" fill="currentColor" />,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" {...P} /><circle cx="12" cy="12" r="3.8" {...P} /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" /></>,
};

export default function Icon({ name, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}
