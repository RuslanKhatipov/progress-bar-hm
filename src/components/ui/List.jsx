import React from 'react';
import Button from 'react-bootstrap/Button';

export default function List({ list, deleteHandler, checkHandler }) {
  return (
    <ul>
      <li className="list-group-item mt-3 d-flex justify-content-between">
        <input name="done" type="checkbox" checked={list.done} onChange={() => checkHandler(list.id)} />
        <p>{list.title}</p>
        <Button onClick={() => deleteHandler(list.id)} type="submit" className="btn btn-danger">Delete</Button>
        <a href={`/api/lists/${list.id}`} className="btn btn-secondary">
          change
        </a>
      </li>
    </ul>
  );
}
