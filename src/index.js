import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PoolPage from "./pages/PoolPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/" element={<PoolPage />}></Route>
    </Routes>
  </BrowserRouter>
);
