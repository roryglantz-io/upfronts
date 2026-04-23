// ============================================================================
// CLOSING — Competitive + The Take + Colophon
// ============================================================================

function CompetitiveSection() {
  const { lede, competitors, takeaway } = COMPETITIVE;
  return (
    <section id="competitive" data-screen-label="14 Competitive">
      <div className="section__inner">
        <SectionHead
          num="12"
          kicker="Competitive Landscape · ExxonMobil Fuels"
          title={<>The Category Is Traditional.<br />That's The Opportunity.</>}
          lede={lede}
        />

        <div className="cols-2" style={{gap: 32, marginBottom: 80}}>
          {competitors.map((c, i) => (
            <div key={i} style={{
              border: '2px solid var(--ink)',
              padding: 28,
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 16,
              alignItems: 'baseline',
            }}>
              <div>
                <div style={{fontFamily: 'var(--f-display)', fontSize: 32, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 0.95, marginBottom: 6}}>{c.brand}</div>
                <div style={{fontFamily: 'var(--f-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--um-red)', marginBottom: 16}}>{c.position}</div>
                <div style={{fontFamily: 'var(--f-serif)', fontSize: 16, lineHeight: 1.5, color: 'var(--ink)'}}>{c.note}</div>
              </div>
              <div style={{fontFamily: 'var(--f-display)', fontSize: 48, color: 'var(--paper-3)', lineHeight: 0.9}}>0{i+1}</div>
            </div>
          ))}
        </div>

        <div style={{
          padding: 48,
          background: 'var(--ink)',
          color: 'var(--paper)',
          borderTop: '6px solid var(--um-red)',
        }}>
          <div style={{fontFamily: 'var(--f-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--um-red)', marginBottom: 16}}>The opening</div>
          <div style={{fontFamily: 'var(--f-serif)', fontSize: 24, lineHeight: 1.35, textWrap: 'pretty'}}>{takeaway}</div>
        </div>
      </div>
    </section>
  );
}

function TakeSection() {
  return (
    <section id="take" className="sec--red" data-screen-label="15 Take">
      <div className="section__inner">
        <SectionHead
          num="13"
          kicker="The UM Take · Recommendations + Predictions"
          title={<>How We'd Walk<br />Into The Room.</>}
          lede="Enough diagnosis. Here's where we'd put our chips — six recommendations for the 2026 buy, and seven predictions for what we think actually happens in the room. Sharpen your pencils."
        />

        <div style={{marginBottom: 80}}>
          <div style={{
            fontFamily: 'var(--f-mono)', fontSize: 12, textTransform: 'uppercase',
            letterSpacing: '0.2em', marginBottom: 24, color: 'var(--paper)'
          }}>
            Six Recommendations
          </div>
          <div className="cols-2" style={{gap: 24}}>
            {TAKE_RECS.map(r => (
              <div key={r.n} className="take-card" style={{color: 'var(--paper)', background: 'rgba(0,0,0,0.12)'}}>
                <div className="take-card__num" style={{color: 'var(--paper)'}}>{r.n}</div>
                <div className="take-card__title">{r.title}</div>
                <div className="take-card__body">{r.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: 'var(--f-mono)', fontSize: 12, textTransform: 'uppercase',
            letterSpacing: '0.2em', marginBottom: 24, color: 'var(--paper)'
          }}>
            Six Predictions for the 2026 Room
          </div>
          <div style={{background: 'var(--paper)', color: 'var(--ink)', border: '2px solid var(--ink)'}}>
            {TAKE_PREDICTIONS.map((p, i) => (
              <div key={p.n} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 140px',
                gap: 24,
                padding: '24px 32px',
                alignItems: 'center',
                borderTop: i === 0 ? 'none' : '1px solid rgba(29,26,21,0.18)',
              }}>
                <div style={{fontFamily: 'var(--f-display)', fontSize: 36, color: 'var(--um-red)'}}>{p.n}</div>
                <div style={{fontFamily: 'var(--f-serif)', fontSize: 18, lineHeight: 1.45, textWrap: 'pretty', color: 'var(--ink)'}}>{p.body}</div>
                <div style={{textAlign: 'right'}}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    border: `1px solid ${p.confidence === 'HIGH' ? 'var(--um-red)' : 'rgba(29,26,21,0.45)'}`,
                    color: p.confidence === 'HIGH' ? 'var(--um-red)' : 'var(--ink)',
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}>
                    Confidence · {p.confidence}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: 80, padding: '40px 0', borderTop: '4px solid var(--um-red)', borderBottom: '2px solid var(--um-red)', textAlign: 'center'}}>
          <div style={{
            fontFamily: 'var(--f-mono)', fontSize: 11, textTransform: 'uppercase',
            letterSpacing: '0.24em', color: 'var(--um-red)', marginBottom: 18,
          }}>
            Signing off
          </div>
          <div style={{fontFamily: 'var(--f-display)', fontSize: 'clamp(48px, 8vw, 104px)', lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--ink)'}}>
            Read by Machines.<br />Bought by Humans.
          </div>
          <div style={{
            fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.4,
            color: 'var(--ink-2)', marginTop: 28, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
          }}>
            The 2026 Upfront isn't about which screen wins. It's about which layer of decisioning
            you own — and whether your plan is built to be read by humans, machines, or both.
          </div>
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="colophon" data-screen-label="16 Colophon">
      <div className="colophon__grid">
        <div>
          <h4>About this brief</h4>
          <p>
            Full Stream Ahead is UM Worldwide's annual Upfronts POV, produced for
            ExxonMobil and the UM planning community. Vol. 02 covers the 2026 U.S.
            broadcast Upfronts, April–May 2026.
          </p>
        </div>
        <div>
          <h4>Masthead</h4>
          <p><strong style={{color: 'var(--um-red)'}}>Editor</strong><br />
          Rory Glantz · Sr. Associate, EM Fuels Planning</p>
          <p><strong style={{color: 'var(--um-red)'}}>Contributors</strong><br />
          Kurt Tulud · Sports & Tentpoles<br />
          David Weiss · Consumer & Economics<br />
          Beamz Siverly · Regulatory & M&A</p>
        </div>
        <div>
          <h4>Sources</h4>
          <p>
            MAGNA · Kantar · Nielsen · AdWeek · Ad Age · AdExchanger · Variety ·
            Deadline · The Hollywood Reporter · PwC US Deals Outlook · eMarketer ·
            iSpot · industry interviews
          </p>
        </div>
      </div>
      <div className="colophon__bottom">
        <span>© 2026 UM Worldwide · IPG Mediabrands</span>
        <span>Vol. 02 · Full Stream Ahead · 2026 Upfronts</span>
        <span>For ExxonMobil</span>
      </div>
    </footer>
  );
}

Object.assign(window, { CompetitiveSection, TakeSection, Colophon });
