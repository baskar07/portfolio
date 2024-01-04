import React from 'react';

import contact  from '../assets/contact.avif';



const Contact = () => {
 
    return (
      <>
      <section id="contact" className='bg-[#fff] d dark:bg-[#2B2E3B] text-[#000] dark:text-white'>
              <div className="py-4">
                <h1 className='text-center text-2xl text-[#ff4757]'>Contact Me</h1>


                <div className="">
                  <img className='hidden' src={contact} alt="" />
                </div>

                <div className="mt-10">
                  <form action="" className='max-w-xl mx-auto px-1'>
                    <div className="grid gap-y-4">
                      <input type="text" placeholder='Name' className='px-5 py-4 bg-[#f1f2f6] text-[#000]  rounded-lg '/>
                      <input type="text" placeholder='Email' className='px-5 py-4 bg-[#f1f2f6] text-[#000]  rounded-lg '/>
                      <input type="text" placeholder='Phone No.' className='px-5 py-4 bg-[#f1f2f6] text-[#000]  rounded-lg '/>
                      
                      <textarea
                      placeholder='Message'
                      name="message"
                      id="message"
                      rows={5}
                      className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#f1f2f6] text-[#000]       sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                    </div>

                  <div className="mt-10 text-center">
                    <button className='w-40 rounded-md bg-[#ff4757] px-3.5 py-2.5 text-center text-sm font-semibold text-[#dfe4ea]'>
                      Let's talk 
                    </button>
                  </div>



                  </form>
                </div>


              </div>
        </section>
        </>
    );
}

export default Contact