import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { NavLink } from "react-router-dom";


function KitchenSinkExample(props) {
  return (
    <Card className="full" style={{ width: props.size, height: props.height }}>
      <Card.Img className="image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="content">{props.details}</Card.Text>
        <NavLink to={props.route}>
          <Button
            className="button"
            style={{ width: "8rem", height: "4rem" }}
            variant="primary"
          >
            {props.button}
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
