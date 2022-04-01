import React from "react";
import axios from "axios";
import { WishListCard } from "../../components/index";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./Wishlist.css";
const WishList = () => {
  const { setCartItems } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const encodedToken = localStorage.getItem("token");

  const moveToCartHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      const { cart } = response.data;
      setCartItems(cart);
    } catch (error) {
      console.log("error", error);
    }
    removeFromWishlistHandler(product._id);
  };
  const removeFromWishlistHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { wishlist } = response.data;
      setWishlistItems(wishlist);
      console.log(wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex wishlist-wrapper">
      {wishlistItems.map((product) => {
        return (
          <WishListCard
            key={product._id}
            product={product}
            removeFromWishlistHandler={() =>
              removeFromWishlistHandler(product._id)
            }
            moveToCartHandler={() => moveToCartHandler(product)}
          />
        );
      })}
    </div>
  );
};

export { WishList };
