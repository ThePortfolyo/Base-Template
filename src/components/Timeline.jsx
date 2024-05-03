import React from 'react';

function Timeline() {
    return (
        <div>
            <div className="md:px-24 pl-3 md:py-16 py-10 px-4 pt-10">
                <h1 className=" text-2xl font-medium font-mono">Education</h1>
                <div className="flex flex-col md:pl-32 space-y-6 pt-5">
                    <div>
                        <span className="text-lg text-indigo-400 font-semibold">Postgraduation : </span>
                        <div className="md:pl-40 pl-2 pt-2">
                            <span>Currently i am pursuing my MAC from Institute of Computer Science and Technology Varanasi</span>
                            <p>Affliated from A.P.J. Abdul Kalam Technical University</p>
                            <p></p>
                            <p> Duration : from 2022 to 2024</p>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-semibold text-indigo-400 ">Undergraudation :</span>
                        <div className="md:pl-40 pl-2 pt-2">
                            <span className="">I have complete my BA from BHU in hindi (Arts)</span>
                            <p> Marks : 7.5 cgpa</p>
                            <p> Duration : from 2019 to 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-24 px-4">
                <p className="ring-1 ring-zinc-400 "></p>
            </div>
        </div>
    );
}

export default Timeline;
