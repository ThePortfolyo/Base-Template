import React from 'react';
import FilterPage from './filterPage';

const SearchPage = ({ data }) => {
    return (
        <div className="rounded-sm  flex space-x-5">
            <div className="  w-1/3 border border-zinc-400 py-3">
                <div className="border-b border-zinc-400 my-2 px-3 ">
                    <input type="text" placeholder="search..." className="outline-none  mb-2" />
                </div>
                <div className="overflow-y-auto h-80 px-2">
                    {data?.results.map((ele) => {
                        return (
                            <>
                                <div className="my-2 border border-zinc-400 py-2 rounded-sm cursor-pointer  space-y-1 pl-3">
                                    <p>{ele.name}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            {/* <FilterPage /> */}
        </div>
    );
};

export default SearchPage;
