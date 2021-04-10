import React, { useState, useEffect } from 'react';
import MysteryString from './MysteryString';

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

  useEffect(() => {
    getShow().then(res => { SetShow(res) })
  }, [])

  return (
    <div onClick={() => console.log(show)} style={{height: "200px"}}>
      <MysteryString name={show.name}/>
    </div>
  );
}

export default App;
