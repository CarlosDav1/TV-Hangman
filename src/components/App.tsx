import React, { useState, useEffect } from 'react';
import Keys from './Keys';
import Hangman from './Hangman'
import GetShow from './GetShow'
import GameResult from './GameResult'

interface ShowInfo{
  name: string;
  language: string;
  image: {original: string | undefined} | undefined;
  summary: string;
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

  //This is the string thats displayed to the player
  let [hiddenString, setHiddenString] = useState('')



  //The first thing we do is call the "getShow" function and set the
  //response as the show's information
  useEffect(() => {
    GetShow().then(res => { 
      SetShow(res);
      setHiddenString(res.name.replace(new RegExp(expression, 'ig'), ' _ ') );
      console.log(res)
    })
  }, [])


  useEffect(() => { 
    setHiddenString(show.name?.replace(new RegExp(expression, 'ig'), ' _ ') );
  }, [expression])



  //This is a method that gets passed to all the buttons so we can know
  //which letter got pressed by the user
  const letterSelected = (letter: string) => {
    
    const showUpperCase = show.name.toUpperCase()
    
    //if the letter is not present in the show's name we substract one life to the player
    if(showUpperCase.indexOf(letter) == -1){ setLives(lives - 1)}

    //this deletes one letter from the RegEx pattern
    setExpression(expression.replace(letter, ''));

  }

  const PlayAgain = () => {
    SetShow({} as ShowInfo);
    GetShow().then(res => {
      SetShow(res);
      setExpression("[ABCDEFGHIJKLMNOPQRSTUVWXYZ]");
      setHiddenString(res.name?.replace(new RegExp(expression, 'ig'), ' _ ') );
      console.log(res)
    })
    setLives(6);
  }

  let mainComponent = typeof show.name == 'undefined'? <h1>Loading...</h1> :
  <div>
    <h1>{hiddenString}</h1>
    <Keys letterSelected={letterSelected}/>
    <Hangman lives={lives}/>
  </div>

  let displayResults = typeof show.name != 'undefined'?
  <GameResult 
    winOrLose={lives > 0? true : false}
    name={show.name}
    image={show?.image} 
    summary={show.summary}
    PlayAgain={PlayAgain}
  />: null

  return (
    <>
    { hiddenString?.indexOf("_") != -1 && lives > 0? mainComponent : displayResults }
    </>
  );
}

export default App;
