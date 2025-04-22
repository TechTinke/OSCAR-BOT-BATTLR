import React from "react";
import BotCard from "./BotCard";

function BotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="bot-army">
      <h2>OSCAR BOT ARMY</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={releaseBot}
            dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotArmy;
