/**
 * ReservationsPage.js - View user reservations in table format
 * Features: Table display, delete functionality, login check
 * Connects to backend GET /api/reservations/user
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUserReservations, deleteReservation } from "../services/api";

const ReservationsPage = () => {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteMsg, setDeleteMsg] = useState("");

  /* Fetch reservations on mount */
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
      return;
    }
    fetchReservations();
  }, [loggedIn, navigate]);

  /** Fetch user reservations from backend */
  const fetchReservations = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getUserReservations();
      setReservations(data);
    } catch (err) {
      if (err.message === "Network Error") {
        setError("Cannot connect to server. Make sure the backend is running.");
      } else {
        setError("Failed to load reservations.");
      }
    } finally {
      setLoading(false);
    }
  };

  /** Delete a reservation */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this reservation?")) return;
    try {
      await deleteReservation(id);
      setReservations(reservations.filter((r) => r._id !== id));
      setDeleteMsg("Reservation cancelled successfully.");
      setTimeout(() => setDeleteMsg(""), 3000);
    } catch (err) {
      setError("Failed to cancel reservation.");
    }
  };

  /** Format date for display */
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric"
    });
  };

  return (
    <div className="reservations-page">
      <h1>My Reservations</h1>
      <p className="reservations-subtitle">View and manage your upcoming stays</p>

      {error && <div className="reservation-page-error">{error}</div>}
      {deleteMsg && <div className="reservation-page-success">{deleteMsg}</div>}

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading reservations...</p>
        </div>
      ) : reservations.length === 0 ? (
        <div className="no-reservations">
          <h3>No reservations yet</h3>
          <p>Start exploring and book your first stay!</p>
          <button onClick={() => navigate("/locations/All")} className="explore-btn">
            Explore listings
          </button>
        </div>
      ) : (
        <div className="reservations-table-container">
          <table className="reservations-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Guests</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr key={res._id}>
                  <td className="res-property">
                    {res.accommodation ? res.accommodation.title || "Property" : "Property"}
                  </td>
                  <td>{formatDate(res.checkIn)}</td>
                  <td>{formatDate(res.checkOut)}</td>
                  <td>{res.guests || 1}</td>
                  <td><strong>${res.totalPrice || 0}</strong></td>
                  <td>
                    <button
                      className="cancel-res-btn"
                      onClick={() => handleDelete(res._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;
