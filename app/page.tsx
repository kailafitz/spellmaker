import Button from "@/components/custom/button";
import Container from "@/components/custom/container";
import TitleText from "@/components/custom/titleText";

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col justify-center">
                <TitleText />
                <Container className="flex flex-row gap-12 justify-center">
                    <Button label="Our Story" href="/our-story" />
                    <Button label="Our Creations" href="/our-creations" />
                </Container>
            </div>
            {/* <PulsingGradient homePage /> */}
        </>
    );
}
