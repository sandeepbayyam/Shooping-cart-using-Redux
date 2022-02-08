import React from 'react';
import './style.css'
import {connect} from 'react-redux';
 
const Products = (props)=>{
  console.log(props)
  return(
    <div>
      <h4>Product Details</h4>
      <table border='2'>
        <thead>
          <th>Product</th>
          <th>Price</th>
          <th>Add</th>
        </thead>
      {
        props.product.Products.map((p,i)=>{
          return(
            <>
            <tbody>
            <tr key={i} >
              <td>{p.product}</td>
              <td>{p.price}</td>
              <button onClick={()=>{
                props.dispatch({type:'AddtoCart',val:p})
              }}>Add</button>
            </tr>
            </tbody>
            <tfoot></tfoot>
            </>
          )
        })
      }
      </table>
      </div>
  )
}
export default connect(store=>store) (Products);