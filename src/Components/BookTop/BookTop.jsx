import React from 'react'
import "./BookTop.css"
import { Grid } from '@mui/material';


const BookTop = ({bookLength}) => {
  return (
    <>
    <Grid className="book-top">
        <Grid className="book-top-left">
            <h1 style={{fontWeight:'400'}}>Books</h1>
            <p style={{marginLeft:'10px',color:'grey    '}}>({bookLength} {bookLength==1 ? 'item': 'items'})</p>
        </Grid>
        <Grid className="book-top-right">
            <select name="" id="" style={{padding:'3px 6px 3px 6px'}}>
                <option value="">Sort by relevance</option>
            </select>
        </Grid>
    </Grid>
    </>

  )
}

export default BookTop