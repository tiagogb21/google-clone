import React from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';

import { paths1, paths2 } from '../../data/data';

function Menu() {
  return (
    <section className="path__container">
      <section className="path1__box">
        {
          paths1.map((path) => (
            <Link to="/">{path}</Link>
          ))
        }
      </section>
      <section className="path2__box">
        {
          paths2.map((path) => (
            <Link to="/">{path}</Link>
          ))
        }
      </section>
      <button
        type="button"
      >
        mais do google
      </button>
    </section>
  );
}

export default Menu;
