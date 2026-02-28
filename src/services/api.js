/**
 * api.js - API service for connecting to Airbnb backend
 * Handles authentication, reservations, and accommodation endpoints
 * Backend runs on http://localhost:5000
 */

import axios from "axios";

/* Base URL for the backend API */
const API_BASE_URL = "http://localhost:5000/api";

/* Create axios instance with default config */
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

/* JWT Interceptor - attaches token to every request if available */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* Response interceptor - handle 401 unauthorized */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

/* ============ AUTH ENDPOINTS ============ */

/** Login user and store token */
export const loginUser = async (email, password) => {
  const response = await api.post("/users/login", { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

/** Register new user */
export const registerUser = async (userData) => {
  const response = await api.post("/users/register", userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

/** Get current user profile */
export const getUserProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};

/** Logout user - clear stored data */
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

/** Check if user is logged in */
export const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

/** Get stored user data */
export const getStoredUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

/* ============ RESERVATION ENDPOINTS ============ */

/** Create a new reservation */
export const createReservation = async (reservationData) => {
  const response = await api.post("/reservations", reservationData);
  return response.data;
};

/** Get reservations for current user */
export const getUserReservations = async () => {
  const response = await api.get("/reservations/user");
  return response.data;
};

/** Delete a reservation */
export const deleteReservation = async (id) => {
  const response = await api.delete("/reservations/" + id);
  return response.data;
};

/* ============ ACCOMMODATION ENDPOINTS ============ */

/** Get all accommodations from backend */
export const getAccommodations = async () => {
  const response = await api.get("/accommodations");
  return response.data;
};

/** Get single accommodation by ID */
export const getAccommodationById = async (id) => {
  const response = await api.get("/accommodations/" + id);
  return response.data;
};

export default api;
