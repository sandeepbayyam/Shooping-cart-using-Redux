import {createStore,combineReducers} from 'redux';
import productReducer from './products.reducer.js';
import cartReducer from './cart.reducer.js';
const rootReducer = combineReducers({
  product:productReducer,
  cart:cartReducer
})
const store = new createStore(rootReducer);
export default store;