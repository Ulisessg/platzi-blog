import React from 'react';

import '../styles/index.css';

const App = () => {
  const addRows = () => [
    <tr key={Math.round(Math.random() * 30)}>
      <td>Ulises</td>
      <td>ukisessg@gmail.com</td>
      <td>ulisessg.com</td>
    </tr>,
    <tr key={Math.round(Math.random() * 30)}>
      <td>Platzi</td>
      <td>platzi@platzi.com</td>
      <td>platzi.com</td>
    </tr>,
  ];
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

        <tbody>{addRows()}</tbody>
      </table>
    </div>
  );
};

export default App;
