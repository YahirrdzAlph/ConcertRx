import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Product, Story, Pricing } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/story" element={<Story />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
