import React from 'react';
import { Card, Button } from 'react-bootstrap'

function Product() {
  return (
    <div className="single-product">
      <Card>
        <Card.Img variant="top" src="https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg" />
        <Card.Body>
          <Card.Title>Product Title</Card.Title>
          <Card.Text>
            Some quick example
          </Card.Text>
          <div className="single-product-footer d-flex justify-content-between align-items-center">
            <b>$500</b>
            <a href="#" class="single-product-footer-btn">+</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
