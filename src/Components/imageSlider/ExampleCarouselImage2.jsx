import React from "react";
import { Image } from "react-bootstrap";
import "./image2.css";

function ExampleCarouselImage2({ text }) {
  return (
    <Image
      className="img"
      src="https://bcisgroup.files.wordpress.com/2017/12/karaokedanceparty.jpg" // Replace with your actual image URL or use a placeholder
      alt={text}
      fluid
    />
  );
}

export default ExampleCarouselImage2;
