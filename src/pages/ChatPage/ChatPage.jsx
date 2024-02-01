import React, {useEffect,useState} from 'react';
import Chatbox from "./components/Chatbox";
import Chatlist from "./components/Chatlist";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import GroupModel from './components/GroupModel';
import UpdateModel from './components/UpdateModel';


const ChatPage = () => {
  
  const [sidebar, setsidebar] = useState(false);
  const [groupmodel, setgroupmodel] = useState(false);
  const [updatemodel, setupdatemodel] = useState(false);

  return (
    <div className='flex flex-col relative'>
      <Navbar setsidebar={setsidebar}/>
      <div className={`top-[120px] xs:top-[64px] z-1  flex p-8 xl:flex-row flex-col items-center xl:gap-20 gap-4 relative`}>
        <div className="flex  w-full xl:flex-[0.3] h-[50vh] xl:h-[82vh]">
          <Chatlist setgroupmodel={setgroupmodel}/>   
        </div>
        <div className="flex  w-full xl:flex-[0.7] xl:h-[82vh]">
          <Chatbox  setupdatemodel={setupdatemodel}/>
        </div>
      </div>
      <UpdateModel  updatemodel={updatemodel} setupdatemodel={setupdatemodel}/>
      <GroupModel groupmodel={groupmodel} setgroupmodel={setgroupmodel}/>
      <Sidebar sidebar={sidebar} setsidebar={setsidebar}/>   
    </div>
  );
};

export default ChatPage;
