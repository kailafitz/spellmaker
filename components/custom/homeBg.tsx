import React from "react";
import { PartilceTest } from "./particles";
// import GradientCanvas from "./gradientCanvas";
// import { Particles } from "../magicui/particles";

const HomeBg = () => {
    return (
        <>
            <div className="bg-[url('/stars.png')] bg-cover w-full h-full left-0 top-0 -z-30 fixed"></div>
            {/* <Particles
                className="absolute inset-0 z-0"
                quantity={200}
                ease={20}
                color={"#000"}
            /> */}
            <PartilceTest />
            {/* <GradientCanvas /> */}
        </>
    );
};

export default HomeBg;
