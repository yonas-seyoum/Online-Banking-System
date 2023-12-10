import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";

export default function Menu() {
  const { theme } = useContext(ThemeContext)!;
  const menuItems = ["Dashboard", "Search", "Insights", "Docs", "Settings"];
  return (
    <div
      className="sidebar"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <div className="item">
        <div className="text">Yo Bank</div>
      </div>
      {menuItems.map((elements, index) => (
        <div className="item">
          <img src="" alt="" className="icon" />
          <div className="text" key={index}>
            {elements}
          </div>
        </div>
      ))}
    </div>
  );
}
