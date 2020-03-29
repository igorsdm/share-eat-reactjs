import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Restaurante from './pages/Restaurante';
import Prato from './pages/Prato';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurante/:idPlace" component={Restaurante} />
      <Route path="/prato/:idPlace" component={Prato} />
    </Switch>
  );
}
