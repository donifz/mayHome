import React from "react";
import "../fontawesome";
import "./App.css"
import Login from '../login/login-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card} from 'reactstrap'
import MainPage from '../main-page/main-page'



function App() {
  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}

export default App;
