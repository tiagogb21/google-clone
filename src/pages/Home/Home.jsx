import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import googleLogo from '../../assets/img/google-logo.png';

import Search from '../../components/Search/Search';
import HomeFooter from '../../components/homeFooter/HomeFooter';
import Menu from '../../components/menu/Menu';

function Home() {
  const [verifyMenu, setVerifyMenu] = useState(true);

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header
        className="home"
      >
        <nav className="home__header">
          <article className="home__header-right">
            <a href="https://www.gmail.com">Gmail</a>
            <Link to="/images">Imagens</Link>
            <button
              type="button"
              className="apps__icon"
              onClick={() => setVerifyMenu(!verifyMenu)}
            >
              <AppsIcon />
              {
                verifyMenu && <Menu />
              }
            </button>
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
            <label
              htmlFor="google-search"
            >
              Pesquisa Google
              <input
                id="google-search"
                type="button"
                onClick={() => search}
              />
            </label>
            <label htmlFor="i-am-look">
              Estou com sorte
              <input id="i-am-look" type="button" />
            </label>
          </section>
          <section>
            <p>
              Disponibilizado pelo Google em:
              <Link
                to="/"
                target="_blank"
                className="language"
              >
                Inglês
              </Link>
            </p>
          </section>
        </section>
      </header>
      <HomeFooter />
    </>
  );
}

export default Home;
