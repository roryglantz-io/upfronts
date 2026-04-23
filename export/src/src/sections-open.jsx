// ============================================================================
// OPEN — Cover, Table of Contents, Thesis
// ============================================================================

function Cover() {
  return (
    <section className="cover" id="cover" data-screen-label="01 Cover">
      <div className="cover__top">
        <div className="cover__meta">
          <div><b>{ISSUE.volume}</b> · {ISSUE.date}</div>
          <div>{ISSUE.publisher} · For {ISSUE.client}</div>
          <div>U.S. Upfronts · April–May 2026</div>
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
          Full <span className="accent">Stream</span><br />
          Ahead<span style={{color: 'var(--um-red)'}}>.</span>
          <div className="italic" style={{marginTop: 24}}>Unpacking the 2026 Upfronts.</div>
        </h1>

        <p className="cover__sub">
          The market is softer, dollars are smarter, and the center of gravity has
          moved. This is the first Upfront where <em>streaming isn't the story —
          it's the baseline</em>. Everything else is a response to that.
        </p>
      </div>

      <div className="cover__bottom">
        <div className="cover__bottom-item">
          <div className="lbl">Issue</div>
          <div className="val">{ISSUE.volume} · {ISSUE.title}</div>
        </div>
        <div className="cover__bottom-item">
          <div className="lbl">Editor</div>
          <div className="val">{CONTRIBUTORS.editor.name}<br />
            <span style={{fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase'}}>
              {CONTRIBUTORS.editor.role.replace('Editor · ', '')}
            </span>
          </div>
        </div>
        <div className="cover__bottom-item">
          <div className="lbl">Contributors</div>
          <div className="val">
            {CONTRIBUTORS.contributors.map(c => c.name.split(' ')[0] + ' ' + c.name.split(' ').slice(1).map(s=>s[0]).join('.') + '.').join(' · ')}
          </div>
        </div>
        <div className="cover__bottom-item">
          <div className="lbl">Prepared For</div>
          <div className="val">{ISSUE.client}<br />
            <span style={{fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase'}}>
              Fuels Planning
            </span>
          </div>
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
              ── Inside this issue
            </div>
            <h2>The<br />Table.</h2>
            <p>Twelve chapters, roughly thirty minutes, one working thesis: the
              2026 Upfront is where streaming stops being the disruptor and
              starts being the default.</p>
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
          The Thesis · Vol. 02
        </div>
        <p className="thesis__body">
          The 2026 Upfront isn't about <span className="em">buying more streaming</span>.
          It's about <span className="italic">buying the same outcome, priced differently</span>.
          From allocation to <span className="em">optimization</span>. From reach
          to <span className="italic">resolution</span>. From upfront commitments
          to <span className="em">outcome commitments</span>.
        </p>
        <div className="thesis__sig">
          <span>Rory Glantz · Editor</span>
          <span>UM Worldwide · April 2026</span>
          <span>03 / 15</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Cover, TOCSection, ThesisSection });
