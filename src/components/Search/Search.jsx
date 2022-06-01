import React from 'react';

import { SearchSharp, Mic } from '@material-ui/icons';

import './Search.css';

function Search() {
  return (
    <section className="search">
      <article className="search__input">
        <SearchSharp className="search__input-icon" />
        <input />
        <Mic />
      </article>
    </section>
  );
}

export default Search;
