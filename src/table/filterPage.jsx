import React from 'react';

const FilterPage = ({ data }) => {
    const className = 'w-48 py-1 text-base outline-none ring-1 ring-zinc-400 hover:ring-indigo-500 rounded-sm pl-1 mt-1 cursor-pointer';
    return (
        <div className=" py-3 ">
            <h1 className="text-xl  font-serif">Filter</h1>
            <div className="p-5 rounded-md  border border-zinc-400">
                <div className="flex space-x-4 mb-4 mt-2">
                    <h1 className={className}>Equity</h1>
                    <h1 className={className}>Nifty 50</h1>
                </div>
                <h1 className="w-full my-2 py-1 text-base outline-none ring-1 ring-zinc-400 hover:ring-indigo-500 rounded-sm pl-1 mt-1 cursor-pointer">
                    X
                </h1>
                <div className="grid grid-cols-2 mt-5 mb-1 gap-4">
                    <h1>Start Time</h1>
                    <h1>End Time</h1>
                    <h1 className={className}>09:30</h1>
                    <h1 className={className}>15:00</h1>
                </div>
                <div className="flex  items-center justify-between space-x-4 mb-4 mt-2">
                    <h1>which satisfy</h1>
                    <div className="flex space-x-7">
                        <input type="radio" />
                        <input type="radio" />
                    </div>
                    <div className="w-20"></div>
                </div>
                <div className="flex  items-center justify-between space-x-4 mb-4 mt-2">
                    <div className="flex space-x-3">
                        <input type="checkbox" />
                        <h1>Duplicate results</h1>
                    </div>
                    <h1 className={className}>Timeframe</h1>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;
