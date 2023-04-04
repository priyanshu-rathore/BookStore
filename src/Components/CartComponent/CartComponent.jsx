import React from 'react'
import "./CartComponent.css"
import bookImg from "../../Assets/Image 36.png"
import AddToCartCounter from '../AddToCartCounter/AddToCartCounter'

const CartComponent = ({cartItem,getCartItem}) => {
    const book = cartItem.product_id

    console.log(book)
  return (
    <div className="cart-component" style={{border:'1px solid #d1caca',padding:'1rem 2rem',height:'20rem',width:'70%',marginBottom:'2rem',marginTop:'2rem'}}>
        <div className="cart-component-top" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h1 style={{fontWeight:'400',fontSize:'18px'}}>My Cart({cartItem.quantityToBuy})</h1>
            <select name="" id="" style={{height:'2rem'}}>
                <option value="">address</option>
            </select>
        </div>
        <div className="cart-component-middle">
            <img src={bookImg} alt="" />
            <div className="cart-component-middle-right">
                <div className="cart-component-middle-right-top">
                <h5>{book.bookName}</h5>
            <p style={{marginTop:'-1rem',fontSize:'12px',color:'grey'}}>{book.author}</p>
            <div className="book-box-price">
                <h5 style={{marginRight:'10px'}}>Rs. {book.discountPrice}</h5>
                <strike style={{fontSize:'12px',textDecoration:'strike'}}>Rs. {book.price}</strike>
            </div>
                </div>
                <div className="cart-component-middle-right-bottom" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <AddToCartCounter bookObj={cartItem} getCartItem={getCartItem} action='cart'/>
        <div className="remove" style={{marginLeft:'1rem'}}><p>Remove</p></div>
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default CartComponent