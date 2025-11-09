import React from "react";
import { Table, Button } from  "react-bootstrap";

const Cart = ({ cart, setCart }) => {
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <Button variant="outline-secondary" onClick={() => decreaseQty(item.id)}>-</Button>{" "}
                  {item.qty}{" "}
                  <Button variant="outline-secondary" onClick={() => increaseQty(item.id)}>+</Button>
                </td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.qty}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">Total</td>
              <td>₹{total}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Cart;
