import React from 'react';
import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;