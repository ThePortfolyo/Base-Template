import React from 'react';

import { SlLocationPin } from 'react-icons/sl';

function Timeline(user) {
    const timelineData = user.user?.timeline;

    const DateMethod = (userData) => {
        let d = userData.userData;
        const dateTime = new Date(d);
        const newDate = dateTime.toLocaleDateString();
        return newDate;
    };
    return (
        <div>
            <div className="md:px-24 pl-3 md:py-16 py-4 px-4 ">
                <h1 className=" text-xl font-medium font-mono">Timelines</h1>
                <div className="   grid grid-cols-1 gap-9 mt-4 border-l border-white">
                    {timelineData
                        ? timelineData.map((ele) => {
                              return (
                                  <div className="pl-5 ">
                                      <div className=" space-x-2">
                                          <div className=" flex space-x-2">
                                              <h1 className="md:text-xl text-base font-mono ">{ele.jobTitle}</h1>
                                              <h1 className="text-sm font-mono bg-blue-900 px-4 py-1 text-zinc-300 rounded-md w-fit">
                                                  {ele.company_name}
                                              </h1>
                                          </div>
                                      </div>
                                      <div className="flex items-center space-x-3 text-zinc-400">
                                          <SlLocationPin className="text-yellow-600" />
                                          <h1 className="">City: {ele.jobLocation}</h1>
                                      </div>
                                      <div className="text-zinc-400">
                                          <DateMethod userData={ele.startDate} />
                                          &nbsp; - &nbsp;
                                          <DateMethod userData={ele.endDate} />
                                      </div>
                                      <p className="text-zinc-400">{ele.summary}</p>
                                      <h1 className="md:text-xl text-base font-mono text-zinc-400  ">{ele.review}</h1>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
            <div className="md:px-24 px-4">
                <p className="ring-1 ring-zinc-400 "></p>
            </div>
        </div>
    );
}

export default Timeline;
