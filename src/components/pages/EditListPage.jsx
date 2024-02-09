import React, { useState } from 'react';

export default function EditListPage({ list, myList }) {
  const [curList, setCurList] = useState(list);
  const [myCurList, setMyCurList] = useState(myList);

  const changeHandler = async (id, e, inputs) => {
    e.preventDefault();
    const response = await axios.patch(`/api/lists/${list.id}`, inputs);
    if (response.status === 200) {
      setCurLists({ ...curLists, ...inputs });
    }
  };
  const myChangeHandler = async (e, list, myList, inputs) => {
    e.preventDefault();
    const response = await axios.patch(`/api/lists/${list.id}`, inputs);
    if (response.status === 200) {
      setCurLists({ ...curLists, ...inputs });
    }
  };

  return (
    <div>EditListPage</div>

  );
}
