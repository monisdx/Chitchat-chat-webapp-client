import React from 'react'

const Chatbox = ({selectedchat,setselectedchat}) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  console.log(selectedchat);
  return (
    <div className="flex flex-col justify-between chat_gradient w-full rounded-[30px]">
      {selectedchat ? (
        <>
         <div className="flex items-center gap-4 z-1 py-4 px-6  rounded-t-[30px] relative">
          {selectedchat.isgroupchat ? (
            <>
            <div className='flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient'>{selectedchat.chatname.charAt(0) }</div>
            <p className="text-[16px] text-white font-medium">{selectedchat.chatname }</p>
            <span className="material-icons-outlined text1-gradient text-[30px] right-0 absolute px-6 cursor-pointer" onClick={()=>setupdatemodel(true)}>edit</span>
            </>

          ) : (
            <>
            <div className='flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient'>{selectedchat.users[0]._id===user?.result?._id ? selectedchat.users[1].name.charAt(0) :selectedchat.users[0].name.charAt(0) }</div>
            <p className="text-[16px] text-white font-medium">{selectedchat.users[0]._id===user?.result?._id ? selectedchat.users[1].name :selectedchat.users[0].name }</p>
            </>
          )}
          
         </div>
         <div className="h-[58vh] relative  ">
           <div className="bg-chat-pattern h-full absolute inset-0 opacity-10 bg-contain">
            
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
               className="bg-transparent placeholder:text-secondary w-full  text-white  outline-none font-medium"
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
         </>

      ):(
        <div className='flex justify-center h-[50vh] xl:h-full items-center '>
          <p className="text-secondary text-[20px]">Select user to start chatting</p>
        </div>
      )}
         
        </div>
  )
}

export default Chatbox