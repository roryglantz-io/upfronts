// ============================================================================
// NETWORKS — Scoreboard + Deep-dives
// ============================================================================

const { useState: _useState, useMemo: _useMemo } = React;

const AXES = [
  { key: 'ai', label: 'AI / Measurement' },
  { key: 'sports', label: 'Sports Leverage' },
  { key: 'streaming', label: 'Streaming Scale' },
  { key: 'youth', label: 'Audience Youth' },
  { key: 'flex', label: 'Flexibility' },
];

function ScoreDots({ score }) {
  return (
    <div className="sb__dots">
      {[1,2,3,4,5].map(n => (
        <span key={n} className={`sb__dot ${n <= score ? 'sb__dot--on' : ''}`} />
      ))}
    </div>
  );
}

function ScoreboardSection() {
  const [sortKey, setSortKey] = _useState(null);

  const sorted = _useMemo(() => {
    if (!sortKey) return NETWORKS;
    return [...NETWORKS].sort((a, b) => b.scores[sortKey] - a.scores[sortKey]);
  }, [sortKey]);

  return (
    <section id="scoreboard" data-screen-label="12 Scoreboard">
      <div className="section__inner">
        <SectionHead
          num="10"
          kicker="Network Scoreboard · Eleven Players, Five Axes"
          title={<>Who Shows Up<br />With What.</>}
          lede="A supporting view, not a verdict. Five axes that together describe how each publisher is positioned to negotiate in the 2026 Upfronts. Click a column to sort."
        />

        <div className="scoreboard">
          <div className="sb__head">
            <div>Network</div>
            {AXES.map(a => (
              <div key={a.key}
                onClick={() => setSortKey(sortKey === a.key ? null : a.key)}
                style={{cursor: 'pointer', background: sortKey === a.key ? 'var(--um-red)' : 'transparent'}}>
                {a.label}{sortKey === a.key ? ' ▼' : ''}
              </div>
            ))}
            <div>Tags</div>
          </div>
          {sorted.map(n => (
            <div key={n.id} className="sb__row">
              <div className="sb__network">{n.name}</div>
              {AXES.map(a => (
                <div key={a.key}><ScoreDots score={n.scores[a.key]} /></div>
              ))}
              <div style={{flexWrap: 'wrap', gap: 4}}>
                {n.tags.slice(0, 2).map((t, i) => <span key={i} className="sb__tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: 32, fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em'}}>
          Scoring · 1 = emerging, 5 = category-defining · UM assessment
        </div>
      </div>
    </section>
  );
}

function NetworkCard({ n, index }) {
  return (
    <div className="netcard" id={`net-${n.id}`}>
      <div className="netcard__id">
        <div className="eyebrow" style={{marginBottom: 8}}>Publisher · {String(index + 1).padStart(2, '0')}</div>
        <h3 className="netcard__name">{n.name}</h3>
        <p className="netcard__tag">"{n.tagline}"</p>
        <div className="netcard__event">
          <b>Upfront:</b><br />
          {n.event}
        </div>
        <div style={{marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6}}>
          {n.tags.map((t, i) => <span key={i} className="sb__tag">{t}</span>)}
        </div>
        <div style={{marginTop: 24}}>
          <div style={{fontFamily: 'var(--f-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 10}}>Scorecard</div>
          {AXES.map(a => (
            <div key={a.key} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: '1px solid var(--paper-3)'}}>
              <span style={{fontFamily: 'var(--f-sans)', fontSize: 12, color: 'var(--ink-2)'}}>{a.label}</span>
              <ScoreDots score={n.scores[a.key]} />
            </div>
          ))}
        </div>
      </div>
      <div className="netcard__body">
        <p style={{fontSize: 19, fontWeight: 400}}>{n.body}</p>
        <h4>Highlights</h4>
        <ul>{n.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
        <h4>Watch for</h4>
        <p style={{fontFamily: 'var(--f-serif)', fontStyle: 'italic'}}>{n.watch}</p>
        {n.sources && (
          <p style={{marginTop: 24, fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', borderTop: '1px solid var(--paper-3)', paddingTop: 12}}>
            Sources · {n.sources}
          </p>
        )}
      </div>
    </div>
  );
}

function NetworksSection() {
  return (
    <section id="networks" className="sec--sand" data-screen-label="13 Networks">
      <div className="section__inner">
        <SectionHead
          num="11"
          kicker="Network Deep-Dives · Eleven Rooms, Eleven Pitches"
          title={<>What Each Network<br />Walks In Selling.</>}
          lede="Ordered chronologically by Upfront date. Each profile focuses on the pitch the network is bringing — the scarcity they're pricing against, the measurement story they're telling, and what to watch for in the room."
        />
        {NETWORKS.map((n, i) => <NetworkCard key={n.id} n={n} index={i} />)}
      </div>
    </section>
  );
}

Object.assign(window, { ScoreboardSection, NetworksSection });
