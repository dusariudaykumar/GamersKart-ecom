export const getPriceRangeProducts = (products, state) => {
  return products.filter((item) => item.sellingPrice <= state.price);
};
