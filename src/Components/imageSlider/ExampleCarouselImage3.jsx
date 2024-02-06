import React from "react";
import { Image } from "react-bootstrap";
import "./image2.css";
function ExampleCarouselImage3({ text }) {
  return (
    <Image
      className="img"
      src="https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&cs=tinysrgb&w=800" // Replace with your actual image URL or use a placeholder
      alt={text}
      fluid
    />
  );
}

export default ExampleCarouselImage3;
