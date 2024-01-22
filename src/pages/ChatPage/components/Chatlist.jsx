import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loader from '../../../assets/loader.svg';
import { userchats } from "../../../actions/chat";



const Chatlist = ({selectedchat, setselectedchat , setgroupmodel}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {chats,isLoading} = useSelector((state)=> state.chats);
  const user = JSON.parse(localStorage.getItem('profile'));

  console.log(chats);

  useEffect(()=>{
    dispatch(userchats());
  },[dispatch]);
  

  return (
    <div className="flex flex-col bg-black-100  p-4 w-full rounded-[30px]">
      <div className="flex justify-between items-center mb-4 p-2 ">
        <p className="text-white text-[25px]">My Chats</p>
        <button className="flex items-center justify-center gap-2 bg-tertiary hover:bg-black-200 p-2 rounded-lg border border-[#b4a8f3]" onClick={()=>setgroupmodel(true)}>
          <p className="text1-gradient">Add group chat</p>
          <span className="material-icons-outlined text1-gradient">add_circle</span>
        </button>
      </div>
      <hr className="border-primary_container border-2" />
      {!isLoading ? (
            <>
            {chats.length ? (
              <div className="flex flex-col justify-center items-start w-full mt-4 gap-2">
              {chats.map((chat,index) => (

                <div key={`chat-${index}`} className={`flex flex-row items-center py-5 px-2 gap-4 w-full ${selectedchat===chat && 'btn1-gradient'} bg-tertiary group  hover:btn1-gradient rounded-lg cursor-pointer`} onClick={ ()=> setselectedchat(chat)}>
                  {chat?.isgroupchat? (
                    <>
                    <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full  group-hover:black-gradient btn1-gradient  ">
                      <span className="text-primary group-hover:text1-gradient">{chat.chatname.charAt(0)}</span>
                    </div>  
                    <div className="flex flex-col gap-1">
                      <p className={`text-[16px] text-white ${selectedchat===chat && 'text-primary'}  group-hover:text-primary font-medium`}>{chat.chatname}</p>
                    </div>
                    </>
                  ) : (
                    <>
                    <div className={`flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full ${selectedchat===chat && 'black-gradient'} group-hover:black-gradient  btn1-gradient  `}>
                      <span className={`text-primary ${selectedchat===chat && 'text1-gradient'} group-hover:text1-gradient `}>{chat.users[0]._id===user?.result?._id ? chat.users[1].name.charAt(0) :chat.users[0].name.charAt(0) }</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className={`text-[16px] text-white ${selectedchat===chat && 'text-primary'}  group-hover:text-primary font-medium`}>{chat.users[0]._id===user?.result?._id ? chat.users[1].name :chat.users[0].name}</p>
                      <p className={`text-[12px] text-secondary ${selectedchat===chat && 'text-primary'} group-hover:text-primary font-medium`}>{chat.users[0]._id===user?.result?._id ? chat.users[1].email :chat.users[0].email}</p>
                    </div>
                    </>
                  )}
               </div>
              ))}
            </div>
            ) : (
              <div className='flex justify-center h-full items-center '>
                <p className="text-secondary text-[20px]">create your chats</p>
              </div>

            )}
            </>
           
          ) : (
            <div className='flex justify-center h-full items-center'>
              <img src={loader} alt="loding" className='h-[50px] w-[50px]' />
            </div>
          )}
    </div>
  );
};

export default Chatlist;
