import React from 'react';
import './Location.scss';

const Location = props => {
  return (
    <div className="location" id="location">
      <h1>Lokacija</h1>
      <p>Nalazimo se na lokaciji Strelište, Pančevo.</p>
      <div className="map">
        <iframe
          title="mymap"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Pan%C4%8Devo%2C%20Streli%C5%A1te&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
