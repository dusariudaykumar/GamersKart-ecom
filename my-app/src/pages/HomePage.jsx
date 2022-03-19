import React from "react";
import { images } from "../Asserts/homepage";

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
      <main class="main-wrapper">
        <div class="main-wrapper">
          <div class="cover-img flex">
            <a href="">
              <img class="home-banner" src={bannerIMG} alt="" />
            </a>
          </div>
          <div class="content-title flex-col">
            <h2>Consoles</h2>
            <p class="product-desc">
              The PS5™ console unleashes new gaming possibilities that you never
              anticipated.
            </p>
          </div>
          <div class="bottom-cards flex">
            <a href="">
              <div class="bottom-left-card">
                <div class="card-outer-container">
                  <div class="card-inner-container">
                    <div class="card-image">
                      <img src={consolesIMG} alt="" />
                      <span class="card-label">New</span>
                    </div>
                    <div class="card-info flex-col">
                      <h4 class="card-title">PlayStation 5 Console</h4>
                      <p class="card-description">
                        Experience lightning fast loading with an ultra-high
                        speed SSD, deeper immersion with support for haptic
                        feedback, adaptive triggers, and 3D Audio, and an
                        all-new generation of incredible PlayStation® games.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/ProductListing/">
              <div class="bottom-rigth-card">
                <div class="card-outer-container">
                  <div class="card-inner-container">
                    <div class="card-image">
                      <img src={diskConsoleIMG} alt="" />
                      <span class="card-label">Trending</span>
                    </div>
                    <div class="card-info flex-col">
                      <h4 class="card-title">PlayStation 5 Digital Edition</h4>
                      <p class="card-description">
                        PlayStation®5 Digital Edition The PS5™ Digital Edition
                        unleashes new gaming possibilities that you never
                        anticipated. PS5™ Digital Edition is an all-digital
                        version of the PS5™ console with no disc drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="content-title flex-col">
            <h2>Categories</h2>
          </div>
          <div class="bottom-img-btn">
            <div class="category-card">
              <a href="">
                <img src={preOrderBtn} alt="" />
              </a>
            </div>
            <div class="category-card">
              <a href="">
                <img src={allPS5GamesBtn} alt="" />
              </a>
            </div>
            <div class="category-card">
              <a href="">
                <img src={accessoriesBtn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
