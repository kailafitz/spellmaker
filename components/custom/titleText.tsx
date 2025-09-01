import Container from "@/components/custom/container";
import React from "react";
import Logo from "./logo";

const TitleText = () => {
    return (
        // Clarity on text, no shadows
        // Reference film more, question the starry features/ animations
        // 
        <>
            <Container className="text-4xl justify-center text-center text-white uppercase mb-10">
                <h2 className="font-heading text-white">
                    We don&#39;t just tell stories- we cast them
                </h2>
            </Container>
            <div className="relative">
                <Logo className="w-[95%] mx-auto -z-10 relative mb-20" />
                {/* <h1 className="uppercase text-center text-[200px] font-medium font-heading bg-gradient-to-b from-white via-white to-75% to-indigo-950 bg-clip-text text-transparent">
                    Spellmaker
                </h1> */}
                {/* <div className="w-full h-24 absolute bottom-0 right-0 z-20 bg-gradient-to-b from-transparent to-indigo-950"></div> */}
            </div>
        </>
    );
};

export default TitleText;
