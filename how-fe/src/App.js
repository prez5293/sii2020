import React, { useState } from 'react';
import starkLogo from './stark.png';
import lannisterLogo from './lannister.png';
import baratheonLogo from './baratheon.png';
import targaryenLogo from './targaryen.png';
import './App.css';

function App() {

  const [stark, setStark] = useState(false);
  const [lannister, setLannister] = useState(false);
  const [baratheon, setBaratheon] = useState(false);
  const [targaryen, setTargaryen] = useState(false);

  const setHouse = house => {
    switch (house) {
      case "stark":
        setStark(!stark);
        setLannister(false);
        setBaratheon(false);
        setTargaryen(false);
        break;
      case "lannister":
        setStark(false);
        setLannister(!lannister);
        setBaratheon(false);
        setTargaryen(false);
        break;
      case "baratheon":
        setStark(false);
        setLannister(false);
        setBaratheon(!baratheon);
        setTargaryen(false);
        break;
      case "targaryen":
        setStark(false);
        setLannister(false);
        setBaratheon(false);
        setTargaryen(!targaryen);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-row">
          <div className="App-column">
            <img src={starkLogo} className="App-logo" alt="stark" onClick={() => setHouse("stark")} />
            <dialog open={stark} className="App-dialog">
              <b>Motto: </b>L'inverno sta arrivando
            </dialog>
          </div>
          <br />
          <br />
          <div className="App-column">
            <img src={lannisterLogo} className="App-logo" alt="lannister" onClick={() => setHouse("lannister")} />
            <dialog open={lannister} className="App-dialog">
              Ascolta il mio ruggito
            </dialog>
          </div>
          <br />
          <br />
          <div className="App-column">
            <img src={baratheonLogo} className="App-logo" alt="baratheon" onClick={() => setHouse("baratheon")} />
            <dialog open={baratheon} className="App-dialog">
              Nostra è la furia
            </dialog>
          </div>
          <br />
          <br />
          <div className="App-column">
            <img src={targaryenLogo} className="App-logo" alt="targaryen" onClick={() => setHouse("targaryen")} />
            <dialog open={targaryen} className="App-dialog">
              Fuoco e sangue
            </dialog>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
