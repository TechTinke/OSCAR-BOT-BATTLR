import React from "react";

function BotCard({ bot, handleClick, dischargeBot }) {
  return (
    <div className="bot-card" onClick={() => handleClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <div className="stats">
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
        <span>❤️ {bot.health}</span>
      </div>
      {dischargeBot && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dischargeBot(bot);
          }}
        >
          Discharge 🗑️
        </button>
      )}
    </div>
  );
}

export default BotCard;
