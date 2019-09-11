import styled from "styled-components";

const ProductCard = styled.div`
  border: solid 5px #e60059;
  margin: 20px;
  display: grid;
  grid-template-areas:
    "image title title"
    "image description ."
    "image price .";
`;

const ProductTitle = styled.h1`
  margin-top: 15px;
  margin-right: 15px;
  font-size: 16px;
  font-weight: bold;
`;

const MainBodyText = styled.h3`
  margin-top: 15px;
  margin-right: 15px;
  font-size: 12px;
`;

const ProductPrice = styled.span`
  font-size: 12px;
  margin-right: 30px;
  font-weight: bold;
`;

const ProductQty = styled.span`
  font-size: 12px;
  margin-right: 80px;
  font-weight: bold;
`;

export { ProductCard, ProductTitle, MainBodyText, ProductPrice, ProductQty };
