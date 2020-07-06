import React, { useState } from 'react';
import './Menu.scss';
import location from '../../img/location.png';
import home from '../../img/home.png';
import info from '../../img/info.jpg';
import contact from '../../img/contact.png';

const Menu = props => {
  const [reaveal, setReveal] = useState(false);

  return (
    <div
      className={`menu ${reaveal && 'revealed'}`}
      onMouseOver={e => setReveal(true)}
      onMouseOut={e => setReveal(false)}
    >
      <div className="menu-item">
        <a href="#home">
          <img src={home} alt="item-1" />
          <span>HOME</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="#about">
          <img src={info} alt="item-1" />
          <span>O NAMA</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="#contact">
          <img src={contact} alt="item-1" />
          <span>KONTAKT</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="#location">
          <img src={location} alt="item-1" />
          <span>LOKACIJA</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
