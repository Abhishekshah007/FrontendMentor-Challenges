import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Exports from './Exports';
import SingleCountry from './_components/SingleCountry/__SingleCountry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Exports />} />
        <Route path="/country/:id" element={<SingleCountry />} />
      </Routes>
    </Router>
  );
}

export default App;
