import React, { useEffect, useState } from 'react'
import CartComponent from '../../Components/CartComponent/CartComponent'
import NavBar from '../../Components/Navbar/NavBar'
import { getCartItemService } from '../../Services/CartService'
import { Link } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {

    const [cartItems,setCartItem] = useState([])
    const loadData = async() => {
    let response = await getCartItemService()
    let cartItem = response.data.result
    setCartItem(cartItem)    
    }
    useEffect(()=>{
        loadData()
        
    },[])
  return (
    <>
    <NavBar/>
    <div className="cart-page-content" style={{width:'65%',margin:'0 auto'}}>
    <div className="cart-page-top" style={{display:'flex',alignItems:'center',marginTop:'.5rem'}}>
       <Link to='/dashboard' style={{textDecoration:'none'}}> <p style={{color:'grey',marginRight:'10px'}}>Home /</p></Link><span>My cart</span>
    </div>
    <div className="cart-items">
        {cartItems.map((cartItem)=>(<CartComponent key={cartItem._id} getCartItem={loadData} cartItem={cartItem}/>))}
    </div>
    </div>
    </>
  )
}

export default CartPage