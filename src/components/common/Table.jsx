import React from 'react';

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
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
