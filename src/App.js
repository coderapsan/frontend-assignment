import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
