import React from "react";
import PropertyCard from "./components/PropertyCard";

const App = () => {
  const sampleData = {
    title: "3 BHK Apartment",
    location: "Gachibowli, Hyderabad",
    price: 7500000,
    area: 1350,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Parking", "Pool", "Gym"],
    isAvailable: true,
    isVerified: true,
    imageUrl: 'src/assets/r1.jpg',
    // imageUrl not provided → default will be used
  };

  return (
    <div>
      <PropertyCard {...sampleData}>
        <button style={{ marginTop: "10px" }}>Schedule Visit</button>
      </PropertyCard>
    </div>
  );
};

export default App;
