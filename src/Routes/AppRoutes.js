import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "../Features/Detail/Pages/Detail";
import Home from "../Features/Home/Pages/Home";

export default function AppRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
}
