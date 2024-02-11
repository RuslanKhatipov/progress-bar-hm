import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default function AnketPage({
  anket, questions, list, hruser, answers,
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Устанавливаем состояние isChecked в зависимости от значения answer
    answers.map((answer) => {
      if (answer.answer === 'done') {
        setIsChecked(true);
      }
    });
  }, [answers]);

  const handleCheckboxChange = async (anketId, questId, answer) => {
    const newAnswer = answer ? 'done' : null; // Определяем новое значение answer

    try {
      // Отправляем запрос на сервер для обновления значения answer
      const response = await axios.post(`/api/anket/${anketId}/questions/${questId}`, { answer: newAnswer });
      console.log('Успешно обновлено:', response.data);
      setIsChecked(!isChecked); // Обновляем состояние чекбокса
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };

  return (
    <Card style={{ width: '900px', alignItems: 'center' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{`Привет, ${anket.name}`}</ListGroup.Item>
        <ListGroup.Item>
          И добро пожаловать в команду Высокогорья!
        </ListGroup.Item>
        <ListGroup.Item>{`Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет: ${hruser.username}`}</ListGroup.Item>
        <ListGroup.Item>
          Мы подготовили для тебя чек-лист на первый день. Процесс выполнения
          будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.
          {' '}
        </ListGroup.Item>

        {questions.map((question) => (
          <ListGroup.Item key={question.id}>
            <Row>
              <Form.Check
                aria-label={`option ${question.id + 1}`}
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(anket.id, question.id, question.answer)}
                label={`${question.id + 1}. ${question.question}`}
              />
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
