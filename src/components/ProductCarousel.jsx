import React, { useState } from "react";
import products from "../assets/ProductsList";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ background: "white", width: "40vw", height: "40vh" }}>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {products[0].images.map(image => (
          <GalleryImage objectFit="contain" src={image} key={image} />
        ))}
      </Gallery>
    </div>
  );
};

export default ProductCarousel;
