import React from 'react'

interface ShowInfo{
    name: string;
    language: string;
    image: {original: string | undefined} | undefined;
    summary: string;
  }
  

async function GetShow(): Promise<ShowInfo>{
    
    const response: ShowInfo = {
        name: 'Breaking Bad',
        language: 'English',
        image: {original: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg'},
        summary: 'This is the summary'
    }
    
    return response; 
      
}

export default GetShow