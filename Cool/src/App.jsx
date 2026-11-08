

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';

import './App.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductSection />
            </>
          } />

          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;


