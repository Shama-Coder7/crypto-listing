import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './StockList.css';

function StockList() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-list'>
      <div className='coin-search'>
        <h1 className='coin-text'>Stock Details Table</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search here'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            image={coin.image}
            marketcap={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default StockList;