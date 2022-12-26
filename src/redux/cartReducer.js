const inialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state = inialState, action) => {
  const { type, payload } = action;
  if (type === "ADD") {
    let nCart = [...state.cart];
    const existed = nCart.findIndex((item) => item.id === payload.id);

    if (existed <= -1) {
      nCart = nCart.concat({ ...payload, quantity: 1 });
    } else {
      nCart = nCart.map((item) => {
        if (item.name === payload.name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    }

    console.log(nCart);
    return {
      ...state,
      cart: nCart,
      total: state.total + payload.price,
    };
  }

  if (type === "REMOVE_CART") {
    let nCart = [...state.cart];
    nCart = nCart.filter((item) => item.id !== payload);

    let nArrTotal = nCart.reduce((a, b) => {
      return a + b.price;
    }, 0);

    return {
      ...state,
      cart: nCart,
      total: nArrTotal,
    };
  }

  return {
    ...state,
  };
};
