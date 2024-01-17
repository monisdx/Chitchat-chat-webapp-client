import React from 'react'
import Auth from '../Auth/Auth'


const HomePage = () => {
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen xl:flex xl:items-center'>
      <div className=' padding  max-w-7xl mx-auto  flex xl:flex-row flex-col justify-center xl:items-center gap-5 overflow-hidden '>
        <div className='flex  flex-row xl:top-[30px] flex-[0.6] justify-center items-start gap-5'>
        <div className="sm:flex flex-col hidden justify-center items-center mt-5">
          <div className = "w-5 h-5 rounded-full bg-purple-100"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div className=''>
          <h1 className="heroheadtext text-white">
          Talk to <span className="text-purple-100">strangers,</span><br className="sm:block hidden"/>
          Make <span className="text-purple-100">Friends!</span>
          </h1>
          <p className="herosubtext mt-2 text-white-100">
            Experience an exciting free text alternative to Find friends, connect with strangers, and talk with different people in random anonymous chat rooms.
          </p>
        </div>  
        </div>
        <Auth/>
      </div>
    </div>
  )
}

export default HomePage