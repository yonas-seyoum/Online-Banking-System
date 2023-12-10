import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";
import Transaction from "./transaction";

export default function RecentTransactions() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div
      className="recent-transaction"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <Transaction />
    </div>
  );
}
