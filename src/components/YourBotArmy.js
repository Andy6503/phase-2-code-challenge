import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ mybots, onRemoveFromMyArmy}) {
  const myArmyList = mybots.map(bot => {
    return <BotCard key={bot.id} bot={bot} onBotClicked={onRemoveFromMyArmy} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myArmyList}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
