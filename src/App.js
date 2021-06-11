import React, { useContext } from "react";
import "./App.css";
import Pages from "./pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { firebaseAuth } from "./provider/AuthProvider";

function App() {
  const { getToken } = useContext(firebaseAuth);
  const token = getToken();
  const {
    Login,
    Dashboards,
    Batteries,
    MainGrid,
    EnergyGeneration,
    NotFound,
    EnvironmentImpacts,
  } = Pages;

  if (token === null) {
    return (
      <Router>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/dashboards">
            <Dashboards />
          </Route>
          <Route exact path="/batteries">
            <Batteries />
          </Route>
          <Route exact path="/maingrid">
            <MainGrid />
          </Route>
          <Route exact path="/energy_generation">
            <EnergyGeneration />
          </Route>
          <Route exact path="/environment_impacts">
            <EnvironmentImpacts />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
