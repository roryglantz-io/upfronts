// ============================================================================
// APP — mount, scroll tracking, tweaks
// ============================================================================

const { useState, useEffect } = React;
const {
  Chrome,
  Cover, TOCSection, ThesisSection,
  MarketSection, CTVSection, LinearSection, SportsSection,
  AISection, EconomicsSection, RegulationSection,
  ScoreboardSection, NetworksSection,
  CompetitiveSection, TakeSection, Colophon,
} = window;

function App() {
  const [active, setActive] = useState("thesis");
  const [progress, setProgress] = useState(0);
  const [tweaksOn, setTweaksOn] = useState(false);
  const [theme, setTheme] = useState("default"); // default | contrast | editorial

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, (scrollY / total) * 100));

      const sections = document.querySelectorAll('section[id]');
      let current = "thesis";
      sections.forEach(s => {
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
      <MarketSection />
      <CTVSection />
      <LinearSection />
      <SportsSection />
      <AISection />
      <EconomicsSection />
      <RegulationSection />
      <ScoreboardSection />
      <NetworksSection />
      <CompetitiveSection />
      <TakeSection />
      <Colophon />

      {tweaksOn && (
        <div className="tweaks">
          <h5>Tweaks</h5>
          <div className="tweaks__row">
            <label>Visual Theme</label>
            {['default', 'contrast', 'editorial'].map(t => (
              <button
                key={t}
                className={theme === t ? 'active' : ''}
                onClick={() => setTheme(t)}
              >{t}</button>
            ))}
          </div>
          <div className="tweaks__row">
            <label>Print</label>
            <button onClick={() => window.print()}>Export PDF</button>
          </div>
          <div style={{marginTop: 12, fontSize: 10, color: 'var(--muted-2)', lineHeight: 1.4}}>
            Scroll bar shows read progress. Click scoreboard column headers to sort.
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
