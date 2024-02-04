import React, { useContext, useState } from "react";
import { ThemeContext } from "../style/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faMoon,
  faSun,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { InputAdornment, TextField } from "@mui/material";

export default function TopBar() {
  const { theme, setTheme } = useContext(ThemeContext)!;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateTheme = () => {
    const lightMode = {
      colors: {
        primary: "white",
        secondary: "#333",
        tertiary: "#f3f3f3",
      },
    };
    const darkMode = {
      colors: {
        primary: "#1a1625",
        secondary: "white",
        tertiary: "#2f2b3a",
      },
    };

    if (isDarkMode) {
      setTheme(lightMode);
      setIsDarkMode(!isDarkMode);
    } else {
      setTheme(darkMode);
      setIsDarkMode(!isDarkMode);
    }
  };
  return (
    <div
      className="bar"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
        borderLeft: `3px solid ${theme.colors.tertiary}`,
      }}
    >
      <div className="search-bar">
        <TextField
          fullWidth
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputAdornment>
            ),
          }}
          sx={{ backgroundColor: theme.colors.tertiary }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "160px",
        }}
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          onClick={updateTheme}
        />
        <FontAwesomeIcon icon={faBell} attributeName="Notification" />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}
