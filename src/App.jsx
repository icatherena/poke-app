import React, { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Description from './pages/description/description';
import List from './pages/list/list';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/lista' element={<List />} exact />
        <Route path='/descripcion/:id' element={<Description />} exact />
        <Route path='*' element={<Home />} exact />
      </Routes>
    </ThemeProvider>
  );
}

export default App;