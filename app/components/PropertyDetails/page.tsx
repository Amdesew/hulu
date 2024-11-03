"use client"

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import BedIcon from "@/app/assets/bedicon.png";
import BathIcon from "@/app/assets/bath.png";
import AreaSquare from "@/app/assets/area_square.png";
import Parking from "@/app/assets/parking.png";

interface PropertyDetailsProps {
    id: number;
    image: string;
    details: string;
    location: string;
    description: string;
    bedroom: number;
    bathroom: number;
    area_square: number;
    garage: number;
    posted_time: number;
    time_since_upload: string;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ id }) => {
    const [property, setProperty] = useState<PropertyDetailsProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/RentHouse/${id}`);
                setProperty(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg">
            <img className="w-full h-48 object-cover" src={property.image} alt="Villa Image" />
            <div className="px-6 py-2">
                <div className="font-semibold mb-2">{property.details}</div>
                <p className="text-gray-700 text-base">{property.location}</p>
            </div>
            <div className='grid grid-cols-4 px-2'>
                <div className="grid grid-cols-2 -space-x-10">
                    <Image src={BedIcon} className='h-10 w-8' alt="bed icon" />
                    <p className="text-gray-700 text-xl">{property.bedroom}</p>
                </div>
                <div className="grid grid-cols-2 -space-x-10">
                    <Image src={BathIcon} className='h-6 w-6' alt="bed icon" />
                    <p className="text-gray-700 text-xl">{property.bathroom}</p>
                </div>
                <div className="grid grid-cols-2 -space-x-2">
                    <Image src={AreaSquare} className='h-8 w-10' alt="bed icon" />
                    <p className="text-gray-700 text-xl">{property.area_square}</p>
                </div>
                <div className="grid grid-cols-2 -space-x-10">
                    <Image src={Parking} className='h-7 w-6' alt="bed icon" />
                    <p className="text-gray-700 text-xl">{property.garage}</p>
                </div>
            </div>
            <div className="px-6 pb-2">
                <p className="text-gray-700 text-base py-2">{property.description}</p>
                <p>{property.time_since_upload} ago</p>
            </div>
        </div>
    );
};

export default PropertyDetails;
