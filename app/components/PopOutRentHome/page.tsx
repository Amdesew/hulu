'use client'

import { useState } from 'react';

export default function PopoutFormHome() {
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
            House
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="-mx-48  bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <form action="/submit_form" className="">
              <h2 className="text-2xl font-bold">Rent Your House</h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="L Shape, G+1, Villa, Appartment"
                  required
                />
              </div>

              <div>
                <label htmlFor="Location" className="block text-sm font-medium text-gray-700">Bedroom</label>
                <input
                  type="Location"
                  id="Location"
                  name="Location"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Location Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Bathroom</label>
                <input
                  type="Price"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Area Square</label>
                <input
                  type="Price"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Garage</label>
                <input
                  type="Price"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="Price"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Built Year</label>
                <input
                  type="Price"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="Price"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
              </div>

              <div>
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Images</label>
                <input
                  type="file"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
                <input
                  type="file"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
                <input
                  type="file"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
                <input
                  type="file"
                  id="Price"
                  name="Price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Price Of The House"
                  required
                />
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
