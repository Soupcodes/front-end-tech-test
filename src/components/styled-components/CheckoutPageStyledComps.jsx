import styled from "styled-components";

const CartStatus = styled.h1`
  margin-top: 15px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Basket = styled.div`
  border: solid 5px #e60059;
  margin: 20px;
  padding: 10px;
`;

const BasketItem = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const ItemQty = styled.span`
  font-size: 14px;
  margin-right: 30px;
`;

const TotalCost = styled.span`
  font-size: 14px;
  margin-right: 80px;
`;

export { CartStatus, Basket, BasketItem, ItemQty, TotalCost };
