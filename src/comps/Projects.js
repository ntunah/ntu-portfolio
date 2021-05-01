import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="projects"]{
      title,
      date,
      description,
      projectType,
      link,
      tags,
       mainImage{
           asset->{
             _id,
             url
           },
           alt
         },
    }`
      )
      .then(data => setProjectData(data))
      .catch(console.error);
  }, []);
  console.log(projectData);
  return (
    <div className="bg-gray-100 h-screen">
      <section className="container mx-auto pt-24">
        <h1 className="text-5xl flex justify-center cursive pt-10">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center">
          Welcome to my projects page!
        </h2>
        {!projectData && (
          <div className="grid justify-items-center mt-10">
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        )}
      </section>
      <main className="flex justify-center">
        <div className="pl-8 p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                <img
                  className="w-full"
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.asset.id}
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      {project.title}{" "}
                      <small className="opacity-75">
                        {project.projectType}
                      </small>
                    </a>
                  </div>
                  <p class="text-gray-700 text-base">{project.description}</p>
                </div>
                <div className="px-6 py-4">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_black"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 "
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer" />
                  </a>
                </div>
                <div class="px-6 pt-4 pb-2">
                  {project.tags.map(tag => (
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{tag}{" "}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
