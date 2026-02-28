/**
 * App.js - Main application component with routing
 * Routes: Home, Locations, Listing Details, Login, Reservations
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import LocationDetails from "./pages/LocationDetails";
import LoginPage from "./pages/LoginPage";
import ReservationsPage from "./pages/ReservationsPage";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/locations/:location" element={<LocationPage />} />
              <Route path="/listing/:id" element={<LocationDetails />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
