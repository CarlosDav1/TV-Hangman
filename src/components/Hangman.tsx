import React, { useState, useEffect } from 'react'
interface props{ lives: number }
import hangman from '../img/Hangman.svg';
import hangman1 from '../img/Hangman1.svg';
import hangman2 from '../img/Hangman2.svg';
import hangman3 from '../img/Hangman3.svg';
import hangman4 from '../img/Hangman4.svg';
import hangman5 from '../img/Hangman5.svg';
import hangman6 from '../img/Hangman6.svg';

function defineImage(lives: number){
    switch (lives){
        case 6:
            return hangman;
        break;
        case 5:
            return hangman1;
        break;
        case 4:
            return hangman2;
        break;
        case 3:
            return hangman3;
        break;
        case 2:
            return hangman4;
        break;
        case 1:
            return hangman5;
        break;
        case 0:
            return hangman6;
        break;
    }
}

function Hangman({lives}: props){
    
    let [image, setImage] = useState(defineImage(lives));
    
    useEffect(() => setImage(defineImage(lives)), [lives]);
    
    return(
        <div className="row justify-content-center">
            <img src={image} className="col align-self-center hangman"/>
        </div>
    );
}

export default Hangman