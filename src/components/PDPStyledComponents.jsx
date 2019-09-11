import styled from "styled-components";

const Button = styled.button`
  font-size: 0.6rem;
  border-radius: 5px;
  padding: 5px 8px;
  &:hover {
    background: #e60059;
  }
`;

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

const ProductPrice = styled.h4`
  font-size: 12px;
`;

export { Button, ProductCard, ProductTitle, MainBodyText, ProductPrice };
