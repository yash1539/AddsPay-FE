import React, { useState } from 'react';

function SearchBar() {
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false); // Close the dropdown when a category is selected
    };

    return (
        <div>
            <form>
                <div className="flex ml-20">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ml-36">
                        Your Email
                    </label>
                    <div className="relative">
                        <button
                            id="dropdown-button"
                            onClick={toggleDropdown}
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                            type="button"
                        >
                            {selectedCategory}{' '}
                            <svg
                                className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div
                            id="dropdown"
                            className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} absolute mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleCategoryClick('All categories')}
                                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                                            selectedCategory === 'All categories' ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : ''
                                        }`}
                                    >
                                        All categories
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleCategoryClick('Hotel')}
                                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                                            selectedCategory === 'Hotel' ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : ''
                                        }`}
                                    >
                                        Hotel
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleCategoryClick('Templates')}
                                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                                            selectedCategory === 'Templates' ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : ''
                                        }`}
                                    >
                                        Templates
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleCategoryClick('Design')}
                                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                                            selectedCategory === 'Design' ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : ''
                                        }`}
                                    >
                                        Design
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleCategoryClick('Logos')}
                                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                                            selectedCategory === 'Logos' ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : ''
                                        }`}
                                    >
                                        Logos
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative w-full mr-20">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos, Design Templates..."
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
