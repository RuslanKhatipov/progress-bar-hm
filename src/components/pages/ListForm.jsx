import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ListForm() {
  return (
    <>
      <h4>
        Привет,
        {' '}
        {/* {list.firstname, list.lastname} */}
        {' '}
        И добро пожаловать в команду Высокогорья!
        Впереди нас ждет интересное путешествие в мир нашей компании,
        и самым главным проводником будет-
        {' '}
        {/* {user.username} */}
      </h4>
      <p>
        Мы подготовили для тебя чек-лист на первый день. Процесс выполнения будет сохраняться,
        поэтому ты можешь закрывать пункты в удобном для тебя порядке.
      </p>
      <h6>Нужно подготовить твое рабочее место:</h6>
      <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Наставник выдал мне пропуск"
        />
      </Form>
    </>
  );
}
