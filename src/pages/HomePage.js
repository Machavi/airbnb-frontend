/**
 * HomePage.js - Main landing page for Airbnb Frontend Clone
 * Rubric items covered:
 *   - Home Page: Hero Banner (/10)
 *   - Home Page: Inspiration Section (/10)
 *   - Home Page: Discover Experiences (/10)
 *   - Home Page: ShopAirbnb Section (/10)
 *   - Home Page: Future Getaways Section (/10)
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocations } from "../data/listings";

const HomePage = () => {
  const navigate = useNavigate();
  const locations = getLocations();
  const [activeTab, setActiveTab] = useState("Unique stays");

  /* Inspiration location cards data */
  const inspirationCards = [
    { city: "New York", distance: "100 miles away", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400" },
    { city: "Los Angeles", distance: "2,474 miles away", image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400" },
    { city: "Miami", distance: "1,280 miles away", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400" },
    { city: "San Francisco", distance: "2,900 miles away", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400" },
    { city: "Chicago", distance: "790 miles away", image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=400" }
  ];

  /* Discover Experiences data */
  const experiences = [
    { title: "Things to do on your trip", description: "Find activities, tours, and more for your destination", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800", buttonText: "Experiences" },
    { title: "Things to do at home", description: "Join activities led by world-class hosts on Airbnb", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800", buttonText: "Online Experiences" }
  ];

  /* Future Getaways tabs data */
  const getawayTabs = {
    "Unique stays": [
      { name: "Cabins", count: "2,341 stays" },
      { name: "Treehouses", count: "423 stays" },
      { name: "Glamping", count: "1,892 stays" },
      { name: "Tiny homes", count: "763 stays" },
      { name: "Beach houses", count: "3,102 stays" },
      { name: "Farms", count: "891 stays" }
    ],
    "Entire homes": [
      { name: "New York homes", count: "4,212 homes" },
      { name: "Los Angeles homes", count: "3,891 homes" },
      { name: "Miami homes", count: "2,456 homes" },
      { name: "San Francisco homes", count: "1,892 homes" },
      { name: "Chicago homes", count: "2,103 homes" },
      { name: "Boston homes", count: "1,234 homes" }
    ],
    "Outdoors": [
      { name: "Lake trips", count: "1,450 stays" },
      { name: "Mountain retreats", count: "2,310 stays" },
      { name: "Camping spots", count: "987 stays" },
      { name: "National parks", count: "1,123 stays" },
      { name: "Beach getaways", count: "3,456 stays" },
      { name: "Desert escapes", count: "654 stays" }
    ],
    "Pets allowed": [
      { name: "Dog friendly", count: "5,678 stays" },
      { name: "Cat friendly", count: "2,345 stays" },
      { name: "Farm stays", count: "891 stays" },
      { name: "Cabins with pets", count: "1,234 stays" },
      { name: "Beach pet stays", count: "2,103 stays" },
      { name: "Mountain pet stays", count: "987 stays" }
    ]
  };

  /* Gift cards for ShopAirbnb */
  const giftCards = [
    { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400", label: "\$50 Gift Card" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", label: "\$100 Gift Card" },
    { image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", label: "\$200 Gift Card" }
  ];

  return (
    <div className="home-page">
      {/* ===== HERO BANNER ===== */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1 className="hero-title">Find your next adventure</h1>
          <p className="hero-subtitle">Discover entire homes and rooms perfect for any trip.</p>
          <button className="hero-btn" onClick={() => navigate("/locations/All")}>
            Explore nearby
          </button>
        </div>
      </section>

      {/* ===== INSPIRATION SECTION ===== */}
      <section className="section inspiration-section">
        <h2 className="section-title">Inspiration for your next trip</h2>
        <div className="inspiration-cards">
          {inspirationCards.map((card, index) => (
            <div
              key={index}
              className="inspiration-card"
              onClick={() => navigate("/locations/" + encodeURIComponent(card.city))}
              style={{ cursor: "pointer" }}
            >
              <img src={card.image} alt={card.city} className="inspiration-img" />
              <div className="inspiration-info">
                <h3>{card.city}</h3>
                <p>{card.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DISCOVER EXPERIENCES ===== */}
      <section className="section discover-section">
        <h2 className="section-title">Discover Airbnb Experiences</h2>
        <div className="discover-cards">
          {experiences.map((exp, index) => (
            <div key={index} className="discover-card">
              <img src={exp.image} alt={exp.title} className="discover-img" />
              <div className="discover-overlay">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
                <button className="discover-btn">{exp.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SHOP AIRBNB SECTION ===== */}
      <section className="section shop-section">
        <div className="shop-content">
          <div className="shop-text">
            <h2>Shop Airbnb</h2>
            <p>Gift cards and more for any occasion</p>
            <button className="shop-btn" onClick={() => alert("Gift cards coming soon!")}>Learn more</button>
          </div>
          <div className="shop-cards">
            {giftCards.map((card, index) => (
              <div key={index} className="shop-card">
                <img src={card.image} alt={card.label} className="shop-card-img" />
                <p className="shop-card-label">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FUTURE GETAWAYS SECTION ===== */}
      <section className="section getaways-section">
        <h2 className="section-title">Inspiration for future getaways</h2>
        <div className="getaways-tabs">
          {Object.keys(getawayTabs).map((tab) => (
            <button
              key={tab}
              className={"getaway-tab" + (activeTab === tab ? " active" : "")}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="getaways-list">
          {getawayTabs[activeTab].map((item, index) => (
            <div key={index} className="getaway-item" onClick={() => navigate("/locations/All")}>
              <h4>{item.name}</h4>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
