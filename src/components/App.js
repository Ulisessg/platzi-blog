import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './common/Menu';
import Users from './pages/Users';
import Publications from './Publications/index';

const Tasks = () => <div>Si</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <>
        <div id='margin'>
          <Route exact path='/' component={Users} />
          <Route exact path='/task' component={Tasks} />
          <Route exact path='/publications/:id' component={Publications} />
        </div>
      </>
    </Switch>
  </BrowserRouter>
);

export default App;
