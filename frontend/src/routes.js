import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Dishes from './pages/Dishes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurante/:idPlace" component={Restaurant} />
      <Route path="/prato/:idPlace" component={Dishes} />
    </Switch>
  );
}
