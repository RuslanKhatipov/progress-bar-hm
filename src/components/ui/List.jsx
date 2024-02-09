import React from 'react';
import Button from 'react-bootstrap/Button';

export default function List({
  list, deleteHandler, checkHandler, changeHandler, id,
}) {
  console.log(list);
  return (
    <ul>
      <li className="list-group-item mt-3 d-flex justify-content-between">
        <input name="done" type="checkbox" onChange={() => checkHandler(list.id)} />
        <p>{list.Anket.name}</p>
        <p>{list.User.username}</p>
        <Button onClick={() => deleteHandler(list.id)} type="submit" className="btn btn-danger">Delete</Button>
        <a href={`/api/lists/${id}`} className="btn btn-secondary" changeHandler={changeHandler}>
          change
        </a>
      </li>
    </ul>
  );
}
