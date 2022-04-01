import React from "react";
import axios from "axios";
import { CartCard, PriceCard } from "../../components";
import { useCart } from "../../contexts/cart-context";
import "./Cart.css";
import { toast, ToastContainer } from "react-toastify";
import { useWishlist } from "../../contexts/wishlist-context";
const Cart = () => {
  const { setCartItems, cartItems } = useCart();
  const { setWishlistItems } = useWishlist();
  const encodedToken = localStorage.getItem("token");
  const removeHandler = async (productId) => {
    try {
      const response = await axios.delete(`api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { cart } = response.data;
      setCartItems(cart);
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Please try again After some time !!");
    }
  };
  const quantityHandler = async (productId, type) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setCartItems(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };
  const addToWishlistHandler = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      const { wishlist } = response.data;
      setWishlistItems(wishlist);
      removeHandler(product._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-products flex">
      <div className="flex-cols">
        {cartItems.map((cartItem) => (
          <CartCard
            key={cartItem.id}
            cartItem={cartItem}
            removeHandler={removeHandler}
            quantityHandler={quantityHandler}
            addToWishlistHandler={addToWishlistHandler}
          />
        ))}
      </div>
      {cartItems.length > 0 ? <PriceCard /> : <h2>Your Cart Is Empty 😫 ! </h2>}
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export { Cart };
