import React from "react";
import Button from "@/components/custom/button";
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
                    <h1 className="text-large uppercase font-medium mb-4 tracking-wide">
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
                            <Button label="Summon Us" href="/summon-us" />
                        </div>
                    </div>
                </div>
            </Container>
            {/* <PulsingGradient aboutPage /> */}
        </>
    );
};

export default AboutUs;
