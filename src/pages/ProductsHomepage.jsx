import React, { useState } from "react";
import ProductCarousel from "../components/ProductCarousel";
import products from "../assets/ProductsList";
import {
  ProductCard,
  ProductTitle,
  MainBodyText,
  ProductPrice,
  ProductQty
} from "../components/styled-components/PDPStyledComponents";
import Button from "../components/styled-components/Button";

const ProductsHomepage = ({ setTotalCost, addItem }) => {
  const [purchased, setPurchased] = useState(null);
  const [quantity, setQuantity] = useState(0);

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
            <ProductQty>Qty: {quantity}</ProductQty>
            <Button
              value={product.price}
              onClick={e => {
                setTotalCost(Number(e.target.value));
                setQuantity(quantity + 1);
                addItem({
                  name: product.title,
                  quantity: 1,
                  price: product.price
                });
                purchaseItem();
              }}
            >
              Add to Basket
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
