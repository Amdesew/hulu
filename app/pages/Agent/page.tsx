"use client";

import Image from "next/image";
import { useState } from "react";
import UserIcon from "@/app/assets/UserIcon.png";

export default function Agent() {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const Rent = () => {
    window.open("/pages/RentYours");
  };

  const Sell = () => {
    window.open("/pages/SellYours");
  };

  return (
    <div>
      <title>Agent</title>

      <div className="">
        <form className="flex flex-col items-center">
          <input
            type="file"
            id="profile_pic"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="profile_pic" className="py-5 px-5 rounded-full border-2 cursor-pointer">
            <Image
              src={profilePic ? profilePic : UserIcon}
              alt="profileicon"
              className="h-14 w-14 rounded-full"
              width={56}
              height={56}
            />
          </label>
          <p>Add A Profile Picture</p>

          <div className="py-5">
            <p>Username</p>
            <input className="border-2 h-10 w-full" placeholder="Add a username" />
          </div>

          <div className="">
            <p>Age</p>
            <input className="border-2 h-10 w-full" placeholder="15+" />
          </div>

          <div className="py-5">
            <p>Phone</p>
            <input className="border-2 h-10 w-full" placeholder="+251" />
          </div>

          <div className="py-1">
            <p>Working Hour</p>
            <select className="w-48 h-10 border-2">
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
          </div>

          <div className="py-5">
            <button className="bg-green-500 text-white py-2 px-14 rounded-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
