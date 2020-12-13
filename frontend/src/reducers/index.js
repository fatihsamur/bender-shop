import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';
import { productListReducer, productDetailsReducer } from './productReducers';

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
