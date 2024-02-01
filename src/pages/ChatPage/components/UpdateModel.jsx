import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import { useDispatch , useSelector } from 'react-redux';
import { getUsersBySearch } from "../../../actions/user";
import { renamegroupchat, addgroupchat, removegroupchat } from "../../../actions/chat";
import loader from '../../../assets/loader.svg';

const UpdateModel = ({ updatemodel, setupdatemodel}) => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'))
    const {users,isLoading} = useSelector((state)=> state.users);
    const {chat,chat1} = useSelector((state)=>state.chats);
    const [selectedusers, setselectedusers] = useState([]);
    const [name, setname] = useState('');
    const [search, setsearch] = useState('');
    
    useEffect(()=>{
        if(chat1){
            setname(chat1?.chatname);
            setselectedusers(chat1?.users);
        }
      },[chat1]);
  
  
    const handlekeypress = (e) => {
      if (e.keyCode === 13) {
        
        searchpost();
      }
    };
  
    const handleback = () => {
      
      setupdatemodel(!updatemodel);
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
  
    const handlerename = async() => {
    
      await dispatch(renamegroupchat(chat1?._id,name));
   
      handleback();
    
    }

    const handleadd = async(id) => {

      if(chat1?.users.find((u)=>u._id === id)){
        
        return
      }
      
      await dispatch(addgroupchat(chat1?._id,id))

     handleback();
      
      
    }

    const handleremove = async(id) => {

      if(chat1?.groupAdmin?._id !== user?.result?._id && user?.result?._id !== id ){
      
        return
      }
  
      await dispatch(removegroupchat(chat1?._id,id))

   
      handleback();

    }
    

    return (
      <div className={` flex fixed top-0 left-0 w-full h-full  justify-center items-center ${updatemodel ? 'opacity-100 z-20' : 'opacity-0 z-[-1]' }  bg-black/50 backdrop-blur-sm duration-500 shadow-card`}>
        <div className={`relative flex flex-col justify-center items-center bg-black-100 p-4 w-[500px] rounded-xl ${updatemodel ? '' : 'scale-50'} duration-500 `}>
            <p className='text-white text-[25px] font-medium'> Update Group Chat </p>
            <div  className='flex flex-col w-full mt-4 gap-2'>
              <label className='flex gap-4'>
              <input
                type="text"
                name="name"
                placeholder=" Group name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="bg-tertiary placeholder:text-secondary p-3 w-full text-white rounded-lg outline-none font-medium"
              />
               <button  className=" p-3 font-medium rounded-lg text-primary btn1-gradient duration-500 hover:bg-right outline-none border-none" onClick={handlerename}>
                 Update
              </button>
        
              </label>
              {chat1?.groupAdmin?._id === user?.result?._id && (
                <label className='flex flex-col'>
                <input
                  type="text"
                  name="username"
                  placeholder=" Search users"
                  value={search}
                  onKeyDown={handlekeypress}
                  onChange={(e) => setsearch(e.target.value)}
                  className="bg-tertiary placeholder:text-secondary p-3 w-full text-white rounded-lg outline-none font-medium"
                />
                </label>
              )}
              <div className={` flex flex-wrap items-center gap-2 bg-tertiary w-full px-3 py-2 rounded-lg`}>
                {selectedusers?.map((user)=>(
                   <div key={user._id}  className='flex gap-2 rounded-xl btn1-gradient px-2 py-1'>
                      <span className='text-primary font-medium'>{user.name}</span>
                      <span className="material-icons text-primary cursor-pointer" onClick={()=>handleremove(user._id)}>cancel</span>
                   </div>
                ))}
                
              </div>
              
            {!isLoading ? (
              <>
              {users?.length ? (
                <div className="flex flex-col justify-center items-start w-full mt-4 gap-2">
                {users.map((user,index) => (
                  <div key={`user-${index}`} className="flex flex-row items-center py-3 px-2 gap-4 w-full bg-tertiary group hover:btn1-gradient rounded-lg cursor-pointer" onClick={()=>{handleadd(user._id)}}>
                   <div className="flex justify-center items-center font-bold text-[15px] h-6 w-6 rounded-full group-hover:black-gradient btn1-gradient  ">
                     <span className="text-primary group-hover:text1-gradient ">{user.name.charAt(0)}</span>
                   </div>
                   <div className="flex flex-col gap-0">
                   <p className="text-[12px] text-white group-hover:text-primary  font-medium">{user.name}</p>
                   <p className="text-[8px] text-secondary group-hover:text-primary font-medium">{user.email}</p>
                   </div>
                 </div>
  
                ))}
              </div>
  
              ) : (
                <>
                {chat1?.groupAdmin?._id === user?.result?._id && (
                  <div className='flex justify-center h-full items-center'>
                  <p className="text-secondary text-[20px]">no results</p>
                  </div>
                )}
                </>
              )}
              </>
             
            ) : (
              <div className='flex justify-center h-full items-center'>
                <img src={loader} alt="loding" className='h-[50px] w-[50px]' />
              </div>
              
            )}
            <div className='flex justify-end'>
            <button  className=" p-3 font-medium rounded-lg text-primary btn1-gradient duration-500 hover:bg-right outline-none border-none" onClick={()=>handleremove(user._id)}>
              leave
            </button>
            </div>
            </div>
  
            <span className="material-icons-outlined absolute right-0 top-0 px-4 py-4 text-white cursor-pointer" onClick={handleback}>close</span>
          
  
        </div>
      </div>
    )
}

export default UpdateModel