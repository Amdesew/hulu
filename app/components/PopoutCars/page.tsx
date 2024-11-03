"use client"

import { useState } from 'react';
import  Image  from 'next/image';
import UploadIcon from "@/app/assets/upload_icon.png"

export default function PopoutForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    
    <div>
      <div className='grid grid-cols-1 py-3'>
        <div>
          <button
            className="bg-green-500 text-white py-2 px-14 rounded"
            onClick={openForm}
          >
            Cars
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <form action="/submit_form" className="space-y-4">
              <h2 className="text-2xl font-bold">You Are Selling Cars</h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Car Name & Model:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Describe The Car Here:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Seats, Color, Type, ....Everything"
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Of The Car:</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price You Wanted To Sell Your Car"
                  required
                />
              </div>

              <div>
                
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Images</label>

                <div className='py-0'>
                  <input
                    type="file"
                    id="Price"
                    name="Price"
                    className="hidden"
                    placeholder="Price Of The House"
                    required
                  />
                  <label className="cursor-pointer" htmlFor='Price'> 
                      <div className='bg-gray-50'>
                        <Image src={UploadIcon} alt="upload_icon" className='h-10 w-10 mx-auto'/>  
                      </div>
                  </label>
                </div>
                
                <div className='py-2'>
                  <input
                    type="file"
                    id="Price"
                    name="Price"
                    className="hidden"
                    placeholder="Price Of The House"
                    required
                  />
                  <label className="cursor-pointer" htmlFor='Price'> 
                      <div className='bg-gray-50'>
                        <Image src={UploadIcon} alt="upload_icon" className='h-10 w-10 mx-auto'/>
                      </div>
                  </label>
                </div>

                <div className='py-0'>
                  <input
                    type="file"
                    id="Price"
                    name="Price"
                    className="hidden"
                    placeholder="Price Of The House"
                    required
                  />
                  <label className="cursor-pointer" htmlFor='Price'> 
                      <div className='bg-gray-50'>
                        <Image src={UploadIcon} alt="upload_icon" className='h-10 w-10 mx-auto'/>  
                      </div>
                  </label>
                </div>

                <div className='py-2'>
                  <input
                    type="file"
                    id="Price"
                    name="Price"
                    className="hidden"
                    placeholder="Price Of The House"
                    required
                  />
                  <label className="cursor-pointer" htmlFor='Price'> 
                      <div className='bg-gray-50'>
                        <Image src={UploadIcon} alt="upload_icon" className='h-10 w-10 mx-auto'/>  
                      </div>
                  </label>
                </div>
                
                
              </div>

              <div className="flex justify-between">
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Submit</button>
                <button type="button" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={closeForm}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
