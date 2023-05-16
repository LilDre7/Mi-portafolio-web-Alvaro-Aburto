import React from "react";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // * State para el el dark de la website * //
  const [isDark, setIsDark] = useState(false);
  const [checked, setChecked] = useState(false);

  // * State para el nav responsive * //
  const [isShowNav, setIsShowNav] = useState(false);

  // Funcion para darle vida a mi nav responsive
  const handleClick = () => {
    setIsShowNav(!isShowNav);
  };

  // * Effect para el el dark de la website * //
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "oscuro");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "claro");
    }
  }, [isDark]);

  const handleChangeTheme = (nextChecked) => {
    setIsDark((isDark) => !isDark);
    setChecked(nextChecked);
  };

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full dark:border-b-4 dark:border-white/5 h-[50px] sm:mx-auto bg-[#f4ede400] border-b-4 border-white border-opacity-75 dark:text-white 
    opacity-[10px] backdrop-blur-md dark:bg-black/5 dark:border-opacity-[10px] transition-all duration-200 ease-in-out"
    >
      <article className="nav sm:max-w-[100%] lg:max-w-[80%] flex justify-between items-center p-2 text-black relative md:mx-auto dark:text-white opacity-[10px] backdrop-blur-md ">
        <div className="flex items-center gap-2 hover:text-blue-600 hover:scale-110 hover:translate-x-2 transition-all hover:duration-200">
          <NavLink to="/">
            <i className="bx bxl-baidu text-2xl rotate-[-16deg] hover:rotate-[16deg] duration-200 transition-all "></i>
            <span className="text-xl font-bold ml-1">Lil Dree</span>
          </NavLink>
        </div>

        <div className="flex justify-center mt-[-3px] sm:mt-0 items-center gap-2 md:order-4">
          <div>
            <ReactSwitch
              onChange={handleChangeTheme}
              checked={checked}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={35}
              uncheckedIcon={
                <span className="flex justify-center items-center h-full">
                  <i className="bx bx-moon text-xl"></i>
                </span>
              }
              checkedIcon={
                <span className="flex justify-center items-center h-full pl-2">
                  <i className="bx bx-sun text-xl"></i>
                </span>
              }
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={30}
              width={60}
              className=""
              id="material-switch"
            />
          </div>
          <i
            onClick={handleClick}
            className="bx bx-menu md:hidden cursor-pointer bg-slate-400/25 p-1 rounded-[3px] text-xl"
          ></i>
        </div>
        <nav
          className={` text-white absolute top-full ${
            isShowNav
              ? "left-0 z-50 min-h-screen dark:text-white"
              : "-left-full"
          } duration-300 flex flex-col gap-5 text-black bg-[#f4ede4] min-h-screen w-full justify-center items-center text-3xl md:static md:flex md:flex-row md:gap-10 md:w-auto md:min-h-0 md:bg-transparent md:dark:md:bg-transparent dark:bg-[#0b0b0bf8] md:jus md:text-base md:items-center md:text-black md:p-0 dark:text-white}`}
        >
          <NavLink
            to="/"
            onClick={handleClick}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black/40 hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:border-white sm:hidden"
                : "hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all text-black dark:border-white dark:text-white sm:hidden"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Proyects"
            onClick={handleClick}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black/40 hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:border-white"
                : "hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all text-black dark:border-white dark:text-white"
            }
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/Diseños"
            onClick={handleClick}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black/40 hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:border-white"
                : "hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:border-white text-black dark:text-white"
            }
          >
            Room
          </NavLink>
          <NavLink
            to="/Stack"
            onClick={handleClick}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-black/40 hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:border-white"
                : "hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:border-white text-black dark:text-white"
            }
          >
            Habilidades
          </NavLink>

          {/* <a
            href="#"
            className="hover:border-b-4 border-black hover:bg-blue-300 rounded-md tracking-widest p-1 duration-200 transition-all dark:text-white text-black dark:border-white"
          >
            View Source
          </a> */}
        </nav>
      </article>
    </header>
  );
};

export default Nav;
