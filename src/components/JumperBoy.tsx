"use client";

import React from "react";
import Lottie from "lottie-react";
import JumperBoyS from "../../public/ui/b1.json";

const JumperBoy = () => {
  return (
    <div className=" scale-x-[1.6]">
      <Lottie
        animationData={JumperBoyS}
        className="h-[17rem]"
        width={"30rem"}
        height={"17rem"}
        loop={true}
      />
    </div>
  );
};

export default JumperBoy;
