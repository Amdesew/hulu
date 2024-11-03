"use client";

import PopoutForm from '@/app/components/PopoutCars/page';
import PopoutFormHome from '@/app/components/PopoutHome/page';;

export default function SellYours(){

    return(
        <div className="text-center mx-auto max-w-lg">
            <h1 className="text-xl font-semibold">What Do You Like To Sell</h1>
            
            <div className='grid grid-cols-2'>
                <div>
                    <PopoutForm/>
                    <br/><br/><br/>
                </div>
                
                <div>
                    <PopoutFormHome/>
                </div>
            </div>

            <div className='py-28'>
                <h1 className='text-xl font-semibold text-white bg-red-500 py-2 rounded-md'>HighLight About The Sells</h1>
                <p>Be Legal</p>
                <p>Be Authenticated</p>
                <p>Our Team Will Review Your Sells</p>
                <p>Ran In To Problems Contact Our Team</p>
            </div>
            
        </div>

    )
}