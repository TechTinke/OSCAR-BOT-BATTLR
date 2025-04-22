import React from "react";

function BotArmy({ bots }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      {bots.length > 0 ? (
        <ul>
          {bots.map((bot) => (
            <li key={bot.id}>{bot.name}</li>
          ))}
        </ul>
      ) : (
        <p>No bots enlisted</p>
      )}
    </div>
  );
}

export default BotArmy;
