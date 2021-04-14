import firebase from './firebase/firebase';
import { useState } from 'react';
import './App.css';

import Pages from './pages';
import { 
  Route,   
  BrowserRouter as Router ,
  Switch,
} from 'react-router-dom';

function App() {

  const [value, setValue] = useState("valor default");
 

  const getData = () =>{
    const supervisory = firebase.database().ref('supervisorio');
    supervisory.on('value', (snapshot) => {
      let inputs = snapshot.val();
      for(let input in inputs){
        setValue(inputs[input].value);
      }

    });
  }
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Pages.Dashboards/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
