// ============================================================================
// COMPONENTS — Shared building blocks
// ============================================================================

const { useState, useEffect, useRef, useMemo } = React;

// ---------- Chrome / sticky nav ----------
function Chrome({ active, progress }) {
  const items = [
    { id: "agentic", label: "Agentic" },
    { id: "calendar", label: "Calendar" },
    { id: "market", label: "Market" },
    { id: "ctv", label: "CTV" },
    { id: "linear", label: "Linear" },
    { id: "sports", label: "Sports" },
    { id: "economics", label: "Economics" },
    { id: "scoreboard", label: "Networks" },
    { id: "competitive", label: "Competitive" },
    { id: "action", label: "Action" },
    { id: "take", label: "Take" },
  ];
  return (
    <div className="chrome">
      <div className="chrome__inner">
        <div className="chrome__brand">
          <svg className="chrome__logo" viewBox="0 0 80 32" aria-label="UM" role="img" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="26" fontFamily="'Archivo Black', 'Helvetica Neue', sans-serif" fontSize="30" fill="currentColor" letterSpacing="-1">UM</text>
          </svg>
          <div className="chrome__title">
            The Agentic Upfront
          </div>
        </div>
        <nav className="chrome__nav">
          {items.map(it => (
            <a key={it.id} href={`#${it.id}`} style={{
              color: active === it.id ? 'var(--um-red)' : undefined,
              borderBottomColor: active === it.id ? 'var(--um-red)' : undefined,
            }}>{it.label}</a>
          ))}
        </nav>
      </div>
      <div className="chrome__progress" style={{ width: `${progress}%` }} />
    </div>
  );
}

// ---------- Section header ----------
function SectionHead({ num, kicker, title, lede }) {
  return (
    <div className="section__head">
      <div>
        <div className="section__num">{num}</div>
      </div>
      <div>
        <div className="section__kicker">{kicker}</div>
        <h2 className="section__title">{title}</h2>
        {lede && <p className="section__lede" style={{marginTop: 24}}>{lede}</p>}
      </div>
    </div>
  );
}

// ---------- Stat block ----------
function Stat({ num, label, sub, source, red, small }) {
  return (
    <div className="stat">
      <div className={`stat__big ${red ? 'stat__big--red' : ''} ${small ? 'stat__big--small' : ''}`}>
        {num}
      </div>
      <div className="stat__label">{label}</div>
      {sub && <div style={{
        fontFamily: 'var(--f-serif)', fontStyle: 'italic',
        fontSize: 13, color: 'var(--muted)', marginTop: 8, maxWidth: 260,
      }}>{sub}</div>}
      {source && <div className="stat__source">Source · {source}</div>}
    </div>
  );
}

function StatsRow({ stats, cols = 4, red }) {
  return (
    <div className="stats-row" style={{ '--cols': cols }}>
      {stats.map((s, i) => <Stat key={i} {...s} red={red && i === 0} />)}
    </div>
  );
}

// ---------- Pull-quote ----------
function PullQuote({ children, cite }) {
  return (
    <div className="pullquote">
      <div className="pullquote__mark">"</div>
      <div>
        <p className="pullquote__body">{children}</p>
        {cite && <span className="pullquote__cite">— {cite}</span>}
      </div>
    </div>
  );
}

// ---------- Eyebrow rule ----------
function EyebrowRule({ label, red }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
      <span style={{
        width: 48, height: 2,
        background: red ? 'var(--um-red)' : 'var(--ink)',
        display: 'inline-block'
      }} />
      <span className={`eyebrow ${red ? 'eyebrow--red' : 'eyebrow--ink'}`}>{label}</span>
    </div>
  );
}

// ---------- Key-value points ----------
function KVList({ points }) {
  return (
    <div>
      {points.map((p, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr',
          gap: 32,
          padding: '20px 0',
          borderTop: i === 0 ? '2px solid var(--ink)' : '1px solid var(--ink)',
          ...(i === points.length - 1 ? { borderBottom: '2px solid var(--ink)' } : {}),
        }}>
          <div style={{
            fontFamily: 'var(--f-display)',
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: 'var(--um-red)',
            lineHeight: 1.1,
          }}>{p.k}</div>
          <div style={{
            fontFamily: 'var(--f-serif)',
            fontSize: 18,
            lineHeight: 1.5,
            textWrap: 'pretty',
          }}>{p.v}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Chrome, SectionHead, Stat, StatsRow, PullQuote, EyebrowRule, KVList });
