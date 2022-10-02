import React from 'react';
import './Home.css';
import google from '../Assets/GOOGL.png';
import facebook from '../Assets/FB.png';
import amazon from '../Assets/AMZN.svg';
const Home = () => {
  return (
    <div id="home">
      <div id="hero-1">
        <div id="hero-1-top">
          <p id="text">GOOGL</p>
          <img id="google" src={google} />
        </div>

        <div id="hero-1-bottom">1515 USD</div>
      </div>

      <div id="hero-2">
        <div id="hero-2-top">
          <p id="text">FB</p>
          <img id="facebook" src={facebook} />
        </div>

        <div id="hero-2-bottom">1515 USD</div>
      </div>

      <div id="hero-3">
        <div id="hero-3-top">
          <p id="text">AMZN</p>
          <img id="amazon" src={amazon} />
        </div>

        <div id="hero-3-bottom">1515 USD</div>
      </div>
    </div>
  );
};

export default Home;
