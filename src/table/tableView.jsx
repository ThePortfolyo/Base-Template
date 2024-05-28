import React, { useEffect, useState } from 'react';
import './table.css';
import axios from 'axios';
export const TableView = ({ data }) => {
    return (
        <div className="mt-4 text-sm">
            <h1 className="text-3xl font-serif font-medium my-4">Basic Backtest</h1>
            <table className="bg-white shadow-md">
                <tr className="md:text-base text-sm  text-zinc-800 h-12 bg-zinc-300">
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Calmar Ratio</th>
                    <th>Overall Profit</th>
                    <th>Avg. Daily Profit</th>
                    <th> Price (Rs)</th>
                    <th> Win %(Day)</th>
                    <th> Action</th>
                </tr>
                {data?.results.map((ele, index) => {
                    return (
                        <>
                            <tr className=" h-10 hover:bg-zinc-200 hover:cursor-pointer">
                                <td>{index}</td>
                                <td>{ele.name}</td>
                                <td>{ele.ascii_name}</td>
                                <td>{ele.cou_name_en}</td>
                                <td>{ele.geoname_id}</td>
                                <td>{ele.label_en}</td>
                                <td>{ele.population}</td>
                                <td>{ele.dem}</td>
                            </tr>
                        </>
                    );
                })}
            </table>
        </div>
    );
};
