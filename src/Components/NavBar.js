import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function NavBar() {
  const [clicked, setClicked] = useState(false);
  return (
    <section className=" container w-[375px] md:w-[1440px] mx-auto ">
      <nav className=" p-5 flex items-center justify-between md:p-10  md:justify-between   ">
        <img src={logo} alt="" />
        <ul className="hidden  gap-10 md:flex  mr-10  items-center  ">
          <li className=" text-[white]  font-Barlow text-[1.2rem]  font-[600] ">
            <a href="#">About</a>{" "}
          </li>
          <li className=" text-[white] font-barlow font-[600]  text-[1.2rem] ">
            {" "}
            <a href="#">Services</a>{" "}
          </li>
          <li className=" text-[white] text-[1.2rem] font-barlow font-[600] ">
            <a href="#"> Projects</a>
          </li>
          <li className=" text-black px-5 py-4 font-creative font-[700]  bg-[white] uppercase rounded-[20px]  ">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button
          className="md:hidden"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {" "}
          {clicked ? (
            <FaWindowClose className=" text-3xl text-[white] " />
          ) : (
            <img src={hamburger} />
          )}
        </button>
      </nav>
      {clicked && (
        <div className="w-[100%] bg-[white] h-[300px] md:hidden ">
          <ul className="  flex justify-center flex-col gap-5 pt-10   items-center  ">
            <li className=" text-gray  font-Barlow text-[1.2rem]  font-[600] ">
              <a href="#">About</a>{" "}
            </li>
            <li className=" text-gray font-barlow font-[600]  text-[1.2rem] ">
              {" "}
              <a href="#">Services</a>{" "}
            </li>
            <li className=" text-gray text-[1.2rem] font-barlow font-[600] ">
              <a href="#"> Projects</a>
            </li>
            <li className=" text-black px-5 py-4 font-creative font-[700] text-[black]  bg-Yellow uppercase rounded-[20px]  ">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default NavBar;
