import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { monthlySavingsData, yearlySavingsData } from "../data/savingData";

export interface SavingTimeline {
  timeline: "Yearly" | "Monthly";
}

const SavingProgressChart: React.FC<SavingTimeline> = ({ timeline }) => {
  return (
    <>
      <AreaChart
        width={1250}
        height={300}
        data={timeline === "Monthly" ? monthlySavingsData : yearlySavingsData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={timeline === "Monthly" ? "month" : "year"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Savings" stroke="black" fill="#1a1625" />
      </AreaChart>
    </>
  );
};

export default SavingProgressChart;
