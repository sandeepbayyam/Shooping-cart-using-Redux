import React from "react";
import "./style.css";
import Products from './Products.js';
import Cart from './Cart.js'
import {Provider} from 'react-redux';
import store from './store/store.js'

export default function App() {
  return (
    <Provider store= {store}>
    <div className='betterview'>
      <h3>Shopping Cart</h3> 
      <Cart></Cart>
      <Products></Products>
    </div>
    </Provider>
  );
}
