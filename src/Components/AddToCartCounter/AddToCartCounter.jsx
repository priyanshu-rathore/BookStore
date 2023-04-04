import React, { useEffect, useState } from "react";
import "./AddToCartCounter.css";
import { modifyCartItemService, removeItemCartService ,getCartItemService} from "../../Services/CartService";

const AddToCartCounter = ({ bookObj,getCartItem,setAddToBag,action}) => {
 
  console.log(bookObj)
  // const [counter, setCounter] = useState({ count: itemNo });
  // const [quantity, setQuantity] = useState({});

  // const modifyItem = async () => {
  //   let response = await modifyCartItemService(cartId, quantity);
  //   console.log(response);
  // };

  
  const deleteItem = async() => {
    let response = await removeItemCartService(bookObj._id)
    setAddToBag(true)
    console.log(response)
  }

 

  const computeQty = async(op) => {
    let qty
    if(op === 'add') {
      qty = {
        quantityToBuy: bookObj.quantityToBuy + 1,
      };

    }else {

      if(bookObj.quantityToBuy == 1){
        deleteItem()
      }else{
        qty = {
          quantityToBuy: bookObj.quantityToBuy - 1,
        };
      }
      
     
    }
   
    let response = await modifyCartItemService(bookObj._id,qty)
    console.log(response)
    getCartItem()  
  };

  return (
    action == 'cart' ? 
    <div className="add-to-counter" style={ action == 'cart' && {border:'none'}}>
      <button onClick={()=>computeQty('sub')} className="subtract" style={ action == 'cart' && {borderRadius:'100px',marginRight:'10px',width:'2.2rem',border:'1px solid #d2cbcb'}}>-</button>
      <div className="value-of-counter" style={action == 'cart' && {border:'1px solid #d2cbcb'}}>{bookObj.quantityToBuy}</div>
      <button style={ action == 'cart' && {borderRadius:'100px',marginLeft:'10px',width:'2.2rem',border:'1px solid #d2cbcb'}}
        onClick={()=>computeQty('add')}
        className="add"
      >
        +
      </button>
    </div> : 
    <div className="add-to-counter" >
    <button onClick={()=>computeQty('sub')} className="subtract" >-</button>
    <div className="value-of-counter" >{bookObj.quantityToBuy}</div>
    <button 
      onClick={()=>computeQty('add')}
      className="add"
    >
      +
    </button>
  </div> 
  );
};

export default AddToCartCounter;
