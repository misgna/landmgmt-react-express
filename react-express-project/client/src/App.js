import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState("");
  const getData = ()=>{
    Axios.get("http://localhost:4000/login").then((response)=>{
      setData(response.data);
    });
  };
  useEffect(()=>{getData()}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {data.status}
        </a>
      </header>
    </div>
  );
}

export default App;
