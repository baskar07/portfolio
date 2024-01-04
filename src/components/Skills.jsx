import React, { useEffect } from 'react';
import { SiMongodb, SiExpress } from 'react-icons/si';
import {  FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import ScrollReveal from 'scrollreveal';


const Skills = () => {

  useEffect(()=>{
    const scroll = ScrollReveal({
      origin:'top',
      distance:'50px',
      duration:2000,
      reset:true
    });
  
    ScrollReveal().reveal('.progress-item',{interval:100});
    
  },[])
   

  return (
    <>
      <section id='skills' className=' bg-[#fff]  dark:bg-[#2B2E3B] text-[#000] dark:text-white'>
        <div className="max-w-5xl mx-auto md:mt-5">

        <h2 className="text-center text-2xl text-[#ff4757]">Skills</h2>

        

        <p className='mt-4   md:w-1/2 md:mx-auto text-center md:text-justify  text-sm'>MERN stack, an acronym for MongoDB, Express.js, React, and Node.js, is a robust technology stack widely used 
          for building modern web applications.
        </p>


        <Fade left cascade delay={200} duration={2000} >
          <div className="py-3 mt-4 md:mt-2 flex items-center justify-center   space-x-6">
              <div className=" relative w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-center  shadow-xl">
                <SiMongodb size={32} color='#3FA037'/>
                <span className='absolute top-16'>MongoDB</span>
              </div>
         
              <div className=" relative w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-center shadow-xl">
                <SiExpress size={30} color='#000' />
                <span className='absolute top-16'>ExpressJs</span>
              </div>
              <div className=" relative w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-center  shadow-xl">
                <FaReact size={30} color='#61DBFB' />
                <span className='absolute top-16'>ReactJs</span>
              </div>
              <div className=" relative w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-center  shadow-xl">
                <FaNodeJs size={30} color='#44883E'/>
                <span className='absolute top-16'>NodeJs</span>
              </div>
          </div>
        </Fade>

          <div className="relative w-full my-12 rounded-lg ">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 2xl:gap-y-12 px-10">

                <div className="w-full  py-2 md:mt-2 progress-item">
                  <span className='block text-[14px] font-semibold'>HTML</span>
                  <div className="h-2 w-full rounded-md mt-2.5 bg-[rgba(0,0,0,0.1)] dark:bg-neutral-400">
                    <span className='html relative block h-full w-[95%] rounded-md bg-[#ff4757]  '>
                      <span className='tooltip absolute -right-3.5 -top-7 text-[9px] font-medium text-[#fff] px-1.5 py-0.5 rounded-sm bg-[#ff4757] z-10'>60%</span>
                    </span>
                  </div>
                </div>

                <div className="w-full py-2 md:mt-2 progress-item">
                  <span className='block text-[14px] font-semibold '>CSS & Tailwindcss</span>
                  <div className="h-2 w-full rounded-md mt-2.5 bg-[rgba(0,0,0,0.1)] dark:bg-neutral-400">
                    <span className='css relative block h-full w-[95%] rounded-md bg-[#ff4757]  '>
                      <span className='tooltip absolute -right-3.5 -top-7 text-[9px] font-medium text-[#fff] px-1.5 py-0.5 rounded-sm bg-[#ff4757] z-10'>80%</span>
                    </span>
                  </div>
                </div>

                <div className="w-full py-2 md:mt-2 progress-item">
                  <span className='block text-[14px] font-semibold ]'>JAVASCRIPT</span>
                  <div className="h-2 w-full rounded-md mt-2.5 bg-[rgba(0,0,0,0.1)] dark:bg-neutral-400">
                    <span className='js relative block h-full w-[95%] rounded-md bg-[#ff4757]  '>
                      <span className='tooltip absolute -right-3.5 -top-7 text-[9px] font-medium text-[#fff] px-1.5 py-0.5 rounded-sm bg-[#ff4757] z-10'>50%</span>
                    </span>
                  </div>
                </div>

                <div className="w-full py-2 md:mt-2 progress-item">
                  <span className='block text-[14px] font-semibold'>REACTJS & REDUX</span>
                  <div className="h-2 w-full rounded-md mt-2.5 bg-[rgba(0,0,0,0.1)] dark:bg-neutral-400">
                    <span className='reactjs relative block h-full w-[95%] rounded-md bg-[#ff4757]  '>
                      <span className='tooltip absolute -right-3.5 -top-7 text-[9px] font-medium text-[#fff] px-1.5 py-0.5 rounded-sm bg-[#ff4757] z-10'>70%</span>
                    </span>
                  </div>
                </div>

                <div className="w-full py-2 md:mt-2 progress-item">
                  <span className='block text-[14px] font-semibold '>NODEJS & MONGODB</span>
                  <div className="h-2 w-full rounded-md mt-2.5 bg-[rgba(0,0,0,0.1)] dark:bg-neutral-400">
                    <span className='nodejs relative block h-full w-[95%] rounded-md bg-[#ff4757]  '>
                      <span className='tooltip absolute -right-3.5 -top-7 text-[9px] font-medium text-[#fff] px-1.5 py-0.5 rounded-sm bg-[#ff4757] z-10'>50%</span>
                    </span>
                  </div>
                </div>

                <div className="w-full py-2 md:mt-2 progress-item">
                  <span className='block text-[14px] font-semibold '>PHP & MYSQL</span>
                  <div className="h-2 w-full rounded-md mt-2.5 bg-[rgba(0,0,0,0.1)] dark:bg-neutral-400">
                    <span className='php relative block h-full w-[95%] rounded-md bg-[#ff4757]  '>
                      <span className='tooltip absolute -right-3.5 -top-7 text-[9px] font-medium text-[#fff] px-1.5 py-0.5 rounded-sm bg-[#ff4757] z-10'>65%</span>
                    </span>
                  </div>
                </div>

            </div>
          </div>




        </div>
      </section>
    
    </>
  )
}

export default Skills