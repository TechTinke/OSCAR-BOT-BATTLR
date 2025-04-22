import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://oscar-bot-battlr-backend-1.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  if (bots.length === 0) {
    return <div>No bots available</div>;
  }

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;
