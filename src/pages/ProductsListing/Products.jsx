import { ProductCard, FilterComponent } from "../../components/index";
import { useFilter } from "../../contexts/filter-context";

import "./products.css";
const Products = () => {
  const {
    state: { data },
    state,
  } = useFilter();
  const items = data;

  return (
    <div className="product-layout ">
      <FilterComponent />
      <div className="products flex">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { Products };
