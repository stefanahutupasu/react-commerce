// src/components/Header.js

import React from 'react';
import './Header.css';
import logo from '../images/logo.png'; // Update the path based on your folder structure

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/categories">Categories</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
        {/* Add more navigation links as needed */}
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search products..." />
        <button type="button">Search</button>
      </div>
      <div className="user-actions">
        <button type="button">Account</button>
        <button type="button">Cart</button>
      </div>
    </header>
  );
}

export default Header;
