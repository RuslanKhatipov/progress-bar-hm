import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import NewQuestForm from '../ui/NewQuestForm';

export default function NewListForm({ questions, posId }) {
  const [updatedQuestions, setUpdatedQuestions] = useState(questions);

  const handleQuestionAddition = (newQuestion) => {
    setUpdatedQuestions([...updatedQuestions, newQuestion]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get('name');
    const userEmail = formData.get('email');
    // Генерируем URL с помощью uuidv4
    const url = `http://localhost:3000/anket/${uuidv4()}`;

    try {
      // Отправляем запрос на создание листа адаптации
      const response = await axios.post('/api/adaptlist/addanket', {
        name: userName,
        email: userEmail,
        url,
        posId, // Добавляем posId в тело запроса
      });

      console.log('Список адаптации успешно создан:', response.data);
    } catch (error) {
      // Обработка ошибок при отправке запроса
      console.error('Ошибка при создании списка адаптации:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" style={{ width: '400px', marginLeft: '10px' }} controlId="exampleForm.ControlInput1">
          <Form.Label>Введите имя нового сотрудника</Form.Label>
          <Form.Control name="name" type="text" placeholder="имя нового сотрудника" />
          <Form.Label>Email сотрудника</Form.Label>
          <Form.Control name="email" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Row style={{ width: '400px', marginLeft: '20px' }}>Вопросы для листа адаптации:</Row>
        {updatedQuestions.map((question, index) => ( // Используем обновленный список вопросов
          <div className="mt-3" key={index}>
            <Row>
              <p style={{ width: '10px', marginLeft: '10px' }}>
                {index}
              </p>
              <Col>
                <Form.Control
                  style={{ width: '800px', marginLeft: '10px' }}
                  type="text"
                  value={question.question}
                  aria-label="Disabled input example"
                />
              </Col>
            </Row>
          </div>
        ))}
        {/* Передаем функцию для обновления списка вопросов в NewQuestForm */}

        <Button variant="success" type="submit">Создать лист адаптации</Button>
      </form>
      <NewQuestForm posId={posId} onQuestionAddition={handleQuestionAddition} />
    </>
  );
}
