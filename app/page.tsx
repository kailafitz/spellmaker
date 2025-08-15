import Button from "@/components/custom/button";
import Container from "@/components/custom/container";
import HomeBg from "@/components/custom/homeBg";
import PulsingGradient from "@/components/custom/pulsingGradient";
import TitleText from "@/components/custom/titleText";

export default function Home() {
    return (
        <>
            {/* <div className="text-center w-full bg-[url('https://images.unsplash.com/photo-1625690303837-654c9666d2d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-full h-full left-0 top-0 -z-10 fixed"> */}
            <div className="flex flex-1 flex-col justify-center">
                <TitleText />
                <Container className="flex flex-row gap-12 justify-center">
                    <Button label="About Us" href="/about" />
                    <Button label="Productions" href="/productions" />
                </Container>
            </div>
            {/* <PulsingGradient homePage /> */}
        </>
    );
}
