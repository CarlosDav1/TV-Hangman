import React, { useState, useEffect } from 'react';
import Keys from './Keys';
import Hangman from './Hangman';
import GetShow from './GetShow';
import GameResult from './GameResult';
import MysteryString from './MysteryString';

interface ShowInfo{
  name: string;
  language: string;
  image: {original: string | undefined} | undefined;
  summary: string;
}

function App() {
  let [show, SetShow] = useState({} as ShowInfo);
  let [expression, setExpression] = useState("[ABCDEFGHIJKLMNOPQRSTUVWXYZ]");
  let [lives, setLives] = useState(6);
  let [isFinished, setTriggerWin] = useState(false);

  //The first thing we do is call the "getShow" function and set the
  //response as the show's information
  useEffect(() => { GetShow().then(res => SetShow(res)) }, [])

  //We use this method to check if the hidden string is the same as the show's name
  const VerifyIfWon = (hidden: string) => hidden == show.name? setTriggerWin(true): null;

  //This is a method that gets passed to all the buttons so we can know
  //which letter got pressed by the user
  const letterSelected = (letter: string) => {
    if(show.name.toUpperCase().indexOf(letter) == -1){ setLives(lives - 1)}
    setExpression(expression.replace(letter, ''));
  }

  //This method resets everything to play again
  const PlayAgain = () => {
    setTriggerWin(false);
    setExpression("[ABCDEFGHIJKLMNOPQRSTUVWXYZ]");
    SetShow({} as ShowInfo);
    GetShow().then(res => { SetShow(res); console.log(res) })
    setLives(6);
  }

  return (
    <>{ 
      
      !isFinished && lives > 0 && show.name != undefined
      
      ? <div className="container">
          <Hangman lives={lives}/>
          <MysteryString expression={expression} answer={show.name} VerifyIfWon={VerifyIfWon}/>
          <Keys letterSelected={letterSelected}/>
        </div>

      : show.name != undefined
        ? <GameResult 
          winOrLose={lives > 0? true : false} 
          name={show.name}  
          image={show?.image}  
          summary={show.summary} 
          PlayAgain={PlayAgain}/>

        : <h1>Loading...</h1> 
    }</>
  );
}

export default App;