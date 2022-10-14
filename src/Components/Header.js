import React from "react";

import ArrowDown from "../images/icon-arrow-down.svg";
import NavBar from "./NavBar";

function Header() {
  return (
    <section className="  w-[375px] mx-auto  bg-phone-image md:bg-desktop-image bg-center bg-cover bg-no-repeat bg-[cyan] md:w-[1440px] md:h-[100vh] ">
      <NavBar />
      <h1 className=" font-creative font-[900] text-[white] lg:text-[5rem] lg:mt-[5%]   mt-[20%] text-[2.5rem] text-center uppercase  ml-[5%] tracking-widest   ">
        <span className="">We are </span> creatives
      </h1>
      <img
        src={ArrowDown}
        alt=""
        className=" ml-[45%] mt-[8%] lg:ml-[48%] lg:mt-[7%]   "
      />
    </section>
  );
}

export default Header;
