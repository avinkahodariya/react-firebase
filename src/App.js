import React from "react";
import Registration from "./Registration";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import User from "./main page/User";
import { Provider } from "react-redux";
import creteStore from "./redux/store";
import { createStore } from "redux";
import store from "./redux/store";
import Booking from "./main page/Booking";
// const store = createStore();
store.subscribe(() => console.log(store.getState()));

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Provider store={store}>
              {" "}
              <Login />{" "}
            </Provider>
          </Route>
          <Route path="/sigin" exact>
            <Registration />
          </Route>{" "}
          <Route path="/main" exact>
            <Provider store={store}>
              <Main />
            </Provider>
          </Route>{" "}
          <Route path="/main/User" exact>
            <Provider store={store}>
              {" "}
              <User />{" "}
            </Provider>
          </Route>
          <Route path="/main/Flight-booking" exact>
            <Provider store={store}>
              {" "}
              <Booking />{" "}
            </Provider>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
