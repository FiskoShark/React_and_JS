import React, { useState } from 'react';
import '../styles/ProductSection.css';
import heartIcon from '../assets/icons/heart-icon.svg';

import img1 from '../assets/icons/iphone-15-pro-max-natural.png';
import img2 from '../assets/icons/iphone-16-pro-black.png';
import img3 from '../assets/icons/iphone-16-white.png';
import img4 from '../assets/icons/iphone-14-pro-max-gold.png';
import img5 from '../assets/icons/iphone-16-pro-max-black.png';
import img6 from '../assets/icons/iphone-14-plus.png';
import img7 from '../assets/icons/iphone-14-pro-max-silver.png';
import img8 from '../assets/icons/iphone-15-pro-max-black.png';


const productsData = [
  { id: 1, img: img1, title: 'Apple iPhone 15 Pro Max 512Gb Natural Titanium (1 sim + eSIM)', price: '60 999 ₴' },
  { id: 2, img: img2, title: 'Apple iPhone 16 Pro 256GB Black Titanium', price: '65 999 ₴' },
  { id: 3, img: img3, title: 'Apple iPhone 16 128GB White', price: '37 999 ₴' },
  { id: 4, img: img4, title: 'Apple iPhone 14 Pro Max 128GB Gold', price: '45 999 ₴' },
  { id: 5, img: img5, title: 'Apple iPhone 16 Pro Max 512GB Black Titanium', price: '78 999 ₴' },
  { id: 6, img: img6, title: 'Apple iPhone 14 Plus 512GB', price: '56 999 ₴' },
  { id: 7, img: img7, title: 'Apple iPhone 14 Pro Max 1T Silver', price: '84 999 ₴' },
  { id: 8, img: img8, title: 'Apple iPhone 15 Pro Max 1T Black Titanium', price: '74 999 ₴' },
];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('hits');

  return (
    <section className="product-section">
      {/* Таби перемикання */}
      
      <div className="product-tabs">
        <button 
          className={`tab-item ${activeTab === 'hits' ? 'active' : ''}`}
          onClick={() => setActiveTab('hits')}
        >
          Хіти продаж
        </button>
        <button 
          className={`tab-item ${activeTab === 'new' ? 'active' : ''}`}
          onClick={() => setActiveTab('new')}
        >
          Новинки
        </button>
        <button 
          className={`tab-item ${activeTab === 'iphone' ? 'active' : ''}`}
          onClick={() => setActiveTab('iphone')}
        >
          iPhone
        </button>
      </div>

      {/* container */}
    <div className="catalog-container">
        <button className="arrow-btn left-arrow">&#10094;</button>

        <div className="products-grid">
          {productsData.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image-box" style={{ backgroundImage: `url(${item.img})` }}>
                <button className="like-btn">
                  <img src={heartIcon} alt="Like" className="like-icon" />
                </button>
              </div>
              <p className="product-title">{item.title}</p>
              <div className="product-price">{item.price}</div>
            </div>
          ))}
        </div>

        <button className="arrow-btn right-arrow">&#10095;</button>
      </div>
    </section>
  );
}


