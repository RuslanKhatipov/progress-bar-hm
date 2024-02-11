import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import NewQuestForm from '../ui/NewQuestForm';

export default function NewListForm({ questions, posId, position }) {
  const [updatedQuestions, setUpdatedQuestions] = useState(questions);

  const handleQuestionAddition = (newQuestion) => {
    setUpdatedQuestions([...updatedQuestions, newQuestion]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get('name');
    const userEmail = formData.get('email');
    const url = uuidv4(); // Генерируем URL с помощью uuidv4

    try {
      // Отправляем запрос на создание листа адаптации
      const response = await axios.post('/api/adaptlist/addanket', {
        name: userName,
        email: userEmail,
        url,
        posId,
      });
      const { anketId } = response.data; // Получаем anketId из ответа сервера
      console.log('Список адаптации успешно создан:', response.data);
      // записываем массив вопросов
      const newAnswers = updatedQuestions.map((question) => ({
        questId: question.id,
        answer: null,
      }));
      // запрос на запись пустых ответов на вопросы
      const responseAnswers = await axios.post('/api/adaptlist/addanswers', {
        anketId,
        answers: newAnswers,
      });
      console.log('Ответы успешно созданы:', responseAnswers.data);
    } catch (error) {
      console.error('Ошибка при создании списка адаптации:', error);
    }
  };

  const deleteHandler = async (questionId) => {
    const response = await fetch(`/api/adaptlist/${questionId}`, { method: 'DELETE' });
    if (response.status === 200) {
      setUpdatedQuestions((prev) => prev.filter((quest) => quest.id !== questionId));
    } else if (response.status === 500) {
      const message = await response.json();
      console.log(message.name);
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
        <Row style={{ width: '400px', marginLeft: '20px' }}>{`Вопросы для листа адаптации на должность: ${position.position}`}</Row>
        {updatedQuestions.map((question, index) => ( // Используем обновленный список вопросов
          <div className="mt-3" key={index}>
            <Row>
              <p style={{ width: '10px', marginLeft: '10px' }}>
                {index + 1}
              </p>
              <Col>
                <Form.Control
                  style={{ width: '800px', marginLeft: '10px' }}
                  type="text"
                  value={question.question}
                  aria-label="Disabled input example"
                />
              </Col>
              <Col>
                <button onClick={() => deleteHandler(question.id)} type="button" className="btn btn-danger">
                  Удалить
                </button>
              </Col>

            </Row>
          </div>
        ))}
        <Button style={{ marginTop: '20px', marginLeft: '200px' }} variant="success" type="submit">Создать лист адаптации</Button>
      </form>
      <NewQuestForm posId={posId} onQuestionAddition={handleQuestionAddition} />
    </>
  );
}
