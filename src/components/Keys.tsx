import React, { useState } from 'react'
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface props {
    letterSelected: (letter: string) => void;
}

const Keys = (props: props) => {

    let [options, setOptions] = useState(alphabet.split(''));

    const deleteKey = (letter: string) => {
        let copyArray = [...options];
        copyArray.splice( copyArray.indexOf(letter), 1);
        setOptions(copyArray);
    }

    return(
        <div>
            {options.map(item => 
                <button key={`key${item}`} onClick={() =>{ props.letterSelected(item); deleteKey(item)}}>
                    {item}
                </button>
            )}
        </div>
    );
}

export default Keys