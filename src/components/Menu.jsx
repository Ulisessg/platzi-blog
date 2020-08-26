import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <nav>
    <NavLink to='/platzi-blog'>Usuarios</NavLink>
    <NavLink to='/platzi-blog/task'>Tasks</NavLink>
  </nav>
);

export default Menu;
