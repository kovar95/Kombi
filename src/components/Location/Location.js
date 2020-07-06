import React from 'react';
import './Location.scss';

const Location = props => {
  return (
    <div className="location" id="location">
      <h1>Lokacija</h1>
      <p>Nalazimo se na lokaciji Vase Pelagića 2/2, Pančevo.</p>
      <div className="map">
        <iframe
          title="mymap"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=vase%20pelagica%202%2F2%2C%20PAncevo&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
