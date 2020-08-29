import React from 'react';

import '../../styles/error.css';

const Error = () => {
  return (
    <div className='error'>
      <h1>
        Ocurrió un error
        <span role='img' aria-label='Cara triste'>
          🤖
        </span>
        Intenta más tarde
      </h1>
    </div>
  );
};

export default Error;
