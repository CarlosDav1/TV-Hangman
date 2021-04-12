import React, { useState } from 'react'

interface props{ lives: number }

function Hangman({lives}: props){
    return(<h3>Lives: {lives}</h3>);
}

export default Hangman