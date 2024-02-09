import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CardsImage() {
  const imageURL = 'https://cdn.tripster.ru/thumbs2/f5a8c1fe-b128-11ed-9e63-2e5ef03bee8d.1220x600.jpeg';

  const backgroundStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" />
        </Row>
      </Container>
    </div>
  );
}
