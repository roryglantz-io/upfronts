// ============================================================================
// NEW SECTIONS — Agentic AI (headline), Upfront Calendar, UM Action Items
// ============================================================================

function AgenticSection() {
  return (
    <section id="agentic" className="sec--dark" data-screen-label="04 Agentic">
      <div className="section__inner">
        <SectionHead
          num="02"
          kicker="The Agentic Upfront · The Headline Story of 2026"
          title={<>Agents Enter<br />The Room.</>}
          lede="For the first time, a real AI-agent-led deal has been bought, run, and measured in U.S. television. Every major publisher is reformatting their 2026 pitch around what that means. This is no longer a capability to watch — it's the operating layer the rest of the upfront is being rebuilt on top of."
        />

        {/* Pullquote strip */}
        <div style={{marginTop: 24, marginBottom: 80, display: 'grid', gap: 32, gridTemplateColumns: 'repeat(3, 1fr)'}} className="agentic-quotes">
          {AGENTIC_QUOTES.map((q, i) => (
            <div key={i} style={{
              borderTop: '2px solid var(--um-red)',
              paddingTop: 20,
            }}>
              <div style={{
                fontFamily: 'var(--f-serif)',
                fontSize: 19,
                fontStyle: 'italic',
                lineHeight: 1.35,
                color: 'var(--paper)',
                marginBottom: 16,
              }}>"{q.body}"</div>
              <div style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--muted)',
              }}>{q.who}</div>
            </div>
          ))}
        </div>

        {/* Milestones — the evidence */}
        <EyebrowRule label="What's actually happened — the evidence" red />
        <div style={{display: 'grid', gap: 0, marginTop: 24}}>
          {AGENTIC_MILESTONES.map((m, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr 140px',
              gap: 32,
              padding: '28px 0',
              borderTop: i === 0 ? '2px solid var(--paper)' : '1px solid rgba(255,255,255,0.15)',
              borderBottom: i === AGENTIC_MILESTONES.length - 1 ? '2px solid var(--paper)' : 'none',
              alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--um-red)',
                paddingTop: 4,
              }}>{m.date}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 24,
                  lineHeight: 1.1,
                  color: 'var(--paper)',
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                }}>{m.label}</div>
                <div style={{
                  fontFamily: 'var(--f-serif)',
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: 'var(--paper-2)',
                }}>{m.detail}</div>
              </div>
              <div style={{textAlign: 'right'}}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  padding: '5px 10px',
                  border: '1px solid var(--paper-2)',
                  color: 'var(--paper)',
                }}>{m.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack diagram */}
        <div style={{marginTop: 96}}>
          <EyebrowRule label="The emerging agentic stack" red />
          <div style={{marginTop: 24, border: '2px solid var(--paper)'}}>
            {AGENTIC_STACK.map((row, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                borderBottom: i === AGENTIC_STACK.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{
                  padding: '28px 28px',
                  background: 'transparent',
                  borderRight: '1px solid rgba(255,255,255,0.2)',
                }}>
                  <div style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 22,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    color: i === 0 ? 'var(--ink)' : 'var(--paper)',
                  }}>{row.layer}</div>
                  <div style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: i === 0 ? 'var(--ink)' : 'var(--muted)',
                    marginTop: 8,
                    lineHeight: 1.35,
                  }}>{row.what}</div>
                </div>
                <div style={{
                  padding: '28px 28px',
                  color: 'var(--paper)',
                }}>
                  <div style={{
                    fontFamily: 'var(--f-serif)',
                    fontSize: 17,
                    lineHeight: 1.5,
                    marginBottom: 10,
                  }}>{row.desc}</div>
                  <div style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                  }}><span style={{color: 'var(--um-red)'}}>In market · </span>{row.examples}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 16,
            fontFamily: 'var(--f-mono)',
            fontSize: 11,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>Layers of the 2026 buying stack · read top-down</div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// UPFRONT CALENDAR
// ============================================================================

function CalendarSection() {
  // Group events by week buckets
  const buckets = {};
  CALENDAR.forEach(e => {
    if (!buckets[e.bucket]) buckets[e.bucket] = [];
    buckets[e.bucket].push(e);
  });
  const order = ["NewFront", "CBS Pre-Week", "Super Monday", "Upfront Week"];

  return (
    <section id="calendar" className="sec--sand" data-screen-label="05 Calendar">
      <div className="section__inner">
        <SectionHead
          num="03"
          kicker="The Upfront Week Map · Dates, Venues, Signals"
          title={<>The Calendar<br />Is The Story.</>}
          lede="Here's who shows up when, where, and what to read between the venues."
        />

        <div style={{marginTop: 24}}>
          {order.map(bucket => {
            const events = buckets[bucket] || [];
            if (!events.length) return null;
            return (
              <div key={bucket} style={{marginBottom: 48}}>
                <div style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--um-red)',
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: '2px solid var(--um-red)',
                }}>{bucket}{events.length > 1 ? ` · ${events.length} presentations` : ''}</div>
                <div>
                  {events.map((e, i) => (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr 320px',
                      gap: 24,
                      padding: '24px 0',
                      borderBottom: '1px solid var(--paper-3)',
                      alignItems: 'start',
                    }} className="cal-row">
                      <div>
                        <div style={{
                          fontFamily: 'var(--f-display)',
                          fontSize: 38,
                          lineHeight: 0.9,
                          color: 'var(--ink)',
                          letterSpacing: '-0.02em',
                        }}>{e.date}</div>
                        <div style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '0.14em',
                          color: 'var(--muted)',
                          marginTop: 6,
                        }}>{e.day} · 2026</div>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'var(--f-display)',
                          fontSize: 24,
                          letterSpacing: '-0.01em',
                          color: 'var(--ink)',
                          marginBottom: 4,
                        }}>{e.network}</div>
                        <div style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: 'var(--um-red)',
                          marginBottom: 10,
                        }}>{e.event}</div>
                        <div style={{
                          fontFamily: 'var(--f-sans)',
                          fontSize: 13,
                          color: 'var(--ink-2)',
                          marginBottom: 10,
                        }}>{e.venue}</div>
                      </div>
                      <div style={{
                        fontFamily: 'var(--f-serif)',
                        fontStyle: 'italic',
                        fontSize: 15,
                        lineHeight: 1.45,
                        color: 'var(--ink-2)',
                        paddingLeft: 20,
                        borderLeft: '2px solid var(--um-red)',
                      }}>{e.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// UM ACTION ITEMS
// ============================================================================

function ActionItemsSection() {
  return (
    <section id="action" className="sec--red" data-screen-label="15 Action Items">
      <div className="section__inner">
        <SectionHead
          num="13"
          kicker="UM Action Items · What This Means For How We Buy"
          title={<>In An Agentic Era,<br />Buying Changes.</>}
          lede="Five concrete moves that translate the 2026 shift into an operating posture for UM on behalf of ExxonMobil. This is the hand-off from 'what's happening in the market' to 'what we do about it at the table.'"
          onDark
        />

        <div style={{display: 'grid', gap: 0, marginTop: 48}}>
          {ACTION_ITEMS.map((a, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 48,
              padding: '40px 0',
              borderTop: i === 0 ? '2px solid var(--paper)' : '1px solid rgba(255,255,255,0.3)',
              borderBottom: i === ACTION_ITEMS.length - 1 ? '2px solid var(--paper)' : 'none',
              alignItems: 'start',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: 'var(--paper)',
                  opacity: 0.75,
                  marginBottom: 8,
                }}>Action · 0{i + 1}</div>
                <div style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 40,
                  letterSpacing: '-0.02em',
                  lineHeight: 0.95,
                  color: 'var(--paper)',
                  textTransform: 'uppercase',
                }}>{a.area}</div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 26,
                  lineHeight: 1.15,
                  color: 'var(--paper)',
                  marginBottom: 12,
                  letterSpacing: '-0.01em',
                }}>{a.title}</div>
                <div style={{
                  fontFamily: 'var(--f-serif)',
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: 'var(--paper)',
                  opacity: 0.92,
                }}>{a.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AgenticSection, CalendarSection, ActionItemsSection });
