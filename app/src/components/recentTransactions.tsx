import React, { useContext, useState } from "react";
import { ThemeContext } from "../style/theme";
import { TransactionContext } from "../providers/transactionProvider";
import Transaction from "./transaction";
import "../style/recentTransactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { InputAdornment, TextField } from "@mui/material";

export default function RecentTransactions() {
  const { theme } = useContext(ThemeContext)!;
  const transactions = useContext(TransactionContext)!;
  const [searchBar, setSearchBar] = useState(true);

  return (
    <div
      className="recent-transaction"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <div className="recent-transaction-header">
        <div>
          <div className="recent-transactions-title">Recent Transaction</div>
          <div>Today</div>
        </div>

        {searchBar ? (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => setSearchBar(!searchBar)}
          />
        ) : (
          <TextField
            size="small"
            sx={{
              transition: "ease-in-out 0.3s",
              backgroundColor: theme.colors.tertiary,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputAdornment>
              ),
            }}
          />
        )}
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
