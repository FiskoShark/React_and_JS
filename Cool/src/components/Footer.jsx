import React from 'react';
import '../styles/Footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">COOL</div>
        
        <nav className="footer-links">
          <a href="#delivery">Замовлення та доставка</a>
          <a href="#new">Новинки</a>
          <a href="#hits">Хіт продаж</a>
          <a href="#contacts">Контакти</a>
        </nav>
      </div>
    </footer>
  );
}

