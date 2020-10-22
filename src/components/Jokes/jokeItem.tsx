import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const JokeItem = ({ jokeData }: any): ReactElement => {
  console.log(jokeData);
  return (
    <div className="cart-item d-flex justify-content-around align-items-center">
      <div className="cart-item-img">
        <img src="https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg" alt='Img' />
      </div>
      <div className="cart-item-title">
        <b>Title</b>
      </div>
      <div className="cart-item-price">
        <small>{jokeData}</small>
      </div>
      <div className="cart-item-btn">
        No
      </div>
    </div>
  );
};

export default JokeItem;
