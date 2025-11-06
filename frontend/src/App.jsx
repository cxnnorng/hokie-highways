import { useState } from "react";
import { Route, Routes } from "react-router";
import MapPage from "./pages/MapPage";
import Navbar from "./components/Navbar";
import SettingsPage from "./pages/SettingsPage";
import TripPage from "./pages/TripPage";
import FavoriteRoutesPage from "./pages/FavoriteRoutesPage";
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
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/trip" element={<TripPage />}></Route>
            <Route path="/favorites" element={<FavoriteRoutesPage />}></Route>
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
