import React from 'react';

export default function About() {
    return (
        <div className="px-4 py-5">
            <h1 className=" text-2xl font-medium font-mono md:pl-20 pl-0">About Me</h1>
            <div className=" md:grid-cols-2 grid grid-cols-1 gap-1 place-items-center mx-auto pt-5">
                <div className=" md:w-3/4 w-fit space-y-3 pt-3  ">
                    <p className="">I develop user interfaces and web application and also working with mobile application</p>
                    <p className="">
                        As a React developer , I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I
                        pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to
                        create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.
                    </p>
                </div>
                <div className="font-medium font-mono space-y-8 pt-4">
                    <h1>Location : 232110 Chandauli UttarPradesh </h1>
                    <h1>Email : abhi7376862392@gmail.com</h1>
                    <h1>PhoneNumber : 7388334666</h1>
                </div>
            </div>
            <div className="pt-16">
                <p className=" ring-1 ring-zinc-400 "></p>
            </div>
        </div>
    );
}
