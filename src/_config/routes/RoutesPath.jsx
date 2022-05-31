import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import SearchPage from '../../pages/SearchPage/SearchPage';

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