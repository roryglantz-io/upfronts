// ============================================================================
// FORCES — AI / Economics / Regulation
// ============================================================================

function AISection() {
  return (
    <section id="ai" className="sec--sand" data-screen-label="08 AI">
      <div className="section__inner">
        <SectionHead
          num="06"
          kicker="AI & Measurement · The New Decision Layer"
          title={<>AI Is The Tool.<br />Measurement Is The Currency.</>}
          lede="Agentic AI arrives at the 2026 Upfronts as a productized, sellable capability — not a demo. The question isn't whether the tech is real. It's whether it enhances the upfront, replaces the upfront, or merely changes who gets to sit at the table."
        />

        <PullQuote cite="Ad Age · Buyer/Seller Roundtable, 2025">
          I think it will be similar to what happened when programmatic became a way to transact.
          It didn't make the upfronts less relevant — it made them more relevant.
        </PullQuote>

        <div style={{marginTop: 80}}>
          <EyebrowRule label="Five capabilities to watch in the 2026 room" red />
          <div className="cols-2" style={{gap: 32}}>
            {AI_CAPABILITIES.map((c, i) => (
              <div key={i} style={{
                border: '2px solid var(--ink)',
                padding: '32px',
                background: 'var(--paper)',
              }}>
                <div style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 32,
                  color: 'var(--um-red)',
                  lineHeight: 0.9,
                  marginBottom: 4,
                }}>0{i + 1}</div>
                <div style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 22,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.05,
                  margin: '16px 0 12px',
                }}>{c.title}</div>
                <div style={{fontFamily: 'var(--f-serif)', fontSize: 16, lineHeight: 1.5}}>{c.body}</div>
              </div>
            ))}
            <div style={{
              border: '2px solid var(--um-red)',
              padding: 32,
              background: 'var(--um-red)',
              color: 'var(--paper)',
            }}>
              <div style={{fontFamily: 'var(--f-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 16}}>UM POV</div>
              <div style={{fontFamily: 'var(--f-display)', fontSize: 22, textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 16}}>How Much AI Is Too Much AI?</div>
              <div style={{fontFamily: 'var(--f-serif)', fontSize: 16, lineHeight: 1.5}}>
                Buyers and sellers agree: agentic tech won't shape brand investment strategies on its own.
                But it does factor into every decision — because every investment is being calculated
                against an outcomes-based measurement floor that didn't exist two upfronts ago.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EconomicsSection() {
  return (
    <section id="economics" data-screen-label="09 Economics">
      <div className="section__inner">
        <SectionHead
          num="07"
          kicker="Economics · A Market Defined by Uncertainty"
          title={<>Tariffs, Caution,<br />and Optionality.</>}
          lede="Macroeconomic and geopolitical pressure is reshaping upfront strategy. The advertisers who feel most exposed are also the advertisers with the most tonnage in TV — Auto, Retail, CPG. Flexibility isn't a negotiation perk anymore. It's the product."
        />

        <div className="split-2-3">
          <div>
            <div className="stat">
              <div className="stat__big stat__big--red">+14.2%</div>
              <div className="stat__label">Digital ad spend growth forecast for 2026–27 as retail recovers</div>
              <div className="stat__source">Source · eMarketer</div>
            </div>
            <div style={{height: 40}} />
            <div className="stat">
              <div className="stat__big stat__big--small">Flex</div>
              <div className="stat__label">Is the new premium. Advertisers are holding dollars longer and demanding more out-clauses.</div>
            </div>
          </div>
          <KVList points={ECONOMICS_POINTS} />
        </div>

        <PullQuote cite="UM point of view">
          In a market where every CFO is asking 'can you prove it worked?', the most
          valuable thing a network can sell isn't reach. It's out-clauses, scatter rollover,
          and third-party outcome verification.
        </PullQuote>
      </div>
    </section>
  );
}

function RegulationSection() {
  return (
    <section id="regulation" className="sec--dark" data-screen-label="10 Regulation">
      <div className="section__inner">
        <SectionHead
          num="08"
          kicker="Regulation & M&A · Consolidation Has A Green Light"
          title={<>The Market Is<br />Being Rebuilt.</>}
          lede="The FCC has signalled it will grant waivers. Megadeals are the new normal. And on January 1, 2026, a new layer of privacy compliance becomes enforceable — reshaping what data networks can actually sell."
        />

        <div style={{marginBottom: 64}}>
          <KVList points={REGULATION_POINTS} />
        </div>

        <div className="cols-3">
          <div style={{border: '2px solid var(--um-red)', padding: 28, background: 'var(--ink-2)'}}>
            <div style={{fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 0.85, color: 'var(--um-red)'}}>54.5%</div>
            <div style={{fontFamily: 'var(--f-sans)', fontSize: 14, fontWeight: 500, marginTop: 12, color: 'var(--paper)'}}>
              Of U.S. TV households now reached by Nexstar — above the 39% cap, via FCC waiver.
            </div>
          </div>
          <div style={{border: '2px solid var(--muted)', padding: 28, background: 'var(--ink-2)'}}>
            <div style={{fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 0.85, color: 'var(--paper)'}}>~20</div>
            <div style={{fontFamily: 'var(--f-sans)', fontSize: 14, fontWeight: 500, marginTop: 12, color: 'var(--paper)'}}>
              States with comprehensive privacy statutes. Media companies now navigate a patchwork.
            </div>
          </div>
          <div style={{border: '2px solid var(--muted)', padding: 28, background: 'var(--ink-2)'}}>
            <div style={{fontFamily: 'var(--f-display)', fontSize: 32, lineHeight: 0.95, color: 'var(--paper)'}}>JAN 1<br/><span style={{color: 'var(--um-red)'}}>2026</span></div>
            <div style={{fontFamily: 'var(--f-sans)', fontSize: 14, fontWeight: 500, marginTop: 12, color: 'var(--paper)'}}>
              CCPA/CPRA amendments take effect — formal risk assessments, audits, ADM controls.
            </div>
          </div>
        </div>

        <div style={{marginTop: 64, padding: 32, background: 'var(--um-red)', color: 'var(--paper)'}}>
          <div style={{fontFamily: 'var(--f-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 16}}>PwC · US Deals 2026 Outlook</div>
          <div style={{fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.35}}>
            Media and telecom transaction volume and value have accelerated over the past six months —
            characterized by headline-grabbing megadeals, increased consolidation within streaming, and
            a pronounced shift toward profitability and scale.
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AISection, EconomicsSection, RegulationSection });
