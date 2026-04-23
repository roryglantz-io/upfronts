// ============================================================================
// OPEN — Cover, Table of Contents, Thesis
// ============================================================================

function Cover() {
  return (
    <section className="cover" id="cover" data-screen-label="01 Cover">
      <div className="cover__top">
        <div className="cover__meta">
          <div>{ISSUE.date}</div>
          <div>{ISSUE.publisher}</div>
          <div>For {ISSUE.client}</div>
          <div>U.S. Upfronts · {ISSUE.period}</div>
        </div>
        <div style={{
          fontFamily: 'var(--f-display)',
          fontSize: 24,
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
          textTransform: 'uppercase',
        }}>
          UM<span style={{color: 'var(--um-red)'}}>·</span>Worldwide
        </div>
      </div>

      <div>
        <h1 className="cover__title">
          The <span className="accent">Agentic</span><br />
          Upfront<span style={{color: 'var(--um-red)'}}>.</span>
          <div className="italic" style={{marginTop: 24}}>How 2026 Changes How We Buy.</div>
        </h1>

        <p className="cover__sub">
          This is the first Upfront where agents buy alongside buyers. NBCU ran the
          first AI-agent-led PG deal in Q1. The Trade Desk shipped Koa. Amazon is
          leading with agentic creative. Everything else — streaming scale,
          outcomes-based measurement, the calendar itself — is a <em>response</em> to
          that shift.
        </p>
      </div>

      <div className="cover__bottom">
        <div className="cover__bottom-item">
          <div className="lbl">Issue</div>
          <div className="val">{ISSUE.volume} · {ISSUE.title}</div>
        </div>
        <div className="cover__bottom-item">
          <div className="lbl">Editor</div>
          <div className="val">{CONTRIBUTORS.editor.name}</div>
        </div>
        <div className="cover__bottom-item">
          <div className="lbl">Contributors</div>
          <div className="val" style={{whiteSpace: 'pre-line'}}>{CONTRIBUTORS.contributors.map(c => c.name).join('\n')}</div>
        </div>
        <div className="cover__bottom-item">
          <div className="lbl">Prepared For</div>
          <div className="val">{ISSUE.client}</div>
        </div>
      </div>
    </section>
  );
}

function TOCSection() {
  return (
    <section className="toc" id="toc" data-screen-label="02 Contents">
      <div className="section__inner">
        <div className="toc__grid">
          <div className="toc__header">
            <div className="eyebrow eyebrow--red" style={{marginBottom: 16}}>
              ── 2026 Upfronts Preview
            </div>
            <h2>Inside<br />This<br />Issue</h2>
            <p>Fourteen sections, one working thesis: the
              2026 Upfront is the first year agents buy alongside buyers — and
              every other shift in the market is a response to that.</p>
          </div>
          <ul className="toc__list">
            {TOC.map(item => (
              <li key={item.id}>
                <a className="toc__item" href={`#${item.id}`}>
                  <span className="toc__num">{item.num}</span>
                  <span>
                    <span className="toc__title">{item.title}</span>
                    <span className="toc__desc">{item.desc}</span>
                  </span>
                  <span className="toc__meta">{item.pages}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ThesisSection() {
  return (
    <section className="thesis" id="thesis" data-screen-label="03 Thesis">
      <div className="thesis__inner">
        <div className="thesis__eyebrow">
          The Thesis
        </div>
        <p className="thesis__body">
          The 2026 Upfront isn't a negotiation between buyers and sellers.
          It's the first <span className="em">three-way</span> negotiation —
          buyers, sellers, and <span className="italic">agents</span>. From
          allocation to <span className="em">optimization</span>. From
          commitments to <span className="italic">frameworks</span>. From
          decks on stage to <span className="em">protocols in production</span>.
        </p>
        <div className="thesis__sig">
          <span></span>
          <span>UM Worldwide · April 2026</span>
          <span>03 / 15</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Cover, TOCSection, ThesisSection });
