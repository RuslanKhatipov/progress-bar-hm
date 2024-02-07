import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CardsImage() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p>Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
