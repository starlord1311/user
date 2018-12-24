import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import Sidebar from "react-sidebar";
import './sidemenu.css';


export default class Menu extends Component {

  render() {
    return (
      <div>
      <nav class="navbar navbar-inverse navbar-fixed-top">
 <div class="container-fluid">
   <div  class="navbar-header">
     <a styles="color: white" class="navbar-brand" href="#">Equipshare</a>
   </div>

   <ul class="nav navbar-nav navbar-right">
     <li><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span  class="glyphicon glyphicon-user"></span>William Stryker</a>
           <ul class="dropdown-menu">
         <li><a href="#">Manage Profile</a></li>
         <li><a href="#">Log Out</a></li>
       </ul>
     </li>
   </ul>
 </div>
</nav>

<div class="sidenav">
 <ul>
 <li><span class="glyphicon glyphicon-info-sign"></span>Equipment Master
     <ul>
       <li>View</li>
       <li>Add Equipments</li>
       <li>Add Category</li>
       <li>Add Sub-Catefory</li>
     </ul>
 </li>
 <li><span class="glyphicon glyphicon-th-list"></span>Companies
     <ul>
       <li>View</li>
     </ul>
 </li>
 <li><span class="glyphicon glyphicon-list-alt"></span>Rental Request
     <ul>
       <li>View</li>
       <li>Add Equipments</li>
       <li>Add Category</li>
       <li>Add Sub-Catefory</li>
     </ul>
 </li>
 <li><span class="glyphicon glyphicon-map-marker"></span>AMS
     <ul>
       <li>Approve</li>
       <li>View Table</li>
       <li>view Map</li>
      </ul>
 </li>
 <li><span  class="glyphicon glyphicon-th-list"></span>Auction
       <ul>
       <li>View</li>
       <li>Add Equipments</li>
       <li>Add Category</li>
       <li>Add Sub-Catefory</li>
     </ul>
 </li>
 <li><span  class="glyphicon glyphicon-user"></span>New Equipment Buy
       <ul>
       <li>View</li>
       <li>Add Equipments</li>
       <li>Add Category</li>
       <li>Add Sub-Catefory</li>
     </ul>
 </li>
 <li><span  class="glyphicon glyphicon-piggy-bank"></span>Call Off</li>
 <li><span class="glyphicon glyphicon-list-alt"></span>Pooling</li>
 <li><span class="glyphicon glyphicon-list-alt"></span>Reports</li>
 <li><span class="glyphicon glyphicon-list-alt"></span>Wallet</li>
</ul>
</div>
</div>
    );
  }
}
