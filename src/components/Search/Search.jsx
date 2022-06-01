import React, { useState } from 'react';

import { SearchSharp, Mic } from '@material-ui/icons';

import './Search.css';

function Search() {
  const [input, setInput] = useState('');
  return (
    <section className="search">
      <article className="search__input">
        <SearchSharp className="search__input-icon" />
        <input
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <Mic />
      </article>
    </section>
  );
}

export default Search;
