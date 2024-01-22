import React, { useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsersBySearch } from "../../../actions/user";
import { createchat} from "../../../actions/chat";
import loader from '../../../assets/loader.svg';


const Sidebar = ({ sidebar, setsidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setsearch] = useState('');
  const {users,isLoading} = useSelector((state)=> state.users);
  

  const handlekeypress = (e) => {
    if (e.keyCode === 13) {
      searchpost();
    }
  };

  const handleback = () => {
    setsidebar(!sidebar);
    navigate('/chat');
    setsearch('');
    dispatch({type:'RESET_USERS'});
  }

  const searchpost = () => {
    if(search.trim()){
      dispatch(getUsersBySearch(search));
      navigate(`/chat/search?searchQuery=${search || 'none'}`);
    }
    else{
      handleback();
    }
  }

  const handlecreatechat = (id) => {
    dispatch(createchat(id));
    handleback();
  }

  return (
    <>
    <div
      className={`z-40 fixed top-0 ${
        sidebar ? "left-0" : "-left-full"
      } duration-500 h-[100vh] w-full sm:w-[350px]   bg-black-100 shadow-card`}
    >
      <div className="w-full flex flex-col  mb-4">
        <div className="flex w-full p-4 items-center gap-[66px]">
          <span
            className="material-icons-outlined  text1-gradient text-[37px] cursor-pointer"
            onClick={handleback}
          >
            keyboard_backspace
          </span>
          
          <p className="text1-gradient text-[18px] font-bold cursor-pointer flex">
            Search Users
          </p>
        </div>
        <div className="px-4">
        <hr className="border-primary_container border-2 mb-4" />
        </div>
        <div className="flex flex-col items-center justify-center px-4 w-full">
          <div className="flex relative items-center gap-2 bg-tertiary w-full py-3 px-4  rounded-lg ">
            <span className="material-icons-outlined text1-gradient text-[27px]">
              search
            </span>
            <input
              type="text"
              name="name"
              placeholder="Search user by name & email"
              value={search}
              onKeyDown={handlekeypress}
              onChange={(e) => setsearch(e.target.value)}
              className="bg-transparent placeholder:text-secondary py-1 w-full text-white rounded-lg outline-none font-medium"
            />
          </div>
          {!isLoading ? (
            <>
            {users?.length ? (
              <div className="flex flex-col justify-center items-start w-full mt-4 gap-2">
              
              {users.map((user,index) => (
                <div key={`user-${index}`} className="flex flex-row items-center py-5 px-2 gap-4 w-full bg-tertiary  hover:btn1-gradient rounded-lg cursor-pointer" onClick={ ()=> {handlecreatechat(user._id)}}>
                 <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full  btn1-gradient  ">
                   <span className="text-primary ">{user.name.charAt(0)}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                 <p className="text-[16px] text-white  font-medium">{user.name}</p>
                 <p className="text-[12px] text-secondary  font-medium">{user.email}</p>
                 </div>
               </div>

              ))}
            </div>

            ) : (
              <div className='flex justify-center h-full items-center mt-[30vh]'>
                <p className="text-secondary text-[20px]">No such users exist</p>
              </div>

            )}
            </>
           
          ) : (
            <div className='flex justify-center h-full items-center mt-[30vh]'>
              <img src={loader} alt="loding" className='h-[50px] w-[50px]' />
            </div>
            
          )}
        </div>
      </div>
    </div>
    <div className={`fixed top-0 left-0 w-full h-full ${!sidebar ? 'hidden' : 'block'} duration-500 bg-black/50 backdrop-blur-sm z-20`}>
    </div>
    </>
  );
};

export default Sidebar;
