import React from 'react';

import { Link } from 'react-router-dom';

import './HomeFooter.css';

function HomeFooter() {
  return (
    <section className="footer">
      <section className="about__nav">
        <Link to="/about">Sobre</Link>
        <Link to="/publicity">Publicidade</Link>
        <Link to="/business">Negócios</Link>
        <Link to="/know-more">Como funciona a pesquisa</Link>
      </section>
      <section className="terms__nav">
        <Link to="/about">Privacidade</Link>
        <Link to="/about">Termos</Link>
        <Link to="/about">Configurações</Link>
      </section>
    </section>
  );
}

export default HomeFooter;
