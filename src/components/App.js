import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    </Switch>
  </Router>
);

export default App;
