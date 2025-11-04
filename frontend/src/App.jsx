import { useState } from "react";
import { Route, Routes } from "react-router";
import MapPage from "./pages/MapPage";
import Navbar from "./components/Navbar";
import "./css/App.css"

function App() {
  return (
    <div className="app">
      <div className="layout">
        <div className="header">
          <h1>HOKIE HIGHWAYS</h1>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<MapPage />}></Route>
          </Routes>
        </div>
        <div className="footer">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
