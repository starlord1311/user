import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/sidemenu.js';
import './App.css';
import Login from './components/login.js';
import CompanyList from './components/companylist.js';
import AddUser from './components/adduser.js';
import {Route, Navlink, HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component = {Login}/>
      <Route exact path="/Home" component = {AddUser}/>
      </div>
    );
  }
}

export default App;
