import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),

    title: "PS5™ Controller",
    sellingPrice: 5499,
    originalPrice: 5990,
    category: "controller",
    discountPercent: 8,
    totalStars: 3,
    inStock: true,
    latest: false,
    offers: {
      freeDelivery: true,
      newArrival: false,
      bestSeller: true,
    },
    coverImg:
      "https://cdn.shopify.com/s/files/1/2141/8475/products/1_68b741f0-5e5e-43e6-b20b-ad653bdb69ce_240x240.jpg?v=1605004796",
  },
  {
    _id: uuid(),
    title: "DualSense charging station",
    sellingPrice: 6499,
    originalPrice: 9990,
    category: "accessories",
    discountPercent: 8,
    totalStars: 3,
    inStock: true,
    latest: false,
    offers: {
      freeDelivery: true,
      newArrival: false,
      bestSeller: true,
    },
    coverImg:
      "https://cdn.shopify.com/s/files/1/2141/8475/products/3_a4969de1-1652-4002-b0c6-1ca9dda216d7_900x.jpg?v=1605004535",
  },
  {
    _id: uuid(),
    title: "Sony Playstation 5 Console",
    sellingPrice: 49999,
    originalPrice: 50590,
    category: "console",
    discountPercent: 8,
    totalStars: 5,
    inStock: false,
    latest: false,
    offers: {
      freeDelivery: true,
      newArrival: false,
      bestSeller: true,
    },
    coverImg:
      "https://cdn.shopify.com/s/files/1/2141/8475/products/PS5_01_DUALSENSE_GALAXY_CC_MB_sRGB_211124_240x240.jpg?v=1642127742",
  },
  {
    _id: uuid(),
    title: "FIFA 22 PS4™",
    sellingPrice: 3599,
    originalPrice: 3999,
    category: "game",
    discountPercent: 10,
    totalStars: 5,
    inStock: true,
    latest: false,
    offers: {
      freeDelivery: true,
      newArrival: false,
      bestSeller: true,
    },
    coverImg:
      "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png",
  },
  {
    _id: uuid(),
    title: "Sony 3D Wireless HeadPhone",
    sellingPrice: 8590,
    originalPrice: 8999,
    category: "accessories",
    discountPercent: 2,
    totalStars: 4,
    inStock: true,
    latest: true,
    offers: {
      freeDelivery: true,
      newArrival: false,
      bestSeller: true,
    },
    coverImg:
      "https://cdn.shopify.com/s/files/1/2141/8475/products/301498059-2_900x.jpg?v=1640155965",
  },
];
