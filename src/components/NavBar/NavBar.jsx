import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { toast } from "react-toastify";
const NavBar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const isLogin = localStorage.getItem("token") ? true : false;
  const logoutHandler = () => {
    localStorage.clear();
    toast.success("Logout Done");
    setTimeout(() => {
      navigate(0);
    }, 3000);
  };
  return (
    <div>
      <nav className="navigation-bar nav-container flex">
        <div className=" nav-left-wrapper flex">
          <p className="hamberger-icon hide-content">
            <i className="material-icons-outlined">menu</i>
          </p>
          <h4 className="logo brand-name">
            <Link to="/"> GamersKart </Link>
          </h4>
        </div>
        <div className="navigation-right-icons ">
          <div className="nav-right-icons-container">
            <div className="badge-container">
              <span className="nav-icons">
                <Link to="/wishlist" className="nav-wishlist-icon">
                  <i className="material-icons-outlined"> favorite_border </i>
                </Link>
              </span>
              <span className="wishlist-badge icon-badge-count bell-icon">
                {wishlistItems.length}
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
              {isLogin ? (
                <button className="auth-btn" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <button className="auth-btn">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
