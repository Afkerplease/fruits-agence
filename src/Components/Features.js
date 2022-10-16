import React from "react";
import cone from "../images/mobile/image-gallery-cone.jpg";
import milk from "../images/mobile/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import cube from "../images/mobile/image-gallery-sugar-cubes.jpg";

function Features() {
  return (
    <section className=" container w-[375px] md:w-[1440px] mx-auto ">
      <div className="grid md:grid-cols-4 grid-cols-2 ">
        <img src={milk} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={cube} alt="" />
      </div>
    </section>
  );
}

export default Features;
