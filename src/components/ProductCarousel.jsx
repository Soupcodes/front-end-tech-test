import React, { useState } from "react";
import products from "../assets/ProductsList";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import ImgCarousel from "../components/styled-components/CarouselSyledComponents";

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <ImgCarousel>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {products[0].images.map(image => (
          <GalleryImage
            objectFit="contain"
            src={image}
            key={image}
            style={{
              width: "40%",
              height: "40%",
              margin: "auto"
            }}
          />
        ))}
      </Gallery>
    </ImgCarousel>
  );
};

export default ProductCarousel;
