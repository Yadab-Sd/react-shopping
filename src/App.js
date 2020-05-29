import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import Product from './components/product';
import CartItems from './components/cartItem';

function App() {

  const [show, setShow] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
     if(show === true)  {
       document.querySelector('.App').style.padding = '20px 320px 20px 5px'
       document.querySelector('.my-cart').style.transform = 'translateX(0%)'
     }
     else {
        document.querySelector('.App').style.padding = '20px 5px 20px 5px'
        document.querySelector('.my-cart').style.transform = 'translateX(100%)'
     }
  }, [show])

  useEffect(() => {
    fetch("http://localhost:3001/products").then(res => res.json()).then(res => setProducts(res.result.product))
  }, [products])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <h4 className="my-heading">Products</h4>
            <Row>
              {
                products.length > 0 ? (
                  products.map((product, i) => (
                    <Col xs={12} sm={6} md={3} key={i}>
                      <Product />
                    </Col>
                  ))
                ):undefined
              }
            </Row>
          </Col>
          <Card className="my-cart">
            <i className="cart-arrow shadow my-flex" onClick={()=>setShow(!show)}>
              { show ? (
                  <FontAwesomeIcon icon={faAngleRight} />
                ):(
                  <FontAwesomeIcon icon={faAngleLeft} />
                )
              }
             </i>
            <Card.Header as="h5">Cart</Card.Header>
            <Card.Body>
              <CartItems />
              <CartItems />
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between align-items-center">
                <Button className="my-btn">Place Order</Button>
                <b>Total: $20</b>
              </div>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
