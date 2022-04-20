import React from "react";
import { Card } from "react-bootstrap";

const ItemCard = ({ name, img, desc, price }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="my-3 mx-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Description: {desc}</Card.Text>
          <div
            style={{
              backgroundColor: "#ff2e77",
              color: "white",
              display: "inline",
              padding: "10px",
              borderRadius: "8px",
              fontWeight: "800",
              fontSize: "17px",
            }}
            variant="danger"
          >
            Rs {price}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
