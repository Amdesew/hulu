"use client";

import Image from "next/image";
import icon from "@/app/assets/hulu_be_ejewo_icon.png";
import Card from "./components/RentHouseCards/page";
import SellHouseCard from "./components/SellHouseCard/page";
import CarCards from "./components/CarCards/page";
import AdsCard from "@/app/components/AdsCards/page";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import SwiperComponent from "./components/SwiperConfig/page";
import { SessionProvider, useSession } from "next-auth/react";
import { useState,useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import Search from "./components/SearchEngine/page";
import HouseSwiper from "./components/SwiperConfig/page";
import TelegramFeed from "./components/TelegramPosts/page";

export default function Home(){
    const SellLink = () => {
        window.open('pages/SellYours');
    }

    const RentLink = () => {
        window.open('/pages/RentYours');
    }

    const PromoteLink = () => {
        window.open('/pages/Promote');
    } 
    
    const RentalService = () => {
        window.open('/pages/MorePages');
    }

    const SellingService = () => {
        window.open('/pages/MorePagesForSell');
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for critical resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

    return(

        <div className="">
            <title>Hulu Gebeya</title>
            <div className="mx-auto max-w-lg">
                <div className="text-center">
                    <Image src={icon} height="100" width="100" alt="Icon" className="mx-auto"/>
                    <h3 className="text-2xl font-semibold">Hulu Gebeya</h3>
                    <p className="font-mono">(Hulu Be Ejewo / All In Your Hand)</p>

                    <div className="py-4">
                        <Search/>
                    </div>
                </div>
            

            
                <div className="grid grid-cols-3 space-x-3 py-3">
                    <div>
                        <button className=" bg-green-500 border-x-2 py-3 w-full text-white hover:bg-gray-300  rounded-full" onClick={RentalService}>Rental Service</button>
                    </div>
                    <div>
                        <button className="bg-green-500 border-x-2 py-3 w-full text-white hover:bg-gray-300  rounded-full" onClick={SellingService}>For Sell</button>
                    </div>
                    <div>
                        <button className=" bg-green-500 border-x-2 py-3 w-full text-white hover:bg-gray-300  rounded-full">Enterprise</button>
                    </div>
                </div>
            </div>

            
            <div className="md:px-10 px-4">
                <div className="font-semibold text-xl py-5">
                    Rent Available House
                    <div>
                        <a className="font-mono px-6 underline text-purple-600" href="/pages/MorePages">More Houses</a>
                    </div>
                </div>
                
                <div className="px-10">
                    <HouseSwiper />
                </div>
                
                <div className="md:px-10 px-4">
                    <div className="font-semibold text-xl py-5">
                        People Also Viewed These Houses From Social Medias
                    </div>

                        <div>
                            <TelegramFeed/>
                        </div>
                                        
                </div>

                <div className="font-semibold text-xl py-10">
                    Sell Availabe House
                </div>

                    <div className="px-10">
                      <SellHouseCard/>
                    </div>

                <div className="font-semibold text-xl py-10">
                    Rent Availabe Cars
                </div>

                    <div>
                      
                    </div>

                <div className="font-semibold text-xl py-10">
                    Sell Availabe Cars
                </div>

                <div>
                        
                </div>

                <div className="font-semibold text-xl py-10">
                    Rent Availabe Shops
                </div>

                <div className="grid grid-cols-1 text-center">
                    Coming Soon..
                </div>

                <div className="grid grid-cols-3 py-10 space-x-3">
                    <div>
                        <button className="bg-green-500 w-full rounded-full py-3" onClick={SellLink}>Sell Yours</button>
                    </div>
                    <div>
                        <button className="bg-green-500 w-full rounded-full py-3 " onClick={RentLink}>Rent Yours</button>
                    </div>
                    <div>
                        <button className="bg-green-500 w-full rounded-full py-3 " onClick={PromoteLink}>Promote Yours</button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

function fetchUserDetails(token: string) {
    throw new Error("Function not implemented.");
}
