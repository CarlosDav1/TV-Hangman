import React, { useState } from 'react';

interface props{
    name: string
    language?: string
}

let MysteryString = ({name}: props) => {
    let [answer, setAnswer] = useState(name);
    return(<h1 style={{height: "200px"}} onClick={() => console.log(name)}></h1>);
}

export default MysteryString;