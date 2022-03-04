import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [mybots, setMyBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(bots => {
      setBots(bots)
    })
  }, [])

  function handleAddToMyArmy(bot){
    const foundIndex = mybots.findIndex(item => bot.id === item.id);
    if(foundIndex === -1){
      setMyBots([...mybots, bot]);
    } else {
      alert("Bot is already enlisted!")
    }
  }

  function handleRemoveFromMyArmy(bot){
    const foundIndex = mybots.findIndex(item => bot.id === item.id);
    if(foundIndex === -1){
      alert("Bot isn't enlisted!")
    } else {
      const copyArray = [...mybots];
      copyArray.splice(foundIndex, 1);

      setMyBots(copyArray);
    }
  }

  function handleBotDelete(bot){
    fetch("http://localhost:8002/bots/"+bot.id, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
        }
    })
    .then(() => {
      setBots(bots.filter(item => item.id !== bot.id))
    })
  }


  return (
    <div>
      <YourBotArmy mybots={mybots} onRemoveFromMyArmy={handleRemoveFromMyArmy} />
      <BotCollection bots={bots} onAddToMyArmy={handleAddToMyArmy} onBotDelete={handleBotDelete} />
    </div>
  )
}

export default BotsPage;
