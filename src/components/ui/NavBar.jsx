import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    const res = await axios.get('/api/auth/logout');
    if (res.status === 200) {
      window.location.href = '/';
    }
  };
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
          <Nav.Link href="/">{user?.username}</Nav.Link>
          <Nav.Link href="/users">Пользователи</Nav.Link>
          <Nav.Link href="/lists">Листы адаптации</Nav.Link>
          <Nav.Link href="/auth/signup">Зарегистрировать HR</Nav.Link>
          <Nav.Link href="/auth/login">Войти</Nav.Link>
          <Nav.Link as={Button} onClick={logoutHandler}>Выйти</Nav.Link>
          <Nav.Link href="/auth/changePassword">Изменить пароль </Nav.Link>
          <Nav.Link href="/newlist">Новый лист адаптации</Nav.Link>

        </Nav>
      </Container>
    </Navbar>

  );
}
