import React, { useState } from 'react';
import axios from 'axios';
import starkLogo from './stark.png';
import lannisterLogo from './lannister.png';
import baratheonLogo from './baratheon.png';
import targaryenLogo from './targaryen.png';
import './App.css';

const SERVER_URL = 'http://localhost:8081';

function App() {

  const [houseInfo, setHouseInfo] = useState(null);

  const getHouseInfo = house => {
    axios.get(`${SERVER_URL}/${house}`)
      .then(response => {
        setHouseInfo(response.data);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-row">
          <div className="App-column">
            <img src={starkLogo} className="App-logo" alt="stark" onClick={() => getHouseInfo("stark")} />
          </div>
          <br />
          <br />
          <div className="App-column">
            <img src={lannisterLogo} className="App-logo" alt="lannister" onClick={() => getHouseInfo("lannister")} />
          </div>
          <br />
          <br />
          <div className="App-column">
            <img src={baratheonLogo} className="App-logo" alt="baratheon" onClick={() => getHouseInfo("baratheon")} />
          </div>
          <br />
          <br />
          <div className="App-column">
            <img src={targaryenLogo} className="App-logo" alt="targaryen" onClick={() => getHouseInfo("targaryen")} />
          </div>
        </div>
        <dialog open={houseInfo} className="App-dialog">
          <b>Casa: </b>{houseInfo ? houseInfo["house:name"] : ""}
          <br />
          <br />
          <b>Castello: </b>{houseInfo ? houseInfo["house:castle"] : ""}
          <br />
          <br />
          <b>Motto: </b>{houseInfo ? houseInfo["house:words"] : ""}
        </dialog>
      </header>
    </div>
  );
}

export default App;
