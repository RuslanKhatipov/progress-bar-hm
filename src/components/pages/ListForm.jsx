import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ListForm({ positions }) {
  return (
    <>
      <Form.Label style={{ marginLeft: '100px' }}>Создать лист адаптации для нового сотрудника</Form.Label>
      <InputGroup style={{ marginLeft: '100px', width: '350px' }}>
        <Form.Select size="lg" className="w-auto">
          {positions.map((position, index) => (<option key={index}>{position.position}</option>))}
        </Form.Select>
        <div style={{ marginTop: '10px' }}>
          <a href="/newlistbypos">
            <Button variant="primary">Создать лист адаптации</Button>
          </a>
        </div>

        {' '}
      </InputGroup>
    </>
  );
}
