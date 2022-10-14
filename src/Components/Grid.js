import React from "react";
import eggPhone from "../images/mobile/image-transform.jpg";
import eggDesktop from "../images/desktop/image-transform.jpg";
import glassDesktop from "../images/desktop/image-stand-out.jpg";

function Grid() {
  return (
    <section className=" container w-[375px] mx-auto   md:w-[1440px]    ">
      {/* first picture */}

      <div className=" md:grid md:grid-cols-2  bg-[white] ">
        <picture className="order-2">
          <source media="(max-width:768px )" srcSet={eggDesktop} />
          <img src={eggPhone} alt="" className=" order-2" />
        </picture>
        <div className=" text-center p-10 md:p-20 order-1 md:text-start">
          <h2 className="font-creative  font-[900] my-5 md:text-5xl text-3xl text-Verydarkdesaturatedblue ">
            Transform your <br /> brand
          </h2>
          <p className="text-[18px] font-Barlow font-[600] mb-10 md:w-[80%] md:mt-10  text-gray ">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            className=" font-creative uppercase  underline decoration-Yellow decoration-[2px]  decoration-wavy  "
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* ************************ */}
      {/* second picture */}

      <div className=" md:grid md:grid-cols-2  bg-[white] ">
        <img src={glassDesktop} alt="" className=" order-1" />
        <div className=" text-center p-10 md:p-20 order-2 md:text-start">
          <h2 className="font-creative  font-[900] my-5 md:text-5xl text-3xl text-Verydarkdesaturatedblue ">
            Stand out to the right audience
            <br />
          </h2>
          <p className="text-[18px] font-Barlow font-[600] mb-10 md:w-[80%] md:mt-10  text-gray ">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a
            className=" font-creative uppercase  underline decoration-Softred decoration-[2px]  decoration-wavy  "
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* ************************ */}
    </section>
  );
}

export default Grid;
