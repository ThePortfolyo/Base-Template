export default function Testimonial(user) {
    const testimonialData = user?.user?.testimonials;
    // console.log(testimonialData);
    return (
        <div>
            <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                <h1 className=" text-xl font-medium font-mono">Testimonial</h1>
                <div className="md:grid-cols-2 grid grid-cols-1 gap-9 pt-4">
                    {testimonialData
                        ? testimonialData.map((ele) => {
                              return (
                                  <div className="  p-4 rounded-md ring-1 ring-zinc-600 space-y-2 hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300">
                                      <div className="flex items-center space-x-2">
                                          <img src={ele.image.url} className="h-10 w-fit" />
                                          <div>
                                              <h1 className="text-xl font-mono ">{ele.name}</h1>
                                              <h1 className="text-sm font-mono text-zinc-500">{ele.position}</h1>
                                          </div>
                                      </div>
                                      <h1 className="text-sm font-mono text-zinc-400  ">{ele.review}</h1>
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
