"use client";

import { useSession,signIn, signOut, SessionProvider } from "next-auth/react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import myimage from "@/app/assets/hulu_be_ejewo_icon.png";
import userIcon from "@/app/assets/user_icon.png";
import saveIcon from "@/app/assets/save_icon.png";
import chatIcon from "@/app/assets/chat.png";
import mapIcon from "@/app/assets/location.png";
import notificationIcon from "@/app/assets/notify_icon.png"; 
import React, { useState } from "react";
import MyApp from "./pages/_app";
import NavBar from "./components/NavBar/page";
import 'leaflet/dist/leaflet.css';
import 'swiper/css';
import 'swiper/css/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <SessionProvider>
          <NavBar/>
          </SessionProvider>

          <main className="flex-grow py-10">{children}</main>

          <footer className="py-4 bg-green-500 text-black relative inset-x-0 bottom-0">
            <div className="grid grid-cols-4 text-white text-center shadow-md pb-4">
              <div className="grid grid-cols-1">
                <h3 className="font-semibold py-3">Services</h3>
                <a href="#">Renting Houses</a>
                <a href="#">Buying House</a>
                <a href="#">Renting Cars</a>
                <a href="#">Buying Cars</a>
                <a href="#">Renting Shops</a>
              </div>
              <div className="grid grid-cols-1">
                <h3 className="font-semibold py-3">Be A Host</h3>
                <p>Rent Your House</p>
                <p>Sell Your House</p>
                <p>Rent Your Cars</p>
                <p>Sell Your Cars</p>
                <p>Rent Your Shop</p>
              </div>
              <div className="grid grid-cols-1">
                <h3 className="font-semibold py-3">Support</h3>
                <a href="#" className="-m-14">Hulu@gmail.com</a>
              </div>
              <div className="grid grid-cols-1">
                <h3 className="font-semibold py-3">About Us</h3>
                <p>About Hulu Gebeya</p>
                <p>Terms & Privacy</p>
                <p>Privacy Policy</p>
                <p>Billing Policy</p>
              </div>
            </div>
            <div className="container mx-auto px-4 text-center py-3 text-white">
              <p>©️ Hulu Gebeya (2024)</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;