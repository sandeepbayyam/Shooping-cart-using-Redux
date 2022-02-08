const intialState = {
  Cart: []
}
 const cartReducer = (state=intialState,action)=>{
   if(action.type==='AddtoCart'){
     return{
       ...state,Cart:[
         ...state.Cart,action.val
       ]
     }
   }
 
   return state
 }
 export default cartReducer;