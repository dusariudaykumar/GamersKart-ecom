import React, { useEffect, useState } from "react";
import { ProductCard, FilterComponent } from "../../components/index";
import { useFilter } from "../../contexts/filter-context";
import {
  getCategoryproducts,
  getPriceRangeProducts,
  getRatedProducts,
  getSortedProducts,
} from "../../filterfunctions/index";
import "./products.css";
const Products = () => {
  const {
    state: { data },
    state,
  } = useFilter();
  const items = data;
  const categoryData = getCategoryproducts(items, state);
  const ratedProductsData = getRatedProducts(categoryData, state);
  const priceRangeData = getPriceRangeProducts(ratedProductsData, state);
  const sortedData = getSortedProducts(priceRangeData, state);
  console.log(sortedData);
  return (
    <div className="product-layout ">
      <FilterComponent />
      <div className="products flex">
        {sortedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { Products };
