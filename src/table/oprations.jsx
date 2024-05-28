import React from 'react';

const OprationsPage = ({ data }) => {
    const className = 'w-48 py-1 text-base outline-none ring-1 ring-zinc-400 hover:ring-indigo-500 rounded-sm pl-1 mt-1 cursor-pointer';
    return (
        <div className=" py-3 w-1/3">
            <h1 className="text-xl  font-serif">Oprations</h1>
            <div className="p-5 rounded-md  border border-zinc-400">
                <div className="flex justify-between mb-4 mt-2 pr-4">
                    <h1>Math Operation</h1>
                    <h1> Stock</h1>
                </div>
                <div className="flex justify-between    ">
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">+</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">-</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">*</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">/</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">Number</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">Stock LTP</h1>
                </div>
                <h1 className="mt-4">Comparison / Cross</h1>
                <div className="flex space-x-5 my-2 ">
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">{'>'}</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">{'<'}</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">{'>='}</h1>
                    <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">{'<='}</h1>
                </div>
                <div className=" space-y-2 my-5">
                    <h1 className="w-fit py-1 px-5 text-base outline-none ring-1 ring-zinc-400 hover:ring-indigo-500 rounded-sm pl-1 mt-1 cursor-pointer">
                        Cross from above to below
                    </h1>
                    <h1 className="w-fit px-5 py-1 text-base outline-none ring-1 ring-zinc-400 hover:ring-indigo-500 rounded-sm pl-1 mt-1 cursor-pointer">
                        Cross from below to above
                    </h1>
                </div>
                <div className=" mb-4 mt-2">
                    <h1>Binary Operation</h1>
                    <div className="flex space-x-3">
                        <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">OR</h1>
                        <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">AND</h1>
                        <h1 className="py-1 px-2 border rounded-md ring-1 ring-zinc-400 hover:ring-indigo-500  pl-1 mt-1 cursor-pointer">
                            SUBSTRACT
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OprationsPage;
