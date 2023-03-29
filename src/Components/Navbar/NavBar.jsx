import React from "react";
import "./NavBar.css";
import logo from '../../Assets/education.svg'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = ({searchBooks}) => {
  return (
    <>
      <nav className="navbar-navbar">
        <div className="navbar-navbar-contents">
          <div className="navbar-navbar-left">
            <div className="navbar-navbar-brand" style={{position:'relative',bottom:'5px'}}>
                <img src={logo} alt="" />
                <h2 style={{marginLeft:'10px',color:'white'}}>Bookstore</h2>
            </div>
            <div className="navbar-navbar-search-bar">
                <SearchIcon style={{color:'grey'}}/>
                <input type="text" placeholder="Search..." onChange={(e)=>searchBooks(e.target.value)}/>
            </div>
          </div>
          <div className="navbar-navbar-right">
            <div className="navbar-navbar-right-profile">
                    <PersonOutlineOutlinedIcon style={{color:'white',position:'relative',top:'10px'}}/>
                    <p style={{color:'white',fontSize:'14px'}}>Profile</p>
            </div>
            <div className="navbar-navbar-right-cart" style={{marginLeft:'2rem'}}>
                <ShoppingCartOutlinedIcon style={{color:'white',position:'relative',top:'13px'}}/>
                <p style={{color:'white',fontSize:'14px'}}>Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
