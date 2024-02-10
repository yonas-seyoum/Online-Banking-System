import React, { useContext } from "react";
import { ThemeContext } from "../../../style/theme";

export default function TransferWindow() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div
      className="transfer-window"
      style={{
        color: theme.colors.secondary,
        background: theme.colors.primary,
      }}
    >
      <h3>Transfer to YoBank Account</h3>
      <div className="item-holder">
        <label>Account No</label>
        <input type="number" />
      </div>
      <div className="item-holder">
        <label>From Account</label>
        <select name="" id="">
          <option value="2023IB01">2023IB01</option>
        </select>
      </div>
      <div className="item-holder">
        <label>Amount</label>
        <input type="number" defaultValue={0} />
      </div>
      <div className="item-holder">
        <label>Remark</label>
        <input type="text" />
      </div>
      <div className="item-holder">
        <input className="transfer-button" type="button" value={"Transfer"} />
      </div>
    </div>
  );
}
