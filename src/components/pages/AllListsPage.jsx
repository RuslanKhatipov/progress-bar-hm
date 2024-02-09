import React, { useState } from 'react';
import axios from 'axios';
import List from '../ui/List';

export default function AllListsPage({ lists }) {
  const [curLists, setCurLists] = useState(lists || []);

  const deleteHandler = async (id) => {
    const res = await axios(`/api/lists/${id}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      setCurLists((prev) => prev.filter((list) => list.id !== id));
    }
  };
  // const submitChangeHandler = async (e, id) => {
  //   e.preventDefault();
  //   const res = await axios(`/api/lists/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   if (res.status === 200) {

  //   }
  // };
  return (
    <ul className="list-group">
      {curLists.map((list) => (
        <List key={list.id} deleteHandler={deleteHandler} list={list} />
      ))}
    </ul>
  );
}
