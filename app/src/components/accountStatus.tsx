import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";
import "../style/accountStatus.css";

export function AccountStatus() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <>
      <div className="status-holder">
        <div
          className="holder"
          style={{
            color: theme.colors.secondary,
            backgroundColor: theme.colors.primary,
          }}
        >
          <div>Current Balance</div>
          <div>20,000$</div>
        </div>
        <div
          className="holder"
          style={{
            color: theme.colors.secondary,
            backgroundColor: theme.colors.primary,
          }}
        >
          <div>Saving Balance</div>
          <div>20,000$</div>
        </div>
      </div>
    </>
  );
}
