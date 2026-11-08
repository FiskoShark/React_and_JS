import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/ProductPage.css";

import deliveryIcon from '../assets/icons/delivery.svg';
import returnIcon from '../assets/icons/return.svg';
import coolIcon from '../assets/icons/cool.svg';
import cartIcon from '../assets/icons/cart.svg'; 
import heartIcon2 from '../assets/icons/heart_icon2.svg';

import mainImg from '../assets/icons/img4.png';
import thumb1 from '../assets/icons/img1.png';
import thumb2 from '../assets/icons/img2.png';
import thumb3 from '../assets/icons/img3.png';
import thumb4 from '../assets/icons/img4.png';

import rec1 from '../assets/icons/iphone-16-pro-max-black.png';
import rec2 from '../assets/icons/iphone-14-plus.png';
import rec3 from '../assets/icons/iphone-14-pro-max-silver.png';
import rec4 from '../assets/icons/iphone-15-pro-max-black.png';

const recommendedProducts = [
  { id: 5, img: rec1, title: 'Apple iPhone 16 Pro Max 512GB Black Titanium', price: '78 999 ₴' },
  { id: 6, img: rec2, title: 'Apple iPhone 14 Plus 512GB', price: '56 999 ₴' },
  { id: 7, img: rec3, title: 'Apple iPhone 14 Pro Max 1T Silver', price: '84 999 ₴' },
  { id: 8, img: rec4, title: 'Apple iPhone 15 Pro Max 1T Black Titanium', price: '74 999 ₴' },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(mainImg);
  const [selectedStorage, setSelectedStorage] = useState('512 GB');
  const [selectedVersion, setSelectedVersion] = useState('e-SIM');
  const navigate = useNavigate();

  return (
    <main className="product-page">
      <div className="breadcrumbs">
        <span>Головна</span> / <span>Вона</span> / <span>Одяг</span> / <span className="current">Блузи</span>
      </div>

      <div className="product-main-container">
        
        <div className="product-gallery">
          <div className="thumbnails-column">
            {[thumb1, thumb2, thumb3, thumb4].map((img, index) => (
              <div 
                key={index} 
                className={`thumb-item ${selectedImage === img ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="big-image-box" style={{ backgroundImage: `url(${selectedImage})` }} />
        </div>

        {/* Інформація праворуч */}
        <div className="product-info-column">
          <div className="product-header-row">
            <h1 className="product-page-title">Смартфон Apple iPhone 15 Pro Max 512GB eSim Natural Titanium</h1>
            <span className="in-stock">Є в наявності</span>
          </div>

          <div className="colors-row">
            <div className="color-circle" style={{ background: '#121212' }} />
            <div className="color-circle" style={{ background: '#E0E0E0' }} />
            <div className="color-circle" style={{ background: '#AAE6AC' }} />
            <div className="color-circle" style={{ background: '#F5CCE9' }} />
            <div className="color-circle" style={{ background: '#F1C97F' }} />
            <div className="color-circle" style={{ background: '#8AC3F1' }} />
          </div>

          <div className="option-section">
            <h3 className="option-label">Пам’ять</h3>
            <div className="options-grid">
              {['512 GB', '256 GB', '128 GB'].map((storage) => (
                <button
                  key={storage}
                  className={`option-btn ${selectedStorage === storage ? 'active' : ''}`}
                  onClick={() => setSelectedStorage(storage)}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>


          <div className="version-price-container">
            <div className="option-section" style={{ marginBottom: 0 }}>
              <h3 className="option-label">Версія</h3>
              <div className="options-grid">
                {['e-SIM', 'Global'].map((version) => (
                  <button
                    key={version}
                    className={`option-btn ${selectedVersion === version ? 'active' : ''}`}
                    onClick={() => setSelectedVersion(version)}
                  >
                    {version}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-page-price">60 999 ₴</div>
          </div>

          {/* Кнопки купівлі та обраного з SVG */}
          <div className="action-buttons-row">

            <button className="buy-btn" onClick={() => navigate('/')}>
              <span>Додати у кошик</span>
              <img src={cartIcon} alt="Cart" className="btn-icon" />
            </button>
            <button className="wishlist-btn">
              <img src={heartIcon2} alt="Wishlist" className="btn-icon" />
              <span>Обране</span>
            </button>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <img src={deliveryIcon} alt="Delivery" className="feature-svg" />
              <span>Доставка у відділення Нова Пошта</span>
            </div>
            <div className="feature-item">
              <img src={returnIcon} alt="Return" className="feature-svg" />
              <span>30 днів на повернення</span>
            </div>
            <div className="feature-item">
              <img src={coolIcon} alt="Cool" className="feature-svg" />
              <span>Заощаджуй з Cool</span>
            </div>
          </div>

          <div className="accordion-list">
            <div className="accordion-item"><span>Опис товару</span> <span>⌄</span></div>
            <div className="accordion-item"><span>Доставка</span> <span>⌄</span></div>
            <div className="accordion-item"><span>Повернення та Рекламація</span> <span>⌄</span></div>
          </div>
        </div>

      </div>

      <div className="recommended-section">
        <h2 className="recommended-title">Рекомендовані товари</h2>
        <div className="catalog-container">
          <button className="arrow-btn left-arrow">&#10094;</button>
          
          <div className="products-grid">
            {recommendedProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-image-box" style={{ backgroundImage: `url(${item.img})` }}>
                  <button className="like-btn">
                    <img src={heartIcon2} alt="Like" />
                  </button>
                </div>
                <p className="product-title">{item.title}</p>
                <div className="product-price">{item.price}</div>
              </div>
            ))}
          </div>

          <button className="arrow-btn right-arrow">&#10095;</button>
        </div>
      </div>
    </main>
  );
}



