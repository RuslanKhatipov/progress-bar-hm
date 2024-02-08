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
          <Nav.Link href="/lists">Листы адаптации</Nav.Link>
          <Nav.Link href="/auth/signup">Зарегистрировать HR</Nav.Link>
          <Nav.Link href="/auth/login">Войти</Nav.Link>
          <Nav.Link href="/auth/logout">Выйти</Nav.Link>
          <Nav.Link href="/newlist">Новый лист адаптации</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  );
}
