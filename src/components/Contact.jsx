import React from 'react';

function Contact(user) {
    const Contact = user?.user?.social_handles;

    return (
        <div>
            <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                <h1 className=" text-xl font-medium font-mono">Projects</h1>
                <div className="flex space-x-4">
                    {Contact
                        ? Contact.map((ele) => {
                              console.log(ele);
                              return (
                                  <div>
                                      <div className="flex flex-col items-center space-y-4 hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300">
                                          <img src={ele.image.url} className="h-10 w-fit" />
                                      </div>
                                      <div className="flex flex-col items-center ">{ele.platform}</div>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
}

export default Contact;
