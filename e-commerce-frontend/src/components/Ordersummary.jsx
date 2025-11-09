import React from 'react';
import { Card } from 'react-bootstrap';

const OrderSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <Card.Text>Total Items: {cart.length}</Card.Text>
        <Card.Text>Total Price: ₹{total}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;