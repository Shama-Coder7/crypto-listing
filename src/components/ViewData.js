import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewData.css';

const ViewData = () => {
  const { id } = useParams();
  const [viewdata, setViewdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      try {
        const viewdata = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false${id}`      '
        );
        console.log(viewdata.data);
        setViewdata(viewdata.data);
      } catch (error) {
        console.log('Something is Wrong');
      }
    }
    getAllData();
  }, [id]);

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div>
      <h1 id="h1">Details</h1>
      <button id="btn-back" onClick={() => handleClick()}>Back</button>

      {viewdata.map((data, i) => {
        return (
          <div className="view-row" key={i}>
            <div className="view">
              {' '}
              <p id="view-id">{i + 1}</p>
              <p className="view-name">{data.name}</p>
              <img className="view-img" src={data.image} alt="crypto" />
              <p className="view-symbol">{data.symbol}</p>
            </div>
            <p className="view-price">${data.current_price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewData;
