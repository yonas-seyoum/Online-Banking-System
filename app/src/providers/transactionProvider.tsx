import React, { createContext } from "react";

export type transaction = {
  remark: string;
  date: string;
  amount: string;
};

export const TransactionContext = createContext<transaction[] | undefined>(
  undefined
);

export default function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tran = [
    {
      remark: "Transfer to Yonas",
      date: "3:24 pm 10 December 2023",
      amount: "2000$",
    },
    {
      remark: "Transfer to Beti",
      date: "5:24 pm 11 December 2023",
      amount: "4500$",
    },
    {
      remark: "Transfer Ruth",
      date: "12:24 pm 13 December 2023",
      amount: "3000$",
    },
  ];
  return (
    <TransactionContext.Provider value={tran}>
      {children}
    </TransactionContext.Provider>
  );
}
