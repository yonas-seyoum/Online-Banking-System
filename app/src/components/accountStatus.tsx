import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";
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
          <div>Savings</div>
          <div>50,000$</div>
        </div>
      </div>
    </>
  );
}
