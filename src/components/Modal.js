import React from "react";
import styles from './Modal.module.css';

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className={styles.modal}>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className={styles.solution}>{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
        {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p className={styles.solution}>{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
}
