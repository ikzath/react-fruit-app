import "../styles/Home.css";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import Product from "./Product";


function Home() {

    const [Data, setData] = useState([]);
    const [Category, setCategory] = useState([])
    const [photo, setphoto] = useState([])
    let newStories = [];

    
    const fetchData = () => {
        // setLoading(true)
        axios.get('https://api.predic8.de:443/shop/categories/')

        .then(result => {
            // just grab the first 5 links
            const results = result.data.categories;
            // NESTED AXIOS CALLS
            results.forEach(element => 
            {
            axios
                .get(
                    "https://api.predic8.de:443" 
                    + element.category_url
                    
                )
                .then(result => {
                    const productData = result.data.products;
                    setCategory(result.data.products);
                    // newStories.push(result.data.name)                    
                    
                    productData.forEach(item => {
                        axios.get('https://api.predic8.de:443' + item.product_url)
                        
                    .then(r => {
                        // newStories.push(r.data)
                        // const productDataDetails = [r.data];
                        setData([...Data,  r.data ])
                
                    // productDataDetails.forEach(el => {
                    //     axios.get('https://api.predic8.de:443' + el.photo_url)

                    //     .then(el => {
                    //         // console.log(el)
                    //         // newStories.push(el.data)
                    //         setphoto(el.data)
                    //     })
                    //   })    
                    })
                })
            })        
            
            // .then((res)=> setData([...Data, newStories]))
            // .then((res)=> setphoto([...Data, newStories]))
            .catch(err => {
                console.log(err);
            });
          })        
        })
            .catch((err) => {
                console.log('error', err);
            })
        };          

        useEffect(() => { 

            fetchData();   
            
        }, []); 
        
    let pageOnLoadResults =                 
       Data.map((item, i)=> (
        <Col md={3} key={i} > 
            <Product            
                key={item.id}
                id = {item.id}
                name={item.name}
                details={item.price}
            />
        </Col>
    ))      

    // console.log(Data.map(i => {  i.map(el => { return el })}))  
    // console.log(Data.map(i => { return i.name }))
    console.log(Data);

    return (
        <div className='home'>
            <img className='home__image'
            src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqMMKKfUUSELxynoF6VLQwkR9W7GpTXyOOw&usqp=CAU'
            alt='' 
            />
            
        <Container>
            <Row>
                { pageOnLoadResults}                   
                {/* {Data.price} */}
            </Row> 
        </Container>  
        </div>
    )
}

export default Home