import React, { useState, useEffect } from 'react';
import MysteryString from './MysteryString';
import Keys from './Keys';

interface ShowInfo{
  name: string;
  language: string;
}

async function getShow(): Promise<ShowInfo>{

  while(true){
    //First we choose a random number from 1-54520 
    //54540 is the number of series on the database
    const showID = Math.floor((Math.random() * 54540) + 1);

    //We fetch the TV series from the tvmaze api and change the response to JSON
    //then, we store the information in the response variable
    const response = await fetch(`https://api.tvmaze.com/shows/${showID}`);
    const data: ShowInfo = await response.json();

    //This makes sure that it only choses english tv shows.
    if(data.language == "English"){ return data; }
  }

}

function App() {
  let [show, SetShow] = useState({} as ShowInfo);
  let [expression, setExpression] = useState("[ABCDEFGHIJKLMNOPQRSTUVWXYZ]");

  const letterSelected = (letter: string) => {
    let newExpression = expression.replace(letter, '');
    setExpression(newExpression); 
  }

  useEffect(() => {
    getShow().then(res => { SetShow(res); console.log(res) })
  }, [])

  return (
    <div>
    <MysteryString name={show.name} expression={expression}/>
    <Keys letterSelected={letterSelected}/>
    </div>
  );
}

export default App;
