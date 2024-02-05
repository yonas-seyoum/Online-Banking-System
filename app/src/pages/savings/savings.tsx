import React, { useState } from "react";
import { AccountStatus } from "../../components/accountStatus";

import "../../style/recentTransactions.css";
import SavingProgressChart, {
  SavingTimeline,
} from "./components/savingProgressChart";

export default function Savings() {
  const [timeline, setTimeline] = useState<SavingTimeline>({
    timeline: "Monthly",
  });

  function changeTimelineToMonth() {
    setTimeline((prevTimeline) => ({
      timeline: (prevTimeline.timeline = "Monthly"),
    }));
  }

  function changeTimelineToYear() {
    setTimeline((prevTimeline) => ({
      timeline: (prevTimeline.timeline = "Yearly"),
    }));
  }

  return (
    <>
      <AccountStatus />
      <div className="recent-transaction">
        <div className="timeline-wrapper">
          <input
            className="timeline"
            type="button"
            value={"Monthly"}
            onClick={changeTimelineToMonth}
          />
          <input
            className="timeline"
            type="button"
            value={"Yearly"}
            onClick={changeTimelineToYear}
          />
        </div>
        {/* <div className="wrapper"> */}
        <SavingProgressChart timeline={timeline.timeline} />
        {/* </div> */}

        <div className="wrapper saving">
          <div className="selector-wrapper">
            <label>From</label>
            <select className="transaction-selector" name="" id="">
              <option value="2023IB01">2023IB01</option>
            </select>
          </div>
          <div className="selector-wrapper">
            <label>Selection Transaction Type</label>
            <select className="transaction-selector">
              <option value={"Withdraw"}>Withdraw</option>
              <option value={"Deposit"}>Deposit</option>
            </select>
          </div>

          <div className="selector-wrapper">
            <label>Amount</label>
            <input
              className="transaction-selector"
              type="number"
              defaultValue={0}
            />
          </div>

          <div className="selector-wrapper">
            <input
              style={{ backgroundColor: "#1a1625", color: "white" }}
              className="transaction-selector submitButton"
              type="button"
              value={"Submit"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
