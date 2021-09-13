import React from "react";
import Registration from "./Registration";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/sigin" exact>
            <Registration />
          </Route>{" "}
          <Route path="/main" exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
