import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">COOL-ціни, які <span className="highlight">шокують</span>!</h1>        
          <button className="hero-btn" onClick={() => navigate('/product')}>
          Замовити
        </button>
      </div>
    </section>
  );
}

