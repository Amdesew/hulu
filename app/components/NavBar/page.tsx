"use client";

import Image from "next/image";
import Link from "next/link";
import myimage from "@/app/assets/hulu_be_ejewo_icon.png";
import userIcon from "@/app/assets/user_icon.png";
import saveIcon from "@/app/assets/save_icon.png";
import chatIcon from "@/app/assets/chat.png";
import mapIcon from "@/app/assets/location.png";
import notificationIcon from "@/app/assets/notify_icon.png"; 
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { logout } from "../utils/logout/api";


export default function NavBar(){
    const session = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
      };
    
      const toggleNotificationDropdown = () => {
        setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
      };

      
    return(
        <nav className="bg-green-500 p-4 shadow-md relative">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src={myimage}
                  alt="Logo"
                  className="inline h-16 w-16 rounded-full"
                />
                <Link href="/" className="text-white font-bold text-xl ml-2">
                  Hulu Gebeya
                </Link>
              </div>
              <div className="hidden md:flex gap-5 items-center">
                <Link href="/pages/SavedItems" className="text-black hover:text-white">
                  <Image src={saveIcon} height={70} width={60} alt="saveIcon" title="Saved"/>
                </Link>
                <Link href="/pages/Messages" className="text-black hover:text-white" title="Messages">
                  <Image src={chatIcon} height={45} width={40} alt="chatIcon"/>
                </Link>
                <Link href="/pages/Location" className="text-black hover:text-white" title="NearBy Service">
                  <Image src={mapIcon} height={30} width={30} alt="mapIcon"/>
                </Link>
                <Link href="/pages/Agent" className="text-white hover:bg-green-500 p-1 font-semibold rounded-sm" title="Rent Or Sell Your Stuff">
                  Be Agent
                </Link>

                {/* Notification Icon */}
                <div className="relative">
                  <button onClick={toggleNotificationDropdown}>
                    <Image
                      src={notificationIcon}
                      alt="Notification Icon"
                      className="inline h-8 w-8 rounded-full"
                      title="Notifications"
                    />
                  </button>
                  {isNotificationDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <Link href="/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        View All Notifications
                      </Link>
                    </div>
                  )}
                </div>

                {/* User Profile Icon */}
                <div className="relative">
                  <button onClick={toggleUserDropdown}>
                    <Image
                      src={userIcon}
                      alt="User Icon"
                      className="inline h-8 w-8 rounded-full"
                      title="User Profile"
                    />
                  </button>
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      {session ? (
                        <>
                          <Link href="/pages/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                          </Link>
                          <Link href="/pages/Auth/Dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            DashBoard
                          </Link>
                          <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                          </Link>
                          <button onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Signout
                          </button>
                        </>
                      ):(
                        <>
                          {/* User is not logged in, show login/signup */}
                          <button onClick={() => signIn()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Login
                          </button>
                          <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Sign Up
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white mobile-menu-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
                <button onClick={toggleNotificationDropdown} className="px-3">
                  <Image
                    src={notificationIcon}
                    alt="notification Icon"
                    className="inline h-8 w-8 rounded-full"
                    title="Notifications"
                  />
                </button>
                {isNotificationDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <Link href="/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        View All Notifications
                      </Link>
                    </div>
                  )}

                {/* User Profile Icon for Mobile */}
                <button onClick={toggleUserDropdown}>
                  <Image
                    src={userIcon}
                    alt="User Icon"
                    className="inline h-8 w-8 rounded-full"
                    title="User Profile"
                  />
                </button>
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    {  session ? (
                        <>
                        <Link href="/pages/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                        </Link>
                        <Link href="/pages/Auth/Dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            DashBoard
                        </Link>
                        <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                        </Link>
                        <button onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Signout
                        </button>
                        </>
                        ):(
                          <>
                            {/* User is not logged in, show login/signup */}
                            <button onClick={() => signIn()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Login
                            </button>
                            <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Sign Up
                            </Link>
                          </>
                        )}
                  </div>
                )}
              </div>
            </div>
            {/* Mobile Menu */}
            <div className={`absolute -bottom-10 left-0 w-full bg-green-500 ${isMenuOpen ? "" : "hidden"} md:hidden`}>
              <div className="grid grid-cols-5 items-center py-2 space-x-2">
                <Link href="/pages/SavedItems" className="text-sm text-white">
                  <Image src={saveIcon} height={50} width={45} alt="saveIcon" title="Saved"/>
                </Link>
                <Link href="/pages/Messages" className="block text-sm text-white">
                  <Image src={chatIcon} height={40} width={35} alt="chatIcon"/>
                </Link>
                <Link href="/pages/Location" className="block text-sm text-white">
                  <Image src={mapIcon} height={15} width={25} alt="mapIcon"/>
                </Link>
                <Link href="/pages/Agent" className="block text-sm text-white">
                  Be Agent
                </Link>
                <Link href="/pages/Promote" className="block text-sm text-white">
                  Promote
                </Link>
              </div>
            </div>
          </nav>
    )
}