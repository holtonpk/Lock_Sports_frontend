import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pool from "./pages/Pool";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Pool" element={<Pool />}></Route>
      <Route path="/Settings" element={<Settings />}></Route>
    </Routes>
  </BrowserRouter>
);
