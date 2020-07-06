import React from 'react';
import './Contact.scss';
import phone from '../../img/contact.png';
import email from '../../img/mail.png';
import location from '../../img/location.png';

const Contact = props => {
  return (
    <div className="contact" id="contact">
      <h1>Kontakt</h1>
      <p>Dostupni smo u bilo koje doba dana i noći!</p>
      <div className="nums">
        <div className="num">
          <img src={phone} alt="" />
          <span>+381628315930</span>
        </div>
        <div className="num">
          <img src={email} alt="" />
          <span>dejanstanojkovic@yahoo.com</span>
        </div>
        <div className="num">
          <img src={location} alt="" />
          <span>Vase Pelagića 2/2, Pančevo</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
