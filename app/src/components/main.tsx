import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";

import TopBar from "./topBar";
import RecentTransactions from "./recentTransactions";
import { AccountStatus } from "./accountStatus";

export default function Main() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div
      className="content"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <TopBar />
      <div className="main">
        <AccountStatus />
        <RecentTransactions />
      </div>
    </div>
  );
}
