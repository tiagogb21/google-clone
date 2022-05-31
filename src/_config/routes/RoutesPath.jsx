import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ConnectedRouter } from "connected-react-router";

import Main from '../../pages/main/Main';
import Book from '../../pages/book/Book';

function RoutesPath() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search-page" exact element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default RoutesPath;