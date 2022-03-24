import React from "react";
import { useFilter } from "../../contexts/filter-context";

const FilterComponent = ({ items }) => {
  const { state, productDispatch } = useFilter();
  const { sortBy, price, rating, categories } = state;
  const { console, controller, games, accessories } = categories;
  return (
    <div>
      <aside className="aside-bar flex-col">
        <div className="filter-tite">
          <h6>
            <strong>Filters</strong>
          </h6>
          <button onClick={() => productDispatch({ type: "CLEAR" })}>
            Clear
          </button>
        </div>
        <div className="price-section">
          <h6>Price</h6>
          <div className="price-range flex">
            <p>1K</p>
            <p>25K</p>
            <p>50K</p>
          </div>
          <div className="slide-conatiner">
            <input
              type="range"
              min="1000"
              step="500"
              max="49999"
              value={price}
              className="slider"
              onChange={(e) =>
                productDispatch({ type: "PRICE", payload: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <h6>Category</h6>
          <div className="category-list flex-col">
            <div className="category-item">
              <input
                type="checkbox"
                id="console"
                value="console"
                checked={console}
                onClick={(e) => productDispatch({ type: "CONSOLES" })}
              />
              <label htmlFor="console">Consoles</label>
            </div>
            <div className="category-item">
              <input
                type="checkbox"
                id="controllers"
                value="controller"
                checked={controller}
                onClick={(e) => productDispatch({ type: "CONTROLLERS" })}
              />
              <label htmlFor="controllers">Controllers</label>
            </div>
            <div className="category-item">
              <input
                type="checkbox"
                id="games"
                value="games"
                checked={games}
                onClick={(e) => productDispatch({ type: "GAMES" })}
              />
              <label htmlFor="games">Games</label>
            </div>
            <div className="category-item">
              <input
                type="checkbox"
                id="accessories"
                value="accessories"
                checked={accessories}
                onClick={(e) => productDispatch({ type: "ACCESSORIES" })}
              />
              <label htmlFor="accessories">Accessories</label>
            </div>
          </div>
        </div>

        <div>
          <h6>Rating</h6>
          <div className="flex-col rating-list">
            <div className="rating-item">
              <input
                type="radio"
                name="rating"
                id="four-star"
                value="4"
                checked={rating === "4"}
                onChange={(e) => {
                  productDispatch({ type: "RATING", payload: e.target.value });
                }}
              />
              <label htmlFor="four-star">4 Stars & above</label>
            </div>
            <div className="rating-item">
              <input
                type="radio"
                name="rating"
                id="three-star"
                value="3"
                checked={rating === "3"}
                onChange={(e) => {
                  productDispatch({ type: "RATING", payload: e.target.value });
                }}
              />
              <label htmlFor="three-star">3 Stars & above</label>
            </div>
            <div className="rating-item">
              <input
                type="radio"
                name="rating"
                id="two-star"
                value="2"
                checked={rating === "2"}
                onChange={(e) => {
                  productDispatch({ type: "RATING", payload: e.target.value });
                }}
              />
              <label htmlFor="two-star">2 Stars & above</label>
            </div>
            <div className="rating-item">
              <input
                type="radio"
                name="rating"
                id="one-star"
                value="1"
                checked={rating === "1"}
                onChange={(e) => {
                  productDispatch({ type: "RATING", payload: e.target.value });
                }}
              />
              <label htmlFor="one-star">1 Stars & above</label>
            </div>
          </div>
        </div>

        <div>
          <h6>Sort by</h6>
          <div className="flex-col sort-list">
            <div className="sort-item">
              <input
                type="radio"
                name="sortby"
                id="low-to-high"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() => productDispatch({ type: "LOW_TO_HIGH" })}
              />
              <label htmlFor="low-to-high">Price - Low to High</label>
            </div>
            <div className="sort-item">
              <input
                type="radio"
                name="sortby"
                id="high-to-low"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() => productDispatch({ type: "HIGH_TO_LOW" })}
              />
              <label htmlFor="high-to-low">Price - High to Low</label>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export { FilterComponent };
