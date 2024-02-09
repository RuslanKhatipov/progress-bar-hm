import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ListForm({ positions }) {
  const [selectedPosition, setSelectedPosition] = useState(''); // Состояние для хранения выбранной должности

  const handlePositionChange = (event) => {
    const selectedPositionId = event.target.value; // Получаем id выбранной позиции
    setSelectedPosition(selectedPositionId); // Обновляем состояние
  };

  const handleCreateList = () => {
    if (selectedPosition) {
      window.location.href = `/newlistbypos/${selectedPosition}`; // Перенаправляем на страницу с выбранной должностью
    } else {
      // Обработка случая, когда не выбрана должность
      console.log('Пожалуйста, выберите должность');
    }
  };

  
  return (
    <>
      <Form.Label style={{ marginLeft: '100px' }}>Создать лист адаптации для нового сотрудника</Form.Label>
      <InputGroup style={{ marginLeft: '100px', width: '350px' }}>
        <Form.Select size="lg" className="w-auto" onChange={handlePositionChange} value={selectedPosition}>
          <option value="">Выберите должность</option>
          {positions.map((position) => (
            <option
              key={position.id}
              value={position.id}
            >
              {position.position}
            </option>
          ))}
        </Form.Select>

        <div style={{ marginTop: '10px' }}>
          <Button variant="primary" onClick={handleCreateList}>Создать лист адаптации</Button>
        </div>
      </InputGroup>
    </>
  );
}
