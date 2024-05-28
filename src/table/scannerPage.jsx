import React from 'react';
import SearchPage from './searchPage';

export const ScannerPage = ({ data }) => {
    const className = 'w-72 py-1 text-base outline-none ring-1 ring-zinc-400 focus:ring-indigo-500 rounded-sm pl-1 mt-1';

    return (
        <div className="border border-zinc-400  py-4 rounded-sm shadow-md px-1">
            <h1 className="text-2xl font-serif ">Scanner Page</h1>
            <div className="my-2">
                <div className="flex space-x-4">
                    <div>
                        <p className="text-lg">Name</p>
                        <input type="text" placeholder="Name" className={className} />
                    </div>
                    <div>
                        <p className="text-lg">Description</p>
                        <textarea type="text" placeholder="Description" rows={1} className={className} />
                    </div>
                </div>
            </div>
            <SearchPage data={data} />
        </div>
    );
};
