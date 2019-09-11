import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import ProductsHomepage from "./pages/ProductsHomepage";
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  //state
  const [totalCost, setTotalCost] = useState(0);
  const [cart, setCart] = useState([]);

  //add item to cart, if item already exists, just update the quantity
  const addItem = product => {
    let exists = false;
    cart.map(item => {
      if (item.product.name === product.name) {
        item.product.quantity++;
        exists = true;
      }
    });
    if (exists) {
      return;
    } else {
      const newCart = [...cart, { product }];
      setCart(newCart);
    }
  };

  //delete a single item from cart, and simultaneously deduct cost from total
  const deleteItem = () => {
    cart.map(item => {
      if (item.product.quantity === 1) {
        const newCart = [];
        item.product.quantity = 0;
        setCart(newCart);
        setTotalCost(totalCost - item.product.price);
      }
      if (item.product.quantity > 1) {
        item.product.quantity--;
        setTotalCost(totalCost - item.product.price);
      }
    });
  };

  return (
    <>
      <Navbar />

      <Router>
        <ProductsHomepage
          path="/"
          addItem={product => addItem(product)}
          setTotalCost={num => setTotalCost(totalCost + num)}
        />

        <CheckoutPage
          path="/basket"
          cart={cart}
          totalCost={totalCost}
          deleteItem={deleteItem}
        />

        <PaymentPage path="/payment" />
      </Router>
    </>
  );
}

export default App;
