export const getRatedProducts = (products, rating) => {
  return products.filter((item) => item.totalStars >= rating.rating);
};
