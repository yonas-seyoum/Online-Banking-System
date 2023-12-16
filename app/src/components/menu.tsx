import React, { useContext, useState } from "react";
import { ThemeContext } from "../style/theme";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "../constants/menu";
import "../App.css";

export default function Menu() {
  const { theme } = useContext(ThemeContext)!;
  const [active, setActive] = useState(0);
  return (
    <div
      className="sidebar"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <div className="menu-header">
        <div className="">Yon Bank</div>
      </div>
      {Object.keys(menuItems).map((elements, index) => {
        const route: string = menuItems[elements].route;
        const icon: IconDefinition = menuItems[elements].icon;
        return (
          <Link style={{ textDecoration: "none", color: "inherit" }} to={route}>
            <div
              className={`item ${active === index ? "active" : ""}`}
              key={index}
              onClick={() => setActive(index)}
            >
              <FontAwesomeIcon icon={icon} />
              <div className="text" key={index}>
                {elements}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
