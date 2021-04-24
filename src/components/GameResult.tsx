import React from "react"

interface props{
    winOrLose: boolean | null,
    name: string,
    image: {original: string | undefined} | undefined,
    summary?: string
    PlayAgain: () => void;
}

function GameResult({winOrLose, name, image, summary = "No Summary", PlayAgain}: props){
    return(
        <div className="resultsContainer">
            <img src={image?.original} width="100px"/>
            <div className="info">
                <div>
                    <h1 className={winOrLose? "win": "lose"}>{name}</h1>
                    <p dangerouslySetInnerHTML={{__html: summary}}></p>
                    <button className="btn btn-light again" onClick={PlayAgain}>Play Again</button>
                </div>
            </ div>
            
        </div>
    );
}

export default GameResult