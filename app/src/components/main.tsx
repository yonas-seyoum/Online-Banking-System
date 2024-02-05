import React, { useContext } from "react";
import { ThemeContext } from "../style/theme";

import TopBar from "./topBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Savings from "../pages/savings/savings";

export default function Main() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div
      className="content"
      style={{
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
      }}
    >
      <TopBar />
      <div className="main" style={{ backgroundColor: theme.colors.tertiary }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </div>
    </div>
  );
}
