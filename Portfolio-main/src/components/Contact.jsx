import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const links = [
    {
      id: 1,
      child: (
        <>
        <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/md-noorul-ain-ashrafi-41a006146/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mdnoorulain",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/mdnoorulain786/",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
        <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mdnoorulain786.mna@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 5,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume_noorul.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4
     text-white"
    >
      <div className=" felx flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      
        <div className=" pb-4 pt-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
          <ul className=" hidden sm:flex justify-between ">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "   items-center  px-2   rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className=" items-center  text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
        </div>
        

        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/d054a5ba-4cdf-4004-8f3a-823e5abd1095" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message...."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-6 
          mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
