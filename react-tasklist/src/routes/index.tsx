import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Account from '../pages/Account';
import Categories from '../pages/Categories';
import Indicators from '../pages/Indicators';
import Transactions from '../pages/Transactions';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signout" logout exact component={SignIn} />

    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/account" exact component={Account} isPrivate />
    <Route path="/categories" exact component={Categories} isPrivate />
    <Route path="/indicators" exact component={Indicators} isPrivate />
    <Route path="/transactions" exact component={Transactions} isPrivate />
  </Switch>
);

export default Routes;
