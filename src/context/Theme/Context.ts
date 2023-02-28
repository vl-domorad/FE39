import { createContext, useContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

const initialState = {
  theme: Theme.Light,
  onChangeTheme: (value: Theme) => {},
};

export const ThemeContext = createContext(initialState);

export const useThemeContext = () => useContext(ThemeContext);
