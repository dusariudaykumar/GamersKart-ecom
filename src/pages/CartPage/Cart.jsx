import React from "react";
import axiox from "axios";
import { CartCard, PriceCard } from "../../components";
import { useCart } from "../../contexts/cart-context";
import "./Cart.css";
import { toast, ToastContainer } from "react-toastify";
const Cart = () => {
  const { setCartItems, cartItems } = useCart();
  const encodedToken = localStorage.getItem("token");
  const removeHandler = async (productId) => {
    try {
      const response = await axiox.delete(`api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { cart } = response.data;
      setCartItems(cart);
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Please try again !!");
    }
  };
  const quantityHandler = async (productId, type) => {
    try {
      const response = await axiox.post(
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
      console.log(response);
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
          />
        ))}
      </div>
      {cartItems.length > 0 ? <PriceCard /> : <h4>Cart is Empty 🙁</h4>}
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export { Cart };
