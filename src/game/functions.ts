import { allFLW } from "@/allFLW";
import { guessType } from "./GameSettings";

export const compareWords = (
  word: string,
  secretWord: string
): Array<guessType> => {
  const letters = word.split("");
  const secretLetters = secretWord.split("");
  const guesses: Array<guessType> = [];

  letters.forEach((letter, i) => {
    switch (true) {
      case secretLetters[i] === letter:
        guesses.push("good");
        break;
      case secretLetters.includes(letter):
        guesses.push("ugly");
        break;
      default:
        guesses.push("bad");
        break;
    }
  });

  return guesses;
};

export const getRandomWord = (): string =>
  allFLW[Math.floor(Math.random() * allFLW.length)];

export const deleteLetter = (
  prev: string[],
  inputLetter: string,
  guess: number
) => {
  const temp = [...prev];
  temp[guess] = (temp[guess] + inputLetter).slice(0, temp[guess].length - 1);
  return temp;
};
export const addLetter = (
  prev: string[],
  inputLetter: string,
  guess: number
) => {
  const temp = [...prev];
  temp[guess] = (temp[guess] + inputLetter).slice(0, 5);
  return temp;
};
/**
 * words state
 * checkwords state()(if lenght 5 etc etc)
 * counter state
 * uwon
 *
 *
 *
 *
 *
 *
 */
