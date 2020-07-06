import React from 'react';
import './About.scss';
import money from '../../img/money.png';
import nonstop from '../../img/nonstop.png';
import box from '../../img/box.png';
import procena from '../../img/procena.png';

const About = props => {
  return (
    <div className="about" id="about">
      <h1>O nama</h1>
      <p>
        Vaše je samo da se odlučite za selidbu, sve ostalo je na nama. Nije
        bitno da li se radi o prizemnoj kući ili zgradi sa ili bez lifta, možete
        biti spokojni da će vaše stvari biti preseljene na lak i bezbolan način.
        Mi smo tu da se uhvatimo o koštac sa eventualnim problemima i
        poteškoćama. Želite sami da izvršite selidbu, a treba vam samo kombi?
        Nikakav problem, kod nas ga možete izmajmiti po povoljnim cenama, bilo
        da vam treba sa selidbu, transport ili bilo kakav drugi posao, mi smo
        tu, kao i naš kombi.
      </p>
      <div className="skills">
        <div className="skill">
          <img src={money} alt="skill'1" />
          <span>NAJJEFTINIJE CENE</span>
        </div>
        <div className="skill">
          <img src={nonstop} alt="skill'1" />
          <span>00-24H</span>
        </div>
        <div className="skill">
          <img src={box} alt="skill'1" />
          <span>PAKOVANJE STVARI</span>
        </div>
        <div className="skill">
          <img src={procena} alt="skill'1" />
          <span>BESPLATNA PROCENA</span>
        </div>
      </div>
    </div>
  );
};

export default About;
