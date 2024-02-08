import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

export default function RefreshPage() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.patch('/api/auth/refresh', {
        email,
        newPassword,
      });

      if (response.status === 200) {
        setMessage('Пароль успешно обновлен');
        setNewPassword(''); // Очистить поле с новым паролем после успешного обновления
      } else {
        setMessage(`Ошибка при обновлении пароля: ${response.data.message}`);
      }
    } catch (error) {
      setMessage(`Ошибка при отправке запроса: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <Form className="m-3" onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Введите email пользователя"
          />
          <Form.Control
            value={newPassword}
            onChange={handleChange}
            type="password"
            placeholder="Введите новый пароль"
          />
          <Button type="submit">Изменить пароль</Button>
        </InputGroup>
      </Form>
    </div>
  );
}
