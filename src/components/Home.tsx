import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JokeItem from './Jokes/jokeItem';

function Home() {
  const [show, setShow] = useState(true);
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    fetch('/jokes')
      .then((res) => res.json())
      .then((res) => {
        setJokes(res);
        console.log('response', res);
      });
  }, [jokes]);

  return (
    <div>
      <Row>
        <Col xs={6} md={6} sm={12}>
          <Link className='my-btn mr-10' to='./jokes/add'>
            + Create new Joke
          </Link>
          <Link className='my-btn'>Play Joke</Link>
        </Col>
      </Row>
      {jokes.length > 0
        ? jokes.map((joke, i) => <JokeItem jokeData={joke} />)
        : undefined}
    </div>
  );
}

export default Home;
