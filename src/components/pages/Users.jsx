import React, { useState, useEffect } from 'react';

import '../../styles/index.css';

const Users = () => {
  const [users, useUsers] = useState([]);

  const API = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => useUsers(data));
  }, []);

  return (
    <div className='margin'>
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
