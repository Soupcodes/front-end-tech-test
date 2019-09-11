import React from "react";
import {
  CartStatus,
  Basket,
  BasketItem,
  ItemQty,
  TotalCost
} from "../components/styled-components/CheckoutPageStyledComps";
import Button from "../components/styled-components/Button";

const CheckoutPage = ({ totalCost, cart, deleteItem }) => {
  return (
    <div>
      {!cart.length ? (
        <CartStatus>Your Basket is empty</CartStatus>
      ) : (
        <CartStatus>Current basket</CartStatus>
      )}
      {cart.map(item => {
        return (
          <Basket>
            <BasketItem>Item: {item.product.name}</BasketItem>
            <ItemQty>Qty: {item.product.quantity}</ItemQty>
            <TotalCost>Total: £{totalCost.toFixed(2)}</TotalCost>
            <Button onClick={() => deleteItem(item)}>Remove 1</Button>
          </Basket>
        );
      })}
      <Button style={{ margin: "10px 0 0 20px" }}>Checkout</Button>
    </div>
  );
};

export default CheckoutPage;
