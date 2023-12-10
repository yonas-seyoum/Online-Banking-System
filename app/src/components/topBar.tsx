import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";

export default function TopBar() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div
      className="bar"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <div className="search-bar">search bar</div>
      <div>
        <div>Notification</div>
        <div>Account Icon</div>
      </div>
    </div>
  );
}
