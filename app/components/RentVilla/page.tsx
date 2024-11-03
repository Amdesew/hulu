"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import BedIcon from "@/app/assets/bedicon.png";
import BathIcon from "@/app/assets/bath.png"
import AreaSquare from "@/app/assets/area_square.png"
import Parking from "@/app/assets/parking.png"
import Link from 'next/link';


interface CardProps {
    id: number;
    image: string;
    details: string;
    location: string;
    description: string;
    bedroom: number;
    bathroom: number;
    area_square: number;
    garage: number;
    time_since_upload: string;
}

const Card: React.FC<CardProps> = ({ id, image, details, location, description, bedroom, bathroom, area_square, garage, time_since_upload }) => {
    
    
    return (
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg">
            <img className="w-full h-48 object-cover" src={image} alt="Villa Image" />
            <div className="px-6 py-2">
                <div className="font-semibold mb-2">{details}</div>
                <p className="text-gray-700 text-base">Location: {location}</p>
            </div>
            <div className='grid grid-cols-4  px-2'>
                <div className="grid grid-cols-2 -space-x-10">
                    <Image src={BedIcon} className='h-10 w-8' alt="bed icon" />
                    <p className="text-gray-700 text-xl">
                        {bedroom}
                    </p>
                </div>
                <div className="grid grid-cols-2 -space-x-10">
                    <Image src={BathIcon} className='h-6 w-6' alt="bed icon" />
                    <p className="text-gray-700 text-xl">
                        {bathroom}
                    </p>
                </div>
                <div className="grid grid-cols-2 -space-x-2">
                    <Image src={AreaSquare} className='h-8 w-10' alt="bed icon" />
                    <p className="text-gray-700 text-xl">
                        {area_square}
                    </p>
                </div>
                <div className="grid grid-cols-2 -space-x-10">
                    <Image src={Parking} className='h-7 w-6' alt="bed icon" />
                    <p className="text-gray-700 text-xl">
                        {garage}
                    </p>
                </div>
            </div>
            <div className="px-6 pb-2">
                <p className="text-gray-700 text-base py-2">{description}</p>
                <p>{time_since_upload} ago</p>
                <Link href={`/pages/Detail/${id}` }>
                    <div className="inline-block bg-green-500 rounded-full w-full py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        View Details
                    </div>
                </Link>
            </div>
        </div>
    );
};

export  const CardList: React.FC = () => {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/Villa/');
                setCards(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    details={card.details}
                    bedroom={card.bedroom}
                    bathroom={card.bathroom}
                    area_square={card.area_square}
                    garage={card.garage}
                    location={card.location}
                    description={card.description}   
                    time_since_upload={card.time_since_upload}
                />
            ))}
        </div>
    );
};

export default CardList;
