import React, { useState, useEffect } from 'react';

interface props{
    name: string
    expression: string;
}

let MysteryString = ({name, expression}: props) => {
    let [hiddenString, setHiddenString] = useState('');

    useEffect(() => {

        //If we have the name of the show we replace it with a regular expression
        setHiddenString(name?.replace(new RegExp(expression, 'ig'), ' _ '));

    }, [name, expression]);

    return(<h1>{hiddenString}</h1>);
}

export default MysteryString;