import { combineReducers } from "redux";

import userReducer from "./../redux/User/user.reducer";
import productsReducer from "./../redux/Products/products.reducer";
import cartReducer from "./../redux/Cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
});
