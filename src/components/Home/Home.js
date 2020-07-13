import React from 'react';
import './Home.scss';
import logo from '../../img/logo.png';
import call from '../../img/call.png';

const Menu = props => {
  return (
    <div className="home" id="home">
      <a className="phone" href="tel:+381628315930">
        <img src={call} alt="" />
        <span>+381628315930</span>
      </a>
      <img src={logo} alt="" className="logo" />
      <h1>KOMBI TRANSPORT</h1>
      <p>PANČEVO</p>
    </div>
  );
};

export default Menu;
