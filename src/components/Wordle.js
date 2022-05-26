import React from 'react'
import useWordle from '../hooks/useWordle';
import {useEffect} from 'react';

export default function Wordle() {

    const {currentGuess,handleKeyup} = useWordle();

    useEffect(()=>{
        window.addEventListener('keyup',handleKeyup);
        return ()=>{window.removeEventListener('keyup',handleKeyup);}// cleanup func detach thehandleKeyup 
    },[handleKeyup]);
  return (
    <div>current guess - {currentGuess}</div>
  )
}
