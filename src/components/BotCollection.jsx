import React from "react";

function BotCollection({ bots }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
