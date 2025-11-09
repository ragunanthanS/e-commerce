import React from 'react'
import {Button,Card} from "react-bootstrap";

const ProductCard = ({product,addToCart}) => {
  return (
    <Card style={{ width: '100%' }} className="h-100 d-flex flex-column">
        <Card.Img variant = "top" src={product.image}/>
        <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary" onClick={()=> addToCart(product)} >
                Add To Cart
            </Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard;
