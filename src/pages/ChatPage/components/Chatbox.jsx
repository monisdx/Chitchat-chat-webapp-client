import React, { useState, useRef, useEffect } from "react";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import loader from "../../../assets/loader.svg";
import { addmessage, getmessage } from "../../../actions/message";
import io from "socket.io-client";

// const ENDPOINT = "https://chitchat-server.vercel.app";
const ENDPOINT = "http://localhost:5000"

var socket, selectedchatcompare;


export {socket};

const Chatbox = ({ setupdatemodel }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const messageRef = useRef();
  const [message, setmessage] = useState("");
  const [socketConnected, setsocketConnected] = useState(false);
  const [onlineusers, setonlineusers] = useState([]);
  const [online, setonline] = useState(false);
  const [typing, settyping] = useState(false);
  const [istyping, setistyping] = useState(false);
  const { chat1 } = useSelector((state)=> state.chats);
  const { messages, msg, isLoading } = useSelector((state) => state.messages);

  
console.log(isLoading);
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('setup', user?.result);
    socket.on('connected', ()=> setsocketConnected(true));
    socket.on('typing', ([u, chat])=> {
      console.log(user?.result?._id);
      console.log(u);
      if(user?.result?._id !== u){
        console.log(u);
        setistyping(true);
      }
     
    });
    socket.on('stop typing', ([u, chat])=>{
      console.log(user?.result?._id);
      console.log('call');
      console.log(u);
      if(user?.result?._id !== u){
        setistyping(false);
      }
     
     
    });

  }, []);

 
 useEffect(()=>{
 
  socket.on('get online users',(users)=>{
    setonlineusers(users);
    
  });

 },[chat1]);

 useEffect(()=>{

  
  
  const chatmembers = chat1?.users?.find((u)=> u?._id !== user?.result?._id);
  const online = onlineusers?.find((u)=>u?.userId === chatmembers?._id );
  if(online){
    setonline(true);
  }else{
    
    setonline(false)
  }

 },[onlineusers,chat1]);


  useEffect (() => {

    if(chat1 !== null){
     
     dispatch(getmessage(chat1?._id))
   
    }

  }, [chat1]);


  useEffect(()=>{

    if(msg){
      socket.emit('new message', msg);
    }

  },[msg]);

  useEffect(()=> {

    messageRef?.current?.scrollIntoView({behavior: 'smooth'})
    

  },[messages])


  useEffect(()=>{
    
    
    socket.on('message received', (newmessagereceived)=>{
      
      if(!selectedchatcompare || selectedchatcompare?._id !== newmessagereceived?.chatId?._id){
        //give notification
      }
      else{
          dispatch({type: 'ADD_NEWMESSAGE', payload:newmessagereceived});
      }

      }
    )
  },[]);

  useEffect(()=>{
    if(chat1){
      selectedchatcompare = chat1;
      socket.emit('join chat', chat1?._id);
      
    }

  },[chat1]);

  const handlesend = () => {
   if(!message.trim())
   return;

    dispatch(addmessage(message, chat1?._id))
    setmessage(""); 

  };

  const handlechange = (e) => {
    setmessage(e.target.value);
    if(!socketConnected) return;

    if(!typing){
      settyping(true);
      socket.emit('typing', [user?.result?._id , chat1]);
    }

    const lasttypingtime = new Date().getTime();
    const timerlength = 3000;

    setTimeout(()=>{
      const timenow = new Date().getTime();
      const timediff = timenow - lasttypingtime;

      if(timediff >= timerlength && typing){
        socket.emit('stop typing', [user?.result?._id, chat1]);
        settyping(false);
      }

    }, 3000);

  }
  
  return (
    <div className="flex flex-col justify-between chat_gradient w-full rounded-[30px]">
      {chat1 ? (
        <>
          <div className="flex items-center gap-4 z-1 py-4 px-6  rounded-t-[30px] relative">
            {chat1?.isgroupchat ? (
              <>
                <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary my_msg">
                  {chat1.chatname.charAt(0)}
                </div>
                <div className="flex flex-col">
                <p className="text-[16px] text-white font-medium">
                  {chat1.chatname}
                </p>
                <p className='text-[12px] text-secondary font-medium'>{chat1?.users?.length} members</p>
                </div>
                <span
                  className="material-icons-outlined text1-gradient text-[30px] right-0 absolute px-6 cursor-pointer"
                  onClick={() => setupdatemodel(true)}
                >
                  edit
                </span>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary my_msg">
                  {chat1.users[0]._id === user?.result?._id
                    ? chat1.users[1].name.charAt(0)
                    : chat1.users[0].name.charAt(0)}
                </div>
                <div className="flex flex-col">
                <p className="text-[16px] text-white font-medium">
                  {chat1.users[0]._id === user?.result?._id
                    ? chat1.users[1].name
                    : chat1.users[0].name}
                </p>
                { istyping ? (<p className='text-[12px] text-secondary font-medium'>typing...</p>) : (
                  online ? (<p className='text-[12px] text-secondary font-medium'>online</p>) : (<></>)
                  
                )}
                </div>
              </>
            )}
          </div>
          <div className="h-[64vh] relative">
            <div className="bg-chat-pattern h-full absolute inset-0 opacity-10 bg-contain"></div>
            <div className="relative inset-0 flex flex-col gap-1 px-4  overflow-auto scrollbar_style h-full">
              {!isLoading ? (
                <>
                  <div className='flex flex-col gap-1 justify-end'>
                  {messages?.length ? (
                    messages.map((message, i) => (
                      <div
                        key={i}
                        className={`flex ${
                          message?.sender?._id === user?.result?._id
                            ? "justify-end"
                            : "justify-start"
                        }  items-center w-full`}
                      >
                        <div
                          className={`flex flex-col justify-center gap-1 max-w-[60%] p-2 rounded-lg ${
                            message?.sender?._id === user?.result?._id
                              ? "my_msg"
                              : "bg-tertiary"
                          } fixcontent`}
                        >
                          <p
                            className={`${
                              chat1?.isgroupchat &&
                              message?.sender?._id !== user?.result?._id
                                ? "block"
                                : "hidden"
                            } text-purple`}
                          >
                            {message?.sender?.name}
                          </p>
                          <p className="text-white text-[14px] ">
                            {message.text}
                          </p>
                          <p className="text-secondary text-[10px] ">
                            {moment(message.createdAt).calendar()}
                          </p>
                        </div>
                      </div>
                    ))
                   
                  ) : (
                    <div></div>
                  )}
                   <div ref={messageRef}/>
                </div>
                </>
              ) : (
                <div className="flex justify-center h-full items-center">
                  <img
                    src={loader}
                    alt="loding"
                    className="h-[50px] w-[50px]"
                  />
                </div>
              )}
            </div>
          </div>
          <div
            className={`flex justify-between items-center p-4 ${
              message && "gap-4"
            } bg-black-100 rounded-b-[30px]`}
          >
            <div
              className={`flex justify-center items-center bg-tertiary rounded-[30px] w-full py-3 px-6 gap-4`}
            >
              {/* <span className="material-icons-outlined text1-gradient text-[30px] cursor-pointer ">
              sentiment_satisfied_alt
              </span>
             */}
              <input
                type="text"
                name="message"
                placeholder="Type a message"
                value={message}
                onChange={handlechange}
                className="bg-transparent placeholder:text-secondary w-full  text-white  outline-none font-medium"
              />
            
            </div>
            <button onClick={handlesend}>
              <span
                className={`material-icons-round text1-gradient text-[35px]`}
                disabled={!message.length}
              >
                send
              </span>
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center h-[50vh] xl:h-full items-center ">
          <p className="text-secondary text-[20px]">
            Select user to start chatting
          </p>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
