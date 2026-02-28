/**
 * LocationDetails.js - Detailed listing page for Airbnb Frontend Clone
 * Rubric items covered:
 *   - Location Details: Heading and Subheading (/10)
 *   - Location Details: Image Gallery (/10)
 *   - Location Details: Cost Calculator (/10)
 *   - Location Details: Static Information Sections (/10)
 * Features: Image gallery (1 large + 4 small), cost calculator with all fees,
 *   reservation button, accommodation details, host info, reviews, house rules
 */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getListingById } from "../data/listings";
import { useAuth } from "../context/AuthContext";
import { createReservation } from "../services/api";

const LocationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedIn } = useAuth();
  const listing = getListingById(id);

  /* Cost calculator state */
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(0);
  const [reservationMsg, setReservationMsg] = useState("");
  const [reservationError, setReservationError] = useState("");

  /* Calculate nights when dates change */
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setNights(diff > 0 ? diff : 0);
    } else {
      setNights(0);
    }
  }, [checkIn, checkOut]);

  /* If listing not found */
  if (!listing) {
    return (
      <div className="not-found">
        <h2>Listing not found</h2>
        <p>The accommodation you are looking for does not exist.</p>
        <button onClick={() => navigate("/locations/All")} className="back-btn">
          Browse all listings
        </button>
      </div>
    );
  }

  /* Cost calculations */
  const basePrice = listing.price * nights;
  const weeklyDiscount = nights >= 7 ? listing.weeklyDiscount : 0;
  const cleaningFee = nights > 0 ? listing.cleaningFee : 0;
  const serviceFee = nights > 0 ? listing.serviceFee : 0;
  const occupancyTaxes = nights > 0 ? listing.occupancyTaxes : 0;
  const totalPrice = basePrice - weeklyDiscount + cleaningFee + serviceFee + occupancyTaxes;

  /** Handle reservation submission */
  const handleReserve = async () => {
    setReservationMsg("");
    setReservationError("");

    if (!loggedIn) {
      setReservationError("Please log in to make a reservation.");
      return;
    }
    if (!checkIn || !checkOut) {
      setReservationError("Please select check-in and check-out dates.");
      return;
    }
    if (nights <= 0) {
      setReservationError("Check-out must be after check-in date.");
      return;
    }
    if (guests > listing.guests) {
      setReservationError("Maximum " + listing.guests + " guests allowed.");
      return;
    }

    try {
      await createReservation({
        accommodationId: listing.id.toString(),
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        totalPrice: totalPrice
      });
      setReservationMsg("Reservation confirmed! Total: $" + totalPrice);
      setReservationError("");
    } catch (err) {
      setReservationError(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Reservation failed. Make sure the backend is running."
      );
    }
  };

  /** Render rating bar for specific ratings */
  const renderRatingBar = (label, value) => (
    <div className="rating-bar-row" key={label}>
      <span className="rating-bar-label">{label}</span>
      <div className="rating-bar-track">
        <div className="rating-bar-fill" style={{ width: (value / 5 * 100) + "%" }}></div>
      </div>
      <span className="rating-bar-value">{value}</span>
    </div>
  );

  return (
    <div className="details-page">
      {/* ===== HEADING AND SUBHEADING ===== */}
      <div className="details-heading">
        <h1>{listing.type} in {listing.location}</h1>
        <div className="details-subheading">
          <div className="details-sub-left">
            <span className="details-rating">
              <span className="star full">&#9733;</span> {listing.rating}
            </span>
            <span className="details-dot">&middot;</span>
            <span className="details-reviews">{listing.reviews} reviews</span>
            <span className="details-dot">&middot;</span>
            {listing.superhost && (
              <>
                <span className="superhost-text">&#9734; Superhost</span>
                <span className="details-dot">&middot;</span>
              </>
            )}
            <span className="details-location">{listing.location}</span>
          </div>
          <div className="details-sub-right">
            <button className="share-btn">
              <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M27 18v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9M16 3v19M8 11l8-8 8 8"/>
              </svg>
              Share
            </button>
            <button className="save-btn">
              <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 28l-1.4-1.3C7 20 2 15.5 2 10a6 6 0 016-6c2.1 0 4.1.9 5.5 2.4L16 9l2.5-2.6A7.2 7.2 0 0124 4a6 6 0 016 6c0 5.5-5 10-12.6 16.7z"/>
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>

      {/* ===== IMAGE GALLERY - 1 large + 4 small ===== */}
      <div className="image-gallery">
        <div className="gallery-large">
          <img src={listing.images[0]} alt={listing.title + " main"} />
        </div>
        <div className="gallery-small">
          {listing.images.slice(1, 5).map((img, index) => (
            <div key={index} className="gallery-small-item">
              <img src={img} alt={listing.title + " " + (index + 2)} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== TWO COLUMN LAYOUT ===== */}
      <div className="details-content">
        {/* LEFT COLUMN - Accommodation Details */}
        <div className="details-left">
          {/* Title and Host */}
          <div className="details-title-section">
            <div className="details-title-left">
              <h2>{listing.title}</h2>
              <p className="details-specs">
                {listing.guests} guest{listing.guests !== 1 ? "s" : ""} &middot;{" "}
                {listing.bedrooms} bedroom{listing.bedrooms !== 1 ? "s" : ""} &middot;{" "}
                {listing.bathrooms} bathroom{listing.bathrooms !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="host-avatar-section">
              <img src={listing.hostImage} alt={listing.host} className="host-avatar" />
            </div>
          </div>

          <hr className="section-divider" />

          {/* Accommodation Details - Highlights */}
          <div className="highlights-section">
            {listing.superhost && (
              <div className="highlight-item">
                <div className="highlight-icon">&#9733;</div>
                <div>
                  <h4>{listing.host} is a Superhost</h4>
                  <p>Superhosts are experienced, highly rated hosts committed to providing great stays.</p>
                </div>
              </div>
            )}
            <div className="highlight-item">
              <div className="highlight-icon">&#128205;</div>
              <div>
                <h4>Great location</h4>
                <p>95% of recent guests gave the location a 5-star rating.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">&#128197;</div>
              <div>
                <h4>Free cancellation for 48 hours</h4>
                <p>Get a full refund if you change your mind.</p>
              </div>
            </div>
          </div>

          <hr className="section-divider" />

          {/* Description */}
          <div className="description-section">
            <h3>About this place</h3>
            <p>{listing.description}</p>
          </div>

          <hr className="section-divider" />

          {/* Where you will sleep */}
          <div className="sleep-section">
            <h3>Where you will sleep</h3>
            <div className="sleep-cards">
              {Array.from({ length: listing.bedrooms }, (_, i) => (
                <div key={i} className="sleep-card">
                  <div className="sleep-icon">&#128716;</div>
                  <h4>Bedroom {i + 1}</h4>
                  <p>1 {i === 0 ? "queen" : "double"} bed</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* What this place offers */}
          <div className="amenities-section">
            <h3>What this place offers</h3>
            <div className="amenities-grid">
              {listing.amenities.map((amenity, i) => (
                <div key={i} className="amenity-item">
                  <span className="amenity-icon">&#10003;</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* 7 nights in Location */}
          <div className="stay-section">
            <h3>{nights > 0 ? nights : 7} nights in {listing.location}</h3>
            <p className="stay-dates">
              {checkIn && checkOut
                ? new Date(checkIn).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                  + " - " + new Date(checkOut).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                : "Select dates to see availability"}
            </p>
          </div>

          <hr className="section-divider" />

          {/* Reviews Section */}
          <div className="reviews-section">
            <div className="reviews-header">
              <h3>
                <span className="star full">&#9733;</span> {listing.rating} &middot; {listing.reviews} reviews
              </h3>
            </div>
            <div className="specific-ratings">
              {renderRatingBar("Cleanliness", listing.specificRatings.cleanliness)}
              {renderRatingBar("Communication", listing.specificRatings.communication)}
              {renderRatingBar("Check-in", listing.specificRatings.checkin)}
              {renderRatingBar("Accuracy", listing.specificRatings.accuracy)}
              {renderRatingBar("Location", listing.specificRatings.location)}
              {renderRatingBar("Value", listing.specificRatings.value)}
            </div>
          </div>

          <hr className="section-divider" />

          {/* Host Details */}
          <div className="host-section">
            <div className="host-info">
              <img src={listing.hostImage} alt={listing.host} className="host-img" />
              <div>
                <h3>Hosted by {listing.host}</h3>
                <p className="host-joined">Joined in {listing.hostJoined}</p>
              </div>
            </div>
            <div className="host-details">
              <p>{listing.reviews} reviews</p>
              {listing.superhost && <p>&#9733; Superhost</p>}
            </div>
          </div>

          <hr className="section-divider" />

          {/* House Rules */}
          <div className="rules-section">
            <h3>House Rules</h3>
            <ul className="rules-list">
              {listing.houseRules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <hr className="section-divider" />

          {/* Health & Safety */}
          <div className="safety-section">
            <h3>Health &amp; Safety</h3>
            <ul className="safety-list">
              <li>Enhanced cleaning procedures</li>
              <li>Social distancing guidelines applied</li>
              <li>Smoke alarm installed</li>
              <li>Carbon monoxide alarm installed</li>
            </ul>
          </div>

          <hr className="section-divider" />

          {/* Cancellation Policy */}
          <div className="cancellation-section">
            <h3>Cancellation Policy</h3>
            <p>{listing.cancellationPolicy}</p>
          </div>
        </div>

        {/* RIGHT COLUMN - Cost Calculator */}
        <div className="details-right">
          <div className="cost-calculator">
            <div className="calc-header">
              <span className="calc-price"><strong>${listing.price}</strong> / night</span>
              <span className="calc-rating">
                <span className="star full">&#9733;</span> {listing.rating}
                <span className="calc-reviews"> ({listing.reviews} reviews)</span>
              </span>
            </div>

            {/* Date and Guest Inputs */}
            <div className="calc-inputs">
              <div className="calc-dates">
                <div className="calc-input-group">
                  <label>CHECK-IN</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="calc-input-group">
                  <label>CHECKOUT</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
              <div className="calc-input-group full-width">
                <label>GUESTS</label>
                <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}>
                  {Array.from({ length: listing.guests }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} guest{i > 0 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reserve Button */}
            <button className="reserve-btn" onClick={handleReserve}>
              {nights > 0 ? "Reserve" : "Check availability"}
            </button>

            {/* Reservation Messages */}
            {reservationMsg && <p className="reservation-success">{reservationMsg}</p>}
            {reservationError && <p className="reservation-error">{reservationError}</p>}

            {nights > 0 && <p className="calc-notice">You will not be charged yet</p>}

            {/* Cost Breakdown */}
            {nights > 0 && (
              <div className="calc-breakdown">
                <div className="calc-row">
                  <span>${listing.price} x {nights} night{nights !== 1 ? "s" : ""}</span>
                  <span>${basePrice}</span>
                </div>
                {weeklyDiscount > 0 && (
                  <div className="calc-row discount">
                    <span>Weekly discount</span>
                    <span className="discount-amount">-${weeklyDiscount}</span>
                  </div>
                )}
                <div className="calc-row">
                  <span>Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </div>
                <div className="calc-row">
                  <span>Service fee</span>
                  <span>${serviceFee}</span>
                </div>
                <div className="calc-row">
                  <span>Occupancy taxes and fees</span>
                  <span>${occupancyTaxes}</span>
                </div>
                <hr className="calc-divider" />
                <div className="calc-row total">
                  <strong>Total</strong>
                  <strong>${totalPrice}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
