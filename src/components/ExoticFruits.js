import "../styles/Home.css";
import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Product from "./Product";
import { MyContextData } from "../context/context";
import { Link } from "react-router-dom";
import HeaderBar from "./HeaderBar";


function  DriedFruits() {

    const { context } = useContext(MyContextData); 

    let filteredData = context.map(i => { return  i.filter(el => { return el.category_url === "/shop/categories/Exotic"  })})
        
    let pageOnLoadResults =                 
       filteredData.map((el)=> (
           el.map((item, index)=> (
        <Col md={3} key={index} > 
            <Product 
            key={item.id}
            item={item} />                 
        </Col>
        ))
    ))                  
       
    return (
        <div className='home'>
            <img className='home__image'
            src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqMMKKfUUSELxynoF6VLQwkR9W7GpTXyOOw&usqp=CAU'
            alt='' 
            />
        <HeaderBar />
          <div style={{ display:'flex', justifyContent: 'space-between', padding: '50px' }}>
            <Link to= "/"> Back to Home Page</Link>
            <Link to= "/product-details"> Fruit Basket</Link>
          </div>       

        <Container>
            <Row>
            { pageOnLoadResults }
            </Row> 
        </Container>  
       </div>
    )
}

export default DriedFruits