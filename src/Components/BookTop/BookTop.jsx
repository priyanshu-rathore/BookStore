import React from 'react'
import "./BookTop.css"

const BookTop = ({bookLength}) => {
  return (
    <>
    <div className="book-top">
        <div className="book-top-left">
            <h1 style={{fontWeight:'400'}}>Books</h1>
            <p style={{marginLeft:'10px',color:'grey    '}}>({bookLength} {bookLength==1 ? 'item': 'items'})</p>
        </div>
        <div className="book-top-right">
            <select name="" id="" style={{padding:'3px 6px 3px 6px'}}>
                <option value="">Sort by relevance</option>
            </select>
        </div>
    </div>
    </>

  )
}

export default BookTop