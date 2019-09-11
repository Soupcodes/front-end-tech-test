import React, { useState } from "react";
import ProductCarousel from "../components/ProductCarousel";
import products from "../assets/ProductsList";
import {
  Button,
  ProductCard,
  ProductTitle,
  MainBodyText,
  ProductPrice
} from "../components/PDPStyledComponents";

const ProductsHomepage = ({ setTotalCost, addItem }) => {
  let [purchased, setPurchased] = useState(null);

  const purchaseItem = () => {
    setPurchased(true);
  };

  return (
    <ProductCard>
      <ProductCarousel />
      {products.map(product => {
        return (
          <div key={product.title}>
            <ProductTitle>{product.title}</ProductTitle>
            <MainBodyText>{product.description}</MainBodyText>
            <ProductPrice>£{product.price}</ProductPrice>
            <Button
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
            </Button>
            {purchased ? (
              <MainBodyText>
                {product.title} has been added to your basket!
              </MainBodyText>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </ProductCard>
  );
};

export default ProductsHomepage;
