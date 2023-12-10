import React, { ReactNode, useState, createContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const initialTheme: Theme = {
  colors: {
    primary: "white",
    secondary: "#333",
  },
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
