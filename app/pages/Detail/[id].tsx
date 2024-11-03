'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RentHouseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get ID from the route
  const [house, setHouse] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Fetch house details from the backend using the ID from the URL
      console.log("Fetching house with ID:", id);
      fetch(`http://127.0.0.1:8000/RentHouse/${id}/`)
        .then((response) => response.json())
        .then((data) => setHouse(data))
        .catch((error) => console.error('Error fetching house details:', error));
    }
  }, [id]);

  // Display a loading message while data is being fetched
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{house.details}</h1>
      <p>{house.location}</p>
      <p>{house.description}</p>
      <div className="grid grid-cols-2 gap-4">
        <p>Bedrooms: {house.bedroom}</p>
        <p>Bathrooms: {house.bathroom}</p>
        <p>Area: {house.area_square} sq ft</p>
        <p>Garage: {house.garage}</p>
      </div>
      <img src={house.image} alt="House image" className="w-full h-64 object-cover mt-4"/>
    </div>
  );
};

export default RentHouseDetailPage;
