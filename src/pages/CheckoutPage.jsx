import React from "react";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = ({ totalCost, cart, deleteItem }) => {
  return (
    <div>
      {!cart.length ? <h3>Your Basket is empty</h3> : <h3>Current basket</h3>}
      {cart.map(item => {
        return (
          <div key={item.product.name} className={styles.checkout}>
            <p className={styles.item}>Item: {item.product.name}</p>
            <p className={styles.qty}>Qty: {item.product.quantity}</p>
            <h4 className={styles.total}>Total: £{totalCost.toFixed(2)}</h4>
            <button onClick={() => deleteItem(item)}>Remove 1</button>
          </div>
        );
      })}
      <button>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
