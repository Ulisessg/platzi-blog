import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/menu.css';

const Menu = (props) => (
  <nav id='menu'>
    <Link to='/'>Usuarios</Link>
    <Link to='/task'>Tasks</Link>
  </nav>
);

export default Menu;
