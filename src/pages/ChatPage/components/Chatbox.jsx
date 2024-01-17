import React from 'react'
import pattern1 from '../../../assets/pattern1.png'
const Chatbox = () => {
  return (
    <div className="flex flex-col justify-between chat_gradient w-full rounded-[30px]">
          <div className="flex items-center gap-4 z-1 py-4 px-6  rounded-t-[30px]">
          <div className='flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient'>A</div>
            <p className="text-[16px] text-white font-medium">Name</p>
          </div>
          <div className="h-[58vh] relative  ">
            <div className="bg-chat-pattern h-full absolute inset-0 opacity-10 bg-contain">
              {/* <p className='text-white opacity-100'>ddddd</p> */}
            </div>
            <p className='text-white absolute inset-0'>ddddd</p>
           
          </div>
          <div className="flex justify-between items-center p-4 gap-4 bg-black-100 rounded-b-[30px]">
            <div className="flex justify-center items-center bg-tertiary rounded-[30px] w-full py-3 px-6 gap-4">
              <span className="material-icons-outlined text1-gradient text-[30px] cursor-pointer rotate-45 ">
                attachment
              </span>
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="bg-tertiary placeholder:text-secondary w-full  text-white  outline-none font-medium"
              />
              <span className="material-icons-outlined text1-gradient text-[30px] cursor-pointer">
                sentiment_satisfied_alt
              </span>
            </div>
            <button>
              <span className="material-icons-round text1-gradient text-[35px]">
                send
              </span>
            </button>
          </div>
        </div>
  )
}

export default Chatbox