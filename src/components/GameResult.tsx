import React from "react"

interface props{
    winOrLose: boolean | null,
    name: string,
    image: {original: string | undefined} | undefined,
    summary: string
    PlayAgain: () => void;
}

function GameResult({winOrLose, name, image, summary, PlayAgain}: props){
    return(
        <div>
            <h1>{winOrLose? "You Win": "You Lose"}</h1>
            <h1>{name}</h1>
            <img src={image?.original} width="100px"/>
            <p dangerouslySetInnerHTML={{__html: summary}}></p>
            <button onClick={PlayAgain}>Play Again</button>
        </div>
    );
}

export default GameResult