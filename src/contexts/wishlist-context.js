import axios from "axios";
import { createContext, useContext, useState } from "react";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");

  const removeFromWishlistHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { wishlist } = response.data;
      setWishlistItems(wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const [wishlistItems, setWishlistItems] = useState([]);
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
        removeFromWishlistHandler,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);
export { WishlistProvider, useWishlist };
