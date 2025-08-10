import Button from "@/components/custom/button";
import Container from "@/components/custom/container";
import HomeBg from "@/components/custom/homeBg";
import PulsingGradient from "@/components/custom/pulsingGradient";

export default function Home() {
  return (
    <>
      {/* <div className="text-center w-full bg-[url('https://images.unsplash.com/photo-1625690303837-654c9666d2d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-full h-full left-0 top-0 -z-10 fixed"> */}
      <div className="flex flex-1 flex-col justify-center">
        <Container className="text-4xl justify-center text-center text-white uppercase">
          <h2 className="font-heading bg-gradient-to-b from-white via-white to-80% to-indigo-950 bg-clip-text text-transparent">
            We don't just tell stories- we cast them
          </h2>
        </Container>
        <div className="relative">
          <h1 className="uppercase text-center text-[200px] font-medium font-heading bg-gradient-to-b from-white via-white to-75% to-indigo-950 bg-clip-text text-transparent">
            Spellmaker
          </h1>
          {/* <div className="w-full h-24 absolute bottom-0 right-0 z-20 bg-gradient-to-b from-transparent to-indigo-950"></div> */}
        </div>
        {/* <div className="flex flex-col justify-center">
          <img src="/SPELLMAKER.svg" className="w-full h-auto mx-auto" />
        </div> */}
        <Container className="flex flex-row gap-12 justify-center">
          <Button label="About Us" />
          <Button label="Productions" />
        </Container>
      </div>
      {/* <PulsingGradient homePage /> */}
    </>
  );
}
