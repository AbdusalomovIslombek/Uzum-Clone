import { Carousel } from "@material-tailwind/react";
import React from "react";

const CarouselComponent = () => {
  return (
    <Carousel
      className="w-[80%] rounded-md"
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
    >
      <img
        src="https://images.uzum.uz/ct02nidpq3ggq63emg0g/main_page_banner.jpg"
        alt="Uzum Shaxzoda"
        className="w-full h-full rounded-md"
      />
      <img
        src="https://images.uzum.uz/cs7s82lpq3ghb2qjbe6g/main_page_banner.jpg"
        alt="Den"
        className="w-full h-full rounded-md"
      />
    </Carousel>
  );
};

export default CarouselComponent;
