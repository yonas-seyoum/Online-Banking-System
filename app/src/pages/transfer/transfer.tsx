import React from "react";
import "./styles/transfer.css";
import TransferWindow from "./component/transferWindow";

export default function Transfer() {
  return (
    <>
      <div
        className="transfer-wrapper"
        style={{ display: "flex", width: "100%", height: "100%" }}
      >
        <div className="option-wrapper">
          <div className="option-holder">
            <div>Transfet to YoBank account</div>
            <div>Transfer To YoBank Wallet</div>
            <div>Transfer Other Bank</div>
            <div>Transfer to Wallet</div>
            <div>Transfer Other Bank</div>
            <div>Transfer to Wallet</div>
            <div>Transfer Other Bank</div>
            <div>Transfer to Wallet</div>
            <div>Transfer to Wallet</div>
          </div>
          <div className="section3">welcome</div>
        </div>
        <TransferWindow />
      </div>
    </>
  );
}
