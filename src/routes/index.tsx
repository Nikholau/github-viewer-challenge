import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Branches from '../pages/Branches';
import Commits from '../pages/Commits';
import Home from '../pages/Insert';
import Repositories from '../pages/Repositories';

import './styles.scss';

const Routes: React.FC = () => {

  return (
    <div>
      <Router>
        <div className="container">
          <div className="containerSwitch">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/repositories"  component={Repositories}/>
              <Route path="/branches"  component={Branches}/>
              <Route path="/commits"  component={Commits}/>
            </Switch>
          </div>
        </div>
      </Router>
      </div>
  );
};

export default Routes;
