import React from "react";
import image from '../assets/portfolio/Back.png';
import img from '../assets/portfolio/text.png';
import '../About.css';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
       </div>
       <div className='image-side'>
<img  className='work-emoji' src={image} alt="User" />
<span><img src={img} alt="Context" /></span>
       </div>

       

        <p className="text-xl mt-5 inline-block">
        As a passionate front-end web developer, I thrive on creating visually stunning and highly functional websites that provide exceptional user experiences. With a solid foundation in HTML, CSS, and JavaScript, I am dedicated to staying ahead of the curve in the ever-evolving world of web technologies.
        </p>

        <br />

        <p className="text-xl">
        With a strong understanding of front-end frameworks such as React,Bootstrap,Tailwind CSS, I possess the skills necessary to build dynamic and interactive web applications. I am constantly exploring new libraries and tools, leveraging their capabilities to create cutting-edge solutions that push the boundaries of what is possible on the web.
        </p>
        </div>

         </div>
  );
};

export default About;
