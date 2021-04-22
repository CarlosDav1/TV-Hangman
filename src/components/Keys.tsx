import React, { useState } from 'react'
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface props {
    letterSelected: (letter: string) => void;
}

const Keys = (props: props) => {

    //we create an array using the split method with the 'alphabet' string
    let [options, setOptions] = useState(alphabet.split(''));

    const deleteKey = (letter: string) => {

        //we create a copy of the array
        let copyArray = [...options];

        //we delete the letter that was pressed
        copyArray.splice( copyArray.indexOf(letter), 1);

        //Finally, we set the new array
        setOptions(copyArray);

    }

    return(
        //We map all the letters in the 'options' array as buttons
        <div className="row keysGrid">
            {options.map(item => 
                <button className="key"
                    key={`key${item}`} 
                    onClick={() =>{
                        props.letterSelected(item); 
                        deleteKey(item)
                    }}
                >{item}</button>
            )}
        </div>
    );
}

export default Keys