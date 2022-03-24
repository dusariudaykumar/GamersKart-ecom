import { createContext, useContext, useReducer, useEffect } from "react";
import { filterReducerFun } from "../Reducers/filterReducerFun";
import axios from "axios";
const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const FilterProvider = ({ children }) => {
  const [state, productDispatch] = useReducer(filterReducerFun, {
    sortBy: "",
    discount: "",
    rating: 1,
    price: 1000,
    categories: {
      console: false,
      controller: false,
      games: false,
      accessories: false,
    },
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        console.log(response.data);
        productDispatch({ type: "DATA", payload: response.data.products });
      } catch (error) {
        console.log("error here in filter-context", error);
      }
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ state, productDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
