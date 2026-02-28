/**
 * AuthContext.js - Global authentication state management
 * Provides login/logout functionality across all components
 */

import React, { createContext, useState, useContext, useEffect } from "react";
import { isLoggedIn, getStoredUser, logoutUser } from "../services/api";

/* Create the auth context */
const AuthContext = createContext(null);

/**
 * AuthProvider - Wraps the app and provides auth state
 * Manages user login state, user data, and logout
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  /* Check for existing session on mount */
  useEffect(() => {
    if (isLoggedIn()) {
      const storedUser = getStoredUser();
      setUser(storedUser);
      setLoggedIn(true);
    }
  }, []);

  /** Handle login - store user and update state */
  const login = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  /** Handle logout - clear everything */
  const logout = () => {
    logoutUser();
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/** Custom hook to use auth context */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
