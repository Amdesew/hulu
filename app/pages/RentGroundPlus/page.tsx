'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import MorePages from '@/app/components/HouseTypes/page';
import RentGroundPlus from '@/app/components/RentGroundPlus/page';

const RentStudioPage = () => {
    return (
        <div>
            <MorePages/>

            <div className='px-5'>
                <h2 className='text-xl font-semibold'>G+ Available For Rent</h2>
            </div>
            
            <div className=' px-5 py-5'>
                <RentGroundPlus/>
            </div>
        </div>
    );
};

export default RentStudioPage;
