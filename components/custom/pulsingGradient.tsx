import React from "react";

const PulsingGradient = (props: {
  homePage?: Boolean;
  aboutPage?: Boolean;
}) => {
  return (
    <div
      className={`absolute -z-10 ${
        props.homePage && "-bottom-[450px] h-[900px] w-[200%] -left-1/2"
      }
      ${
        props.aboutPage && "w-full aspect-square -bottom-11/12 -left-2/5"
      } bg-radial from-green-400 via-transparent to-transparent animate-fade-in-scale`}
    ></div>
  );
};

export default PulsingGradient;
