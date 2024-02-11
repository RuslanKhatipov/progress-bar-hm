import React, { useState } from 'react';
import axios from 'axios';

export default function NewQuestForm({ posId, onQuestionAddition }) {
  const [question, setQuestion] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      setErrorMessage('Пожалуйста, введите вопрос.');
      return;
    }

    try {
      const response = await axios.post('/api/adaptlist/addquestion', { question, posId });
      setSuccessMessage('Вопрос успешно добавлен.');
      setQuestion('');
      // После успешного добавления вызываем функцию для обновления списка вопросов
      onQuestionAddition({ question });
    } catch (error) {
      console.error('Ошибка при добавлении вопроса:', error);
      setErrorMessage('Ошибка при добавлении вопроса. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="" style={{ width: '800px', marginLeft: '10px' }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="questionInput" className="form-label">
            Добавить вопрос
          </label>
          <input
            id="questionInput"
            type="text"
            className="form-control"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Введите вопрос..."

          />
          {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
          {successMessage && <div className="text-success mt-2">{successMessage}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>
    </div>
  );
}
