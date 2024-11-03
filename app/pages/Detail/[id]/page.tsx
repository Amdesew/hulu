'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const RentHouseDetailPage = ({ params }) => {
  const id = params.id; // Get ID from params
  const [house, setHouse] = useState<any>(null);

  useEffect(() => {
    if (id) {
      console.log("Fetching house with ID:", id);
      fetch(`http://127.0.0.1:8000/RentHouse/${id}/`)
        .then((response) => response.json())
        .then((data) => setHouse(data))
        .catch((error) => console.error('Error fetching house details:', error));
    }
  }, [id]);

  if (!house) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{house.details}</h1>



      <div className='grid grid-cols-1 md:grid-cols-2   gap-4'> 
        <img src={house.image} alt="House image" className="w-full h-full" />
        <img src={house.second_image} alt="House image" className="w-full h-full" />
        <img src={house.third_image} alt="House image" className="w-full h-full" />
        <img src={house.fourth_image} alt="House image" className="w-full h-full" />
      </div>  
      
      <div className='grid md:grid-cols-2 grid-cols-1 font-semibold text-center'>
        <p className='py-3'>Location: {house.location}</p>
        <p className='py-3'>Details: {house.description}</p>
      </div>

      <p className='text-center font-semibold text-xl py-3 bg-green-500'>House Details</p>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-3 mx-auto max-w-lg font-semibold">
        <p>Bedrooms: {house.bedroom}</p>
        <p>Bathrooms: {house.bathroom}</p>
        <p>Area: {house.area_square} sq ft</p>
        <p>Garage: {house.garage}</p>
      </div>

      <div className='mx-auto max-w-lg py-5'>
        <a href="www.google.com" target='_blank'>
          <button className='py-3 w-full border-2 border-green-500 rounded-xl'>Contact</button>
        </a>
      </div>
      
    </div>
  );
};

export default RentHouseDetailPage;
