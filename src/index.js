import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PoolPage from "./pages/PoolPage";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/PoolPage" element={<PoolPage />}></Route>
    </Routes>
  </BrowserRouter>
);
