import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
// import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {

    return (
        <nav className='header'> 
        {/* logo on the left -> image */}
        <Link to ='/'>
        <img className='header__logo' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXLTt2JyO0cveU8xb63g-2M_WCk0vKafOFQ&usqp=CAU' />      
        </Link>    

        {/* Search box */}
        <div className='header__search'>
        <input type='text' className='header__searchInput'></input>
        {/* <SearchIcon className='header__searchIcon' /> */}
        </div>
 
        {/*  3 links  */}
        <div className='header__nav'> 

        {/* 1st link* */}
        <Link to='/' className='header__link'>
          <div  className='header__option'>             
            <span className='header__option__line2'>All Fruits</span>             
        </div>  
        </Link>

        <Link to='/' className='header__link'>
          <div  className='header__option'>             
            <span className='header__option__line2'>Dried Fruits</span>             
        </div>  
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line2'>Fresh Fruits</span>
        </div>  
        </Link>

        {/* 3rd link* */}
        <Link to='/' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'></span>
            <span className=' header__option__line2'>Exotic Fruits</span>
        </div>  
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'></span>
            <span className=' header__option__line2'>Fruits</span>
        </div>  
        </Link>

        {/* basket icons with number  */}
        <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
            {/* basket icon */}
            <ShoppingBasketIcon />
            {/* number of items in basket */}
            <span className='header__option__line2 header__basketCount'></span>
        </div>
        </Link>

        </div>
        </nav> 
    )
}



export default Header
