import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { favouriteReducer } from "./favouriteReducer";
import { productReducer, singleProduct } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  single: singleProduct,
  cartProducts: cartReducer,
  favouriteProducts: favouriteReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
