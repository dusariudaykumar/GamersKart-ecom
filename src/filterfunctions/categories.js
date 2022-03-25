export const getCategoryproducts = (products, { categories }) => {
  const filteredData = [];
  if (
    categories.accessories === false &&
    categories.games === false &&
    categories.controller === false &&
    categories.console === false
  ) {
    return products;
  }
  if (categories.console) {
    let newData = products.filter((item) => item.category === "console");
    filteredData.push(...newData);
  }
  if (categories.controller) {
    let newData = products.filter((item) => item.category === "controller");
    filteredData.push(...newData);
  }
  if (categories.games) {
    let newData = products.filter((item) => item.category === "game");
    filteredData.push(...newData);
  }
  if (categories.accessories) {
    let newData = products.filter((item) => item.category === "accessories");
    filteredData.push(...newData);
  }
  return filteredData;
};
