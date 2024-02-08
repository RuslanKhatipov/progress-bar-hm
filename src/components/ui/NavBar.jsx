import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (

    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/images/mountain.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/users">Пользователи</Nav.Link>
          <Nav.Link href="#features">Все листы</Nav.Link>
          <Nav.Link href="#pricing">Мои листы</Nav.Link>
          <Nav.Link href="#pricing">Выйти</Nav.Link>
          <Nav.Link href="#pricing">Зарегистрировать пользователя</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  );
}
