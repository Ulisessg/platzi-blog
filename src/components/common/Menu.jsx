import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/menu.css';

const Menu = (props) => (
  <header>
    <nav id='menu'>
      <Link to='/'>Usuarios</Link>
      <Link to='/task'>Tasks</Link>
    </nav>
  </header>
);

export default Menu;
