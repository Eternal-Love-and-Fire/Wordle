import { Board } from "@/game/Board";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

export const App = () => {
  return (
    <ThemeProvider>
      <Board />
    </ThemeProvider>
  );
};
