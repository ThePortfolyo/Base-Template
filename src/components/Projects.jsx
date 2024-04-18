import React from 'react';

function Projects(user) {
    const projectData = user?.user?.projects;

    return (
        <>
            <div>
                <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                    <h1 className=" text-xl font-medium font-mono">Projects</h1>
                    <div className="md:grid-cols-3 grid grid-cols-1 gap-6 pt-4">
                        {projectData
                            ? projectData.map((ele) => {
                                  return (
                                      <div className="w-96 h-72  rounded-md ring-1 ring-zinc-600 space-y-4 hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300">
                                          <img src={ele.image.url} className="h-48 w-full" />
                                          <div className="flex flex-col items-center ">
                                              <h1 className="text-xl font-mono ">Technologies Used</h1>
                                              <p className="flex">
                                                  {ele.techStack.map((tech) => {
                                                      return <div className="text-sm">{tech},</div>;
                                                  })}
                                              </p>
                                          </div>
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
        </>
    );
}

export default Projects;
