import React from 'react';
import './Home.scss';
import logo from '../../img/logo.png';

const Menu = props => {
  return (
    <div className="home" id="home">
      <img src={logo} alt="" className="logo" />
      <h1>KOMBI TRANSPORT</h1>
      <p>PANČEVO</p>
    </div>
  );
};

export default Menu;
