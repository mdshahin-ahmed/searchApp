import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ data }) => {
  const { brandName, img, description, price } = data;
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <Card
        className="shadow card
      "
      >
        <div className="imgWrap">
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body className="cardBody">
          <div className="cardHeading">
            <Card.Title>{brandName}</Card.Title>
            <h5>
              $<span>{price}</span>
            </h5>
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
