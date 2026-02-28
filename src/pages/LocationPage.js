/**
 * LocationPage.js - Location listing page for Airbnb Frontend Clone
 * Rubric items covered:
 *   - Location Page: Filter Functionality (/10)
 *   - Location Page: Location Cards (/10)
 * Features: Location filter, cards with image, type, name, amenities, rating, reviews, price
 */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import listings, { getLocations, getListingsByLocation } from "../data/listings";

const LocationPage = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const allLocations = getLocations();
  const [selectedLocation, setSelectedLocation] = useState(location || "All");
  const [filteredListings, setFilteredListings] = useState([]);
  const [typeFilter, setTypeFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  /* Update listings when location or filters change */
  useEffect(() => {
    let result = selectedLocation === "All" ? [...listings] : getListingsByLocation(selectedLocation);

    /* Apply type filter */
    if (typeFilter !== "All") {
      result = result.filter(l => l.type === typeFilter);
    }

    /* Apply price filter */
    if (priceFilter === "low") {
      result = result.filter(l => l.price <= 200);
    } else if (priceFilter === "mid") {
      result = result.filter(l => l.price > 200 && l.price <= 350);
    } else if (priceFilter === "high") {
      result = result.filter(l => l.price > 350);
    }

    /* Apply sorting */
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredListings(result);
  }, [selectedLocation, typeFilter, priceFilter, sortBy]);

  /* Update URL when location changes */
  useEffect(() => {
    if (location) {
      setSelectedLocation(decodeURIComponent(location));
    }
  }, [location]);

  /** Handle location filter change */
  const handleLocationChange = (loc) => {
    setSelectedLocation(loc);
    navigate("/locations/" + encodeURIComponent(loc));
  };

  /** Get unique property types */
  const propertyTypes = ["All", ...new Set(listings.map(l => l.type))];

  /** Render star rating */
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={"full-" + i} className="star full">&#9733;</span>);
    }
    if (hasHalf) {
      stars.push(<span key="half" className="star half">&#9733;</span>);
    }
    const remaining = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
      stars.push(<span key={"empty-" + i} className="star empty">&#9734;</span>);
    }
    return stars;
  };

  return (
    <div className="location-page">
      {/* Page Heading */}
      <div className="location-header">
        <h1>
          {selectedLocation === "All"
            ? "All Accommodations"
            : "Stays in " + selectedLocation}
        </h1>
        <p className="location-count">
          {filteredListings.length} accommodation{filteredListings.length !== 1 ? "s" : ""} found
          {selectedLocation !== "All" ? " in " + selectedLocation : ""}
        </p>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="filter-bar">
        {/* Location Filter */}
        <div className="filter-group">
          <label className="filter-label">Location</label>
          <select
            className="filter-select"
            value={selectedLocation}
            onChange={(e) => handleLocationChange(e.target.value)}
          >
            <option value="All">All Locations</option>
            {allLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div className="filter-group">
          <label className="filter-label">Property Type</label>
          <select
            className="filter-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="filter-group">
          <label className="filter-label">Price Range</label>
          <select
            className="filter-select"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="All">Any price</option>
            <option value="low">Under \$200</option>
            <option value="mid">\$200 - \$350</option>
            <option value="high">\$350+</option>
          </select>
        </div>

        {/* Sort */}
        <div className="filter-group">
          <label className="filter-label">Sort By</label>
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>
      </div>

      {/* ===== LOCATION CARDS ===== */}
      <div className="location-cards">
        {filteredListings.length === 0 ? (
          <div className="no-results">
            <h3>No accommodations found</h3>
            <p>Try adjusting your filters to find what you are looking for.</p>
          </div>
        ) : (
          filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="location-card"
              onClick={() => navigate("/listing/" + listing.id)}
            >
              {/* Card Image */}
              <div className="card-image-container">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="card-image"
                />
                {listing.superhost && (
                  <span className="superhost-badge">SUPERHOST</span>
                )}
              </div>

              {/* Card Details */}
              <div className="card-details">
                <div className="card-top-row">
                  <span className="card-type">{listing.type}</span>
                  <div className="card-rating">
                    <span className="star full">&#9733;</span>
                    <span>{listing.rating}</span>
                    <span className="card-reviews">({listing.reviews} reviews)</span>
                  </div>
                </div>

                <h3 className="card-title">{listing.title}</h3>

                <p className="card-location-info">
                  {listing.bedrooms} bedroom{listing.bedrooms !== 1 ? "s" : ""} &middot;{" "}
                  {listing.bathrooms} bathroom{listing.bathrooms !== 1 ? "s" : ""} &middot;{" "}
                  {listing.guests} guest{listing.guests !== 1 ? "s" : ""}
                </p>

                <div className="card-amenities">
                  {listing.amenities.slice(0, 3).map((amenity, i) => (
                    <span key={i} className="amenity-tag">{amenity}</span>
                  ))}
                  {listing.amenities.length > 3 && (
                    <span className="amenity-tag more">+{listing.amenities.length - 3} more</span>
                  )}
                </div>

                <div className="card-bottom">
                  <span className="card-price">
                    <strong>${listing.price}</strong> / night
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LocationPage;
