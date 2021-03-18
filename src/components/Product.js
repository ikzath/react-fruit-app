import React, { useContext } from 'react';
import { Card, CardBody, CardTitle,  CardGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MyContextData } from "../context/context";


function Product({ item }) {

    const { addFruitToWatchlist, watchList } = useContext(MyContextData);   

    let storedProduct = watchList.find(i => i.name === item.name)
    const watchListDisabled = storedProduct ? true : false;

    
    return (
      <div >
        <CardGroup className='displayCard' >
          <Card key={item.id} className='displayCard__contents'>
            <CardBody>
              <CardTitle tag="h5" font-weight-bold='true' >{item.name}</CardTitle>
                <Link to='/product-details'> 
                  <Button type="submit"
                    disabled={watchListDisabled}
                    style={{ backgroundColor: 'orange'}} 
                    onClick={()=> addFruitToWatchlist(item)} >                
                    {watchListDisabled ? 'Product recenlly viewed' : 'Product Details'}
                  </Button>
                </Link>
            </CardBody>
          </Card>
        </CardGroup>
    </div>  
    )
}

export default Product
