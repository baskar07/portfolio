import React from "react";

import { AiOutlineHome,AiOutlineUser} from "react-icons/ai";
import {  BsBriefcase, BsMoonFill, BsFillSunFill } from "react-icons/bs";
import {  FiBookOpen} from 'react-icons/fi';
import { MdOutlineMessage } from 'react-icons/md';


import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

import { useTheme } from "../ThemeContext/ThemeContext";






const Header = () => {

  useEffect(() => {
    const scrollHeader = () =>{
      const header = document.getElementById('header');
      if(window.scrollY >= 80 ){
        header.classList.add('shadow-box');
      }else{
        header.classList.remove('shadow-box')
      }
    }
    window.addEventListener('scroll',scrollHeader);


  
  }, [])




  const { toggleTheme, currentTheme } = useTheme();

  return (
    <>

      <header className="fixed top-0 left-0 w-full z-10 transition shadow-shadow-box text-black dark:text-[#fff] bg-[#FFF] dark:bg-container-color" id="header">
        <nav className="px-4 h-12 md:h-16 max-w-5xl mx-auto flex items-center justify-between ">

          <a   className="text-xl md:text-2xl lg:text-3xl">
            Portfo<span className="text-[#ff4757]">lio.</span>
          </a>


          <div className="xs:fixed xs:bottom-0 xs:left-0 xs:w-full xs:h-14 xs:px-2 xs:grid xs:content-center xs:rounded-t-[1.25rem] xs:transition xs:shadow-box xs:bg-white  xs:dark:bg-container-color xs:dark:text-white" >
            <ul className="flex justify-around gap-x-2 sm:justify-center sm:gap-x-12  ">

              <li>
                 <a href="#home" className="flex flex-col items-center gap-y-1 font-light ">
                  <AiOutlineHome className="text-[1rem] md:hidden" />
                <span className="text-sm md:text-lg">Home</span>
                </a> 
              </li>

              <li>
                <a href="#about" className="flex flex-col items-center gap-y-1 font-light">
                  <AiOutlineUser className="text-1rem] md:hidden" />
                  <span className="text-sm md:text-lg">About</span>
                </a>
              </li>

              <li>
                <a href="#skills" className="flex flex-col items-center gap-y-1 font-light">
                  <FiBookOpen className="text-1rem] md:hidden"/>
                  <span className="text-sm md:text-lg">Skills</span>
                </a>
              </li>

              <li>
                <a href="#project" className="flex flex-col items-center gap-y-1 font-light ">
                  <BsBriefcase className="text-1rem] md:hidden"/>
                  <span className="text-sm md:text-lg">Project</span>
                </a>
              </li>

              <li>
                <a href="#contact" className="flex flex-col items-center gap-y-1 font-light">
                <MdOutlineMessage className="text-[1rem] md:hidden"/>
                  <span className="text-sm md:text-lg">Contact</span>
                </a>
              </li>
            </ul>
          </div>



          <button onClick={toggleTheme} className="text-xl text-[#ff4757]">
            { currentTheme === 'light' ? <BsMoonFill  /> : <BsFillSunFill  /> }
          </button>



        </nav>
      </header>




    </>
  );
};

export default Header;
