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

  const t = async () => {
    const getData = await fetchAPI(inputSearch);
    setInputSearch(getData);
  };

  useEffect(() => {
    t();
  }, []);

  return (
    <main className="search__page">
      <section className="search__page-header">
        <img src="" alt="" />
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
      </section>
    </main>
  );
}

export default SearchPage;
