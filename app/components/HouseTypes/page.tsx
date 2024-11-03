'use client'
import axios from "axios";
import React, {useState, useEffect} from "react"
import Search from "@/app/components/SearchEngine/page";

export default function MorePages(){
    
    return(
        <div className="">

            
            <h2 className="text-center font-semibold">Select A House You Want To <a className="bg-green-400 px-3 py-1 text-white rounded-full">Rent</a></h2>

            <div className="mx-auto max-w-lg">
                <Search/>
            </div>
            
            <div className="grid md:grid-cols-6 grid-cols-3 px-8 gap-y-3 md:px-28 py-6">
                
                
                <div className="">
                    <a href="/pages/RentVilla">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtjV5sKK1ZtjIFjRW8tJBobZtGLGAmt4Tyw&s" height={50} width={50}/>
                        <p className="px-2">Villa</p>
                    </a>

                    
                </div>

                <div className="">
                    <a href="/pages/RentGroundPlus">
                        <img src="https://cdn-icons-png.flaticon.com/512/4170/4170041.png" height={50} width={50} className="mx-3"/>
                        <p >Ground Plus</p>
                    </a>
                </div>

                <div>
                    <a href="/pages/RentBuilding">
                        <img src="https://icons.veryicon.com/png/o/business/flat-building/building-house-18.png" height={50} width={50} className="mx-3"/>
                        <p className="mx-3" >Buildings</p>
                    </a>
                </div>

                <div>
                    <a href="/pages/RentAppartment">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-penthouse-icon-download-in-svg-png-gif-file-formats--hotel-house-home-building-architecture-pack-buildings-icons-3146052.png" height={50} width={50} className="mx-3"/>
                        <p className="mx-0" >Appartments</p>
                    </a>
                </div>

                <div>
                    <a href="/pages/RentCondo">
                        <img src="https://cdn.icon-icons.com/icons2/3761/PNG/512/apartment_flat_home_house_building_icon_231036.png" height={50} width={50} className="mx-3"/>
                        <p className="mx-0" >Condominum</p>
                    </a>
                </div>

                <div>
                    <a href="/pages/RentStudio">
                        <img src="https://www.clipartmax.com/png/small/316-3160975_open-house-icon-clipart-computer-icons-the-design-studio-flood-protection-icon.png" height={50} width={50} className="mx-3"/>
                        <p className="mx-4" >Studio</p>
                    </a>
                </div>
            
            </div>

            

        </div>
    )
}