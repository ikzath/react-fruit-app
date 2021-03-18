import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Container, Row, Col } from 'reactstrap';
import Product from "./Product";
import { MyContextData } from "../context/context";
import HeaderBar from "./HeaderBar";

function Header() {

  const [query, setquery] = useState('');
  const [SearchResults, setSearchResults] = useState([]);
  const { context } = useContext(MyContextData);                  


    const handleChange = (e)=> {
      setquery(e.target.value);
      let suggestions = [];          
      if(query.length > 0){
        suggestions = context.map(item => { return item.sort().filter( ({ name }) => name.toLowerCase().startsWith(query.toLowerCase()) )});
        setSearchResults(suggestions);
      }
    }   

    let pageOnLoadResults =     
    <>
      { SearchResults &&             
         SearchResults.map((el, i)=> (
          el.map((item, index)=> (
            <Col md={3} key={index} > 
            <Product            
                key={item.id}
                item={item}
                />
        </Col>      
        ))
      ))} 
     </>  

    // useEffect(() => {
      
    // }, [query])

    return (
      <div>
        <nav className='header'> 
        <Link to ='/'>
        <img className='header__logo' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXLTt2JyO0cveU8xb63g-2M_WCk0vKafOFQ&usqp=CAU' 
        alt=''
        />      
        </Link>    

        <div className='header__search'>
        <input 
          className='header__searchInput'
          type="text"
          placeholder="Suchen..."
          value={query || ''}
          onChange={ handleChange} 
          autoComplete= 'off' 
          />
        </div>
 
        <div className='header__nav'> 

        <Link to='/all-categories' className='header__link'>
          <div  className='header__option'>             
            <span className='header__option__line2'>All Fruits</span>             
        </div>  
        </Link>

        <Link to='/dried-fruits' className='header__link'>
          <div  className='header__option'>             
            <span className='header__option__line2'>Dried Fruits</span>             
        </div>  
        </Link>

        <Link to='/fresh-fruits' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line2'>Fresh Fruits</span>
        </div>  
        </Link>

        <Link to='/exotic-fruits' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'></span>
            <span className=' header__option__line2'>Exotic Fruits</span>
        </div>  
        </Link>

        <Link to='/nuts' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'></span>
            <span className=' header__option__line2'>Nuts</span>
        </div>  

        </Link>
        <Link to='/just-fruits' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'></span>
            <span className=' header__option__line2'>Fruits</span>
        </div>  
        </Link>

        <Link to='/product-details' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'></span>
            <span className=' header__option__line2'>Fruit Basket</span>
        </div>  
        </Link>

        <div className='header__option'>                       
            <HeaderBar />
        </div>  
        </div>
        </nav> 
        <Container>
            <Row>
             {query && pageOnLoadResults}
            </Row> 
        </Container>  
      </div>
    )
}


export default Header
