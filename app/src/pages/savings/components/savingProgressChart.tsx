import React, { useContext } from "react";
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
import { ThemeContext } from "../../../style/theme";

export interface SavingTimeline {
  timeline: "Yearly" | "Monthly";
}

const SavingProgressChart: React.FC<SavingTimeline> = ({ timeline }) => {
  const { theme } = useContext(ThemeContext)!;
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
        <Area
          type="monotone"
          dataKey="Savings"
          stroke={theme.colors.secondary}
          fill={theme.colors.secondary}
        />
      </AreaChart>
    </>
  );
};

export default SavingProgressChart;
