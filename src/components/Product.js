import React from 'react';
import { Card, CardText, CardBody, CardTitle,  CardGroup } from 'reactstrap';

function Product({ id, name, details }) {
    return (
        <div >
        <CardGroup className='displayCard' >
          <Card key={id} className='displayCard__contents'>
            <CardBody>
              <CardTitle tag="h5" font-weight-bold='true' >{name}</CardTitle>
              <CardText>{details}</CardText> 
            </CardBody>
          </Card>
        </CardGroup>
    </div>  
    )
}

export default Product
