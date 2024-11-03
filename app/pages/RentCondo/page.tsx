'use client'

import RentCondo from "@/app/components/RentCondo/page";
import MorePages from '@/app/components/HouseTypes/page';

export default function RentCondoPage(){
    return(
        <div>
            
            <div>
                <MorePages/>
            </div>
            
            <div>
                <h1 className="text-xl font-semibold px-7">Condominums For Rent</h1>
            </div>

            <div>
                <RentCondo/>
            </div>
        </div>
    )
}