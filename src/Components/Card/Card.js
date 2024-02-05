import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.details}</Card.Text>
        <Button variant="primary">{props.button}</Button>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
