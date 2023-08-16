import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Nav';
import Nom from './components/Nom';
import Prix from './components/Prix';
import Description from './components/Description';
import Image from './components/Image';
import product from './components/product';

const myFirstName = "Paul";

function App() {
  return (
    <>
      <Menu />
      <Container>
      <h1 className='mx-3 mt-4'>Deal du jour</h1>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Nom />
                <Prix />
                <Description />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col>
            {myFirstName ? (
              <>
                <h4>Bonjour, {myFirstName}</h4>
                <img style={{ width: '5rem' }} src="https://static-s.aa-cdn.net/img/gp/20600002153574/OTBBWZTdrlAxq6WZ7lEg6wy758TXT_bD1cXcoS8Y-keXBpID3Wr_o4mK_Yg4QwCT5VhC?v=1" alt="Smiley" />
              </>
            ) : (
              <h4>Hello there!</h4>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
