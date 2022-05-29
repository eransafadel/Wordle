import React from "react";
import styles from "./Row.module.css";

const Row = ({ guess,currentGuess }) => {
  if (guess) {
    return (
      <div className={styles["row"]}>
        {guess.map((l, i) => {
          return (
            <div key={i} className={styles[l.color]}>
              {l.key}
            </div>
          );
        })}
      </div>
    );
  }

  if(currentGuess){
      let letters = currentGuess.split('');
      return(
          <div className={styles["row"]}>
              {letters.map((letter,i)=>{
                  return <div key={i} className={styles["filled"]}>{letter} </div> 
              })}
              {[...Array(5-letters.length)].map((_,i)=>{
                  return <div key={i}/>
                  })}

          </div>
      )

  }





  return (
    <div className={styles["row"]}>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  );
};

export default Row;
