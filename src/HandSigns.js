import React from "react"
import "./HandSigns.css"
import { useState } from "react"
import GitHub from "./github.svg"

const Hands = {
    "👋": "Waving",
    "👌": "Okay",
    "✌️": "Victory",
    "🤙": "Call",
    "🫶": "Love",
    "🙏": "Greetings",
    "👍": "Done",
    "👏": "Clap"
  };

const newHands = Object.keys(Hands);

export default function HandSigns()
{
 const [ meaning, setMeaning ] = useState("Your curiosity will unfold here");
  function inputEventHandler(event)
  {
    const userInput = event.target.value;
    setMeaning(Hands[userInput]);

    if (userInput in Hands) {
      setMeaning(Hands[userInput]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }
  function clickHandler(items)
  {
    setMeaning(Hands[items]);
  }
    return(
        <div className="HandSigns">
            <h1 className="heading">Hand s!gns !</h1>
            <p className="desc">Welcome to Hand Signs, check your Emoji to get know.</p>
            <input className="input--keys" onChange={inputEventHandler} />
            <h4 className="meaning--output"> {meaning}</h4>
            <div className="signs--list">
                {newHands.map((items) => (
                <span className="list--each"  onClick={()=> clickHandler(items)}>
                        {items}
                </span>
                )
                )}
            </div>
            
        </div>
    )
}