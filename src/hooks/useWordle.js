import { useState } from "react";


const useWordle = ({solution})=>{

    const [turn,setTurn]= useState(0);//indicate what line 
    const [currenGuess,setCurrenGuess]= useState('');
    const [guesses,setGuesses]= useState([]); //each guess is an array
    const [history,setHistory]= useState([]);//each guess is an string
    const [isCorrect,setIsCorrect]= useState(false);

    // format a guess into an array of letter objects
    //e.g. [{key:'a,color:'yellow'}]

    const formatGuess =()=>{};

    const addNewGuess =()=>{};
    const handleKeyup = ()=>{};


    return {turn,currenGuess,guesses,isCorrect,handleKeyup}
};

export default useWordle;