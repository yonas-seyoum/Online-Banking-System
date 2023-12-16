import React from "react";
import "../style/transaction.css";

export type transaction = {
  remark: string;
  date: string;
  amount: string;
};

export default function Transaction({ remark, date, amount }: transaction) {
  return (
    <div className="transaction">
      <div className="remark-holder">
        <div className="remark-text">{remark}</div>
        <div className="remark-subText">Today</div>
      </div>
      <div className="date-holder">{date}</div>
      <div className="amount-holder">{amount}</div>
    </div>
  );
}
