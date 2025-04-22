import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [bots, setBots] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/bots`)
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} />
      <BotArmy bots={bots} />
    </div>
  );
}

export default App;
