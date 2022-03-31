import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProductCard, FilterComponent } from "../../components/index";
import { useCart } from "../../contexts/cart-context";
import { useFilter } from "../../contexts/filter-context";
import {
  getCategoryproducts,
  getPriceRangeProducts,
  getRatedProducts,
  getSortedProducts,
} from "../../filterfunctions/index";
import "./products.css";

const Products = () => {
  const { setCartItems } = useCart();
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("token");

  const {
    state: { data },
    state,
  } = useFilter();

  const addToCartHandler = async (product) => {
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
      console.log(response);
    } catch (error) {
      console.log("error", error);
      navigate("/login");
    }
  };
  const items = data;
  const categoryData = getCategoryproducts(items, state);
  const ratedProductsData = getRatedProducts(categoryData, state);
  const priceRangeData = getPriceRangeProducts(ratedProductsData, state);
  const sortedData = getSortedProducts(priceRangeData, state);

  return (
    <div className="product-layout ">
      <FilterComponent />
      <div className="products flex">
        {sortedData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCartHandler={() => addToCartHandler(product)}
          />
        ))}
      </div>
    </div>
  );
};

export { Products };
