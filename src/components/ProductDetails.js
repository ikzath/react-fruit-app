import React, { useContext, useEffect } from 'react';
import "../styles/ProductDetails.css";
import { MyContextData } from "../context/context";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle,  CardGroup, CardImg, Button } from 'reactstrap';
import { Link } from "react-router-dom";


function ProductDetails({ item }) {

   const { watchList, removeFruitFromWatchlist } = useContext(MyContextData); 

  //  useEffect(() => {
  //    if(watchList.length > 5) {
  //      watchList.length = 5
  //    }
  //  }, [])
  
    return (
        <div className='productDetails'>
          <div className='home'>
            <img className='home__image'
            src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqMMKKfUUSELxynoF6VLQwkR9W7GpTXyOOw&usqp=CAU'
            alt='' 
            />
            <div>
            <Link to= '/'> Back to Home Page</Link>
            </div>              
          
        { watchList.length > 0 ? (    
        <Container>
            <Row>
              {watchList.map((item, i)=> (
                <Col md={3} key={i} > 
                  <CardGroup className='displayCard' >
                    <Card key={item.id} className='displayCard__contents'>
                      <CardBody>
                        <CardTitle tag="h5" font-weight-bold='true' >{item.name}</CardTitle>
                        <CardText>{`Price: ${item.price}`}</CardText> 
                        <CardImg top width="50%" height='50%' src={item.photo_url} alt="" />
                        <Button style={{ backgroundColor: 'orange', marginTop: '5px'}} onClick={()=> removeFruitFromWatchlist(item.name)} >Remove Item from recent views</Button>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>  
              ))}
            </Row> 
        </Container> ) : ('No Fruits in your basket'
        ) }
        </div>
    </div>  
    )
}

export default ProductDetails
