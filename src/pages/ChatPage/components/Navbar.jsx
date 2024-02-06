import React,{ useState, useEffect } from 'react'
import logo from '../../../assets/logo.png'
import { useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { socket } from './Chatbox';

const Navbar = ({setsidebar}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));
   


    const logout = () => {
        dispatch({type: 'LOGOUT'});
        socket?.disconnect();
        navigate('/');
        setuser(null);
      }
    
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = jwtDecode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
    
        setuser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

  return (
    <nav className={`paddingx w-full flex items-center py-3 fixed top-0 z-10 bg-black-100 shadow-card `}>
    <div className='w-full flex flex-col xs:flex-row gap-4 xs:gap-0 justify-between items-center mx-auto'>
      <span className="material-icons-outlined  text1-gradient text-[37px] cursor-pointer mr-8 absolute left-[12px] xs:relative" onClick={()=>setsidebar(true)}>manage_search</span>
      <div className='flex items-center gap-2'  >
        <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
        <p className='text1-gradient text-[18px] font-bold cursor-pointer flex'>
          Chichat
       </p>
      </div>
      <div className="flex justify-center gap-8 items-center">
          <>
          <div className='flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient'>{user?.result.name.charAt(0)}</div>
          <p className='text1-gradient text-[18px] font-bold cursor-pointer'>
          {user?.result.name}
          </p>
          <button type='button' className='px-6 py-2 font-medium text-[18px] rounded-[30px] text-primary btn1-gradient duration-500 hover:bg-right outline-none border-none' onClick={logout} >
          <span className="material-icons-outlined flex">logout</span>
          </button>
          </>
      </div>
    </div>
  </nav>
  )
}

export default Navbar