import React from 'react';

function Services(user) {
    const service = user.user?.services;
    return (
        <div>
            <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                <h1 className=" text-xl font-medium font-mono">Services</h1>
                <div className="md:grid-cols-3 grid grid-cols-1 gap-6 pt-4">
                    {service
                        ? service.map((ele) => {
                              return (
                                  <div className="w-96 h-52  rounded-md ring-1 ring-zinc-600 px-4 space-y-4 hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300">
                                      <div className="flex items-center pt-5">
                                          <img src={ele.image.url} className="h-8 rounded-full" />
                                          <h1 className="text-xl font-mono pl-4">{ele.name}</h1>
                                      </div>
                                      <div>
                                          <span> Description :</span> <span className="text-zinc-400 text-sm"> {ele.desc}</span>
                                      </div>
                                      <div>
                                          <span>Charge : </span>
                                          <span className="text-zinc-400 text-sm">{ele.charge}</span>
                                      </div>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
            <div className="md:px-24 px-4">
                <p className="hover:bg-red-400 ring-1 ring-zinc-400 "></p>
            </div>
        </div>
    );
}

export default Services;
