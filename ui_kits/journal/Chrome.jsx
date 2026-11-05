/* global React */
const { useState } = React;

function Nav({ active = 'journal', onNav }) {
  const items = [
    { id: 'journal', label: 'The Journal' },
    { id: 'data', label: 'Data' },
    { id: 'more', label: '&More' },
    { id: 'contributors', label: 'Contributors' },
    { id: 'about', label: 'About' },
  ];
  return (
    <header className="vc-nav">
      <a className="vc-nav__brand" href="#" onClick={e => { e.preventDefault(); onNav && onNav('journal'); }}>
        <img className="vc-nav__wm" src="../../assets/vc-logo-black.png" alt="Vital City" />
        <span className="vc-nav__tag">Journal.</span>
      </a>
      <nav className="vc-nav__links">
        {items.map(it => (
          <a
            key={it.id}
            href="#"
            className={`vc-nav__link ${active === it.id ? 'is-active' : ''}`}
            onClick={e => { e.preventDefault(); onNav && onNav(it.id); }}
          >{it.label}</a>
        ))}
      </nav>
      <a className="vc-btn" href="#" onClick={e => e.preventDefault()}>Donate</a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="vc-foot">
      <div className="vc-foot__brand">
        <img className="vc-foot__wm" src="../../assets/vc-logo-black.png" alt="Vital City" />
        <p className="vc-foot__tag">Civil conversation. Enlightening data. New ideas.</p>
      </div>
      <div className="vc-foot__col">
        <h4>Explore</h4>
        <ul><li><a href="#">Journal</a></li><li><a href="#">Data</a></li><li><a href="#">&amp;More</a></li></ul>
      </div>
      <div className="vc-foot__col">
        <h4>Get involved</h4>
        <ul><li><a href="#">Donate</a></li><li><a href="#">Write for us</a></li><li><a href="#">Events</a></li></ul>
      </div>
      <div className="vc-foot__col">
        <h4>Follow</h4>
        <ul><li><a href="#">Newsletter</a></li><li><a href="#">Twitter / X</a></li><li><a href="#">LinkedIn</a></li></ul>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
