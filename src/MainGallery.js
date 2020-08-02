import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import photos from "./photos";
import Carousel from "./Carousel";

function MainGallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Carousel photos={photos} imageOnClick={() => setIsOpen(true)} />
      <ReactBnbGallery
        show={isOpen}
        photos={photos}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default MainGallery;
