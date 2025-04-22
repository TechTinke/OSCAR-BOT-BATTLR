import React from "react";

function BotArmy({ bots }) {
  // Filter only enlisted bots for the army
  const enlistedBots = bots.filter((bot) => bot.enlisted);

  return (
    <div>
      <h2>Your Bot Army</h2>
      {enlistedBots.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        <ul>
          {enlistedBots.map((bot) => (
            <li key={bot.id}>
              <h3>{bot.name}</h3>
              <p>{bot.catchphrase}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BotArmy;
