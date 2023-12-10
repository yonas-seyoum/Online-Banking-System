import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";
import { TransactionContext } from "../providers/transactionProvider";
import Transaction from "./transaction";
import "../style/recentTransactions.css";

export default function RecentTransactions() {
  const { theme } = useContext(ThemeContext)!;
  const transactions = useContext(TransactionContext)!;

  return (
    <div
      className="recent-transaction"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <div>
        <div className="recent-transactions-title">Recent Transaction</div>
        <div>Today</div>
      </div>

      {transactions.map((transaction, index) => {
        const { remark, date, amount } = transaction;
        return (
          <Transaction
            key={index}
            remark={remark}
            date={date}
            amount={amount}
          />
        );
      })}
    </div>
  );
}
