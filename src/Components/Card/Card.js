import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card.css";

function KitchenSinkExample(props) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.details}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.fee}</ListGroup.Item>
        <ListGroup.Item>{props.rewards}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
