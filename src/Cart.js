import React from 'react';
import './style.css'
import {connect} from 'react-redux';
 
const Cart = (props)=>{
  console.log(props)
  return(
    <div className='betterview'>
      <h2>Cart:{props.cart.Cart.length}</h2>
      {
        props.cart.Cart.map((p,i)=>{
          return(
            <li>{p.product}</li>
          )
        })
      }
      </div>
  )
}
export default connect(store=>store) (Cart);