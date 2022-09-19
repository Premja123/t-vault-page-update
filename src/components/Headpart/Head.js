import React from "react";
import {BrowserRouter as Router , Routes , Route ,Link} from 'react-router-dom';
import Safes from "./Safes";
import VaultAppRoles from "./VaultAppRoles";
import ServiceAccounts from "./ServiceAccounts";
import IAMServiceAccounts from "./IAMServiceAccounts";
import AzureActiveDirectory from "./AzureActiveDirectory";
import Headimg from './header_logo.png';
import Document from'./document.png';
import Profile from'./profile.png';
import Arrow from './arrow.png';
import './Head.css';

export default function Head() {
  return (
    <div>
       
       <Router>
      <header>
        <nav className="nav_bar">
        <img src={Headimg} alt="header_logo"/>
        <div className="nav_center">
          <Link to="/" className="safe_1 active">Safes </Link>
          <Link to="/VaultAppRoles/778">VaultAppRoles </Link>
          <Link to="/ServiceAccounts">ServiceAccounts </Link>
          <Link to="/IAMServiceAccounts">IAMServiceAccounts </Link>
          <Link to="/AzureActiveDirectory">AzureActiveDirectory </Link>
          </div>
          <div className="nav_bar_right">
          <div className="doc">
            <div><img src={Document} alt="doc_logo"/></div><div><p>Documentation</p></div>
            </div>
          <div className="prof">
            <div><img src={Profile} alt="profile_logo"/></div><div><p>(Admin) Davis R.</p></div>
            <div className="arrow"><img src={Arrow} alt="arrow" /></div> 
            </div>
          </div>
        </nav>
       </header>
    
      <Routes>
        <Route path="/" element={<Safes/>} />
        <Route path="/VaultAppRoles/:id" element={<VaultAppRoles/>} />
        <Route path="/ServiceAccounts" element={<ServiceAccounts/>} />
        <Route path="/IAMServiceAccounts" element={<IAMServiceAccounts/>} />
        <Route path="/AzureActiveDirectory" element={<AzureActiveDirectory/>} />
      </Routes>
   </Router>

    </div>
  )
}
