import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
            My name is Md Noorul Ain Ashrafi. I have completed my Bachelor of Technology degree in specialization
            of Electronics & Communication Engineering from Integral University Lucknow.
        </p>

        <br />

        <p className="text-xl">
        Skilled in Linux System and Knowledge of all four types of programming
          techniques Procedural using C89, Object oriented using C++11, C# and
          Python, Functional using JavaScript and Declarative using SQL.
        </p>
      </div>
    </div>
  );
}

export default About;
