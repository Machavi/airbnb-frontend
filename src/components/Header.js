/**
 * Header.js - Top navigation header for Airbnb Frontend Clone
 * Rubric: Top Header - Filter and Profile Section (/10 marks)
 * Features: Logo, location filter, profile dropdown with login/reservations
 */

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getLocations } from "../data/listings";

const Header = () => {
  const { user, loggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const locations = getLocations();

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /** Handle location search/filter navigation */
  const handleLocationSelect = (location) => {
    setSearchLocation(location);
    setShowSearch(false);
    navigate("/locations/" + encodeURIComponent(location));
  };

  /** Handle search submit */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchLocation.trim()) {
      navigate("/locations/" + encodeURIComponent(searchLocation));
      setShowSearch(false);
    }
  };

  /** Handle logout */
  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <svg viewBox="0 0 30 32" className="logo-icon">
            <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.49-.95-.74-1.44-.32-.57-.63-1.18-1.1-1.71C18.11.95 16.98.24 15.71.03c-1.26-.2-2.47.16-3.41.82-.57.4-1.04.93-1.49 1.54-.24.38-.49.8-.73 1.24l-.11.2c-2.48 4.81-4.84 9.68-7.04 14.48l-.06.09c-.23.53-.47 1.06-.71 1.61-.16.35-.32.73-.48 1.15-.5 1.35-.67 2.62-.46 3.89.41 2.55 2.08 4.68 4.42 5.68.89.38 1.83.59 2.81.59.21 0 .46-.01.67-.04.96-.1 1.96-.4 2.96-.93 1.25-.66 2.43-1.6 3.63-2.88 1.2 1.28 2.38 2.22 3.63 2.88 1 .53 2 .82 2.96.93.21.03.46.04.67.04.98 0 1.92-.21 2.81-.59 2.35-1 4.02-3.13 4.42-5.68.21-1.27.04-2.54-.46-3.89zM15.7 28.59c-2.27-2.64-3.77-5.17-4.46-7.5-.27-.93-.34-1.74-.22-2.45.1-.58.33-1.09.68-1.5.74-.87 1.89-1.38 3.17-1.38h.16c1.28.01 2.43.52 3.17 1.38.35.41.58.92.68 1.5.12.71.05 1.52-.22 2.45-.69 2.33-2.19 4.86-4.46 7.5h-.01c-.16.18-.33.35-.49.5l-.01-.5z" fill="#FF5A5F"/>
          </svg>
          <span className="logo-text">airbnb</span>
        </Link>

        {/* Location Search/Filter */}
        <div className="header-search" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <button type="button" className="search-section" onClick={() => setShowSearch(!showSearch)}>
              <span className="search-label">Location</span>
              <span className="search-value">{searchLocation || "Where are you going?"}</span>
            </button>
            <button type="button" className="search-section">
              <span className="search-label">Check in</span>
              <span className="search-value">Add dates</span>
            </button>
            <button type="button" className="search-section">
              <span className="search-label">Check out</span>
              <span className="search-value">Add dates</span>
            </button>
            <button type="button" className="search-section">
              <span className="search-label">Guests</span>
              <span className="search-value">Add guests</span>
            </button>
            <button type="submit" className="search-btn">
              <svg viewBox="0 0 32 32" width="16" height="16" fill="white">
                <path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0zm0 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11-4.925 11-11 11zm19.707 4.293l-7-7-1.414 1.414 7 7a1 1 0 001.414-1.414z"/>
              </svg>
            </button>
          </form>

          {/* Location Dropdown */}
          {showSearch && (
            <div className="search-dropdown">
              <h4>Search by location</h4>
              {locations.map((loc) => (
                <button key={loc} className="search-dropdown-item" onClick={() => handleLocationSelect(loc)}>
                  <div className="search-dropdown-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#717171">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span>{loc}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="header-profile" ref={dropdownRef}>
          <Link to="/" className="become-host-link">Become a Host</Link>
          <button className="profile-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <svg viewBox="0 0 32 32" width="16" height="16" fill="#717171" className="menu-icon">
              <path d="M4 7h24M4 16h24M4 25h24" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
            <div className="profile-avatar">
              {loggedIn && user ? (
                <span className="avatar-initial">{user.name ? user.name.charAt(0).toUpperCase() : "U"}</span>
              ) : (
                <svg viewBox="0 0 32 32" width="20" height="20" fill="#717171">
                  <path d="M16 .5C7.44.5.5 7.44.5 16S7.44 31.5 16 31.5 31.5 24.56 31.5 16 24.56.5 16 .5zm0 8a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 21a14.47 14.47 0 01-9.79-3.81A5.5 5.5 0 0111.5 22h9a5.5 5.5 0 015.29 3.69A14.47 14.47 0 0116 29.5z"/>
                </svg>
              )}
            </div>
          </button>

          {/* Profile Dropdown */}
          {showDropdown && (
            <div className="profile-dropdown">
              {loggedIn ? (
                <>
                  <div className="dropdown-greeting">Hello, {user && user.name ? user.name.split(" ")[0] : "User"}!</div>
                  <Link to="/reservations" className="dropdown-item" onClick={() => setShowDropdown(false)}>My Reservations</Link>
                  <Link to="/" className="dropdown-item" onClick={() => setShowDropdown(false)}>Home</Link>
                  <hr className="dropdown-divider" />
                  <button className="dropdown-item dropdown-logout" onClick={handleLogout}>Log out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="dropdown-item dropdown-login" onClick={() => setShowDropdown(false)}>Log in</Link>
                  <Link to="/login" className="dropdown-item" onClick={() => setShowDropdown(false)}>Sign up</Link>
                  <hr className="dropdown-divider" />
                  <Link to="/" className="dropdown-item" onClick={() => setShowDropdown(false)}>Become a Host</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
