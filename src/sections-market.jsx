// ============================================================================
// MARKET + CTV + LINEAR + SPORTS sections
// ============================================================================

function MarketSection() {
  return (
    <section id="market" data-screen-label="06 Market">
      <div className="section__inner">
        <SectionHead
          num="04"
          kicker="The Market · Softer Market, Smarter Dollars"
          title={<>Moderated Spend,<br />Sharper Allocation.</>}
          lede="Streaming grew faster than anyone projected (+18.9% vs. +14% forecast). Linear fell less severely than projected in 2025 (−4.5% vs. −7%) — but the decline is accelerating again in 2026, and cross-platform parity is just about arithmetic at this point."
        />

        <div style={{ marginBottom: 80 }}>
          <StatsRow stats={MARKET_STATS} cols={4} />
        </div>

        <div className="split-3-2">
          <ChartGap data={GROWTH_DATA} />
          <div>
            <EyebrowRule label="What to watch" red />
            <div className="prose">
              <p>
                Cross-platform TV spend is holding steady at roughly <strong>$46B</strong> — but the
                composition is changing every quarter. Streaming is absorbing every dollar
                linear sheds, and then some.
              </p>
              <p>
                Upfront concentration is a quieter story with bigger implications.
                <strong> ~75% of national TV ad dollars now move through upfront deals</strong>, up
                from 60% five years ago. The upfront isn't shrinking — it's becoming the
                only room that matters. What's shrinking is scatter's ability to correct
                mistakes made in May.
              </p>
              <p>
                That's why buyer posture matters more than ever: advertisers are holding
                dollars longer, demanding more flexibility, and pressuring CPMs down.
                Q3 2025 was brutal for linear — <strong>English broadcast down −10.5%</strong>.
              </p>
            </div>
          </div>
        </div>

        <PullQuote>
          Allocation has been solved. The game in 2026 is optimization —
          flexibility, measurement, and platform power.
        </PullQuote>
      </div>
    </section>
  );
}

function CTVSection() {
  return (
    <section id="ctv" className="sec--sand" data-screen-label="07 CTV">
      <div className="section__inner">
        <SectionHead
          num="05"
          kicker="CTV & Streaming · The New Center of Gravity"
          title={<>Streaming Is Now How<br />You Reach Everyone.</>}
          lede="84% of U.S. households. 45% of A18–49 viewing. Netflix and Amazon alone now account for roughly 30% of streaming ad sales — and the rest of the landscape consolidates around them."
        />

        <div style={{ marginBottom: 72 }}>
          <div className="stats-row" style={{ '--cols': 3 }}>
            {CTV_STATS.slice(0, 3).map((s, i) => <Stat key={i} {...s} red={i === 0} />)}
          </div>
          <div style={{ height: 40 }} />
          <div className="stats-row" style={{ '--cols': 3 }}>
            {CTV_STATS.slice(3).map((s, i) => <Stat key={i} {...s} />)}
          </div>
        </div>

        <div className="split-2-3" style={{alignItems: 'center'}}>
          <div>
            <EyebrowRule label="Three dynamics · one direction" red />
            <div className="prose">
              <p>
                <strong>Expansion of ad-supported tiers.</strong> 78% of Peacock viewers and 73% of
                Prime Video viewers are now on ad tiers. The SVOD-AVOD pricing gap keeps widening,
                pushing consumers into ad-supported environments with 3–8 min/hour ad loads —
                a tolerable exchange at a substantial discount.
              </p>
              <p>
                <strong>Platform consolidation.</strong> Netflix doubled its upfront commitments.
                Together with Amazon, it controls ~30% of streaming ad dollars. The rest of the
                market is either bundling (Disney+/Hulu/Max) or being acquired (HBO into Paramount).
              </p>
              <p>
                <strong>Premiumization.</strong> CTV environments are selling outcome measurement,
                contextual targeting, and sports rights — not just reach. The case for a CTV CPM
                premium is now earned, not assumed.
              </p>
            </div>
          </div>
          <ChartStreamShare data={STREAMING_SHARE} />
        </div>

        <PullQuote cite="Kantar · 2025 Media Reactions">
          Willingness to watch ads in exchange for lower subscription costs rose to 62% in 2025.
          The consumer settled the debate. Advertisers are following.
        </PullQuote>
      </div>
    </section>
  );
}

function LinearSection() {
  return (
    <section id="linear" className="sec--dark" data-screen-label="08 Linear">
      <div className="section__inner">
        <SectionHead
          num="06"
          kicker="Linear Reality · Not Dead — Compressed"
          title={<>Linear's Role Is Real.<br />It's Just Smaller.</>}
          lede="Weekly consumption fell from 31+ hours in 2008–09 to 6.5 hours in 2024. Median broadcast primetime viewer is over 65. Cable's weekly reach dropped from 54% to 30% in five years. Linear isn't disappearing — it's being compressed into specific use cases."
        />

        <div style={{ marginBottom: 72 }}>
          <StatsRow stats={LINEAR_STATS} cols={4} />
        </div>

        <div className="cols-2" style={{gap: 64}}>
          <ChartLinearReach data={LINEAR_REACH} />
          <div>
            <EyebrowRule label="What linear still does" red />
            <div className="prose" style={{color: 'var(--paper)'}}>
              <p style={{color: 'var(--paper)'}}>
                <strong>Live events.</strong> Sports, breaking news, awards, major cultural moments.
                Linear remains the default when simultaneity matters.
              </p>
              <p style={{color: 'var(--paper)'}}>
                <strong>Older demos at scale.</strong> The 55+ audience is still in linear's
                gravitational well. For advertisers who need that audience, linear remains
                the single most efficient buy.
              </p>
              <p style={{color: 'var(--paper)'}}>
                <strong>Categorical anchors.</strong> Finance (12%), Pharma (12%), and Personal
                Care (11%) together represent 35% of linear spend. These categories are structurally
                slow to migrate — a measurement floor networks will defend aggressively.
              </p>
              <p style={{color: 'var(--paper)'}}>
                <strong>Cord-cutting arithmetic.</strong> Traditional MVPD households are shedding
                5–6M per year. Virtual MVPDs aren't absorbing the loss fast enough. The numbers
                don't reverse.
              </p>
            </div>
          </div>
        </div>

        <PullQuote cite="Luis Fernandez · Chairman, NBCUniversal Telemundo Enterprises">
          We need to defend our linear TV. How? By focusing on live TV.
          If you are live, you are on Telemundo.
        </PullQuote>
      </div>
    </section>
  );
}

function SportsSection() {
  const { superBowl, rightsMoves } = SPORTS_DATA;
  return (
    <section id="sports" data-screen-label="09 Sports">
      <div className="section__inner">
        <SectionHead
          num="07"
          kicker="Sports · The Last Driver of Scale"
          title={<>Live Sports Is The<br />Final Mass Medium.</>}
          lede="Q4 '26 through Q3 '27 is the first full season under the new NBA rights split and the runway to Super Bowl LXI on NBC. Every other category is fragmenting; sports is the only place simultaneous mass audiences still assemble. In 2026, that scarcity gets priced — hard."
        />

        <div className="split-2-3" style={{marginBottom: 80}}>
          <div>
            <div style={{
              fontFamily: 'var(--f-display)',
              fontSize: 44,
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}>
              <span style={{color: 'var(--um-red)'}}>Super Bowl</span><br />
              LXI.
            </div>
            <div style={{fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.4, color: 'var(--ink-2)', marginBottom: 24}}>
              {superBowl.body}
            </div>
            <div className="eyebrow">Categories we expect to lead in</div>
          </div>
          <div>
            {superBowl.categories.map((c, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 24,
                padding: '18px 0',
                borderTop: i === 0 ? '2px solid var(--ink)' : '1px solid var(--ink)',
              }}>
                <div style={{
                  fontFamily: 'var(--f-sans)',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>{c.k}</div>
                <div style={{fontFamily: 'var(--f-serif)', fontSize: 16, lineHeight: 1.45}}>{c.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <EyebrowRule label="Rights moves that define the 2026 room" red />
          <div style={{border: '2px solid var(--ink)'}}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '180px 260px 1fr',
              background: 'var(--ink)',
              color: 'var(--paper)',
            }}>
              {['League', 'Now Home', 'Implication'].map(h => (
                <div key={h} style={{
                  padding: '12px 16px',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  borderRight: '1px solid var(--muted)',
                }}>{h}</div>
              ))}
            </div>
            {rightsMoves.map((r, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '180px 260px 1fr',
                borderTop: i === 0 ? 'none' : '1px solid var(--ink)',
              }}>
                <div style={{padding: '18px 16px', fontFamily: 'var(--f-display)', fontSize: 16, textTransform: 'uppercase', borderRight: '1px solid var(--ink)'}}>{r.league}</div>
                <div style={{padding: '18px 16px', fontFamily: 'var(--f-sans)', fontSize: 14, fontWeight: 600, color: 'var(--um-red)', borderRight: '1px solid var(--ink)'}}>{r.to}</div>
                <div style={{padding: '18px 16px', fontFamily: 'var(--f-serif)', fontSize: 15, lineHeight: 1.45}}>{r.note}</div>
              </div>
            ))}
          </div>
        </div>

        <PullQuote cite="UM point of view">
          Sports inventory is the only thing in the 2026 market that's simultaneously
          scarce, scaling, and CPM-inelastic. That's not an adjective stack. That's a pricing memo.
        </PullQuote>
      </div>
    </section>
  );
}

Object.assign(window, { MarketSection, CTVSection, LinearSection, SportsSection });
