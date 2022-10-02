import React from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';

const Coin = ({ name, price, symbol, marketcap, image }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <h2>{name}</h2>
        <div className="coin">
          <img src={image} alt="crypto" />
          <p className="coin-symbol">{symbol}</p>

          <p className="coin-price">${price}</p>

          <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
        </div>
      </div>{' '}
      <div>
        {' '}
        <Link to="/view">
          {' '}
          <button id="view-btn">View</button>
        </Link>
        <Link to="/save">
          <button id="save-btn">Save</button>
        </Link>
      </div>
    </div>
  );
};

export default Coin;
