import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import googleLogo from '../../assets/img/google-logo.png';
import Search from '../../components/Search/Search';
import HomeFooter from '../../components/homeFooter/HomeFooter';

function Home() {
  return (
    <>
      <header className="home">
        <nav className="home__header">
          <article className="home__header-right">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Imagens</Link>
            <p className="apps__icon"><AppsIcon /></p>
            <Avatar />
          </article>
        </nav>
        <section className="home__body">
          <img
            src={googleLogo}
            alt="google logo"
          />
          <section className="home__container-input">
            <Search />
          </section>
          <section className="home__container-search">
            <label htmlFor="google-search">
              Pesquisa Google
              <input id="google-search" type="button" />
            </label>
            <label htmlFor="i-am-look">
              Estou com sorte
              <input id="i-am-look" type="button" />
            </label>
          </section>
        </section>
      </header>
      <HomeFooter />
    </>
  );
}

export default Home;
