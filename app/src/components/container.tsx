import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  const containerStyle = {
    display: "flex",
  };
  return <div style={containerStyle}>{children}</div>;
}
