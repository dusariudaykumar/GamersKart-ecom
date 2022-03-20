import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navigation-bar nav-container flex">
        <a href="#" className="hamberger-icon hide-content">
          <i className="material-icons-outlined">menu</i>
        </a>
        <h4 className="logo brand-name">
          <a href="#"> ReadyMade-UI </a>
        </h4>
        <div className="nav-list flex ">
          <a href="#">
            <p>HOME</p>
          </a>
          <a href="#">
            <p>PRODUCTS</p>
          </a>
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
            <a href="#" className="nav-wishlist-icon">
              <i className="material-icons-outlined"> favorite_border </i>
            </a>
            <a href="#" className="nav-cart-icon">
              <i className="material-icons-outlined"> shopping_cart </i>
            </a>
            <a href="#" className="nav-person-icon">
              <i className="material-icons"> person </i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
