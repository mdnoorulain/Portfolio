import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center px-6 h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Network Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Experienced Network Engineer skilled in designing, implementing, and
            maintaining scalable, secure network infrastructures. Proficient in
            configuring routers, switches, firewalls, and troubleshooting
            network issues. Strong expertise in optimizing network performance,
            ensuring high availability, and implementing security measures.
            Adept at supporting both on-premise and cloud-based network
            environments.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-1/2 md:w-64"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
