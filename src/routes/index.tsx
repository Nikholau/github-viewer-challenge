import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Branches from '../pages/Branches';
import Commits from '../pages/Commits';
import Home from '../pages/Insert';
import Repositories from '../pages/Repositories';


import referenceLeft from "../assets/references/EstudosID2021_Prancheta 1 cópia 2.jpg";
import referenceRight from "../assets/references/EstudosID2021_Prancheta 1 cópia 4.jpg";

import './styles.scss';

const Routes: React.FC = () => {

  return (
    <div>
      <Router>
        <div className="container">
          <img src={referenceLeft} alt="left" className="left-image"/>
          <div className="containerSwitch">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/repositories"  component={Repositories}/>
              <Route path="/branches"  component={Branches}/>
              <Route path="/commits"  component={Commits}/>
            </Switch>
          </div>
          <img src={referenceRight} alt="right" className="right-image"/>
        </div>
      </Router>
      </div>
  );
};

export default Routes;
