import React, { useState } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import List from '../ui/List';

export default function AllListsPage({ lists }, { myList }) {
  const [curLists, setCurLists] = useState(lists || []);
  const [myCurList, setMyCurList] = useState(myList || []);
  // const [input,setInput] = useState({ myList: '' });

  const deleteHandler = async (id) => {
    const res = await axios(`/api/lists/${id}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      setCurLists((prev) => prev.filter((list) => list.id !== id));
    }
  };

  const myDeleteHandler = async (id) => {
    const res = await axios(`/api/lists/${id}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      setMyCurLists((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="All Lists" title="All Lists">
        <ul className="list-group">
          {curLists.map((list) => (
            <List key={list.id} deleteHandler={deleteHandler} list={list} />
          ))}
        </ul>
      </Tab>
      <Tab eventKey="My List" title="My List">
        {/* <ul className="list-group">
          {myCurLists.map((el) => (
            <List key={el.id} deleteHandler={deleteHandler} el={el} />
          ))}
        </ul> */}
      </Tab>
    </Tabs>
  );
}
