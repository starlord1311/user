import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Radio, Table } from "react-bootstrap";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import {SideMenu, Item} from 'react-sidemenu';
import Menu from './sidemenu.js';
import './adduser.css';

export default class AddUser extends Component {
  render() {
    return (
      <div>
      <Menu />
      <div class="navbar">
  <a href="#home">Company Site</a>
  <a href="#news">Users</a>
  <a href="#contact">Site Summary</a>
</div>
      <Button className="add">
Add/Done
</Button>
<Button className="addsite">
Back to Add Site
</Button>
<h3 className="title">Site</h3>
      <div className="basic">
      <div className="info">
      <h3>New User</h3>
      </div>
      <label className="l1">First Name:
      <input type="text" />
      </label>
      <label className="l2">Email ID:
      <input type="text" />
      </label>
      <label className="l3">Site List:
      <input type="text" />
      </label>
      <label className="l7">Last Name:
      <input type="text" />
      </label>
      <label className="l8">Contact No.:
      <input type="text" />
      </label>
      </div>

      <div className="basic2">
<div className="info">
<h3>Users Rights</h3>
</div>
<label className="l28"><h3 className="l29">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l30"><h3 className="l31">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l32"><h3 className="l33">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l34"><h3 className="l35">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l36"><h3 className="l37">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l38"><h3 className="l39">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l40"><h3 className="l41">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l42"><h3 className="l43">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l44"><h3 className="l45">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
<label className="l46"><h3 className="l47">Company Type:</h3>
<FormGroup>
  <Radio className="radio" class="radioGroup" inline>
    Private or Public Ltd.
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  <Radio className="radio" class="radioGroup" inline>
    Individual
  </Radio>
  </FormGroup>
</label>
</div>
</div>
    )
}
}
