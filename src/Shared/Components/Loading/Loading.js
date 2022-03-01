import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="pt-2 pb-5"
    >
      <CircularProgress color="inherit" size={60} />
      <div className="mt-2">
        <p>loading more movies for you...</p>
      </div>
    </div>
  );
}
