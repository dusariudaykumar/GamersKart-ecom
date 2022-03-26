const filterReducerFun = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: action.type,
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        sortBy: action.type,
      };
    case "DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "CONSOLES":
      return {
        ...state,
        categories: {
          ...state["categories"],
          console: !state.categories.console,
        },
      };
    case "CONTROLLERS":
      return {
        ...state,
        categories: {
          ...state["categories"],
          controller: !state.categories.controller,
        },
      };
    case "GAMES":
      return {
        ...state,
        categories: {
          ...state["categories"],
          games: !state.categories.game,
        },
      };
    case "ACCESSORIES":
      return {
        ...state,
        categories: {
          ...state["categories"],
          accessories: !state.categories.accessories,
        },
      };
    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
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
      };
  }
};
export { filterReducerFun };
