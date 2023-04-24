import React from "react";
import header2 from "../images/header-02.png";
import person2 from "../images/person-02.png";
import teamhero from "../images/team-hero.jpeg";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${teamhero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[100vh]  "
    >
      <div className="bg-yellow-300/30 z-[2] h-[100vh] w-[100%]">
        <h1
          className=" p-4 font-bold text-white"
          style={{
            fontWeight: "700",
            fontSize: "14rem",
          }}
        >
          LET'S GO
        </h1>
        <h1
          className="p-4 font-bold text-white"
          style={{
            fontWeight: "700",
            fontSize: "10rem",
          }}
        >
          Seals
        </h1>

        <div className="flex gap-12 p-4">
          <p className="bg-yellow-300 px-6 py-4 font-bold ">Matches</p>
          <p className="bg-yellow-300 px-6 py-4 font-bold ">Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
