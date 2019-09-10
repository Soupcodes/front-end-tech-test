import React, { useState } from "react";
import ProductCarousel from "../components/ProductCarousel";
import products from "../assets/ProductsList";
import styles from "./ProductsHomepage.module.css";

const ProductsHomepage = ({ setTotalCost, addItem }) => {
  let [purchased, setPurchased] = useState(null);

  const purchaseItem = () => {
    setPurchased(true);
  };

  return (
    <div className={styles.product}>
      <ProductCarousel className={styles.image} />
      {products.map(product => {
        return (
          <div key={product.title}>
            <h2 className={styles.title}>{product.title}</h2>
            <h4 className={styles.desc}>{product.description}</h4>
            <h6 className={styles.price}>£{product.price}</h6>
            <button
              className={styles.purchase}
              value={product.price}
              onClick={e => {
                setTotalCost(Number(e.target.value));
                addItem({
                  name: product.title,
                  quantity: 1,
                  price: product.price
                });
                purchaseItem();
              }}
            >
              Buy
            </button>
            {purchased ? (
              <p>{product.title} has been added to your basket!</p>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsHomepage;
