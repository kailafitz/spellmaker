import React from "react";
import { LinkButton } from "@/components/custom/button";
import Container from "@/components/custom/container";
import PulsingGradient from "@/components/custom/pulsingGradient";

const AboutUs: React.FC = () => {
    return (
        <>
            <Container
                topSectionPadding
                className="grid grid-cols-1 md:grid-cols-2 text-foreground font-body gap-y-10 md:gap-y-0 md:gap-x-20"
            >
                <div>
                    <h1 className="text-large uppercase font-medium mb-4 tracking-wide flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-sparkles-icon lucide-sparkles inline w-5 mr-1.5"
                        >
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                            <path d="M20 2v4" />
                            <path d="M22 4h-4" />
                            <circle cx="4" cy="20" r="2" />
                        </svg>
                        Our Story
                    </h1>
                    <h2 className="text-5xl font-medium">
                        Fueled by coffee, chaos, and an obsession with the
                        perfect shot.
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-y-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Cras aliquet
                        nibh tristique sagittis pellentesque pretium habitant
                        aliquam. Nunc lectus blandit arcu faucibus platea semper
                        ullamcorper. Donec ut velit commodo ut nunc sed nibh
                        rhoncus massa. Turpis gravida lacus ac aliquam elementum
                        adipiscing et nibh.....
                        <br />
                        <br />
                        Turpis gravida lacus ac aliquam elementum adipiscing et
                        nibh. Lorem ipsum dolor sit amet consectetur. Cras
                        aliquet nibh tristique sagittis pellentesque pretium
                        habitant aliquam. Nunc lectus blandit arcu faucibus
                        platea semper ullamcorper.
                    </p>
                    <div className="grid grid-cols-1 gap-y-5">
                        <h2 className="text-4xl font-medium">
                            No Crystal Ball Needed—
                            <br />
                            Just Say Hello
                        </h2>
                        <p>
                            From the spark of imagination to the final frame,
                            get in touch and let’s create something truly
                            spellbinding together.
                        </p>
                        <div>
                            <LinkButton label="Summon Us" href="/summon-us" />
                        </div>
                    </div>
                </div>
            </Container>
            {/* <PulsingGradient aboutPage /> */}
        </>
    );
};

export default AboutUs;
