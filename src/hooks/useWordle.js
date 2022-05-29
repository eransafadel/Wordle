import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0); //indicate what line
  const [currentGuess, setCurrenGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
  const [history, setHistory] = useState([]); //each guess is an string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  //e.g. [{key:'a,color:'yellow'}]

  const formatGuess = () => {
    let solutionArr = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters:
    formattedGuess.forEach((l, i) => {
      if (solutionArr[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArr[i] = null;
      }
    });

    // piped ,plane
    // _iped , plane
    //find any yellow letters:
    formattedGuess.forEach((l, i) => {
      if (solutionArr.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArr[solutionArr.indexOf(l.key)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prevGuess) => {
      let newGuesses = [...prevGuess];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setCurrenGuess("");
  };
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("You used all your guesses!");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("You already tried that word!");
        return;
      }

      if (currentGuess.length !== 5) {
        console.log("Word must be 5 chars long!");
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === "Backspace") {
      setCurrenGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    const containOnlyChar = /^[A-Za-z]$/.test(key);
    if (containOnlyChar && currentGuess.length < 5) {
      setCurrenGuess((prev) => {
        return prev + key;
      });
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
