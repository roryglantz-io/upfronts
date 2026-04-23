// ============================================================================
// APP — mount, scroll tracking, tweaks
// ============================================================================

const { useState, useEffect } = React;
const {
  Chrome,
  Cover, TOCSection, ThesisSection,
  AgenticSection, CalendarSection,
  MarketSection, CTVSection, LinearSection, SportsSection,
  EconomicsSection, RegulationSection,
  ScoreboardSection, NetworksSection,
  CompetitiveSection, ActionItemsSection, TakeSection, Colophon
} = window;

function App() {
  const [active, setActive] = useState("thesis");
  const [progress, setProgress] = useState(0);
  const [tweaksOn, setTweaksOn] = useState(false);
  const [theme, setTheme] = useState("default"); // default | contrast | editorial
  const [aesthetic, setAesthetic] = useState(() => {
    try {return localStorage.getItem('aesthetic') || 'soft';} catch (e) {return 'soft';}
  }); // bold | soft

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, scrollY / total * 100));

      const sections = document.querySelectorAll('section[id]');
      let current = "thesis";
      sections.forEach((s) => {
        const rect = s.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3 && rect.bottom > 0) {
          current = s.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Tweaks host protocol
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => {
    if (aesthetic === 'soft') document.body.classList.add('soft');else
    document.body.classList.remove('soft');
    try {localStorage.setItem('aesthetic', aesthetic);} catch (e) {}
  }, [aesthetic]);

  useEffect(() => {
    // Apply theme by swapping CSS variables
    const root = document.documentElement;
    if (theme === 'contrast') {
      root.style.setProperty('--paper', '#FFFFFF');
      root.style.setProperty('--paper-2', '#F5F5F5');
      root.style.setProperty('--paper-3', '#E0E0E0');
      root.style.setProperty('--um-red', '#E50914');
    } else if (theme === 'editorial') {
      root.style.setProperty('--paper', '#F3EEE0');
      root.style.setProperty('--paper-2', '#E8E0CA');
      root.style.setProperty('--paper-3', '#D6CCB0');
      root.style.setProperty('--um-red', '#D4301F');
    } else {
      root.style.setProperty('--paper', '#FAF8F3');
      root.style.setProperty('--paper-2', '#F1EDE3');
      root.style.setProperty('--paper-3', '#E8E3D5');
      root.style.setProperty('--um-red', '#FF2D2D');
    }
  }, [theme]);

  return (
    <>
      <Chrome active={active} progress={progress} />
      <Cover />
      <TOCSection />
      <ThesisSection />
      <AgenticSection />
      <CalendarSection />
      <MarketSection />
      <CTVSection />
      <LinearSection />
      <SportsSection />
      <EconomicsSection />
      <RegulationSection />
      <ScoreboardSection />
      <NetworksSection />
      <CompetitiveSection />
      <TakeSection />
      <Colophon />

      <a
        href="newsletter-print.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 18px',
          background: 'var(--um-red, #FF3534)',
          color: '#fff',
          fontFamily: 'var(--f-mono, sans-serif)',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
          cursor: 'pointer',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1v8M4 6l3 3 3-3M2 10v1.5A1.5 1.5 0 003.5 13h7A1.5 1.5 0 0012 11.5V10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Export PDF
      </a>

      {tweaksOn &&
      <div className="tweaks">
          <h5>Tweaks</h5>
          <div className="tweaks__row">
            <label>Aesthetic</label>
            {['bold', 'soft'].map((a) =>
          <button
            key={a}
            className={aesthetic === a ? 'active' : ''}
            onClick={() => setAesthetic(a)}>
            {a}</button>
          )}
          </div>
          <div className="tweaks__row">
            <label>Palette</label>
            {['default', 'contrast', 'editorial'].map((t) =>
          <button
            key={t}
            className={theme === t ? 'active' : ''}
            onClick={() => setTheme(t)}>
            {t}</button>
          )}
          </div>
          <div className="tweaks__row" style={{ color: "rgb(0, 0, 0)" }}>
            <label>Print</label>
            <button onClick={() => window.print()}>Export PDF</button>
          </div>
          <div style={{ marginTop: 12, fontSize: 10, color: 'rgb(11, 11, 10)', lineHeight: 1.4 }}>
            Try the Soft aesthetic for a quieter, more editorial tone. Click scoreboard column headers to sort.
          </div>
        </div>
      }
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);