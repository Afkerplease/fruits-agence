import React from "react";

function Images() {
  return (
    <section>
      {/* third picture */}

      <div className=" md:grid md:grid-cols-2   ">
        <div className=" md:h-[70vh] h-[600px] text-[white] bg-ceurise bg-contain bg-no-repeat md:bg-ceuriseDesk ">
          <div className=" pt-[95%] px-4 md:pt-[60%] ">
            <h2 className="text-center font-creative text-3xl text-darkGren font-[900] mb-5  ">
              {" "}
              Graphic Design
            </h2>
            <p className=" text-darkGren font-Barlow font-[600] text-[16px] md:w-[50%] md:ml-[25%] md:text-center ">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention
            </p>
          </div>
        </div>
        <div className=" md:h-[70vh] h-[600px] text-[white] bg-photography bg-contain bg-no-repeat md:bg-photographyDesk ">
          <div className=" pt-[95%] px-4 md:pt-[60%] ">
            <h2 className="text-center font-creative text-3xl text-darkGren font-[900] mb-5  ">
              {" "}
              Photography
            </h2>
            <p className=" text-darkGren font-Barlow font-[600] text-[16px] md:w-[50%] md:ml-[25%] md:text-center ">
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
