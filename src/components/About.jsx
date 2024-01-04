import React from 'react';
import  img from '../assets/bas.jpg'; 
import { Tilt } from 'react-tilt';



const About = () => {
  return (
    <>
    <section id='about' className=' bg-[#fff]  dark:bg-[#2B2E3B] text-[#000] dark:text-white'>

        <div className="max-w-5xl mx-auto md:mt-5">

        <h2 className="text-center  text-2xl text-[#ff4757]">About Me</h2>

        <div className="relative w-full mt-6 rounded-lg">

          <div className="grid md:grid-cols-2 md:my-18">

            <div className="w-full">
              <Tilt className=" lg:w-[19rem]  lg:h-[25rem] shadow-[0 1rem 4rem rgba(0,0,0,0.4)] rounded-[0.5rem] relative">
                <div className="w-[200px] lg:w-full h-[250px] lg:h-full bg-[#262626] rounded-2xl lg:rounded-[0.5rem] my-4 mx-auto">
                  <img className='w-full h-full object-cover opacity-80 rounded-[0.5rem] transition-[opacity 0.3s] hover:opacity-50  ' src={img} alt="profile" />
                </div>
                
              </Tilt> 
            </div> 


            <div className="w-full px-4 my-10">
                <h3 className='text-[1.35rem] md:text-[2rem] font-semibold pb-2'>Hello, I'm <span className='text-[#ff4757]'>Baskar</span> and I'm a</h3>
                <span className='block text-md md:text-lg text-justify sm:leading-5'>
                  junior backend web developer with a knack for creating efficient and scalable solutions. 
                  My journey in the world of programming has been both thrilling and rewarding. 
                  Here's a glimpse into who I am and what drives my love for coding.
                  </span>
                <button className="ml-24 mt-6 px-3 py-3 rounded-lg text-white bg-[#ff4757]">Download CV</button>
            </div>

          </div>
        </div>



        </div>
    </section>
    </>
  )
}

export default About