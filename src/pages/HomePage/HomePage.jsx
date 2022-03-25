import React from "react";
import { images } from "../../Asserts/homepage";

import { Link } from "react-router-dom";

import "./homepage.css";
const HomePage = () => {
  const {
    homepage: {
      bannerIMG,
      consolesIMG,
      diskConsoleIMG,
      categories: { preOrderBtn, allPS5GamesBtn, accessoriesBtn },
    },
  } = images;
  return (
    <div>
      <main className="main-wrapper">
        <div className="main-wrapper">
          <div className="cover-img flex">
            <img className="home-banner" src={bannerIMG} alt="" />
          </div>
          <div className="content-title flex-col">
            <h2>Consoles</h2>
            <p className="product-desc">
              The PS5™ console unleashes new gaming possibilities that you never
              anticipated.
            </p>
          </div>
          <div className="bottom-cards flex">
            <Link to="/products">
              <div className="bottom-left-card">
                <div className="card-outer-container">
                  <div className="card-inner-container">
                    <div className="card-image">
                      <img src={consolesIMG} alt="" />
                      <span className="card-label">New</span>
                    </div>
                    <div className="card-info flex-col">
                      <h4 className="card-title">PlayStation 5 Console</h4>
                      <p className="card-description">
                        Experience lightning fast loading with an ultra-high
                        speed SSD, deeper immersion with support for haptic
                        feedback, adaptive triggers, and 3D Audio, and an
                        all-new generation of incredible PlayStation® games.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products">
              <div className="bottom-rigth-card">
                <div className="card-outer-container">
                  <div className="card-inner-container">
                    <div className="card-image">
                      <img src={diskConsoleIMG} alt="" />
                      <span className="card-label">Trending</span>
                    </div>
                    <div className="card-info flex-col">
                      <h4 className="card-title">
                        PlayStation 5 Digital Edition
                      </h4>
                      <p className="card-description">
                        PlayStation®5 Digital Edition The PS5™ Digital Edition
                        unleashes new gaming possibilities that you never
                        anticipated. PS5™ Digital Edition is an all-digital
                        version of the PS5™ console with no disc drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="content-title flex-col">
            <h2>Categories</h2>
          </div>
          <div className="bottom-img-btn">
            <div className="category-card">
              <Link to="/products">
                <img src={preOrderBtn} alt="" />
              </Link>
            </div>
            <div className="category-card">
              <Link to="/products">
                <img src={allPS5GamesBtn} alt="" />
              </Link>
            </div>
            <div className="category-card">
              <Link to="/products">
                <img src={accessoriesBtn} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { HomePage };
