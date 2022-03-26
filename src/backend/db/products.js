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
      "https://gamerskart.netlify.app/Asserts/controllers-img/PS5_DUALSENSE.jpg",
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
      "https://gamerskart.netlify.app/Asserts/controllers-img/controller-charger.jpg",
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
      "https://gamerskart.netlify.app/Asserts/Consoles/console-mini.png",
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
    coverImg: "https://gamerskart.netlify.app/Asserts/Games-img/fifa1.webp",
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
      "https://gamerskart.netlify.app/Asserts/HeadPhones/PS5-headset-2.jpg",
  },
 
];
