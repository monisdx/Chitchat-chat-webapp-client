import React, {useEffect,useState} from 'react';
import Chatbox from "./components/Chatbox";
import Chatlist from "./components/Chatlist";
import { useSelector, useDispatch } from 'react-redux';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"


const ChatPage = () => {

  const dispatch = useDispatch();
  // const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
  // const {chats} = useSelector((state) => state.chats);
  const [chats, setChats] = useState([]);
  const [sidebar, setsidebar] = useState(false);
  


//   useEffect(()=>{
//     const getChats = async () => {
//       try {
//         const { data } = await userChats(user?.result?._id);
//         console.log(data)
//         setChats(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getChats();
//   },[user?.result?._id,setChats,chats]);

// console.log(chats);


  return (
    <div className='flex flex-col relative'>
      <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
      <div className={`top-[170px] xs:top-[64px] z-[5]  flex p-8 xl:flex-row flex-col items-center xl:gap-20 gap-4 relative ${sidebar && "opacity-20"}`}>
        <div className="flex flex-1 w-full xl:flex-[0.3] h-[81vh]">
          <Chatlist />   
        </div>
        <div className="flex flex-1 w-full xl:flex-[0.7] h-[81vh]">
          <Chatbox/>
        </div>
      </div>
      {/* <div className={`fixed left-0 top-0 h-full w-full   ${sidebar ? "backdrop-blur-sm z-20" : "z-[2]"}`}> */}
      <Sidebar sidebar={sidebar} setsidebar={setsidebar}/>   
      {/* </div>    */}
    </div>
  );
};

export default ChatPage;
