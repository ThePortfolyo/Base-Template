import React from 'react';
import sc1 from '../assets/sc1.png';
import sc2 from '../assets/sc2.png';
import sc3 from '../assets/sc3.png';
import sc4 from '../assets/sc4.png';
import sc5 from '../assets/sc5.png';

function Projects() {
    const Services = ({ technologies, image, projectname }) => {
        return (
            <>
                <div className=" flex flex-col w-full items-center rounded-md ring-1 ring-zinc-600  hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-105  duration-300">
                    <div className="flex-col  items-center ">
                        <img src={image} className=" rounded-t h-52 w-screen" />
                    </div>
                    <div className="flex flex-col items-center space-y-1 py-4">
                        <span className="text-lg">Project Name : {projectname}</span>
                        <span className="text-lg">Technologies Used</span>
                        <span className="text-sm"> {technologies}</span>
                    </div>
                    <div></div>
                </div>
            </>
        );
    };
    return (
        <>
            <div>
                <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                    <h1 className=" text-2xl font-medium font-mono">Services</h1>
                    <div className="md:grid-cols-3 grid grid-cols-1 gap-10 place-items-center pt-10 ">
                        <Services image={sc1} projectname="PortfoloioDesign" technologies="ReactJs , TailwindCss , NodeJs" />
                        <Services image={sc2} projectname="Dhriti-Enterprises" technologies="NextJs , TailwindCss  " />
                        <Services image={sc3} projectname="Frozen-Baker Web App" technologies="ReactJs , TailwindCss , NodeJs" />
                        <Services image={sc4} projectname="Weather Web App" technologies="ReactJs ,TypeScript , TailwindCss , NodeJs" />
                        <Services image={sc5} projectname="Frozen-Baker-Mobile-App" technologies="React-Native , JavaScript , NodeJs" />
                    </div>
                </div>
                <div className="md:px-24 px-4">
                    <p className="hover:bg-red-400 ring-1 ring-zinc-400 "></p>
                </div>
            </div>
        </>
    );
}

export default Projects;
