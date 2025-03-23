import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/reactImage.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import stcs from "../assets/stcs.png";
import iot from "../assets/iot.webp";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javaScript",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next Js",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className=" pt-16">
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className=" w-20 mx-auto" />
              <p className="ml-4">{title}</p>
            </div>
          ))}
        </div>
        <div className=" pt-10 grid gap-8">
          <div className=" flex items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <div>
              {" "}
              <img src={iot} alt="" className=" w-20 mx-auto" />{" "}
            </div>
            <div>
              <span className="text-white">
                <h2 className="leading-tight">
                  BUILD IOT Things from Scratch to Market
                </h2>
                <p className="text-sm leading-tight font-thin">
                  Sept - Nov 2023
                </p>
                <ul className="text-sm p-2">
                  <li>- Work as Intern</li>
                  <li>
                    -Configured and maintained 1OT devices and sensors, ensuring
                    seamless data collection and transmission.
                  </li>
                  <li>
                    - Collaborated with cross-functional teams to troubleshoot
                    and resolve 10T system issues.
                  </li>
                  <li>
                    - Participated in data analysis and visualization, helping
                    to extract meaningful insights from 1OT data.
                  </li>
                  <li>
                    - Contributed to the optimization of 1OT security protocols,
                    ensuring data integrity and privacy.
                  </li>
                  <li>
                    - Assisted in developing 1OT applications and firmware using
                    Arduino IDE with programming languages.
                  </li>
                </ul>
              </span>{" "}
            </div>
          </div>

          <div className=" flex items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <div>
              {" "}
              <img src={stcs} alt="" className=" w-20 mx-auto" />{" "}
            </div>
            <div>
              <span className="text-white">
                <h2 className="leading-tight">STCS Pvt Ltd (Delhi, India)</h2>
                <p className=" text-sm leading-tight font-thin">
                  March 2023 | Present
                </p>
                <ul className="text-sm p-2">
                  <li className=" ">- Work as Telicom Feild Engineer</li>
                  <li>
                    - Responsible for providing on-site technical service and
                    support for customers and installers.
                  </li>
                  <li>
                    - Conducted designed and tested Quality Assurance evalutions
                    on devices and services for pre-sale consultations.
                  </li>
                  <li>
                    - Utilized Mu Dynamics SmartBits and BreakingPoint Systems
                    to perform telecom/network system tests.
                  </li>
                  <li>
                    - Maintained and Installed of Ciena5130 ,Ciena3928, Ciena6500 and Cisco T4 & T5 Mux.
                  </li>
                  <li>
                    - Advised Cable Television department of design issues
                    within the engineering aspects of field-installed products.
                  </li>
                </ul>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
