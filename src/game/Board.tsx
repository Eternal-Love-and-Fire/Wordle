import { useEffect, useState } from "react";
import { rows } from "./GameSettings";
import { Row } from "./Row";
import { ModeToggle } from "@/components/mode-toggle";
import { addLetter, deleteLetter, getRandomWord } from "./functions";

const secretWord = getRandomWord();
const counter = [0];

export const Board = () => {
  const [words, setWords] = useState<string[]>(Array(5).fill(""));
  const [blocksBG, setBlocksBG] = useState<boolean[]>([]);
  const [uWon, setUWon] = useState<"win" | "lose" | "nothing">("nothing");

  useEffect(() => {
    const handleKeyup = (event: KeyboardEvent) => {
      const inputLetter = event.key.toLowerCase();
      const guess = counter[0];
      const wordLength = words[guess].length;

      if (uWon === "win" || uWon === "lose") return;
      if (inputLetter === "backspace" && wordLength === 0) return;
      if (guess > words.length - 1 && wordLength === 5) return;

      if (inputLetter === "backspace") {
        return setWords((prev) => deleteLetter(prev, inputLetter, guess));
      }
      if (inputLetter === "enter" && wordLength === 5) {
        setBlocksBG([...blocksBG, true]);

        if (secretWord === words[guess]) {
          return setUWon("win");
        }
        if (guess === 4) {
          return setUWon("lose");
        }

        counter[0] = guess + 1;
      }
      if (/^[a-zA-Z]$/.test(inputLetter)) {
        return setWords((prev) => addLetter(prev, inputLetter, guess));
      }
    };

    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [words, uWon]);

  const restartGame = () => {
    counter[0] = 0;
    setWords(Array(5).fill(""))
    setUWon('nothing')
    setBlocksBG([])
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center dark:bg-black dark:text-white">
      <div className="my-4 flex gap-44">
        <h1 className="text-2xl font-bold tracking-wider">Wordle</h1>
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-2">
        {rows.map((_, index) => (
          <Row
            key={index}
            guessWord={words[index]}
            secretWord={secretWord}
            blockBackground={blocksBG[index]}
          />
        ))}
      </div>
      <div className="my-4">
        {uWon === "win" ? (
          <div className="text-xl font-bold">You win!</div>
        ) : uWon === "lose" ? (
          <div className="text-xl font-bold">You Lose!</div>
        ) : (
          ""
        )}
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </div>
  );
};
