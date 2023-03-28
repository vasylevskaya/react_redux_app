import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductNew from './pages/ProductNew';

function App() {
  return (
    <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ProductNew />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
