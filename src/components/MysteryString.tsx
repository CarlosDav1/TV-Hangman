import React, { useState, useEffect } from 'react';

interface props{
    name: string
}

const HideLetters = (fullString: string): string => {
    return typeof fullString === 'undefined'? '' : fullString.replace(/[a-z]/ig, ' _');
}

let MysteryString = ({name}: props) => {
    let [answer, setAnswer] = useState(name);
    let [hiddenString, setHiddenString] = useState('');

    useEffect(() => {
        setAnswer(name);
        setHiddenString(HideLetters(name));
    }, [name]);

    return(<h1 style={{height: "200px"}} onClick={() => console.log(hiddenString)}></h1>);
}

export default MysteryString;