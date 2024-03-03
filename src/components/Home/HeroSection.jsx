import React from "react";
import carousel1 from "../../assets/images/carousel/carousel-1.png";
import carousel2 from "../../assets/images/carousel/carousel-2.png";

const HeroSection = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide h-[76vh]"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner h-full">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block" alt="carousel1" />
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="carousel2" />
        </div>
        <div className="carousel-item">
          <img src={carousel1} className="d-block w-100" alt="carousel3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
