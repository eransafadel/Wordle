import { useState } from "react";


const useWordle = (solution)=>{

    const [turn,setTurn]= useState(0);//indicate what line 
    const [currentGuess,setCurrenGuess]= useState('');
    const [guesses,setGuesses]= useState([]); //each guess is an array
    const [history,setHistory]= useState([]);//each guess is an string
    const [isCorrect,setIsCorrect]= useState(false);

    // format a guess into an array of letter objects
    //e.g. [{key:'a,color:'yellow'}]

    const formatGuess =()=>{};

    const addNewGuess =()=>{};
    const handleKeyup = ({key})=>{

        if(key=== 'Backspace')
        {
            setCurrenGuess((prev)=>{return prev.slice(0,-1);});
            return;
        }

        const containOnlyChar = /^[A-Za-z]$/.test(key);
        console.log(containOnlyChar);
        if(containOnlyChar&& currentGuess.length<5)
        {
            console.log('^^^^^')
            setCurrenGuess((prev)=>{return prev+key});
        }

    };


    return {turn,currentGuess,guesses,isCorrect,handleKeyup}
};

export default useWordle;