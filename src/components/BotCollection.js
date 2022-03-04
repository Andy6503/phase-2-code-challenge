import React from "react";
import BotCard from "./BotCard"

function BotCollection({ bots, onAddToMyArmy, onBotDelete }) {
  const botList = bots.map(bot => {
    return <BotCard key={bot.id} 
                    bot={bot} 
                    onBotClicked={onAddToMyArmy} 
                    onDeleteClicked={onBotDelete} />
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botList}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
