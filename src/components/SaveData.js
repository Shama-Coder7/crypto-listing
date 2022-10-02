import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './SaveData.css';

const SaveData = () => {
  const [savedata, setSavedata] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const savedata = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false${id}`      '
        );
        console.log(savedata.data);
        setSavedata(savedata.data);
      } catch (error) {
        console.log('Something is Wrong');
      }
    }
    getAllData();
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false/${id}`
    );
    var newdata = savedata.filter((item) => {
      return item.id !== id;
    });
    setSavedata(newdata);
  };
  return (
    <>
      <div className="savedcontainer">
        {' '}
        <h3 id="savedata">SAVED DATA TABLE</h3>
        {savedata.map((data, i) => {
          return (
            <div className="coin-row" key={i}>
              <p id="data-id">{i + 1}</p>
              <div className="coin">
                <p>{data.name}</p>
                <img src={data.image} alt="crypto" />
                <p className="coin-symbol">{data.symbol}</p>
              </div>
              <p className="coin-price">${data.current_price}</p>

              <button id="del-btn" onClick={() => handleDelete(data.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SaveData;
