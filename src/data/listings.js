/**
 * listings.js - Static listing data for Airbnb Frontend Clone
 * 10 listings across 5 cities with complete data structure
 */

const listings = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
    ],
    type: "Entire apartment",
    location: "New York",
    bedrooms: 2, bathrooms: 2, guests: 4,
    amenities: ["Wifi", "Kitchen", "Free parking", "Air conditioning", "Washer"],
    rating: 4.5, reviews: 320, price: 300,
    title: "Modern Apartment in New York",
    host: "Johann",
    hostImage: "https://randomuser.me/api/portraits/men/32.jpg",
    hostJoined: "March 2019", superhost: true,
    weeklyDiscount: 28, cleaningFee: 50, serviceFee: 50, occupancyTaxes: 30,
    description: "Stay in the heart of New York City in this beautifully designed modern apartment. Floor-to-ceiling windows offer stunning city views. Walking distance to Central Park and Times Square.",
    houseRules: ["No smoking", "No pets", "No parties or events", "Check-in after 3:00 PM"],
    cancellationPolicy: "Free cancellation for 48 hours. After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.",
    specificRatings: { cleanliness: 4.8, communication: 4.7, checkin: 4.9, accuracy: 4.6, location: 4.9, value: 4.5 }
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1556020685324-e2ce02c23ba2?w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
    ],
    type: "Entire house",
    location: "New York",
    bedrooms: 3, bathrooms: 2, guests: 6,
    amenities: ["Wifi", "Kitchen", "Free parking", "Pool", "Hot tub", "Gym"],
    rating: 4.8, reviews: 186, price: 450,
    title: "Luxury Penthouse with Skyline View",
    host: "Sarah",
    hostImage: "https://randomuser.me/api/portraits/women/44.jpg",
    hostJoined: "June 2018", superhost: true,
    weeklyDiscount: 50, cleaningFee: 75, serviceFee: 65, occupancyTaxes: 45,
    description: "Experience luxury living in this stunning penthouse with panoramic views of the Manhattan skyline. High-end finishes, a gourmet kitchen, and access to premium building amenities.",
    houseRules: ["No smoking", "No pets", "No parties", "Check-in after 4:00 PM"],
    cancellationPolicy: "Non-refundable. Cancel before check-in and get a 50% refund, minus the service fee.",
    specificRatings: { cleanliness: 4.9, communication: 4.8, checkin: 4.9, accuracy: 4.7, location: 5.0, value: 4.6 }
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
    ],
    type: "Entire villa",
    location: "Los Angeles",
    bedrooms: 4, bathrooms: 3, guests: 8,
    amenities: ["Wifi", "Kitchen", "Free parking", "Pool", "BBQ grill", "Garden"],
    rating: 4.7, reviews: 245, price: 380,
    title: "Hollywood Hills Villa with Pool",
    host: "Michael",
    hostImage: "https://randomuser.me/api/portraits/men/75.jpg",
    hostJoined: "January 2020", superhost: false,
    weeklyDiscount: 35, cleaningFee: 60, serviceFee: 55, occupancyTaxes: 38,
    description: "Escape to the Hollywood Hills in this gorgeous villa with private pool and breathtaking views of the LA skyline. Perfect for families or groups.",
    houseRules: ["No smoking indoors", "Pets allowed", "No events over 8 people", "Check-in after 3:00 PM"],
    cancellationPolicy: "Free cancellation for 48 hours. After that, cancel up to 7 days before check-in and get a 50% refund.",
    specificRatings: { cleanliness: 4.7, communication: 4.6, checkin: 4.8, accuracy: 4.5, location: 4.9, value: 4.4 }
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
    ],
    type: "Entire apartment",
    location: "Los Angeles",
    bedrooms: 1, bathrooms: 1, guests: 2,
    amenities: ["Wifi", "Kitchen", "Air conditioning", "TV", "Washer"],
    rating: 4.3, reviews: 98, price: 175,
    title: "Cozy Studio Near Venice Beach",
    host: "Emma",
    hostImage: "https://randomuser.me/api/portraits/women/68.jpg",
    hostJoined: "August 2021", superhost: false,
    weeklyDiscount: 15, cleaningFee: 30, serviceFee: 25, occupancyTaxes: 18,
    description: "Charming studio apartment just steps from the iconic Venice Beach boardwalk. Perfect for couples or solo travelers looking to experience LA beach culture.",
    houseRules: ["No smoking", "No pets", "No parties", "Check-in after 2:00 PM"],
    cancellationPolicy: "Flexible: Free cancellation up to 24 hours before check-in.",
    specificRatings: { cleanliness: 4.4, communication: 4.5, checkin: 4.6, accuracy: 4.2, location: 4.8, value: 4.3 }
  },
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800"
    ],
    type: "Entire house",
    location: "Miami",
    bedrooms: 3, bathrooms: 2, guests: 6,
    amenities: ["Wifi", "Kitchen", "Free parking", "Pool", "Beach access", "Air conditioning"],
    rating: 4.6, reviews: 412, price: 350,
    title: "Beachfront House in South Beach",
    host: "Carlos",
    hostImage: "https://randomuser.me/api/portraits/men/46.jpg",
    hostJoined: "February 2017", superhost: true,
    weeklyDiscount: 40, cleaningFee: 55, serviceFee: 50, occupancyTaxes: 35,
    description: "Wake up to the sound of waves in this beautiful beachfront property in South Beach. Direct beach access, private pool, and spacious outdoor deck.",
    houseRules: ["No smoking", "Pets allowed with deposit", "No events", "Check-in after 3:00 PM"],
    cancellationPolicy: "Moderate: Free cancellation up to 5 days before check-in.",
    specificRatings: { cleanliness: 4.6, communication: 4.7, checkin: 4.8, accuracy: 4.5, location: 5.0, value: 4.5 }
  },
  {
    id: 6,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1560185127-6a3c6b6c6e58?w=800",
      "https://images.unsplash.com/photo-1560185008-b033106af5c8?w=800",
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
    ],
    type: "Entire apartment",
    location: "Miami",
    bedrooms: 2, bathrooms: 1, guests: 4,
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Balcony", "Gym"],
    rating: 4.4, reviews: 156, price: 220,
    title: "Art Deco Apartment in Miami Beach",
    host: "Isabella",
    hostImage: "https://randomuser.me/api/portraits/women/32.jpg",
    hostJoined: "May 2020", superhost: false,
    weeklyDiscount: 20, cleaningFee: 40, serviceFee: 35, occupancyTaxes: 22,
    description: "Experience the glamour of Miami Beach in this stunning Art Deco apartment. Located on Ocean Drive with views of the Atlantic Ocean.",
    houseRules: ["No smoking", "No pets", "No parties", "Check-in after 3:00 PM"],
    cancellationPolicy: "Free cancellation for 48 hours. 50% refund after that.",
    specificRatings: { cleanliness: 4.5, communication: 4.4, checkin: 4.6, accuracy: 4.3, location: 4.8, value: 4.2 }
  },
  {
    id: 7,
    images: [
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800"
    ],
    type: "Entire house",
    location: "San Francisco",
    bedrooms: 3, bathrooms: 2, guests: 5,
    amenities: ["Wifi", "Kitchen", "Free parking", "Garden", "Fireplace", "Washer"],
    rating: 4.9, reviews: 278, price: 280,
    title: "Victorian Home Near Golden Gate",
    host: "David",
    hostImage: "https://randomuser.me/api/portraits/men/52.jpg",
    hostJoined: "September 2016", superhost: true,
    weeklyDiscount: 30, cleaningFee: 45, serviceFee: 40, occupancyTaxes: 28,
    description: "Charming Victorian home in a quiet neighborhood with easy access to the Golden Gate Bridge, Fishermans Wharf, and the citys best restaurants.",
    houseRules: ["No smoking", "No pets", "Quiet hours after 10 PM", "Check-in after 3:00 PM"],
    cancellationPolicy: "Strict: 50% refund up until 1 week before check-in.",
    specificRatings: { cleanliness: 5.0, communication: 4.9, checkin: 4.9, accuracy: 4.8, location: 5.0, value: 4.7 }
  },
  {
    id: 8,
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
    ],
    type: "Entire apartment",
    location: "San Francisco",
    bedrooms: 1, bathrooms: 1, guests: 3,
    amenities: ["Wifi", "Kitchen", "Air conditioning", "TV", "Coffee maker"],
    rating: 4.2, reviews: 89, price: 195,
    title: "Downtown Loft with Bay Views",
    host: "Lisa",
    hostImage: "https://randomuser.me/api/portraits/women/56.jpg",
    hostJoined: "November 2021", superhost: false,
    weeklyDiscount: 18, cleaningFee: 35, serviceFee: 30, occupancyTaxes: 20,
    description: "Modern loft in the heart of downtown San Francisco with beautiful views of the Bay. Walking distance to Union Square, Chinatown, and public transit.",
    houseRules: ["No smoking", "No pets", "No parties", "Check-in after 2:00 PM"],
    cancellationPolicy: "Flexible: Free cancellation up to 24 hours before check-in.",
    specificRatings: { cleanliness: 4.3, communication: 4.4, checkin: 4.5, accuracy: 4.1, location: 4.7, value: 4.0 }
  },
  {
    id: 9,
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?w=800",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800"
    ],
    type: "Entire cabin",
    location: "Chicago",
    bedrooms: 2, bathrooms: 1, guests: 4,
    amenities: ["Wifi", "Kitchen", "Free parking", "Fireplace", "Lake access", "BBQ grill"],
    rating: 4.6, reviews: 201, price: 250,
    title: "Lakefront Retreat in Chicago",
    host: "Robert",
    hostImage: "https://randomuser.me/api/portraits/men/64.jpg",
    hostJoined: "April 2018", superhost: true,
    weeklyDiscount: 25, cleaningFee: 40, serviceFee: 35, occupancyTaxes: 25,
    description: "Peaceful lakefront retreat offering the perfect blend of nature and city access. Enjoy stunning lake views, cozy fireplace, and easy access to downtown Chicago attractions.",
    houseRules: ["No smoking", "Pets allowed", "No parties", "Check-in after 3:00 PM"],
    cancellationPolicy: "Moderate: Free cancellation up to 5 days before check-in.",
    specificRatings: { cleanliness: 4.7, communication: 4.8, checkin: 4.7, accuracy: 4.5, location: 4.6, value: 4.5 }
  },
  {
    id: 10,
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800",
      "https://images.unsplash.com/photo-1600210491305-7396172b581a?w=800",
      "https://images.unsplash.com/photo-1600585153917-49166a115853?w=800",
      "https://images.unsplash.com/photo-1600573472573-dbb3e7aee63e?w=800"
    ],
    type: "Entire apartment",
    location: "Chicago",
    bedrooms: 2, bathrooms: 2, guests: 4,
    amenities: ["Wifi", "Kitchen", "Gym", "Doorman", "Air conditioning", "Washer"],
    rating: 4.5, reviews: 167, price: 210,
    title: "Luxury Condo in Downtown Chicago",
    host: "Jennifer",
    hostImage: "https://randomuser.me/api/portraits/women/79.jpg",
    hostJoined: "July 2019", superhost: true,
    weeklyDiscount: 22, cleaningFee: 45, serviceFee: 35, occupancyTaxes: 22,
    description: "Stylish downtown condo in a luxury high-rise with stunning views of the Chicago River and Lake Michigan. Full-service building with doorman, gym, and rooftop deck.",
    houseRules: ["No smoking", "No pets", "No parties", "Check-in after 3:00 PM"],
    cancellationPolicy: "Free cancellation for 48 hours. After that, 50% refund minus service fee.",
    specificRatings: { cleanliness: 4.6, communication: 4.5, checkin: 4.7, accuracy: 4.4, location: 4.8, value: 4.3 }
  }
];

/** Get all unique locations from listings */
export const getLocations = () => {
  return [...new Set(listings.map(l => l.location))];
};

/** Get listings filtered by location */
export const getListingsByLocation = (location) => {
  if (!location || location === "All") return listings;
  return listings.filter(l => l.location === location);
};

/** Get a single listing by ID */
export const getListingById = (id) => {
  return listings.find(l => l.id === parseInt(id));
};

export default listings;
