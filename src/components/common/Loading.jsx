import React from 'react';

import '../../styles/loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='lds-roller'>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
        <div>{/* Animation*/}</div>
      </div>
    </div>
  );
};

export default Loading;
