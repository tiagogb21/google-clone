import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";

import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import googleLogo from '../../assets/img/google-logo.png'

function Home() {
  return (
    <header className="home">
      <nav className="home__header">
        <article className="home__header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </article>
        <article className="home__header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </article>
      </nav>
      <section className="home__body">
        <img
          src={googleLogo}
          alt="google logo"
        />
      </section>
    </header>
  )
}

export default Home