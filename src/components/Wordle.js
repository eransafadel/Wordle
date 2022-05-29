import React from "react";
import useWordle from "../hooks/useWordle";
import { useEffect } from "react";
import Grid from "./Grid";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    }; // cleanup func detach thehandleKeyup
  }, [handleKeyup]);

  useEffect(()=>{
      console.log(guesses,turn,isCorrect);

  },[guesses,turn,isCorrect])
  return (
    <>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
    </>
  );
}
