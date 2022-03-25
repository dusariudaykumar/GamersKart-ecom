export const getPriceRangeProducts = (products, state) => {
  console.log(state.price);
  return products.filter((item) => item.sellingPrice <= state.price);
};
