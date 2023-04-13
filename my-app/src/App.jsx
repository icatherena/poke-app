import React, { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Description from './pages/description/description';
import List from './pages/list/list';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/list' element={<List />} exact />
      <Route path='/description/:id' element={<Description />} exact />
      <Route path='*' element={<Home />} exact />
    </Routes>
  );
}

export default App;