import React, { useState, useEffect } from "react";
import "./styles/carousel.scss";

function getDesiredIndex(slide, photosLen) {
  let index = slide;
  if (slide > photosLen) {
    index = 1;
  } else if (slide < 1) {
    index = photosLen;
  }
  return index;
}

function Carousel({ photos, imageOnClick, onImgChange }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const photosLen = photos.length;

  useEffect(() => {
    onImgChange(currentSlide);
    return () => {
      onImgChange(1);
    };
  }, [currentSlide, onImgChange]);

  useEffect(() => {
    console.log("use effect called");
    function handleUserKeyPress(e) {
      if (e.code === "ArrowLeft") {
        setCurrentSlide((prev) => getDesiredIndex(prev - 1, photosLen));
      }
      if (e.code === "ArrowRight") {
        setCurrentSlide((prev) => getDesiredIndex(prev + 1, photosLen));
      }
    }
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="carousel">
      <div className="slideshow-container">
        {photos.map((e, i, d) => (
          <div
            className={`slides fade ${currentSlide === i + 1 ? "active" : ""}`}
            key={i}
          >
            <div className="numbertext">{`${i + 1} / ${d.length}`}</div>
            <div className="imgContainer">
              <img alt={e.caption} src={e.photo} onClick={imageOnClick} />
            </div>
            <div className={`text ${e.caption ? "shown" : ""}`}>
              {e.caption}
            </div>
          </div>
        ))}

        <button
          onClick={() =>
            setCurrentSlide((prev) => getDesiredIndex(prev - 1, photosLen))
          }
          className="carousel-control prev"
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => getDesiredIndex(prev + 1, photosLen))
          }
          className="carousel-control next"
        >
          &#10095;
        </button>
      </div>

      <div className="dots">
        {[...Array(photos.length).keys()].map((e) => (
          <span
            className={`dot ${e + 1 === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlide(e + 1)}
            key={e}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
