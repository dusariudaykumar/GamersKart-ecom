import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <nav className="navigation-bar nav-container flex">

        <p className="hamberger-icon hide-content">
          <i className="material-icons-outlined">menu</i>
        </p>
        <h4 className="logo brand-name">
          <a href="/"> GamersKart </a>
        </h4>
        <div className="nav-list flex ">
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/products" className="products-link">
            Products
          </Link>

       
        </div>

        <div className="navigation-right-icons ">
          <div className="search-filter">
            <span className="icon-search">
              <i className="fas fa-search"></i>
            </span>
            <input
              className="search-space"
              type="search"
              placeholder="What are you looking for ?"
            />
          </div>
          <div className="nav-right-icons-container">

            <a href="https://www.google.com/" className="nav-wishlist-icon">
              <i className="material-icons-outlined"> favorite_border </i>
            </a>
            <a href="https://www.google.com/" className="nav-cart-icon">
              <i className="material-icons-outlined"> shopping_cart </i>
            </a>
            <a href="https://www.google.com/" className="nav-person-icon">

           

              <i className="material-icons"> person </i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};


export { NavBar };

