import React from 'react';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

export default function UsersPage({ users, ankets }) {
  const userHr = users.filter((user) => !user.isAdmin);
  console.log(ankets.position);

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
                {/* <th>
                  <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                </th> */}
              </tr>
            </thead>
            <tbody>
              {ankets.map((anket) => (
                <tr>
                  <td>{anket.id}</td>
                  <td>{anket.name}</td>
                  <td>{anket.url}</td>
                  <td>
                    <Form.Select>
                      <option>{anket.Position.position}</option>
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
                <th>name</th>
                <th>email</th>
                <th>Роль</th>
                <th>
                  <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                </th>
              </tr>
            </thead>
            <tbody>
              {userHr.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
}
