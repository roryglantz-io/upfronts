// ============================================================================
// CHARTS — Hand-crafted SVG editorial charts
// ============================================================================

// Streaming vs Linear ad sales over time — dueling bars
function ChartGap({ data }) {
  const W = 600, H = 360, P = { t: 30, r: 20, b: 50, l: 48 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  const max = 45;
  const barW = (iw / data.length) * 0.35;
  const stepX = iw / data.length;

  return (
    <div className="chart">
      <div className="chart__title">The Gap Is Closing</div>
      <div className="chart__sub">U.S. ad sales, billions — streaming vs. linear national TV, 2022–2026(E)</div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {/* Y axis ticks */}
        {[0, 10, 20, 30, 40].map(v => {
          const y = P.t + ih - (v / max) * ih;
          return (
            <g key={v}>
              <line x1={P.l} x2={W - P.r} y1={y} y2={y} stroke="#D9D3C2" strokeWidth="1" />
              <text x={P.l - 8} y={y + 4} textAnchor="end"
                style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#6B6B66' }}>
                ${v}B
              </text>
            </g>
          );
        })}
        {/* bars */}
        {data.map((d, i) => {
          const x = P.l + i * stepX + stepX * 0.5;
          const linearH = (d.linear / max) * ih;
          const streamH = (d.streaming / max) * ih;
          const linearY = P.t + ih - linearH;
          const streamY = P.t + ih - streamH;
          return (
            <g key={d.year}>
              <rect x={x - barW - 2} y={linearY} width={barW} height={linearH}
                fill="#121212" />
              <rect x={x + 2} y={streamY} width={barW} height={streamH}
                fill="#FF2D2D" />
              <text x={x - barW/2 - 2} y={linearY - 6} textAnchor="middle"
                style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#121212', fontWeight: 600 }}>
                ${d.linear}
              </text>
              <text x={x + barW/2 + 2} y={streamY - 6} textAnchor="middle"
                style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#FF2D2D', fontWeight: 600 }}>
                ${d.streaming}
              </text>
              <text x={x} y={H - 24} textAnchor="middle"
                style={{ fontFamily: 'Archivo Black', fontSize: 14, fill: '#121212' }}>
                {d.year}
              </text>
            </g>
          );
        })}
        {/* legend */}
        <g transform={`translate(${P.l}, 8)`}>
          <rect x="0" y="0" width="10" height="10" fill="#121212" />
          <text x="16" y="9" style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#121212' }}>LINEAR</text>
          <rect x="90" y="0" width="10" height="10" fill="#FF2D2D" />
          <text x="106" y="9" style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#FF2D2D' }}>STREAMING</text>
        </g>
      </svg>
      <div className="chart__source">Source · MAGNA, industry estimates · 2026 projected</div>
    </div>
  );
}

// Streaming share of 18-49 video time — area chart
function ChartStreamShare({ data }) {
  const W = 600, H = 320, P = { t: 30, r: 20, b: 40, l: 40 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  const xs = data.map((d, i) => P.l + (i / (data.length - 1)) * iw);
  const ys = data.map(d => P.t + ih - (d.value / 50) * ih);
  const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xs[i]} ${ys[i]}`).join(' ');
  const fill = `${path} L ${xs[xs.length-1]} ${P.t + ih} L ${xs[0]} ${P.t + ih} Z`;

  return (
    <div className="chart">
      <div className="chart__title">Streaming's Share of A18–49 Video Time</div>
      <div className="chart__sub">2% in 2014 → 45% in 2024. The curve didn't flatten.</div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
        {[0, 10, 20, 30, 40, 50].map(v => {
          const y = P.t + ih - (v / 50) * ih;
          return (
            <g key={v}>
              <line x1={P.l} x2={W - P.r} y1={y} y2={y} stroke="#D9D3C2" strokeWidth="1" />
              <text x={P.l - 6} y={y + 4} textAnchor="end"
                style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#6B6B66' }}>
                {v}%
              </text>
            </g>
          );
        })}
        <path d={fill} fill="#FF2D2D" fillOpacity="0.15" />
        <path d={path} fill="none" stroke="#FF2D2D" strokeWidth="3" />
        {data.map((d, i) => (
          <g key={d.year}>
            <circle cx={xs[i]} cy={ys[i]} r="4" fill="#FF2D2D" />
            <text x={xs[i]} y={H - 16} textAnchor="middle"
              style={{ fontFamily: 'JetBrains Mono', fontSize: 11, fill: '#121212' }}>
              {d.year}
            </text>
          </g>
        ))}
        {/* annotation */}
        <text x={xs[xs.length-1]} y={ys[ys.length-1] - 16} textAnchor="end"
          style={{ fontFamily: 'Archivo Black', fontSize: 18, fill: '#FF2D2D' }}>45%</text>
      </svg>
      <div className="chart__source">Source · MAGNA / Nielsen</div>
    </div>
  );
}

// Linear reach decline — single descending line
function ChartLinearReach({ data }) {
  const W = 600, H = 280, P = { t: 30, r: 20, b: 40, l: 44 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  const xs = data.map((d, i) => P.l + (i / (data.length - 1)) * iw);
  const ys = data.map(d => P.t + ih - (d.value / 100) * ih);
  const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xs[i]} ${ys[i]}`).join(' ');

  return (
    <div className="chart">
      <div className="chart__title">Linear TV Weekly Reach, Adults</div>
      <div className="chart__sub">93% in 2011 → 68% in 2024. A decade-long, irreversible slide.</div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
        {[0, 25, 50, 75, 100].map(v => {
          const y = P.t + ih - (v / 100) * ih;
          return (
            <g key={v}>
              <line x1={P.l} x2={W - P.r} y1={y} y2={y} stroke="#333" strokeWidth="1" strokeOpacity="0.3" />
              <text x={P.l - 6} y={y + 4} textAnchor="end"
                style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fill: '#9A9A93' }}>
                {v}%
              </text>
            </g>
          );
        })}
        <path d={path} fill="none" stroke="#FF2D2D" strokeWidth="3" />
        {data.map((d, i) => (
          <g key={d.year}>
            <circle cx={xs[i]} cy={ys[i]} r="4" fill="#FF2D2D" />
            <text x={xs[i]} y={H - 16} textAnchor="middle"
              style={{ fontFamily: 'JetBrains Mono', fontSize: 11, fill: '#FAF8F3' }}>
              {d.year}
            </text>
            <text x={xs[i]} y={ys[i] - 10} textAnchor="middle"
              style={{ fontFamily: 'Archivo Black', fontSize: 12, fill: '#FAF8F3' }}>
              {d.value}%
            </text>
          </g>
        ))}
      </svg>
      <div className="chart__source" style={{color: '#9A9A93'}}>Source · MAGNA</div>
    </div>
  );
}

Object.assign(window, { ChartGap, ChartStreamShare, ChartLinearReach });
