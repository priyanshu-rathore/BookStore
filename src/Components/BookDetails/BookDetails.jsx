import React, { useEffect, useState } from 'react'
import "./BookDetails.css"
import bookImg from '../../Assets/Image 36.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AddToCartCounter from '../AddToCartCounter/AddToCartCounter';
import { addCartItemService, getCartItemService } from '../../Services/CartService';


const BookDetails = ({book,click}) => {
    const [addToBag,setAddToBag] = useState(true)
    const [numOfItem,setNumOfItem] = useState()
    const [cartId,setCartId] = useState()
    const [bookObj,setBookObj] = useState({})

    const addToCart = async(bookId) => {
        let response = await addCartItemService(bookId)
        console.log(response)
      await  getCartItem()
        return response
    }

    const getCartItem = async() => {
        let response = await getCartItemService()
        console.log(response)
        

        for(let i = 0;i <= response.data.result.length ; i++){
            if(response.data.result[i]?.product_id._id == book._id){
                let itemNo = response.data.result[i].quantityToBuy
                // setNumOfItem(itemNo)
                // setCartId(response.data.result[i]._id)
                setBookObj(response.data.result[i])
                setAddToBag(false)

                // console.log(itemNo)
                // console.log(numOfItem)

            }
        }
       
        
        console.log(response)
        return response
    }

    useEffect(()=> {
        getCartItem()
        
    },[])
    // setAddToBag={setAddToBag} cartId={cartId} itemNo={numOfItem} book={book}
  return (
    <div className='book-details'>
        <div className="book-details-top">
            <p onClick={()=>click(false)} style={{color:'grey',cursor:'pointer'}}>Home /</p> <span style={{marginLeft:'1rem'}}> Book({book.bookName})</span>
        </div>
        <div className="book-details-middle">
            <div className="book-details-left">
                <div className="img-container">
                <div className="book-details-left-top">
                    <img src={bookImg} alt="" />
                </div>
                <div className="book-details-left-bottom"> 
                {
                    addToBag ? 
                <button onClick={()=>{setAddToBag(false);addToCart(book._id);}} className='add-to-bag'>ADD TO BAG</button> : <AddToCartCounter setAddToBag={setAddToBag} getCartItem={getCartItem} bookObj={bookObj}/>

                }
                <button className='wish-list'>{<FavoriteIcon fontSize='small' style={{marginRight:'10px'}}/>}WISHLIST</button>
                 </div>
                </div>
                

            
            </div>
            <div className="book-details-right" style={{marginLeft:'5rem'}}>
            <h1 style={{marginTop:'-9px',fontWeight:'500'}}>{book.bookName}</h1>
            <p style={{marginTop:'-1rem',fontSize:'18px',color:'grey'}}>{book.author}</p>
            <div className="rate">
                <div className="rate-box">
                    <span style={{fontSize:'13px',marginRight:'5px',color:'white'}}>4.5</span>
                    <StarIcon fontSize='10px' style={{color:'white'}}/>
                </div>
                <p style={{fontSize:'13px',marginLeft:'10px',color:'grey'}}>(20)</p>
            </div>
            <div className="book-box-price">
                <h1 style={{marginRight:'10px',fontWeight:'400'}}>Rs. {book.discountPrice}</h1>
                <strike style={{fontSize:'17px',textDecoration:'strike',color:'grey'}}>Rs. {book.price}</strike>
            </div>
            <div className='line'></div>
            <ul style={{marginLeft:'-22px',color:'grey'}}>
                <li>Book Detail</li>
            </ul>
            <p style={{fontSize:'14px',marginLeft:'3px'}}>{book.description}</p>
            <div className='line' style={{marginTop:'3rem'}}></div>
                <h3 style={{fontWeight:'400'}}>Customer Feedback</h3>
                <div className="feed-back-box">
                <Typography component="legend">Overall rating</Typography>
      <Rating name="read-only" value={4} readOnly />
      <textarea placeholder='write your review' name="" id="" cols="45" rows="5"></textarea>
      <button className='submit-button'>Submit</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BookDetails