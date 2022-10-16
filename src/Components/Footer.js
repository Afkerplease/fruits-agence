import React from "react";
import twitter from "../images/icon-twitter.svg";
import tt from "../images/icon-twitter.svg";
import fb from "../images/icon-facebook.svg";
import ig from "../images/icon-instagram.svg";
import pt from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <footer className=" container bg-Darkmoderate w-[375px] mx-auto md:w-[1440px] p-20 ">
      <h1 className=" text-center text-3xl font-creative font-[900] text-darkGren md:text-4xl md:mb-10 ">
        sunnyside
      </h1>
      <div className=" flex gap-20 justify-center mt-4">
        <a href="#" className=" text-darkGren font-Barlow ">
          About
        </a>
        <a href="#" className=" text-darkGren font-Barlow ">
          {" "}
          Services{" "}
        </a>
        <a href="#" className=" text-darkGren font-Barlow ">
          Projects
        </a>
      </div>
      <div className="flex gap-10 justify-center mt-10">
        <img src={fb} alt="" />
        <img src={ig} alt="" />
        <img src={tt} alt="" />
        <img src={pt} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
