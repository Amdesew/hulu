'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import MorePages from '@/app/components/HouseTypes/page';
import RentStudio from "@/app/components/RentStudio/page"

const RentStudioPage = () => {
    return (
        <div>
            <MorePages/>

            <div className='px-5'>
                <h2 className='text-xl font-semibold'>One Room For Rent</h2>
            </div>
            
            <div className=' px-5 py-5'>
                <RentStudio/>
            </div>
        </div>
    );
};

export default RentStudioPage;
