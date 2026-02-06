"use client";

import React, { useState } from 'react';
import './PetShop.css';

const PetShop = ({ onBack, currentCoins, onBuyItem }) => {
    const [items, setItems] = useState([
        { id: 1, name: "Party Hat", price: 50, icon: "🎉", purchased: false },
        { id: 2, name: "Cool Shades", price: 100, icon: "🕶️", purchased: false },
        { id: 3, name: "Magic Potion", price: 20, icon: "🧪", purchased: false },
        { id: 4, name: "Red Cape", price: 150, icon: "🦸", purchased: false },
    ]);

    const handleBuy = (id, price) => {
        const item = items.find(i => i.id === id);
        if (item.purchased) return;

        if (currentCoins >= price) {
            onBuyItem(price); // Deduct coins in parent
            setItems(items.map(i => i.id === id ? { ...i, purchased: true } : i));
            alert(`You bought ${item.name}! 🎉`);
        } else {
            alert("Not enough coins! 😢 Do more quests!");
        }
    };

    return (
        <div className="dailymon-container">
            <div className="pet-shop-header">
                <h2 className="pet-shop-title">Pet Shop</h2>
                <div className="currency-streak" style={{ justifyContent: 'center' }}>
                    <div className="stat-pill">
                        🪙 {currentCoins}
                    </div>
                </div>
            </div>

            <div className="featured-banner">
                <h3>Season Special</h3>
                <p>Get the Super Hero set!</p>
                <div style={{ fontSize: '60px', marginTop: '10px' }}>🦸‍♂️</div>
            </div>

            <div className="shop-grid">
                {items.map((item) => (
                    <div key={item.id} className="shop-item">
                        <div className="item-icon">{item.icon}</div>
                        <h4 className="item-name">{item.name}</h4>
                        <span className="item-price">🪙 {item.price}</span>
                        <button
                            className={`btn-buy ${item.purchased ? 'purchased' : ''}`}
                            onClick={() => handleBuy(item.id, item.price)}
                        >
                            {item.purchased ? 'Owned' : 'Buy'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Navigation (Simplified for Demo) */}
            <nav className="bottom-nav">
                <div className="nav-item" onClick={onBack}>
                    <span className="nav-icon">⚔️</span>
                    Quests
                </div>
                <div className="nav-item active">
                    <span className="nav-icon">🛍️</span>
                    Shop
                </div>
                <div className="nav-item">
                    <span className="nav-icon">👥</span>
                    Social
                </div>
                <div className="nav-item">
                    <span className="nav-icon">👤</span>
                    Profile
                </div>
            </nav>
        </div>
    );
};

export default PetShop;
