import React from 'react';
// import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai';
import img from '../assets/home.png';
import img1 from '../assets/web.jpg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';



const Home = () => {

  return (
    <>


    <section id='home' className='relative bg-white dark:bg-container-color dark:text-title-color '>

      <div className="max-w-5xl mx-auto ">

        <div className="grid items-center md:my-10 md:grid-cols-2">
          <div className="my-5 space-y-4">
            <div className="text-center">
                <h1 className='text-3xl md:text-5xl'>Hi, I'm <span className='text-[#ff4757] font-semibold'>Baskar</span></h1>
                <h3 className='text-3xl md:text-5xl mb-5 md:my-4 md:mb-10 font-semibold'>Backend Developer</h3>
                <a href="#" className=' bg-[#ff4757] px-5 py-3 rounded-md text-title-color font-semibold'>Download CV</a>
            </div>
          </div>

          <div className="my-5 mx-auto">
              <svg class="w-[300px] h-[350px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[450px] fill-[#ff4757]" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" >
                    <mask id="mask0" mask-type="alpha">
                        <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        <image className="w-[350px] translate-x-[-2%]  "  x="50" y="60" id="imageBorder"  href={img} />
                    </g>
              </svg> 
          </div>


        </div>

      </div>
    </section> 


    </>
  )
}

export default Home

