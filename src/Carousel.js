import React, { useState, useEffect } from "react";
import "./styles/carousel.scss";

function Carousel({ photos, imageOnClick }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const photosLen = photos.length;

  return (
    <div className="carousel">
      <div className="slideshow-container">
        {photos.map((e, i, d) => (
          <div
            className={`slides fade ${currentSlide === i + 1 ? "active" : ""}`}
            key={i}
          >
            <div className="numbertext">{`${i + 1} / ${d.length}`}</div>
            <img alt={e.caption} src={e.photo} onClick={imageOnClick} />
            <div className="text">{e.caption}</div>
          </div>
        ))}

        <button
          onClick={() =>
            currentSlide - 1 < 1
              ? setCurrentSlide(photosLen)
              : setCurrentSlide(currentSlide - 1)
          }
          className="prev"
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            currentSlide + 1 > photosLen
              ? setCurrentSlide(1)
              : setCurrentSlide(currentSlide + 1)
          }
          className="next"
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
