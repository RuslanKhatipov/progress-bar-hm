import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function UsersPage({ users, ankets, positions }) {
  const [ankArr, setAnketsArr] = useState(ankets);
  const [usersArr, setUsers] = useState(users);
  const userHr = users.filter((user) => !user.isAdmin);
  // const [selectPosition, setSelectedPosition] = useState('');
  console.log(users);

  const handlePositionChange = (event, anketId) => {
    const selectedPositionId = event.target.value;
    axios.patch('/api/users/posId', { anketId, posId: selectedPositionId })
      .then(() => {
        setAnketsArr((prev) => prev.map((el) => (el.id === anketId ? { ...el, posId: selectedPositionId } : el)));
      });
    // setSelectedPosition(selectedPositionId);
  };

  const now = 0;
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Сотрудники">
          Сотрудники
          Anket
          <Table striped="columns">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>url</th>
                <th>PosId</th>
              </tr>
            </thead>
            <tbody key={ankets.id}>
              {ankArr.map((anket) => (
                <tr key={anket.id}>
                  <td>{anket.id}</td>
                  <td>{anket.name}</td>
                  <td><a href={`http://localhost:3000/anket/${anket.url}`}>{`http://localhost:3000/anket/${anket.url}`}</a></td>
                  <td>
                    <Form.Select onChange={(e) => handlePositionChange(e, anket.id)} value={anket.posId}>

                      {positions.map((elem) => (
                        <option
                          defaultValue={anket.posId}
                          key={elem.id}
                          value={elem.id}
                        >
                          {elem.position}
                        </option>
                      ))}

                    </Form.Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="profile" title="HR Департамент">
          HR Департамент
          USer
          <Table striped="columns">
            <thead>
              <tr>
                <th>#</th>
                <th>Имя</th>
                <th>email</th>
                <th>Роль</th>
                {/* <th>
                  <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                </th> */}
              </tr>
            </thead>
            <tbody>
              {userHr.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.isAdmin ? user.isAdmin : 'false'}</td> */}
                  <td />
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
}
