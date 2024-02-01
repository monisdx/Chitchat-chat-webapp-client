import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { getUsersBySearch } from "../../../actions/user";
import { creategroupchat } from "../../../actions/chat";
import loader from '../../../assets/loader.svg';

const GroupModel = ({groupmodel, setgroupmodel}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {users,isLoading} = useSelector((state)=> state.users);
  const [selectedusers, setselectedusers] = useState([]);
  const [name, setname] = useState('');

  const [search, setsearch] = useState('');


  const handlekeypress = (e) => {
    if (e.keyCode === 13) {
      searchpost();
    }
  };

  const handleback = () => {
    
    setgroupmodel(!groupmodel);
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
  const handlegroup = (user) => {
    
  
    if(selectedusers.includes(user))
    return;

    setselectedusers([...selectedusers, user]);
  }
  const removeuser = (id) => {
    setselectedusers(selectedusers.filter((user) => user._id!==id));
  }
 

  
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(selectedusers.length<2){
      return;
    }
    const form ={name: name, users: selectedusers.map((u)=>u._id)}

    dispatch(creategroupchat(form));
    
    navigate('/chat');
    setsearch('');
    dispatch({type:'RESET_USERS'});

  }
  return (
    <div className={` flex fixed top-0 left-0 w-full h-full  justify-center items-center ${groupmodel ? 'opacity-100 z-20' : 'opacity-0 z-[-1]' }  bg-black/50 backdrop-blur-sm duration-500 shadow-card`}>
      <div className={`relative flex flex-col justify-center items-center bg-black-100 p-4 w-[500px] rounded-xl ${groupmodel ? '' : 'scale-50'} duration-500 `}>
          <p className='text-white text-[25px] font-medium'> Create Group Chat </p>
          <form onSubmit={handlesubmit} className='flex flex-col w-full mt-4 gap-2'>
            <label className='flex flex-col'>
            <input
              type="text"
              name="name"
              placeholder=" Group name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="bg-tertiary placeholder:text-secondary p-3 w-full text-white rounded-lg outline-none font-medium"
            />
            </label>
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
            <div className={`${selectedusers.length ? 'flex' : 'hidden'}  flex-wrap items-center gap-2 bg-tertiary w-full px-3 py-2 rounded-lg`}>
              {selectedusers.map((user,index)=>(
                 <div key={user._id}  className='flex gap-2 rounded-xl btn1-gradient px-2 py-1'>
                    <span className='text-primary font-medium'>{user.name}</span>
                    <span className="material-icons text-primary cursor-pointer" onClick={()=>removeuser(user._id)}>cancel</span>
                 </div>
              ))}
              
            </div>
            
          {!isLoading ? (
            <>
            {users?.length ? (
              <div className="flex flex-col justify-center items-start w-full mt-4 gap-2">
              {users.map((user,index) => (
                <div key={`user-${index}`} className="flex flex-row items-center py-3 px-2 gap-4 w-full bg-tertiary group hover:btn1-gradient rounded-lg cursor-pointer" onClick={()=>{handlegroup(user)}}>
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
              <div className='flex justify-center h-full items-center'>
                <p className="text-secondary text-[20px]">no results</p>
              </div>

            )}
            </>
           
          ) : (
            <div className='flex justify-center h-full items-center'>
              <img src={loader} alt="loding" className='h-[50px] w-[50px]' />
            </div>
            
          )}
          <div className='flex justify-end'>
          <button type="submit" className=" p-3 font-medium rounded-lg text-primary btn1-gradient duration-500 hover:bg-right outline-none border-none">
            Create chat
          </button>
          </div>
          </form>

          <span className="material-icons-outlined absolute right-0 top-0 px-4 py-4 text-white cursor-pointer" onClick={handleback}>close</span>
        

      </div>
    </div>
  )
}

export default GroupModel