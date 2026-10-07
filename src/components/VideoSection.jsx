import { useEffect, useRef, useState } from 'react';
import { SITE_CONFIG, VIDEO } from '../content/site.js';
import { useReducedMotion } from '../hooks.js';
import { MarkTile } from './Brand.jsx';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import SiteLink from './SiteLink.jsx';

/**
 * Demo video. Supports YouTube, Vimeo and MP4 (set SITE_CONFIG.video).
 * An MP4 plays silently as a looping preview and the frame takes the video's own aspect ratio;
 * one click restarts it with sound and controls (still looping). Embeds load only after a click. Nothing autoplays with sound.
 */
function parseVideo(url) {
  const yt = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if (yt) return { type: 'iframe', src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return { type: 'iframe', src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1` };
  return { type: 'file', src: url };
}

/** `head` false hides the section heading (used on the demo-video page, where the H1 introduces it). */
export default function VideoSection({ head = true, chapters = true, cta }) {
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false); // iframe started, or MP4 switched to sound + controls
  const [aspect, setAspect] = useState(SITE_CONFIG.videoAspect || '16 / 9');
  const [note, setNote] = useState('');
  const ref = useRef(null);
  const url = SITE_CONFIG.video.trim();
  const video = url ? parseVideo(url) : null;
  const isFile = video?.type === 'file';
  const portrait = parseFloat(aspect) < 1 || /^\s*9\s*\/\s*16/.test(aspect);

  // Keep the silent preview running when the section scrolls into view; pause it when it leaves.
  useEffect(() => {
    const el = ref.current;
    if (!el || playing || reduce || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [playing, reduce]);

  const play = () => {
    if (!video) { setNote('The demo video will play here once it is added.'); return; }
    if (isFile && ref.current) {
      const el = ref.current;
      el.muted = false; el.currentTime = 0;
      el.play().catch(() => {});
    }
    setPlaying(true);
  };

  const onMeta = (e) => {
    const { videoWidth: w, videoHeight: h } = e.currentTarget;
    if (w && h) setAspect(`${w} / ${h}`);
  };

  const chapterList = chapters && (
    <ol className={`v-chapters${portrait ? ' list' : ''}`} aria-label="What the demo covers">
      {VIDEO.chapters.map((c) => <li key={c}>{c}</li>)}
    </ol>
  );

  return (
    <section className="sec video-band" id="demo-video" aria-labelledby={head ? 'h-v' : undefined} aria-label={head ? undefined : 'PyMedic demo video'}>
      <div className="wrap">
        {head && <SectionHead id="h-v" kicker={VIDEO.kicker} title={VIDEO.title} lead={VIDEO.lead} />}
        <div className={`video-layout${portrait ? ' portrait' : ''}`}>
          <div className={`video${portrait ? ' portrait' : ''}${playing ? ' is-playing' : ''}`} style={{ aspectRatio: aspect }} data-slot="video-main">
            {isFile && (
              <video ref={ref} src={video.src} poster={SITE_CONFIG.videoPoster || undefined} muted={!playing} loop autoPlay={!reduce} playsInline preload="metadata"
                controls={playing} onLoadedMetadata={onMeta} aria-label="PyMedic product demo">
                {SITE_CONFIG.videoCaptions && <track kind="captions" src={SITE_CONFIG.videoCaptions} srcLang="en" label="English" default />}
              </video>
            )}
            {playing && video?.type === 'iframe' && (
              <iframe src={video.src} title="PyMedic product demo" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            )}
            {!playing && (
              <div className={`video-poster${isFile ? ' overlay' : ''}`} data-slot="video-poster">
                {!isFile && <MarkTile />}
                {!isFile && <p>{VIDEO.posterText}</p>}
                {isFile && <span className="live v-live"><i aria-hidden="true" />Preview · muted</span>}
                <button className="play" type="button" onClick={play}>
                  <i aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 3l10 6-10 6z" fill="#00003C" /></svg></i>
                  {isFile ? 'Click to Play' : VIDEO.playLabel}
                </button>
              </div>
            )}
          </div>
          {portrait && (
            <div className="video-side">
              <p className="kicker">In this demo</p>
              {chapterList}
              <p className="video-meta"><Icon name="clock" size={14} /> About a minute · one patient visit, start to finish</p>
              {cta && <div className="cta-row" style={{ marginTop: 22 }}><SiteLink className="btn btn-ghost" href={cta.href}>{cta.label}</SiteLink></div>}
            </div>
          )}
        </div>
        {!portrait && chapterList}
        {note && <p className="video-note" role="status">{note}</p>}
        {!portrait && cta && <div className="cta-row" style={{ marginTop: 26 }}><SiteLink className="btn btn-ghost" href={cta.href}>{cta.label}</SiteLink></div>}
      </div>
    </section>
  );
}
