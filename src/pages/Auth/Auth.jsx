import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import {signin, signup} from '../../actions/auth'
import loader from '../../assets/loaderblack.svg';

const Auth = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isSignup, setisSignup] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [showcpassword, setshowcpassword] = useState(false);
  const {isLoading} = useSelector((state)=> state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(isLoading);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
  };

  const switchmode = () => {
    setisSignup((prev) => !prev);
    setform({ name: "", email: "", password: "", confirmpassword: "" });
  };

  return (
    <div className={`flex flex-[0.4] flex-col bg-black-100  p-8 gap-6 rounded-[30px] `}>
      <div className="flex justify-center items-center mt-6 gap-2">
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text1-gradient text-[18px] font-bold cursor-pointer flex">
          ChitChat
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex p-2 flex-col mt-5 gap-8">
        {isSignup && (
          <label className="flex flex-col relative">
            <input
              type="text"
              name="name"
              required="required"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary duration-500 peer py-4 px-6 text-white rounded-lg outline-none 
          focus:ring-1 valid:ring-1 valid:ring-[#fff] focus:ring-[#fff] font-medium"
            />
            <span
              className="text-secondary duration-500 left-0 peer-valid:text-white 
        peer-valid:translate-x-[13px] peer-valid:translate-y-[-9px] peer-valid:text-[13px] peer-valid:px-2
         peer-valid:bg-tertiary peer-valid:py-0 peer-focus:text-white peer-focus:translate-x-[13px] 
         peer-focus:translate-y-[-9px] peer-focus:text-[13px] peer-focus:px-2 peer-focus:bg-tertiary 
         peer-focus:py-0 px-6 py-4 absolute font-medium pointer-events-none"
            >
              Name
            </span>
            <span className="material-icons-outlined peer-focus:text-[#fff] peer-active:text-[#fff] right-0 px-6 py-4 absolute cursor-pointer text-secondary">
              account_circle
            </span>
          </label>
        )}
        <label className="flex flex-col relative">
          <input
            type="email"
            name="email"
            required="required"
            value={form.email}
            onChange={handleChange}
            className="bg-tertiary duration-500 peer py-4 px-6 text-white rounded-lg outline-none
             focus:ring-1  valid:ring-1 valid:ring-[#fff] focus:ring-[#fff] font-medium"
          />
          <span
            className="text-secondary peer-valid:z-[1] duration-500 left-0 peer-valid:text-white 
          peer-valid:translate-x-[13px] peer-valid:translate-y-[-9px] peer-valid:text-[13px] peer-valid:px-2
           peer-valid:bg-tertiary peer-valid:py-0 peer-focus:text-white peer-focus:translate-x-[13px] 
           peer-focus:translate-y-[-9px] peer-focus:text-[13px] peer-focus:px-2 peer-focus:bg-tertiary 
           peer-focus:py-0 px-6 py-4 absolute font-medium pointer-events-none"
          >
            Email
          </span>
          <span className="material-icons-outlined peer-focus:text-[#fff] peer-active:text-[#fff] right-0 px-6 py-4 absolute cursor-pointer text-secondary">
            alternate_email
          </span>
        </label>
        <label className="flex flex-col relative">
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            required="required"
            value={form.password}
            onChange={handleChange}
            className="bg-tertiary duration-500 peer py-4 px-6 text-white rounded-lg outline-none focus:ring-1  valid:ring-1 valid:ring-[#fff] focus:ring-[#fff] font-medium"
          />
          <span
            className="text-secondary peer-valid:z-[1] duration-500 left-0 peer-valid:text-white 
          peer-valid:translate-x-[13px] peer-valid:translate-y-[-9px] peer-valid:text-[13px] peer-valid:px-2
           peer-valid:bg-tertiary peer-valid:py-0 peer-focus:text-white peer-focus:translate-x-[13px] 
           peer-focus:translate-y-[-9px] peer-focus:text-[13px] peer-focus:px-2 peer-focus:bg-tertiary 
           peer-focus:py-0 px-6 py-4 absolute font-medium pointer-events-none"
          >
            Password
          </span>
          <span
            className="material-icons-outlined peer-focus:text-[#fff] peer-active:text-[#fff] right-0 px-6 py-4 absolute cursor-pointer text-secondary"
            onClick={() => setshowpassword(!showpassword)}
          >
            {showpassword ? "visibility" : "visibility_off"}
          </span>
        </label>
        {isSignup && (
          <label className="flex flex-col relative">
            <input
              type={showcpassword ? "text" : "password"}
              name="confirmpassword"
              required="required"
              value={form.confirmpassword}
              onChange={handleChange}
              className="bg-tertiary duration-500 peer py-4 px-6 text-white rounded-lg outline-none focus:ring-1  valid:ring-1 valid:ring-[#fff] focus:ring-[#fff] font-medium"
            />
            <span
              className="text-secondary peer-valid:z-[1] duration-500 left-0 peer-valid:text-white 
          peer-valid:translate-x-[13px] peer-valid:translate-y-[-9px] peer-valid:text-[13px] peer-valid:px-2
           peer-valid:bg-tertiary peer-valid:py-0 peer-focus:text-white peer-focus:translate-x-[13px] 
           peer-focus:translate-y-[-9px] peer-focus:text-[13px] peer-focus:px-2 peer-focus:bg-tertiary 
           peer-focus:py-0 px-6 py-4 absolute font-medium pointer-events-none"
            >
              Confirm Password
            </span>
            <span
              className="material-icons-outlined peer-focus:text-[#fff] peer-active:text-[#fff] right-0 px-6 py-4 absolute cursor-pointer text-secondary"
              onClick={() => setshowcpassword(!showcpassword)}
            >
              {showcpassword ? "visibility" : "visibility_off"}
            </span>
          </label>
        )}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full flex justify-center px-4 py-2 font-medium text-[18px] rounded-[10px] text-primary btn1-gradient duration-500 hover:bg-right outline-none border-none"
          >
            {isLoading ? (
                  <img src={loader} alt="loding" className='h-[27px] w-[27px]' />
            ) : (
              <span>{isSignup ? "Sign Up" : "Sign In"}</span>
            )}
          </button>
        </div>
      </form>

      <div className="flex justify-center items-center">
        <button
          className=" px-4 py-2 font-medium text-[18px] rounded-[10px] text1-gradient cursor-pointer  outline-none border-none"
          onClick={switchmode}
        >
          {isSignup
            ? `Already have an account? Sign In`
            : `Dont't have an account? Sign up`}
        </button>
      </div>
    </div>
  );
};

export default Auth;
