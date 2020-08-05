import React, { useState, useEffect, useCallback } from "react";
import "./styles/carousel.scss";

function Carousel({ photos, imageOnClick, onImgChange }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const photosLen = photos.length;

  const setCurrentSlideData = useCallback((slide) => {
    console.log("setCurrentSlideData called");
    let index = slide;
    if (slide > photosLen) {
      index = 1;
    } else if (slide < 1) {
      index = photosLen;
    }

    setCurrentSlide(index);
    onImgChange(index);
  });

  const handleUserKeyPress = useCallback((e) => {
    if (e.code === "ArrowLeft") {
      setCurrentSlideData(currentSlide - 1);
    }
    if (e.code === "ArrowRight") {
      setCurrentSlideData(currentSlide + 1);
    }
  });

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

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
          onClick={() => setCurrentSlideData(currentSlide - 1)}
          className="carousel-control prev"
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrentSlideData(currentSlide + 1)}
          className="carousel-control next"
        >
          &#10095;
        </button>
      </div>

      <div className="dots">
        {[...Array(photos.length).keys()].map((e) => (
          <span
            className={`dot ${e + 1 === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlideData(e + 1)}
            key={e}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
