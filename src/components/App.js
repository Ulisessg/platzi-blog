import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './common/Menu';
import Users from './pages/Users';

const Tasks = () => <div>Si</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <>
        <div id='margin'>
          <Route exact path='/' component={Users} />
          <Route exact path='/task' component={Tasks} />
        </div>
      </>
    </Switch>
  </BrowserRouter>
);

export default App;
