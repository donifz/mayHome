import React from "react";
import "../fontawesome";
import "./main-page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar} from 'reactstrap'



function MainPage() {
  return (
    <div className="main-page__wrap">
        <header><h1 className="company-name">Neobis</h1></header>
        <div className="left-nav">
          <div className="admin-block"></div>
        </div>
    </div>
  );
}
export default MainPage