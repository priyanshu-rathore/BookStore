import React, { useState, useEffect } from "react";
import BookBox from "../../Components/BookBox/BookBox";
import BookTop from "../../Components/BookTop/BookTop";
import Footer from "../../Components/Footer/Footer";
import Pagination from "@mui/material/Pagination";
import NavBar from "../../Components/Navbar/NavBar";
import { getBooksService } from "../../Services/UserService";
import "./DashBoard.css";
import BookDetails from "../../Components/BookDetails/BookDetails";
import { display } from "@mui/system";

const DashBoard = () => {
  const [books, setBooks] = useState([]);
  const [slicedBooks, setSlicedBooks] = useState([]);
  const [count, setCount] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [click,setClick] = useState(false)
  const [book,setBook] = useState({})
  const nop = 9;

  const loadData = async () => {
    let response = await getBooksService();
    console.log(response);
    let data = response.data.result;
    setBooks(data);
    if (data.length > 0) {
      setCount(Math.round(data.length / nop));
      setSlicedBooks(data.slice(0, nop));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setFilteredData(
      books.filter(
        (book) =>
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    if (searchQuery.length !== 0) {
      setFilter(true);
    } else {
      setFilter(false);
      loadData()
    }
    console.log(filteredData);
  }, [searchQuery]);

  const changePage = (event,value) => {
    let start = (value - 1) * nop;
    let end = start + nop;
    let bookSlice = books.slice(start, end);
    console.log(bookSlice);
    setSlicedBooks(bookSlice);
  };

  const product = (book) => {
      setBook(book)
  }

  

  return (
    <div>
      <NavBar searchBooks={setSearchQuery} />
      <div className="dashboard-book-top" style={click ? {display:'none'} : {display:'flex'}} >
      <BookTop bookLength={filter ? filteredData.length : books.length} />


      </div>
      <div className="book-box-container">
        { click ? <BookDetails book={book} click={setClick}/> : filter
          ? filteredData.map((book) => <BookBox book={book} product={product} click={setClick}/> )
          : slicedBooks.map((book) =>  <BookBox book={book} product={product} click={setClick}/> )}
      </div>
      <div className="dashboard-pagination" style={click ? {display:'none'} : {display:'flex'}}>
        <Pagination count={count} color="secondary" onChange={changePage} />
      </div>
      <Footer className="dashboard-footer" />
    </div>
  );
};

export default DashBoard;
