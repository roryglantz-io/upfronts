// ============================================================================
// FORCES — AI / Economics / Regulation
// ============================================================================

function EconomicsSection() {
  return (
    <section id="economics" data-screen-label="10 Economics">
      <div className="section__inner">
        <SectionHead
          num="08"
          kicker="Economics · A Market Defined by Uncertainty"
          title={<>Caution, Optionality,<br />and the Cost of Risk.</>}
          lede="Ongoing instability in the Middle East — the U.S./Israel conflict with Iran, periodic closures of the Strait of Hormuz, and the downstream pressure on energy and shipping — is reshaping the CFO's view of 2026. Buyers aren't pulling back on TV. They're buying it differently: shorter commitments, more out-clauses, more scatter. Flexibility isn't a negotiation perk anymore. It's the product."
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
          The buyers most exposed to geopolitical shocks — Auto, Retail, CPG, Fuels — also carry the most
          tonnage in TV. In that environment, the most valuable thing a network can sell isn't reach.
          It's out-clauses, scatter rollover, and third-party outcome verification.
        </PullQuote>
      </div>
    </section>
  );
}

function RegulationSection() {
  return (
    <section id="regulation" className="sec--dark" data-screen-label="11 Regulation">
      <div className="section__inner">
        <SectionHead
          num="09"
          kicker="Regulation & M&A · Consolidation Has A Green Light"
          title={<>The Market Is<br />Being Rebuilt.</>}
          lede="The FCC has signalled it will grant ownership-cap waivers. Megadeals are the new normal. And the CCPA/CPRA amendments that became enforceable on January 1, 2026 — the start of the new compliance year — reshape what data networks can actually package and sell."
        />

        <div style={{marginBottom: 64}}>
          <KVList points={REGULATION_POINTS} />
        </div>

        <div className="cols-3">
          <div style={{border: '2px solid var(--um-red)', padding: 28, background: 'var(--ink-2)'}}>
            <div style={{fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 0.85, color: '#FFFFFF'}}>54.5%</div>
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

Object.assign(window, { EconomicsSection, RegulationSection });
