import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>THEEE BOTS</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={enlistBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
