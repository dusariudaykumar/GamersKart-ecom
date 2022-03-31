import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
const NavBar = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <nav className="navigation-bar nav-container flex">
        <p className="hamberger-icon hide-content">
          <i className="material-icons-outlined">menu</i>
        </p>
        <h4 className="logo brand-name">
          <Link to="/"> GamersKart </Link>
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
            <div className="badge-container">
              <span className="nav-icons">
                <Link to="/" className="nav-wishlist-icon">
                  <i className="material-icons-outlined"> favorite_border </i>
                </Link>
              </span>
              <span className="wishlist-badge icon-badge-count bell-icon">
                0
              </span>
            </div>

            <div className="badge-container">
              <span className="nav-icons">
                <Link to="/cart" className="nav-cart-icon">
                  <i className="material-icons-outlined"> shopping_cart </i>
                </Link>
              </span>
              <span className="cart-badge icon-badge-count bell-icon">
                {cartItems.length}
              </span>
            </div>

            <Link to="/login" className="nav-person-icon">
              <i className="material-icons"> person </i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
