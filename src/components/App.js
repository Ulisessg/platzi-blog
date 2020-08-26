import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Users from './pages/Users';

const Tasks = () => <div>Si</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path='/platzi-blog' component={Users} />
      <Route exact path='/platzi-blog/task' component={Tasks} />
    </Switch>
  </BrowserRouter>
);

export default App;
