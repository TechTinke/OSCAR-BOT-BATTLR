import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("https://oscar-bot-battlr-backend-1.onrender.com/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
      });
  }, []);

  // Handle bot enlistment
  const handleClick = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  // Handle bot discharge
  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection
        bots={bots}
        handleClick={handleClick}
        dischargeBot={dischargeBot}
      />
      <BotArmy bots={army} />
    </div>
  );
}
