import React from "react";

function Images() {
  return (
    <section className=" container w-[375px] mx-auto md:w-[1440px] bg-[red] ">
      {/* third picture */}

      <div className=" md:grid md:grid-cols-2   ">
        <div className=" h-[650px] bg-ceurise bg-cover bg-center bg-no-repeat md:bg-ceuriseDesk relative ">
          <div className=" pt-[120%] md:pt-[65%] ">
            <h2 className="text-center font-creative text-3xl text-darkGren font-[900] mb-5   ">
              {" "}
              Graphic Design
            </h2>
            <p className=" text-center text-darkGren font-Barlow font-[600] text-[16px] md:w-[50%] md:ml-[25%] md:text-center  ">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention
            </p>
          </div>
        </div>
        <div className=" h-[650px] bg-center bg-photography bg-cover bg-no-repeat md:bg-photographyDesk ">
          <div className=" pt-[120%]  md:pt-[65%]  ">
            <h2 className="text-center font-creative text-3xl text-darkGren font-[900] mb-5  ">
              {" "}
              Photography
            </h2>
            <p className=" text-center text-darkGren font-Barlow font-[600] text-[16px] md:w-[50%] md:ml-[25%] md:text-center ">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>

      {/* ************************ */}
    </section>
  );
}

export default Images;
