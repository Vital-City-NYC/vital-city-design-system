/* global React */
function Hero({ article, onOpen }) {
  return (
    <section className="vc-hero">
      <div className="vc-hero__media">
        <img src={article.image} alt="" />
        {article.credit && <span className="vc-credit vc-credit--ov">{article.credit}</span>}
      </div>
      <div className="vc-hero__panel">
        <p className="vc-kicker vc-kicker--orange">{article.kicker}</p>
        <h1 className="vc-hero__title">{article.title}</h1>
        <hr className="vc-hairline" />
        <p className="vc-hero__dek">{article.dek}</p>
        <p className="vc-hero__byline">{article.byline}</p>
        <a
          className="vc-btn vc-btn--sq"
          href="#"
          onClick={e => { e.preventDefault(); onOpen && onOpen(article); }}
        >Read the feature</a>
      </div>
    </section>
  );
}

function SectionHead({ title, linkLabel, onLink }) {
  return (
    <div className="vc-sec">
      <div className="vc-sec__top">
        <h2 className="vc-sec__title">{title}</h2>
        {linkLabel && (
          <a
            className="vc-sec__link"
            href="#"
            onClick={e => { e.preventDefault(); onLink && onLink(); }}
          >{linkLabel} →</a>
        )}
      </div>
      <hr className="vc-sec__rule" />
    </div>
  );
}

function ArticleCard({ article, onOpen }) {
  return (
    <a
      className="vc-art"
      href="#"
      onClick={e => { e.preventDefault(); onOpen && onOpen(article); }}
    >
      <div className="vc-art__media">
        <img src={article.image} alt="" />
        {article.tag && <span className="vc-art__tag">{article.tag}</span>}
        {article.credit && <span className="vc-credit vc-credit--ov">{article.credit}</span>}
      </div>
      <h3 className="vc-art__title">{article.title}</h3>
      {article.dek && <p className="vc-art__dek">{article.dek}</p>}
      <span className="vc-art__byline">{article.byline}</span>
    </a>
  );
}

function PhotoTag({ item, onOpen }) {
  return (
    <a
      className="vc-pt"
      href="#"
      onClick={e => { e.preventDefault(); onOpen && onOpen(item); }}
    >
      <img src={item.image} alt="" />
      <span className="vc-pt__tag">{item.tag} <span aria-hidden>↑</span></span>
    </a>
  );
}

Object.assign(window, { Hero, SectionHead, ArticleCard, PhotoTag });
