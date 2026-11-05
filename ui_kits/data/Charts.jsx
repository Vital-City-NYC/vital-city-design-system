/* global React */
const { useState } = React;

function DataNav({ active, onNav }) {
  const items = [
    { id: 'journal', label: 'The Journal' },
    { id: 'data', label: 'Data' },
    { id: 'more', label: '&More' },
    { id: 'about', label: 'About' },
  ];
  return (
    <header className="vc-nav">
      <a className="vc-nav__brand" href="#" onClick={e => e.preventDefault()}>
        <img className="vc-nav__wm" src="../../assets/vc-logo-black.png" alt="Vital City" />
        <span className="vc-nav__tag">Data.</span>
      </a>
      <nav className="vc-nav__links">
        {items.map(it => (
          <a key={it.id} href="#"
             className={`vc-nav__link ${active === it.id ? 'is-active' : ''}`}
             onClick={e => { e.preventDefault(); onNav(it.id); }}>{it.label}</a>
        ))}
      </nav>
      <a className="vc-btn" href="#" onClick={e => e.preventDefault()}>Donate</a>
    </header>
  );
}

// ---- Data primitives ----
function DataHero() {
  return (
    <section className="dx-hero">
      <p className="vc-kicker vc-kicker--orange">Data library</p>
      <h1 className="dx-hero__title">Numbers that tell the story of the city.</h1>
      <p className="dx-hero__dek">Opinionated visualizations of publicly available data, updated monthly. Sources are named; methodology is shown.</p>
    </section>
  );
}

function FilterBar({ active, onChange }) {
  const tabs = ['All', 'Crime', 'Subway', 'Housing', 'Health', 'Schools', 'Budget'];
  return (
    <div className="dx-filter">
      {tabs.map(t => (
        <button key={t} className={`dx-chip ${active === t ? 'is-active' : ''}`} onClick={() => onChange(t)}>{t}</button>
      ))}
    </div>
  );
}

function BarChart({ title, dek, data, source, highlightIndex, unit = '%' }) {
  const max = Math.max(...data.map(d => d.v));
  return (
    <figure className="dx-chart">
      <h3 className="dx-chart__title">{title}</h3>
      <p className="dx-chart__dek">{dek}</p>
      <div className="dx-chart__canvas" aria-hidden>
        <div className="dx-bars">
          {data.map((d, i) => {
            const h = (d.v / max) * 100;
            const focal = i === highlightIndex;
            return (
              <div key={d.label} className="dx-bar-col">
                <span className={`dx-bar-val ${focal ? 'is-focal' : ''}`}>{d.v}{unit}</span>
                <div className={`dx-bar ${focal ? 'is-focal' : ''}`} style={{ height: `${h}%` }} />
                <span className="dx-bar-lab">{d.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <p className="dx-chart__src"><strong>Source:</strong> {source}</p>
    </figure>
  );
}

function LineChart({ title, dek, series, source }) {
  const W = 640, H = 260, PAD_L = 40, PAD_R = 16, PAD_T = 14, PAD_B = 30;
  const all = series.flatMap(s => s.points.map(p => p.v));
  const max = Math.max(...all) * 1.1;
  const xs = series[0].points.map(p => p.t);
  const x = (i) => PAD_L + (i / (xs.length - 1)) * (W - PAD_L - PAD_R);
  const y = (v) => PAD_T + (1 - v / max) * (H - PAD_T - PAD_B);
  return (
    <figure className="dx-chart">
      <h3 className="dx-chart__title">{title}</h3>
      <p className="dx-chart__dek">{dek}</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="dx-line">
        {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
          <line key={i} x1={PAD_L} x2={W - PAD_R} y1={PAD_T + p * (H - PAD_T - PAD_B)} y2={PAD_T + p * (H - PAD_T - PAD_B)} stroke="#dddddd" />
        ))}
        {[0, 0.5, 1].map((p, i) => (
          <text key={i} x={PAD_L - 6} y={PAD_T + p * (H - PAD_T - PAD_B) + 4} textAnchor="end" fontSize="10" fill="#707175" fontFamily="var(--chart)">{Math.round(max * (1 - p))}</text>
        ))}
        {xs.map((t, i) => (
          <text key={i} x={x(i)} y={H - PAD_B + 18} textAnchor="middle" fontSize="10" fill="#707175" fontFamily="var(--chart)">{t}</text>
        ))}
        {series.map((s, si) => {
          const d = s.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(p.v)}`).join(' ');
          return (
            <g key={s.name}>
              <path d={d} fill="none" stroke={s.color} strokeWidth={s.focal ? 3 : 2} />
              <text x={x(s.points.length - 1) + 4} y={y(s.points[s.points.length - 1].v) + 3} fontSize="11" fontWeight="700" fill={s.color} fontFamily="var(--sans)">{s.name}</text>
            </g>
          );
        })}
      </svg>
      <p className="dx-chart__src"><strong>Source:</strong> {source}</p>
    </figure>
  );
}

function BigStat({ value, label, caption, tint = 'chartreuse' }) {
  return (
    <div className={`dx-stat dx-stat--${tint}`}>
      <div className="dx-stat__v">{value}</div>
      <div className="dx-stat__l">{label}</div>
      <div className="dx-stat__c">{caption}</div>
    </div>
  );
}

Object.assign(window, { DataNav, DataHero, FilterBar, BarChart, LineChart, BigStat });
