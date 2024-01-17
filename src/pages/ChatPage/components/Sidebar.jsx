import React, { useState } from "react";
import logo from "../../../assets/logo.png";

const Sidebar = ({ sidebar, setsidebar }) => {
  const [user, setuser] = useState(true);
  const [search, setsearch] = useState("");

  const handlekeypress = (e) => {
    if (e.keyCode === 13) {
      // searchpost();
    }
  };

  return (
    <div
      className={`z-40 fixed top-0 ${
        sidebar ? "left-0" : "-left-full"
      } duration-500 h-[100vh] w-full sm:w-[350px] opacity-100  bg-black-100 shadow-card`}
    >
      <div className="w-full flex flex-col  mb-4">
        <div className="flex w-full p-4 items-center gap-[66px]">
          <span
            className="material-icons-outlined  text1-gradient text-[37px] cursor-pointer"
            onClick={() => setsidebar(!sidebar)}
          >
            keyboard_backspace
          </span>
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
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
          {user ? (
            <div className="flex flex-col justify-center items-start w-full mt-4 gap-2">
              {/* <div className="h-[1px] w-full bg-secondary" /> */}
              <div className="flex flex-row items-center py-5 px-2 gap-4 w-full bg-tertiary rounded-lg cursor-pointer">
                <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient">
                  A
                </div>
                <p className="text-[16px] text-white font-medium">name</p>
              </div>
              <div className="flex flex-row items-center py-5 px-2 gap-4 w-full bg-tertiary rounded-lg cursor-pointer">
                <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient">
                  A
                </div>
                <p className="text-[16px] text-white font-medium">name</p>
              </div>
              <div className="flex flex-row items-center py-5 px-2 gap-4 w-full bg-tertiary rounded-lg cursor-pointer">
                <div className="flex justify-center items-center font-bold text-[20px] h-9 w-9 rounded-full text-primary btn1-gradient">
                  A
                </div>
                <p className="text-[16px] text-white font-medium">name</p>
              </div>
              {/* <div className="h-[2px] w-full bg-secondary" /> */}
            </div>
          ) : (
            <div className="flex items-center justify-center mt-10 text-secondary">No such user exist</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
