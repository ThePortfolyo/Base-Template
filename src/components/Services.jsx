import React from 'react'

const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[490px] max-sm:h-[450px] p-8 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        <div className="HEADER flex ">
          <div className=" max-w-[150px] pr-3 mr-3">
            <img src={props.img} alt="" />
          </div>

          <div className="max-w-[125px]">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold ">
              {props.title}
            </h1>
            <p className="italic text-sm text-slate-700 dark:text-slate-300">
              {props.charge}
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 leading-10">
          {props.desc}
        </p>
      </div>
    </>
  );
};

const Services = ({user}) => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <>
      <section
        id="services"
        className="p-5  bg-[#0a192f] font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 m-2">
          <h1 className="text-[#ffff] uppercase dark:text-slate-300 font-extrabold text-5xl text-center">
            Services
          </h1>
          <hr className='white mt-3'/>

          <p>{user.name}</p>
          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            {
              user.map((service)=> (
                <Exp_prop
                  key={service._id}
                  title={service.name}
                  charge={service.charge}
                  desc={service.desc}
                  img={service.image.url}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;