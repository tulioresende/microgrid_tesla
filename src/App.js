import logo from './logo.svg';
import firebase from './firebase/firebase';
import { useState } from 'react';
import './App.css';

import Components from './components';

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
    <div className="App">
           <Components.SideMenu/>
        <header className="App-header">
        <p>
          {`valor de value2: ${value}`}
        </p>
        <p>
          Teste inicial de deploy do supervisório Tesla com o firebase!
        </p>
        <button onClick={getData}>
          buscar dados
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
