/* global React, Nav, Footer, Hero, SectionHead, ArticleCard, PhotoTag */
const { useState } = React;

const FEATURE = {
  id: 'f1',
  kicker: 'Just Fix It · Apr. 14 2026',
  title: "Mamdani's first 100 days: a scorecard",
  dek: "How's he doing when it comes to helping the gears of government turn better, faster, and more responsively?",
  byline: 'Vital City editors',
  image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1400&h=900&fit=crop',
  credit: 'Photograph by Spencer Platt / Getty Images',
};

const JOURNAL_ARTICLES = [
  {
    id: 'a1', tag: 'City Planning',
    title: 'To prioritize pedestrians, we need to walk the walk',
    dek: 'Behind a major new effort to track pedestrian flows in New York',
    byline: 'Andres Sevtsuk',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&h=600&fit=crop',
    credit: 'Photograph by Drew Angerer / Getty Images',
  },
  {
    id: 'a2', tag: 'Criminal Justice',
    title: 'Murders are lower than prepandemic, but other crimes remain above 2019 levels',
    dek: 'A closer look at what the numbers actually show',
    byline: 'Vital City',
    image: 'https://images.unsplash.com/photo-1517504734587-2890819debab?w=900&h=600&fit=crop',
    credit: 'Photograph by Alex Webb / Magnum Photos',
  },
  {
    id: 'a3', tag: 'Housing',
    title: 'What a building boom in one borough tells us about the next decade',
    dek: 'Permits, pipelines, and the politics of growth',
    byline: 'Elena Park',
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=900&h=600&fit=crop',
    credit: 'Photograph by Gregoire Alessandrini',
  },
  {
    id: 'a4', tag: 'Transit',
    title: 'Congestion pricing, one year in',
    dek: "What changed, what didn't, what it funded",
    byline: 'R. Okafor',
    image: 'https://images.unsplash.com/photo-1556122071-e404cb6f31c0?w=900&h=600&fit=crop',
    credit: 'Photograph by Bruce Davidson / Magnum Photos',
  },
];

const DATA_ITEMS = [
  { id: 'd1', tag: 'Crime', image: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?w=600&h=750&fit=crop' },
  { id: 'd2', tag: 'Subway', image: 'https://images.unsplash.com/photo-1556122071-e404cb6f31c0?w=600&h=750&fit=crop' },
  { id: 'd3', tag: 'Housing', image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=600&h=750&fit=crop' },
];

function HomePage({ onOpen, onNav }) {
  return (
    <>
      <Hero article={FEATURE} onOpen={onOpen} />
      <div className="vc-wrap">
        <SectionHead title="The Journal" linkLabel="See all issues" onLink={() => onNav('journal')} />
        <div className="vc-grid-3">
          {JOURNAL_ARTICLES.slice(0, 3).map(a => <ArticleCard key={a.id} article={a} onOpen={onOpen} />)}
        </div>
      </div>
      <div className="vc-wrap">
        <SectionHead title="Data" linkLabel="See all data" onLink={() => onNav('data')} />
        <div className="vc-grid-3">
          {DATA_ITEMS.map(a => <PhotoTag key={a.id} item={a} onOpen={() => onNav('data')} />)}
        </div>
      </div>
      <div className="vc-wrap">
        <SectionHead title="&More" linkLabel="See the index" />
        <div className="vc-grid-2">
          {JOURNAL_ARTICLES.slice(2).map(a => <ArticleCard key={a.id} article={a} onOpen={onOpen} />)}
        </div>
      </div>
    </>
  );
}

function ArticlePage({ article, onBack }) {
  return (
    <article className="vc-article">
      <button className="vc-btn vc-btn--ghost vc-btn--sq vc-article__back" onClick={onBack}>← Back</button>
      <div className="vc-article__head">
        <p className="vc-kicker vc-kicker--orange">{article.kicker || article.tag}</p>
        <h1 className="vc-article__title">{article.title}</h1>
        <p className="vc-article__dek">{article.dek}</p>
        <p className="vc-article__byline">{article.byline}</p>
      </div>
      <div className="vc-article__hero"><img src={article.image} alt="" />{article.credit && <p className="vc-credit vc-credit--cap">{article.credit}</p>}</div>
      <div className="vc-article__body">
        <p className="vc-dropcap">On any given night, about 4,000 people are living on the streets and subways in New York City. Perhaps half of them — there is no perfect estimate — live with serious mental illness, addiction and other profound problems that put themselves and others at risk.</p>
        <p>The question of what to do about it has become one of the defining debates of the post-pandemic city, and a useful mirror on how we think about public space, public health, and the limits of government.</p>
        <blockquote className="vc-pullquote">If Vital City were a person, they would walk quite fast with efficiency and purpose, and slap the top of a cab to say thanks.</blockquote>
        <p>This feature is a placeholder for body copy. Real stories run 1,200–3,000 words and are interleaved with section heads, pullquotes, and charts rendered in the Vital City chart style — opinionated titles, a quiet dek, and a mandatory source line.</p>
      </div>
    </article>
  );
}

function JournalIndex({ onOpen }) {
  return (
    <div className="vc-wrap">
      <SectionHead title="The Journal" linkLabel="All issues" />
      <div className="vc-grid-3">
        {JOURNAL_ARTICLES.map(a => <ArticleCard key={a.id} article={a} onOpen={onOpen} />)}
      </div>
    </div>
  );
}

function DataIndex() {
  return (
    <div className="vc-wrap">
      <SectionHead title="Data" linkLabel="Open the data library" />
      <div className="vc-grid-3">
        {DATA_ITEMS.map(a => <PhotoTag key={a.id} item={a} />)}
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState({ name: 'home' });
  const openArticle = (a) => setRoute({ name: 'article', article: a });
  const nav = (id) => setRoute({ name: id });

  let active = route.name === 'article' ? 'journal' : route.name;
  if (route.name === 'home') active = 'journal';

  return (
    <div className="vc-app">
      <Nav active={active} onNav={nav} />
      <main>
        {route.name === 'home' && <HomePage onOpen={openArticle} onNav={nav} />}
        {route.name === 'journal' && <JournalIndex onOpen={openArticle} />}
        {route.name === 'data' && <DataIndex />}
        {route.name === 'more' && <div className="vc-wrap"><SectionHead title="&More" /><p className="vc-placeholder">Podcasts, events, and essays live here.</p></div>}
        {route.name === 'contributors' && <div className="vc-wrap"><SectionHead title="Contributors" /><p className="vc-placeholder">Contributor directory.</p></div>}
        {route.name === 'about' && <div className="vc-wrap"><SectionHead title="About" /><p className="vc-placeholder">Vital City is a journal of urban affairs.</p></div>}
        {route.name === 'article' && <ArticlePage article={route.article} onBack={() => setRoute({ name: 'home' })} />}
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { App });
