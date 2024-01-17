import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import user1 from "../../../assets/user1.svg";
// import { getuser } from '../../../actions/user';
import { getuser } from "../../../api/index";

const Chatlist = () => {
  // const[userData, setUserData] = useState(null);
  // console.log(chats)

  // useEffect(()=>{
  //   const userid = chats[0].members.find((id)=>id!==user?.result._id)

  //   const getUserData = async ()=> {
  //     try
  //     {
  //         const {data} = await getuser(userid)
  //        setUserData(data)
  //        dispatch({type:"SAVE_USER", payload:data})
  //     }
  //     catch(error)
  //     {
  //       console.log(error)
  //     }
  //   }

  //   getUserData();

  // },[])

  return (
    <div className="flex flex-col bg-black-100  p-4 w-full rounded-[30px]">
      <div className="flex justify-between items-center mb-4 p-2 ">
        <p className="text-white text-[25px]">My Chats</p>
        <button className="flex items-center justify-center gap-2 bg-tertiary p-2 rounded-lg">
          <p className="text1-gradient">Add group chat</p>
          <span className="material-icons-outlined text1-gradient">add_circle</span>
        </button>
      </div>
      <hr className="border-primary_container border-2" />
      <div className="flex flex-col justify-center items-start ">
        <div className="flex flex-row items-center py-5 px-2 gap-4 w-full hover:bg-tertiary">
          <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient">
            A
          </div>
          <p className="text-[16px] text-white font-medium">name</p>
        </div>
        <div className="h-[2px] w-full bg-primary" />
      </div>
    </div>
  );
};

export default Chatlist;
