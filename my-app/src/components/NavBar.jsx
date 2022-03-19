import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="navigation-bar nav-container flex">
        <a href="#" class="hamberger-icon hide-content">
          <i class="material-icons-outlined">menu</i>
        </a>
        <h4 class="logo brand-name">
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

        <div class="navigation-right-icons ">
          <div class="search-filter">
            <span class="icon-search">
              <i class="fas fa-search"></i>
            </span>
            <input
              class="search-space"
              type="search"
              placeholder="What are you looking for ?"
            />
          </div>
          <div className="nav-right-icons-container">
            <a href="#" class="nav-wishlist-icon">
              <i class="material-icons-outlined"> favorite_border </i>
            </a>
            <a href="#" class="nav-cart-icon">
              <i class="material-icons-outlined"> shopping_cart </i>
            </a>
            <a href="#" class="nav-person-icon">
              <i class="material-icons"> person </i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
