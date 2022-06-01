import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GoSearch, GoLocation } from 'react-icons/go';
import { BiNews } from 'react-icons/bi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsCardImage } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';

import { fetchAPI } from '../../fetch/api';

import './SearchPage.css';

function SearchPage() {
  const [inputSearch, setInputSearch] = useState('');
  const [items, setItems] = useState('');
  const [searchInformation, setSearchInformation] = useState('');

  const t = async () => {
    const getData = await fetchAPI(inputSearch || 'google');
    setItems(getData.items);
    setSearchInformation(getData.searchInformation);
  };

  useEffect(() => {
    t();
  }, []);

  return (
    <main className="search__page">
      <section className="search__page-header">
        <img src="" alt="" />
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            value={inputSearch}
            onClick={({ target }) => setInputSearch(target.value)}
          />
        </label>
      </section>
      <section className="search__page-results">
        <nav className="search__nav-option">
          <section>
            <Link to="/">
              <GoSearch />
              Todas
            </Link>
            <Link to="/">
              <BiNews />
              Noticias
            </Link>
            <Link to="/">
              <AiOutlineYoutube />
              Videos
            </Link>
            <Link to="/">
              <BsCardImage />
              imagens
            </Link>
            <Link to="/">
              <GoLocation />
              Maps
            </Link>
            <Link to="/">
              <FiMoreVertical />
              Mais
            </Link>
          </section>
          <Link to="/">Ferramentas</Link>
        </nav>
        <p>
          Aproximadamente
          {' '}
          {searchInformation.totalResults}
          {' '}
          resultados (
          {searchInformation.searchTime}
          {' '}
          segundos)
        </p>
      </section>
      <section className="container__search-items">
        <section className="search__items">
          {
          items.length > 0
          && (
            items.map((item) => (
              <article key={item.cacheId} className="box__item">
                <a href={item.link}>{ item.title }</a>
                <p>{ item.snippet }</p>
              </article>
            ))
          )
        }
        </section>
        <section className="container__plus">
          <h3>Ver resultados relacionados</h3>
        </section>
      </section>
    </main>
  );
}

export default SearchPage;
