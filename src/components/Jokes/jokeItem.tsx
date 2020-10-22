import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const JokeItem = ({ jokeData }): ReactElement => {
  return (
    <div className='cart-item d-flex justify-content-around align-items-center'>
      <div className='cart-item-img'>
        <img src='https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg' />
      </div>
      <div className='cart-item-title'>
        <b>Title</b>
      </div>
      <div className='cart-item-price'>
        <small>Tk-500</small>
      </div>
      <div className='cart-item-btn'>
        <a href=''>
          <FontAwesomeIcon icon={faTimes} />
        </a>
      </div>
    </div>
  );
};

export default JokeItem;
