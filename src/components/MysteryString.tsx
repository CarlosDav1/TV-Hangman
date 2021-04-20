import React, { useState, useEffect } from 'react';

interface props{
    expression: string;
    answer: string;
    VerifyIfWon: (hidden: string) => void;
}

let MysteryString = ({expression, answer, VerifyIfWon}: props) => {
    const Replace = () => answer.replace(new RegExp(expression, 'ig'), ' _ ');
    
    let [hiddenString, setHiddenString] = useState(Replace());

    useEffect(() => { 
        setHiddenString(Replace());
        VerifyIfWon(Replace());
    }, [answer, expression]);

    return(
        <h1 className="hiddenString">{hiddenString}</h1>
    );
}

export default MysteryString;