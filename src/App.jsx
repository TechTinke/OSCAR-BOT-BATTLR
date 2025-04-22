import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" });
    setBots(bots.filter((b) => b.id !== bot.id));
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  return (
    <div className="container">
      <h1>OSCAR BOT BATTLR</h1>
      <BotArmy
        bots={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
