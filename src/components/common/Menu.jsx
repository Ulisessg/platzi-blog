import React from 'react';

import { NavLink } from 'react-router-dom';

import '../../styles/menu.css';

const Menu = () => (
  <nav id='menu'>
    <NavLink to='/'>Usuarios</NavLink>
    <NavLink to='/task'>Tasks</NavLink>
  </nav>
);

export default Menu;