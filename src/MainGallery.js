import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import photos from "./photos";
import Carousel from "./Carousel";

function MainGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(1);

  return (
    <>
      <Carousel
        photos={photos}
        imageOnClick={() => setIsOpen(true)}
        onImgChange={setCurrentImg}
      />
      <ReactBnbGallery
        activePhotoIndex={currentImg - 1}
        show={isOpen}
        photos={photos}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default MainGallery;
