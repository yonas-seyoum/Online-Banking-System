import React from "react";
import { AccountStatus } from "../components/accountStatus";
import RecentTransactions from "../components/recentTransactions";
import TransactionProvider from "../providers/transactionProvider";

export default function Dashboard() {
  return (
    <>
      <AccountStatus />
      <TransactionProvider>
        <RecentTransactions />
      </TransactionProvider>
    </>
  );
}
