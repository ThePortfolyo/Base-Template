import React from 'react';

export default function About({ user }) {
    let aboutData = user?.about;
    const Contact = user?.social_handles;
    return (
        <div className="">
            <div className="md:px-24 px-4 md:grid-cols-2 grid grid-cols-1 gap-1  pt-4  pl-3 md:py-16 py-4 ">
                <h1 className=" text-xl font-medium font-mono">About Me</h1>
                <div className="flex md:space-x-12 space-x-6 py-4 md:py-0">
                    {Contact
                        ? Contact.map((ele) => {
                              return (
                                  <div>
                                      <div className="flex flex-col items-center space-y-4 hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300">
                                          <img src={ele.image.url} className="md:h-8 h-7 w-fit" />
                                      </div>
                                      <div className="text-sm md:text-base pt-2">{ele.platform}</div>
                                  </div>
                              );
                          })
                        : null}
                </div>
                <div className=" md:w-3/4 w-full space-y-3">
                    <p className="">{aboutData.subTitle}</p>
                    <p className="text-zinc-400">{aboutData.description}</p>
                </div>
                <div className=" grid grid-cols-2   md:gap-1 gap-0.5 font-medium   md:w-3/4 w-full font-mono md:pt-10 pt-3">
                    <h1 className=" text-lg">Location : </h1>
                    <h1 className="font-medium text-zinc-400">{aboutData.address} </h1>
                    <h1 className=" text-lg">Email :</h1>
                    <h1 className="text-lg text-zinc-400">{aboutData.contactEmail} </h1>
                    <h1 className="">PhoneNumber :</h1>
                    <h1 className="text-lg text-zinc-400">{aboutData.phoneNumber} </h1>
                </div>
            </div>
            <div className="md:px-24 px-4">
                <p className="hover:bg-red-400 ring-1 ring-zinc-400 "></p>
            </div>
        </div>
    );
}
