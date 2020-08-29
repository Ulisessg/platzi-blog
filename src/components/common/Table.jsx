import React from 'react';

import { NavLink } from 'react-router-dom';

import '../../styles/icons.css';

const Table = (props) => {
  const { users } = props;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Nombre</th>

          <th>Email</th>

          <th>Enlace</th>
        </tr>
      </thead>

      <tbody>
        {users.length > 0 &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.website}</td>
              <td>
                <NavLink to={`/publications/${user.id}`}>
                  <div className='eye-solid2 icon'>{/* Eye icon */}</div>
                </NavLink>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
