import React from 'react';
import '../styles/Header.css';

import heartIcon from '../assets/icons/heart.svg';
import searchIcon from '../assets/icons/search.svg';
import cartIcon from '../assets/icons/cartHdr.svg';
import phoneIcon from '../assets/icons/phone.svg';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-container">
          <div className="logo">COOL</div>

          <div className="header-actions">
            <button className="action-btn" aria-label="Favorites">
              <img src={heartIcon} alt="Favorites" />
            </button>

            <button className="action-btn" aria-label="Search">
              <img src={searchIcon} alt="Search" />
            </button>

            <button className="action-btn" aria-label="Cart">
              <img src={cartIcon} alt="Cart" />
            </button>

          </div>
        </div>
      </div>

      <nav className="header-bottom">
        <div className="header-container nav-content">
          <ul className="nav-links">
            <li><a href="#iphone">IPHONE</a></li>
            <li><a href="#ipad">IPAD</a></li>
            <li><a href="#watch">WATCH</a></li>
            <li><a href="#macbook">MACBOOK</a></li>
            <li><a href="#iphone-used">IPHONE Б/В</a></li>
          </ul>
          <a href="tel:0973008055" className="phone-link">
            <img src={phoneIcon} alt="Phone" /> (097) 3008 055
          </a>
        </div>
      </nav>
    </header>
  );
}


