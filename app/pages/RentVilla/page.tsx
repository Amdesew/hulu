'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import MorePages from '@/app/components/HouseTypes/page';
import RentVilla from "@/app/components/RentVilla/page";

const HomePage = () => {
    return (
        <div>
            <MorePages/>

            <div className='px-5'>
                <h2 className='text-xl font-semibold'>Villa Houses For Rent</h2>
            </div>
            
            <div className=' px-5 py-5'>
                <RentVilla/>
            </div>
        </div>
    );
};

export default HomePage;
