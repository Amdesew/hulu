'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import MorePages from '@/app/components/HouseTypes/page';
import RentAppartment from '@/app/components/RentAppartment/page';

const RentStudioPage = () => {
    return (
        <div>
            <MorePages/>

            <div className='px-5'>
                <h2 className='text-xl font-semibold'>Appartments Available For Rent</h2>
            </div>
            
            <div className=' px-5 py-5'>
                <RentAppartment/>
            </div>
        </div>
    );
};

export default RentStudioPage;
