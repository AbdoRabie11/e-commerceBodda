const inialState = {
  products: [],
};

export const productReducer = (state = inialState, action) => {
  const { type, payload } = action;

  if (type === "SET_PRODUCTS") {
    return {
      ...state,
      products: payload,
    };
  }
  return {
    ...state,
  };
};

export const singleProduct = (state = {}, action) => {
  const { type, payload } = action;
  
  if (type === "SET_PRODUCT") {
    return {
      ...state,
     ...payload,
    };
  }
  if(type === 'REMOVE') {
    return {}
  }
  return {
    ...state
  }
};


