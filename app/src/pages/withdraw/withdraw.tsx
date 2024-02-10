import React, { useEffect, useState } from "react";
import "./style/withdraw.css";

interface CashoutMethod {
  method: "Through Agent" | "Through ATM";
}

export function CashoutCard({ method }: CashoutMethod) {
  return (
    <>
      <div
        className="cashout-card"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="card-image-holder">Cashout via ATM</div>
        <div className="card-inputs-holder">
          {method === "Through Agent" && (
            <input className="inputs" type="text" placeholder="Agent ID" />
          )}
          <input className="inputs" type="number" placeholder="Enter Amount" />
          <input className="inputss" type="button" value={"Apply"} />
        </div>
      </div>
    </>
  );
}

export default function Withdraw() {
  const [withdrawalMethod, setwithdrawalMethod] = useState<CashoutMethod>({
    method: "Through ATM",
  });

  const [methodIsSelected, setMethodIsSelected] = useState(false);

  return (
    <>
      <div className="wrraper">
        {methodIsSelected && (
          <div
            className="card-container"
            onClick={() => setMethodIsSelected(false)}
          >
            <CashoutCard method={withdrawalMethod.method} />
          </div>
        )}
        <div
          className="cashout-options"
          onClick={() => {
            setMethodIsSelected(true);
            setwithdrawalMethod({ method: "Through ATM" });
          }}
        >
          Cash out via ATM
        </div>
        <div
          className="cashout-options"
          onClick={() => {
            setwithdrawalMethod({ method: "Through Agent" });
            setMethodIsSelected(true);
          }}
        >
          Cash out Via Agent
        </div>
      </div>
    </>
  );
}
