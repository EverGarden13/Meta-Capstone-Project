import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import restaurantImage from '../assets/restaurant.jpg';

const Home = () => {
  return (
    <Container className="home">
      <Row className="justify-content-center">
        <Col md={8}>
          <Image src={restaurantImage} alt="Little Lemon Restaurant" className="home-image" fluid rounded />
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <h1>Welcome to Little Lemon Restaurant</h1>
          <p>Experience the best dining experience with us. Our restaurant offers a variety of delicious dishes made from the freshest ingredients. Come and enjoy a cozy atmosphere with excellent service.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;