import React from "react";
import female from "../images/image-emily.jpg";
import male from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";

function Testimonials() {
  return (
    <section className=" container bg-[white] w-[375px] md:w-[1440px] mx-auto p-4 ">
      <h1 className=" text-gray text-1xl text-center font-creative font-[700] uppercase  tracking-widest md:mt-10 md:text-3xl  ">
        Client Testimonials
      </h1>
      <div className=" md:flex gap-5 md:gap-8 md:p-20 ">
        <div className=" flex flex-col justify-center items-center  ">
          <img
            src={female}
            alt=""
            className=" rounded-full w-[80px] mt-10 mb-5 "
          />
          <p className=" text-grayishblue mt-4  text-center font-creative text-[18px] ">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h2 className=" mt-7 mb-2 font-creative text-2xl font-[900] text-Verydarkdesaturatedblue ">
            Emily R.
          </h2>
          <p className=" font-Barlow   text-gray">Marketing Director</p>
        </div>

        {/*  */}

        <div className=" flex flex-col justify-center items-center  ">
          <img
            src={thomas}
            alt=""
            className=" rounded-full w-[80px] mt-10 mb-5 "
          />
          <p className=" text-grayishblue mt-4  text-center font-creative text-[18px] ">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h2 className=" mt-7 mb-2 font-creative  text-2xl font-[900] text-Verydarkdesaturatedblue ">
            Thomas S.
          </h2>
          <p className=" font-Barlow   text-gray">Chief Operating Officer</p>
        </div>

        {/*  */}

        <div className=" flex flex-col justify-center items-center  ">
          <img
            src={male}
            alt=""
            className=" rounded-full w-[80px] mt-10 mb-5 "
          />
          <p className=" text-grayishblue mt-4   text-center  font-creative text-[18px] ">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h2 className=" mt-7 mb-2 font-creative  text-2xl font-[900] text-Verydarkdesaturatedblue ">
            Jennie F.
          </h2>
          <p className=" font-Barlow   text-gray">Business Owner</p>
        </div>
      </div>

      {/*  */}
    </section>
  );
}

export default Testimonials;
