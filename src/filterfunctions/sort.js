const getSortedProducts = (data, state) => {
  if (state.sortBy === "LOW_TO_HIGH") {
    return data.sort((item1, item2) => item1.sellingPrice - item2.sellingPrice);
  } else if (state.sortBy === "HIGH_TO_LOW") {
    return data.sort((item1, item2) => item2.sellingPrice - item1.sellingPrice);
  }
  return data;
};
export { getSortedProducts };
