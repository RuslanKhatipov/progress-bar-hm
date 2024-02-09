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

  const relative = {
    position: 'relative',
    alignItems: 'center',
  };
  const btn = {
    position: 'absolute',
    right: '15px',
    top: '10px',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    backgroundColor: '#248e17',

  };

  return (
    <Navbar bg="primary" data-bs-theme="dark" style={relative}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/mountain.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {user ? (
            <>
              <Nav.Link href="/">{user.username}</Nav.Link>
              {!user.isAdmin && (
                <>
                  <Nav.Link href="/users">Пользователи</Nav.Link>
                  <Nav.Link href="/lists">Листы адаптации</Nav.Link>
                  <Nav.Link href="/newlist">Новый лист адаптации</Nav.Link>
                </>
              )}
              {user.isAdmin && (
                <>
                  <Nav.Link href="/auth/signup">Зарегистрировать HR</Nav.Link>
                  <Nav.Link href="/auth/refresh">Изменить пароль</Nav.Link>
                  <Nav.Link href="/users">Пользователи</Nav.Link>
                  <Nav.Link href="/lists">Листы адаптации</Nav.Link>
                  <Nav.Link href="/newlist">Новый лист адаптации</Nav.Link>
                </>
              )}
              <Nav.Link as={Button} onClick={logoutHandler}>Выйти</Nav.Link>

            </>
          ) : (
            <>
              <Container>
                <Navbar.Brand>ООО “Высокая Гора”</Navbar.Brand>
              </Container>
              <Nav.Link style={btn} href="/auth/login">Войти</Nav.Link>
            </>

          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
