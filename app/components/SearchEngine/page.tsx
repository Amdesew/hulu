'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface VisitLink {
    id: number;
}

const Search: React.FC<VisitLink> = ({ id }) => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const [showNoResults, setShowNoResults] = useState<boolean>(false);

    // Modified to search as you type
    const handleSearch = async (searchQuery: string) => {
        if (searchQuery.trim()) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/search/?q=${searchQuery}`);
                setResults(response.data);
                setShowNoResults(response.data.length === 0);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
                setShowNoResults(true);
            }
        } else {
            setResults([]);
            setShowNoResults(false);
        }
    };

    // Debounce function to prevent too many API calls
    const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    // Create debounced search function
    const debouncedSearch = React.useCallback(
        debounce((searchQuery: string) => handleSearch(searchQuery), 300),
        []
    );

    // Update input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        debouncedSearch(newQuery);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className='mb-4'>
                <p className='text-red-600 text-center mb-4'>
                    Caution: When You Try To Search And See Details Click Visit 1
                    If It Didn't work click Visit 2
                </p>
                <div className="relative flex items-center">
                    <div className="relative flex items-center w-full">
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search: houses, Car, Agent"
                            className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 hover:border-gray-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 shadow-sm transition-all"
                        />
                        <div className="absolute left-4 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results section */}
            <div className="mt-4">
                {results.length > 0 ? (
                    <ul className='space-y-4'>
                        {results.map((result) => (
                            <li key={result.id} className='p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all'>
                                <div>
                                    <p>Details: {result.details}</p>
                                    <p>Location: {result.location}</p>
                                    <p>Price: {result.description}</p>
                                    <div className='py-3 space-x-3'>
                                        <a className='bg-green-500 px-8 py-2 text-white rounded-full hover:bg-green-600 transition-all' href={`/pages/SellHouseDetail/${result.id}`}>
                                            Visit 1
                                        </a>
                                        <a className='bg-green-500 px-8 py-2 text-white rounded-full hover:bg-green-600 transition-all' href={`/pages/Detail/${result.id}`}>
                                            Visit 2
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : showNoResults && query.trim() && (
                    <p className="text-center text-gray-500">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
