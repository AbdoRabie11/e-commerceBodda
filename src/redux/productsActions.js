

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products
  }
}

export const setProduct = (product) => {
  return {
    type: 'SET_PRODUCT',
    payload: product
  }
}

export const removeProduct = () => {
  return {
    type: 'REMOVE',
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product
  }
}

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_CART',
    payload: productId
  }
}

export const addToFavourite = (product) => {
  return {
    type: 'ADD_FAV',
    payload: product
  }
}