import React from 'react';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function UsersPage() {
  const now = 0 || ;
  return (
    <div>
      <h3>Пользователи</h3>

      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Роль</th>
            <th>Email</th>
            <th>
              <ProgressBar now={now} label={`${now}%`} visuallyHidden />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
