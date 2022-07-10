import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Insert';

const Routes: React.FC = () => {

  return (
    <div style={{ maxWidth: '1120px', margin: '0 auto 5rem' }}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
    </BrowserRouter>
      </div>
  );
};

export default Routes;
