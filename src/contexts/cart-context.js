import axiox from "axios";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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
      toast.error("Please try again After some time !!");
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeHandler }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
