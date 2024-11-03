import { useState } from 'react';
import axios from 'axios';

export default function PopoutFormHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    details: '',
    bedroom: '',
    bathroom: '',
    area_square: '',
    garage: '',
    description: '',
    built_year: '',
    location: '',
    image: null as File | null,
    second_image: null as File | null,
    third_image: null as File | null,
    fourth_image: null as File | null,
  })

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState, 
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    try {
      let endpoint = 'http://127.0.0.1:8000/api/house'; // default endpoint

      // Convert details to lowercase for case-insensitive comparison
      const details = formData.details.toLowerCase();

      // Determine the endpoint based on the details content
      if (details.includes('villa')) {
        endpoint = 'http://127.0.0.1:8000/api/villa';
      } else if (details.includes('studio')) {
        endpoint = 'http://127.0.0.1:8000/api/studio';
      } else if (details.includes('G+')) {
        endpoint = 'http://127.0.0.1:8000/api/groundplus';
      } else if (details.includes('buildings')) {
        endpoint = 'http://127.0.0.1:8000/api/buildings';
      } else if (details.includes('appartment')) {
        endpoint = 'http://127.0.0.1:8000/api/appartment';
      } else if (details.includes('condominum')) {
        endpoint = 'http://127.0.0.1:8000/api/condominum';
      } 
      // Add more conditions as needed

      const response = await axios.post(endpoint, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(`Successfully posted to ${endpoint}`);
      console.log(response.data);
      closeForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 py-3'>
        <div>
          <button
            className="bg-green-500 text-white py-2 px-14 rounded"
            onClick={openForm}
          >
            Rent House
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="-mx-48 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <form className="" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4">Rent Your House</h2>

              <div className="mb-4">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
                <input
                  type="text"
                  id="details"
                  name="details"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="House details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bedroom" className="block text-sm font-medium text-gray-700">Bedroom</label>
                <input
                  type="number"
                  id="bedroom"
                  name="bedroom"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Number of bedrooms"
                  value={formData.bedroom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bathroom" className="block text-sm font-medium text-gray-700">Bathroom</label>
                <input
                  type="number"
                  id="bathroom"
                  name="bathroom"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Number of bathrooms"
                  value={formData.bathroom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="area_square" className="block text-sm font-medium text-gray-700">Area Square</label>
                <input
                  type="number"
                  id="area_square"
                  name="area_square"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Area in square meters"
                  value={formData.area_square}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="garage" className="block text-sm font-medium text-gray-700">Garage</label>
                <input
                  type="number"
                  id="garage"
                  name="garage"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Number of garage spaces"
                  value={formData.garage}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Describe the house"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  maxLength={300}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="built_year" className="block text-sm font-medium text-gray-700">Built Year</label>
                <input
                  type="date"
                  id="built_year"
                  name="built_year"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.built_year}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Location of the house"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              {['image', 'second_image', 'third_image', 'fourth_image'].map((imageName) => (
                <div key={imageName} className="mb-4">
                  <label htmlFor={imageName} className="block text-sm font-medium text-gray-700">{imageName.replace('_', ' ').charAt(0).toUpperCase() + imageName.slice(1).replace('_', ' ')}</label>
                  <input
                    type="file"
                    id={imageName}
                    name={imageName}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                </div>
              ))}

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
