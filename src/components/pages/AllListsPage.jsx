import React, { useState } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import List from '../ui/List';

export default function AllListsPage({ lists, user }) {
  const [curLists, setCurLists] = useState(lists || []);
  const [myCurList, setMyCurList] = useState([]);
  // const [input,setInput] = useState({ myList: '' });

  const switchHandler = async (userId) => {
    try {
      const response = await axios.get(`/api/lists/${userId}`);
      setMyCurList(response.data.myList);
    } catch (error) {
      console.error('Error fetching my list:', error);
    }
  };

  const deleteHandler = async (id) => {
    const res = await axios.delete(`/api/lists/${id}`);
    if (res.status === 200) {
      setCurLists((prev) => prev.filter((list) => list.id !== id));
    }
  };

  const myDeleteHandler = async (id) => {
    const res = await axios.delete(`/api/lists/${id}`);
    if (res.status === 200) {
      setMyCurList((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      onSelect={(key) => key === 'My List' && switchHandler(user.id)}
    >
      <Tab eventKey="All Lists" title="Все листы адаптации">
        <ul className="list-group">
          {curLists.map((list) => (
            <List
              key={list.id}
              deleteHandler={deleteHandler}
              list={list}
            />
          ))}
        </ul>
      </Tab>
      <Tab eventKey="My List" title="Мои листы адаптации">
        <ul className="list-group">
          {myCurList.map((el) => (
            <List
              key={el.id}
              deleteHandler={myDeleteHandler}
              list={el}
            />
          ))}
        </ul>
      </Tab>
    </Tabs>
  );
}
