import React, { useContext, useState } from "react";
import { ThemeContext } from "../style/theme";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGear,
  faHouse,
  faMoneyBillTransfer,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

type MenuItem = {
  route: string;
  icon: IconDefinition;
};
type MenuItems = {
  [key: string]: MenuItem;
};

const menuItems: MenuItems = {
  Dashboard: { route: "/", icon: faHouse },
  Savings: { route: "/savings", icon: faPiggyBank },
  Withdraw: { route: "/withdraw", icon: faMoneyBillTransfer },
  Transfer: { route: "/transfer", icon: faMoneyBillTransfer },
  Settings: { route: "/settings", icon: faGear },
};

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
        <div className="">Yo Bank Yo Bank</div>
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
