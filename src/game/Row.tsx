import React from "react";
import { blocks } from "./GameSettings";
import { Block } from "./Block";
import { compareWords } from "./functions";

interface RowProps {
  guessWord: string;
  secretWord: string;
  blockBackground: boolean;
}

export const Row: React.FC<RowProps> = ({
  guessWord,
  secretWord,
  blockBackground,
}) => {
  const guesses = blockBackground
    ? compareWords(guessWord, secretWord)
    : Array(5).fill("default");

  return (
    <div className="flex gap-2">
      {blocks.map((_, i) => {
        return <Block key={i} letter={guessWord[i]} guess={guesses[i]} />;
      })}
    </div>
  );
};
