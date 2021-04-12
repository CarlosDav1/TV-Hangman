import React, { useState, useEffect } from 'react';

interface props{
    name: string
    expression: string;
}

let MysteryString = ({name, expression}: props) => {
    let [hiddenString, setHiddenString] = useState('');

    useEffect(() => {
        setHiddenString(name?.replace(new RegExp(expression, 'ig'), ' _ '));
    }, [name, expression]);

    return(<h1 onClick={() => console.log(hiddenString)}>{hiddenString}</h1>);
}

export default MysteryString;