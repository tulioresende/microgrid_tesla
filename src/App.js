import React, { useContext } from 'react';
import './App.css';
import Pages from './pages';
import { 
  Route,   
  BrowserRouter as Router ,
  Switch,
} from 'react-router-dom';
import { firebaseAuth } from './provider/AuthProvider';


function App() {

  const { getToken } = useContext(firebaseAuth);
  const token = getToken();
  
  if (token === null){
    return (
      <Router>
        <Switch>
          <Route>
            <Pages.Login />
          </Route>
        </Switch>
      </Router>
    );
  }
  else{
    return(
      <Router>
        <Switch>
          <Route exact path="/dashboards">
            <Pages.Dashboards/>
          </Route>
          <Route exact path="/batteries">
            <Pages.Batteries />
          </Route>
          <Route>
            <Pages.NotFound/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
