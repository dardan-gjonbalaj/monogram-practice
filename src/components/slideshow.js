import React from "react";
import { Slide } from "react-slideshow-image";
import "./slideshow.css";

const slideImages = [
  "https://picsum.photos/900/900?random-1.jpg",
  "https://picsum.photos/900/900?random-2.jpg",
  "https://picsum.photos/900/900?random-3.jpg",
];

// const images = [
//   "https://www.w3schools.com/howto/img_mountains_wide.jpg",
//   "https://www.w3schools.com/howto/img_lights_wide.jpg",
//   "https://www.w3schools.com/howto/img_snow_wide.jpg",
// ];

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
