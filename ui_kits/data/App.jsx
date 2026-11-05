/* global React, DataNav, DataHero, FilterBar, BarChart, LineChart, BigStat */
const { useState } = React;

const SHOOTING_DATA = [
  { label: '2018', v: 9.8 }, { label: '2019', v: 11.5 }, { label: '2020', v: 12.6 },
  { label: '2021', v: 13.4 }, { label: '2022', v: 6.3 }, { label: '2023', v: 8.2 },
  { label: '2024', v: 11.9 }, { label: '2025', v: 14.2 },
];

const MURDER_SERIES = [
  { name: 'NYC', color: '#e7466d', focal: true, points: [
    { t: '2019', v: 319 }, { t: '2020', v: 468 }, { t: '2021', v: 485 }, { t: '2022', v: 433 },
    { t: '2023', v: 391 }, { t: '2024', v: 371 }, { t: '2025', v: 322 },
  ]},
  { name: 'Chicago', color: '#217ebe', points: [
    { t: '2019', v: 492 }, { t: '2020', v: 772 }, { t: '2021', v: 803 }, { t: '2022', v: 697 },
    { t: '2023', v: 617 }, { t: '2024', v: 573 }, { t: '2025', v: 520 },
  ]},
  { name: 'LA', color: '#9b9fbc', points: [
    { t: '2019', v: 253 }, { t: '2020', v: 351 }, { t: '2021', v: 397 }, { t: '2022', v: 383 },
    { t: '2023', v: 327 }, { t: '2024', v: 280 }, { t: '2025', v: 249 },
  ]},
];

const DATASETS = [
  { id: 's1', tag: 'Crime', title: 'NYPD shooting-free days', image: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?w=600&h=750&fit=crop' },
  { id: 's2', tag: 'Subway', title: 'Weekday ridership recovery', image: 'https://images.unsplash.com/photo-1556122071-e404cb6f31c0?w=600&h=750&fit=crop' },
  { id: 's3', tag: 'Housing', title: 'New building permits', image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=600&h=750&fit=crop' },
  { id: 's4', tag: 'Health', title: 'ER visits by cause', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&h=750&fit=crop' },
  { id: 's5', tag: 'Schools', title: 'Chronic absenteeism', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=750&fit=crop' },
  { id: 's6', tag: 'Budget', title: 'Where the money goes', image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=600&h=750&fit=crop' },
];

function DashboardPage({ onOpen }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? DATASETS : DATASETS.filter(d => d.tag === filter);
  return (
    <>
      <DataHero />
      <div className="vc-wrap dx-stats">
        <BigStat value="14.2%" label="Shooting-free days, 2025" caption="~1 in 7 days in NYC" tint="chartreuse" />
        <BigStat value="322" label="Murders in 2025" caption="Lowest since 2017" tint="magenta" />
        <BigStat value="+6.1%" label="Subway ridership YoY" caption="Still 78% of 2019 levels" tint="cerulean" />
      </div>
      <div className="vc-wrap">
        <BarChart
          title="1 in 7 days in 2025 were shooting-free in New York City"
          dek="Percent of days with zero shootings reported to NYPD, by year"
          data={SHOOTING_DATA} highlightIndex={7}
          source={<><u>NYPD Shooting Incident Data (Historic)</u>, NYC Open Data. Illustrative year-to-date figures.</>}
        />
      </div>
      <div className="vc-wrap">
        <LineChart
          title="Murders in NYC are below prepandemic — unlike peer cities"
          dek="Annual murders in three largest US cities, 2019–2025"
          series={MURDER_SERIES}
          source={<>City police departments; compiled by Vital City. Illustrative figures.</>}
        />
      </div>
      <div className="vc-wrap">
        <div className="dx-ix-head">
          <h2 className="vc-sec__title">Explore the library</h2>
          <FilterBar active={filter} onChange={setFilter} />
        </div>
        <hr className="vc-sec__rule" />
        <div className="dx-grid">
          {filtered.map(d => (
            <a key={d.id} className="dx-tile" href="#" onClick={e => { e.preventDefault(); onOpen(d); }}>
              <img src={d.image} alt="" />
              <span className="vc-pt__tag">{d.tag} <span aria-hidden>↑</span></span>
              <span className="dx-tile__t">{d.title}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function DetailPage({ item, onBack }) {
  return (
    <div className="vc-wrap dx-detail">
      <button className="vc-btn vc-btn--ghost vc-btn--sq" onClick={onBack}>← Back to data</button>
      <p className="vc-kicker vc-kicker--orange" style={{marginTop:'24px'}}>{item.tag}</p>
      <h1 className="dx-detail__title">{item.title}</h1>
      <p className="dx-detail__dek">Detail view with a full-width chart, methodology, and downloads. Built to be shared on social and embedded in Journal articles.</p>
      <BarChart
        title={`${item.title} — full view`}
        dek="Placeholder chart — swap in the dataset-specific visualization"
        data={SHOOTING_DATA} highlightIndex={7}
        source={<>Vital City · illustrative data.</>}
      />
      <div className="dx-downloads">
        <a className="vc-btn vc-btn--ghost vc-btn--sq" href="#" onClick={e=>e.preventDefault()}>Download CSV</a>
        <a className="vc-btn vc-btn--ghost vc-btn--sq" href="#" onClick={e=>e.preventDefault()}>Download PNG</a>
        <a className="vc-btn vc-btn--sq" href="#" onClick={e=>e.preventDefault()}>Share →</a>
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState({ name: 'home' });
  return (
    <div className="vc-app">
      <DataNav active="data" onNav={() => setRoute({ name: 'home' })} />
      <main>
        {route.name === 'home' && <DashboardPage onOpen={(d) => setRoute({ name: 'detail', item: d })} />}
        {route.name === 'detail' && <DetailPage item={route.item} onBack={() => setRoute({ name: 'home' })} />}
      </main>
    </div>
  );
}

Object.assign(window, { App });
