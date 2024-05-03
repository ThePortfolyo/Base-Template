import React from 'react';
import web from '../assets/web.png';
import mobile from '../assets/mobile1.jpg';
function Services(user) {
    const service = user.user?.services;
    return (
        <div>
            <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                <h1 className=" text-2xl font-medium font-mono">Services</h1>
                <div className="md:grid-cols-2 grid grid-cols-1 gap-10 place-items-center pt-10 ">
                    <div className="rounded-md ring-1 ring-zinc-600 p-3 space-y-2  hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-105  duration-300">
                        <div className="flex-col  items-center ">
                            <img src={web} className=" rounded-sm h-52" />
                        </div>
                        <div>
                            <span className="text-lg"> Role :</span> <span className="text-zinc-300 text-sm">Frontend Developer</span>
                        </div>
                        <div>
                            <span className="text-lg"> Description :</span> <span className="text-zinc-300 text-sm">Web Developer</span>
                        </div>
                    </div>
                    <div className="rounded-md ring-1 ring-zinc-600 p-3 space-y-2   hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-105  duration-300">
                        <div className="flex-col  items-center ">
                            <img src={mobile} className=" rounded-sm h-52" />
                        </div>
                        <div>
                            <span className="text-lg"> Role :</span> <span className="text-zinc-300 text-sm">Mobile App Developer</span>
                        </div>
                        <div>
                            <span className="text-lg"> Description :</span> <span className="text-zinc-300 text-sm">App Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-24 px-4">
                <p className="hover:bg-red-400 ring-1 ring-zinc-400 "></p>
            </div>
        </div>
    );
}

export default Services;
