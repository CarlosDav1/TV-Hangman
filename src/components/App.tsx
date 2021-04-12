import React, { useState, useEffect } from 'react';
import MysteryString from './MysteryString';
import Keys from './Keys';
import Hangman from './Hangman'

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

  //The following variable stores all the current show information
  //which includes name, language, image, genre and others
  let [show, SetShow] = useState({} as ShowInfo);

  //This is a string that gets converted into a regular expression such as /[ABCDEFG]/ig. 
  //As the user presses more buttons this string gets shorter.
  let [expression, setExpression] = useState("[ABCDEFGHIJKLMNOPQRSTUVWXYZ]");

  //The player's remaining lives
  let [lives, setLives] = useState(6);

  //This is a method that gets passed to all the buttons so we can know
  //which letter got pressed by the user
  const letterSelected = (letter: string) => {

    //if the letter is not present in the show's name we substract one life to the player
    if(show.name.indexOf(letter) == -1 && show.name.indexOf(letter.toLowerCase()) == -1){
      setLives(lives - 1)
    }

    //this deletes one letter from the RegEx pattern
    setExpression(expression.replace(letter, '')); 
  }


  //The first thing we do is call the "getShow" function and set the
  //response as the show's information
  useEffect(() => {
    getShow().then(res => { SetShow(res); console.log(res) })
  }, [])


  //if we don't have the show's name we display a message. If we have it
  //then we display all the components
  const isLoading = typeof show.name == 'undefined' 
  ? <h1>Loading...</h1> 
  : <div>
      <MysteryString name={show.name} expression={expression}/>
      <Keys letterSelected={letterSelected}/>
      <Hangman lives={lives}/>
  </div>
    
  return (
    <>
    {isLoading}
    </>
  );
}

export default App;
