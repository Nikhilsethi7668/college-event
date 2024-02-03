import React from "react";
import { Image } from "react-bootstrap";
import "./image2.css";
function ExampleCarouselImage1({ text }) {
  return (
    <Image
      className="img"
      src="https://as2.ftcdn.net/v2/jpg/00/91/03/83/1000_F_91038333_C6b2EeBuxMcVjJpvdtdG2dMZijoSUkDX.jpg" // Replace with your actual image URL or use a placeholder
      alt={text}
      fluid
    />
  );
}

export default ExampleCarouselImage1;
