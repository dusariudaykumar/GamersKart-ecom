import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="navigation-bar nav-container flex">
        <a href="#" class="hamberger-icon">
          <i class="material-icons-outlined">menu</i>
        </a>
        <h4 class="logo brand-name">
          <a href="#"> ReadyMade-UI </a>
        </h4>
        <div class="navigation-right-icons">
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
      </nav>
    </div>
  );
};

export default NavBar;
