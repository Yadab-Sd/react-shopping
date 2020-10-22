import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';

const CartItem = () => {
  return (
    <Card className='my-cart'>
      <i
        className='cart-arrow shadow my-flex'
        // onClick={() => setShow(!show)}
      >
        {/* {show ? (
                <FontAwesomeIcon icon={faAngleRight} />
              ) : (
                <FontAwesomeIcon icon={faAngleLeft} />
              )} */}
      </i>
      <Card.Header as='h5'>Cart</Card.Header>
      <Card.Body>{/* <CartItems />
              <CartItems /> */}</Card.Body>
      <Card.Footer>
        <div className='d-flex justify-content-between align-items-center'>
          <Button className='my-btn'>Place Order</Button>
          <b>Total: $20</b>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CartItem;
