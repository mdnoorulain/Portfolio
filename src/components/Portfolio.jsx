import React from "react";
import Logo_UA from "../assets/portfolio/OIP2.jpeg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/school-logo.png";
import reactParallax from "../assets/portfolio/OIP.jpeg";
import reactSmooth from "../assets/portfolio/download.jpeg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

function Portfolio() {
    const portfolios = [
        {
          id: 1,
          src: Logo_UA,
          href: "https://github.com/mdnoorulain/education1",
          web: "https://af-academy-school.netlify.app"
        },
        {
          id: 2,
          src: reactParallax,
          href: "https://github.com/mdnoorulain/restauro",
          web: "https://my-restauro.netlify.app/"
        },
        {
          id: 3,
          src: navbar,
          href: "https://github.com/mdnoorulain/education",
          web: "https://mtz-education.netlify.app"
        },
        {
          id: 4,
          src: reactSmooth,
          href: "https://github.com/mdnoorulain/restro1",
          web: "https://restauro-fev.netlify.app/"
        },
        {
          id: 5,
          src: installNode,
          href: "",
          web: "https://mtz-education.netlify.app" 
        },
        {
          id: 6,
          src: reactWeather,
          href: "",
          web: "https://mtz-education.netlify.app"
        },
      ];
  return (
    <div
      name="portfolio"
      className="  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-10">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, web }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                  <a
              
              className="flex justify-between items-center w-full text-white"
              href={web}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                href={href}
              
              className="flex justify-between items-center w-full text-white"
              
              target="_blank"
              rel="noreferrer"
            >
               Code
            </a>
                 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
