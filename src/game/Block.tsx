import React from "react";

import { guessType } from "./GameSettings";
interface BlockModel {
  guess?: guessType;
  letter: string;
}
export const Block: React.FC<BlockModel> = ({ guess = "default", letter }) => {
  const styleType =
    {
      good: "dark:bg-green-300 bg-green-600 text-white border border-black dark:border-white",
      ugly: "dark:bg-orange-400 bg-orange-300 text-white border border-black dark:border-white",
      bad: "dark:bg-red-900 bg-red-800 text-white border border-black dark:border-white",
      default:
        "dark:bg-black bg-black text-white border border-black dark:border-white",
    }[guess] || "";

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center border text-xl uppercase font-bold ${styleType}`}
    >
      {letter}
    </div>
  );
};
