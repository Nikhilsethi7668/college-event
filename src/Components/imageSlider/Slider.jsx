import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "./ExampleCarouselImage1";
import ExampleCarouselImage2 from "./ExampleCarouselImage2";
import ExampleCarouselImage3 from "./ExampleCarouselImage3";

function UncontrolledExample() {
  return (
    <Carousel opacity="0">
      <Carousel.Item>
        <ExampleCarouselImage1 text="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage2 text="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage3 text="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
