import React, { useState, useEffect, ReactElement } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: ReactElement;
  title?: string;
}
const Layout = ({ children, title }: LayoutProps): ReactElement => {
  return (
    <>
      <Helmet>
        <title>{title ? title : 'Joke Reader'}</title>
      </Helmet>

      <div className='App'>
        <Container>
          <Row>
            <Col xs={12}>
              <h4 className='my-heading'>{title}</h4>
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Layout;
