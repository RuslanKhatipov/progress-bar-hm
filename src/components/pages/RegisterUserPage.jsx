import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegisterUserPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });
  const handleChange = (event) => setFormData((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
  }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/auth/signup', formData);
    if (response.status === 200) {
      window.location.href = '/';
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Имя</Form.Label>
        <Form.Control value={formData.username} onChange={handleChange} type="text" name="username" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control value={formData.password} onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Регистрация
      </Button>
    </Form>
  );
}
