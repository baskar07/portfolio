import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

import img1 from '../assets/6.jpg';
import img2 from '../assets/4.jpg';

const Projects = () => {
  return (
    <>
      <section id='project' className=' bg-[#fff]  dark:bg-[#2B2E3B] text-[#000] dark:text-white'>
          <div className="py-4">
          
            <h2 className="text-center text-2xl text-[#ff4757]">Projects</h2>

            <div className="p-[1rem] project-inner grid gap-5 ">

                <div className="project-item bg-[hsl(228,8%,95%)] rounded-sm transition-[all 0.3s ease-in-out] shadow-box-shadow-main cursor-pointer overflow-hidden hover:border-x-box-shadow-hover ">
                  <div className="project-image transition-[all .3s ease-in] relative overflow-hidden">
                    <img src={img1} alt=""  className='rounded-[5px 5px 0 0] w-full h-full object-cover '/>
                  </div>
                  <div className="p-[10px]">
                    <h3 className='text-[hsl(228,15%,15%)] font-semibold text-[1.125rem] leading-5'>Todo App</h3>
                    <div className="flex justify-between items-center">
                      <span className='font-normal text-[0.875rem] leading-[10px] text-[hsl(228,15%,15%)]'>Mern stack app</span>
                      <a href="" className='btn-view'>View</a>
                    </div>
                  </div>
                </div>

                <div className="project-item bg-[hsl(228,8%,95%)] rounded-sm transition-[all 0.3s ease-in-out] shadow-box-shadow-main cursor-pointer overflow-hidden hover:border-x-box-shadow-hover ">
                  <div className="project-image transition-[all .3s ease-in] relative overflow-hidden">
                    <img src={img2} alt=""  className='rounded-[5px 5px 0 0] w-full h-full object-cover '/>
                  </div>
                  <div className="p-[10px]">
                    <h3 className='text-[hsl(228,15%,15%)] font-semibold text-[1.125rem] leading-5'>Todo App</h3>
                    <div className="flex justify-between items-center">
                      <span className='font-normal text-[0.875rem] leading-[10px] text-[hsl(228,15%,15%)]'>Mern stack app</span>
                      <a href="" className='btn-view'>View</a>
                    </div>
                  </div>
                </div>

                <div className="project-item bg-[hsl(228,8%,95%)] rounded-sm transition-[all 0.3s ease-in-out] shadow-box-shadow-main cursor-pointer overflow-hidden hover:border-x-box-shadow-hover ">
                  <div className="project-image transition-[all .3s ease-in] relative overflow-hidden">
                    <img src={img1} alt=""  className='rounded-[5px 5px 0 0] w-full h-full object-cover '/>
                  </div>
                  <div className="p-[10px]">
                    <h3 className='text-[hsl(228,15%,15%)] font-semibold text-[1.125rem] leading-5'>Todo App</h3>
                    <div className="flex justify-between items-center">
                      <span className='font-normal text-[0.875rem] leading-[10px] text-[hsl(228,15%,15%)]'>Mern stack app</span>
                      <a href="" className='btn-view'>View</a>
                    </div>
                  </div>
                </div>

                <div className="project-item bg-[hsl(228,8%,95%)] rounded-sm transition-[all 0.3s ease-in-out] shadow-box-shadow-main cursor-pointer overflow-hidden hover:border-x-box-shadow-hover ">
                  <div className="project-image transition-[all .3s ease-in] relative overflow-hidden">
                    <img src={img2} alt=""  className='rounded-[5px 5px 0 0] w-full h-full object-cover '/>
                  </div>
                  <div className="p-[10px]">
                    <h3 className='text-[hsl(228,15%,15%)] font-semibold text-[1.125rem] leading-5'>Todo App</h3>
                    <div className="flex justify-between items-center">
                      <span className='font-normal text-[0.875rem] leading-[10px] text-[hsl(228,15%,15%)]'>Mern stack app</span>
                      <a href="" className='btn-view'>View</a>
                    </div>
                  </div>
                </div>

              




            </div>


          </div>
      </section>
    
    </>
  )
}

export default Projects