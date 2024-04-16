import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Hero = ({user}) => {
  return (
    <div id="home" className="w-full bg-[#0a192f] dark:bg-gray-100 z-10">
      <div className="relative md:flex flex-row justify-between md:pt-40  pt-24 px-1 md:px-16 max-w-8xl mx-auto">
        <div className="max-w-[950px] px-4 flex flex-col justify-center ">
          <p className="text-yellow-600 text-2xl dark:text-gray-800">
            Hi 👋, my name is
          </p>
          <h1 className="md:text-4xl text-5xl mb-4 font-bold text-[#ccd6f6] dark:text-gray-800">
            {user.about.name}.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0] dark:text-gray-800">
            {user.about.subTitle}
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] dark:text-gray-700">
            {user.about.title}
            
          </p>
          <h3 className="text-[#8892b0] py-4 max-w-[700px] dark:text-gray-700">Currently in {user.about.address}</h3>
          <div className="flex w-full">
            <button className="text-white border-2 border-gray-600 px-3 py-3 my-2 flex items-center hover:bg-gray-700 hover:border-gray-300 dark:text-gray-800 dark:hover:text-gray-100 dark:hover:bg-gray-500 dark:hover:border-gray-900">
              <HashLink to="/#projects" className="cursor-pointer">
                View Projects
              </HashLink>
            </button>
            <div className="lg:hidden inline-flex text-2xl space-x-3 ml-6 mt-4">
              <a href={user.social_handles[0].url}>
                <FaInstagram size={30} className="text-red-300" />
              </a>
              <a href={user.social_handles[1].url}>
                <FaLinkedin className="text-blue-500" size={30} />
              </a>
              <a href={user.social_handles[2].url}>
                <FaTwitter size={30} className="text-blue-500" />
              </a>
              <a href={user.social_handles[3].url}>
                <FaFacebook size={30} className="text-white dark:text-gray-800" />
              </a>

              
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-center sp:pb-0 md:pb-0 items-center">
          <img
            src={user.about.alternateAvatars[0].url}
            alt="Profile Image"
            className="rounded-full w-80 h-80 m-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
