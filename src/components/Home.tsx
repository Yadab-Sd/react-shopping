import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface JokeBody {
  category: string;
  type: string;
  flags: string[];
  content: string;
  delivery?: string;
}

function Home() {
  const [jokes, setJokes] = useState<JokeBody[]>([]);

  useEffect(() => {
    let gainedData = localStorage.getItem("jokes");
    gainedData = gainedData ? JSON.parse(gainedData) : [];
    if(gainedData?.length) setJokes(gainedData as any);
  }, []);

  return (
    <div>
      <Row className="align-items-md-center justify-content-md-center my-flex">
        <Col xs={6} md={6} sm={12}>
          <h4 className="my-heading">Jokes</h4>
        </Col>
        <Col
          xs={6}
          md={6}
          sm={12}
          className="justify-content-md-end justify-content-sm-start my-flex mt-10 mb-10"
        >
          <Link className="my-btn mr-10 d-in-block" to="./jokes/add">
            <Button type="button" className="my-btn">
              + Create new Joke
            </Button>
          </Link>
          <Link className="my-btn d-in-block" to="./jokes/:id/play">
            <Button type="button" className="my-btn">
              Play Jokes
            </Button>
          </Link>
        </Col>
      </Row>
      {jokes.length > 0
        ? jokes.map((joke, i) => (
              <div className="cart-item d-flex justify-content-around align-items-center" key={i}>
                <div className="cart-item-img">
                    {console.log('single joke', joke.category)}g
                </div>
                <div className="cart-item-title">
                  <b>{joke.category}</b>
                </div>
                <div className="cart-item-price">
                  p
                </div>
                <div className="cart-item-btn">No</div>
              </div>
          ))
        : undefined}
    </div>
  );
}

export default Home;
