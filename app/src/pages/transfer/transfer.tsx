import React, { useContext } from "react";
import "./styles/transfer.css";
import TransferWindow from "./component/transferWindow";
import { ThemeContext } from "../../style/theme";

export default function Transfer() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <>
      <div
        className="transfer-wrapper"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="option-wrapper">
          <div className="option-holder">
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfet to YoBank account
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer To YoBank Wallet
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer Other Bank
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer to Wallet
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer Other Bank
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer to Wallet
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer Other Bank
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer to Wallet
            </div>
            <div
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.primary,
              }}
            >
              Transfer to Wallet
            </div>
          </div>
          <div
            className="section3"
            style={{
              color: theme.colors.secondary,
              background: theme.colors.primary,
            }}
          >
            welcome
          </div>
        </div>
        <TransferWindow />
      </div>
    </>
  );
}
