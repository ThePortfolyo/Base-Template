import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { _id, image, title, description, techStack, enabled, liveurl, githuburl } =
    project;
  return (
    <div className="bg-yellow-700 rounded-3xl shadow-lg" key={_id}>
      <img
        src={image.url}
        alt=""
        className="rounded-t-2xl object-cover object-center w-full h-40"
      />
      <div className="p-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="pt-2">{description}</p>
        <p className="mt-2">
          <span className="font-semibold">Project stack: </span>
          {techStack}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Status: </span>
          {
            enabled?"enabled":"disabled"
          }
        </p>
        <div className="flex justify-between mt-4 mb-1">
          <a
            href={liveurl}
            className="inline-block px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black"
          >
            View Live <FaGlobe size={13} className="inline mb-1 text-black" />
          </a>
          <a
            href={githuburl}
            className={`inline-block px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black ${
              githuburl ? "" : "cursor-not-allowed bg-gray-300"
            }`}
          >
            View On Github
            <FaGithub size={15} className="inline ml-1 mb-1 text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
