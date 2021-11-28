import * as React from 'react';



export function ProductSort({ currentSort, onChange, onClick }) {

    const handleToggledChange = () => {
        onClick();
    }

    const handleSortChange = (e) => {
        if (onChange) onChange(e.target.value);
    }
    return (
        <div className="relative flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-semibold tracking-tight text-my-color">Search result for: <span className="font-bold"> Helloooooo</span></h1>
            <div className="flex items-center">
                <div className="relative inline-block text-left">
                    <div>
                        <select className="py-1" role="none" value={currentSort} onChange={handleSortChange}>
                            <option disabled>Sort By</option>
                            <option value="latest">Lates Product</option>
                            <option value="bestSeller">Best Seller</option>
                            <option value="asc">Low Price</option>
                            <option value="desc">High Price</option>
                        </select>
                    </div>
                </div>
                <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden" onClick={handleToggledChange}>
                    <span className="sr-only text-my-color">Filters</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}