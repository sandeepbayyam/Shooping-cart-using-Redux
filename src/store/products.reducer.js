const intialState = {
 Products: [
  {
    product:'Redmi note 10 pro',
    price : 17999
  },
  {
    product:'Redmi note 10 pro Max',
    price : 19999
  },
  {
    product:'Realme note 8',
    price : 18999
  },
  {
    product:'Realme XT',
    price : 20999
  },
  {
    product:'Realme 11 pro',
    price : 19999
  }
   ]
};
const productReducer = (state=intialState,action)=>{

  return state
}
export default productReducer;