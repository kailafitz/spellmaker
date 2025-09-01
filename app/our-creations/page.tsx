// import { Button } from "@/components/custom/button";
// import Container from "@/components/custom/container";
// import DreamyEdges from "@/components/custom/dreamyImage";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import { productions } from "@/data/productions";
// import React from "react";

// const Productions: React.FC = () => {
//     return (
//         <Container className="flex flex-1 flex-col justify-center">
//             <Carousel orientation="horizontal">
//                 <CarouselContent className="h-[400px] w-full">
//                     {productions.map((production, index) => {
//                         return (
//                             <CarouselItem
//                                 key={index}
//                                 className="grid grid-cols-2 items-center gap-12 justify-center text-gray-100 py-10"
//                             >
//                                 <div className="production-details flex flex-col items-left gap-3">
//                                     <h2 className="text-xl font-medium">
//                                         {production.title}
//                                     </h2>
//                                     <p className="text-sm opacity-50">
//                                         Release Date:{" "}
//                                         {new Date(
//                                             production.releaseDate
//                                         ).toLocaleDateString("en-US", {
//                                             year: "numeric",
//                                             month: "long",
//                                             day: "numeric",
//                                         })}
//                                     </p>
//                                     <p className="text-sm text-gray-100">
//                                         {production.description}
//                                     </p>
//                                     <Button
//                                         styling="w-fit"
//                                         label={`Read ${production.title}`}
//                                     />
//                                 </div>
//                                 <img
//                                     src={production.imageUrl}
//                                     alt={production.title}
//                                     className="w-full h-auto mb-4 rounded-2xl"
//                                 />
//                                 <DreamyEdges
//                                     src={production.imageUrl}
//                                     blob1="M0.996361 107.336C1.7967 62.614 77.2562 71.8496 129.352 15.9771C181.448 -39.8955 154.26 77.8904 246.383 86.9503C338.505 96.0102 147.472 339.886 112.742 233.427C78.0112 126.968 0.196025 152.059 0.996361 107.336Z"
//                                     blob2="M13.9998 154.5C79.9997 202 122.499 198.5 100.5 281.5C78.5005 364.5 282 330.5 321 242.5C360 154.5 240.5 154.497 200.499 38.5029C160.499 -77.491 -52.0002 107 13.9998 154.5Z"
//                                 />
//                             </CarouselItem>
//                         );
//                     })}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </Container>
//     );
// };

// export default Productions;

// keep slider
// decide later on production details page

// news page
// CMS for article uploads
// simple simple simple. less magic

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Slide {
    image: string;
    text: string;
}

const slides: Slide[] = [
    { image: "/movie1.webp", text: "Slide 1 Text" },
    { image: "/movie1.webp", text: "Slide 2 Text" },
    { image: "/movie1.webp", text: "Slide 3 Text" },
    { image: "/movie1.webp", text: "Slide 4 Text" },
];

const Productions: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    return (
        <div className="relative flex-1 w-full mx-auto overflow-hidden pt-10">
            {/* Slides Container */}
            <div className="flex justify-center items-center relative">
                {slides.map((slide, index) => {
                    const offset = index - current;

                    return (
                        <motion.div
                            key={index}
                            className="absolute top-0 left-1/2 transform -translate-x-1/2"
                            style={{
                                zIndex: offset === 0 ? 10 : 1,
                            }}
                            animate={{
                                x: offset * 200, // distance between slides
                                scale: offset === 0 ? 1 : 0.7, // center bigger
                                opacity: offset === 0 ? 1 : 0.5, // center fully visible
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={slide.image}
                                    className="w-30vw h-auto object-cover rounded-xl shadow-lg"
                                    alt={`Slide ${index}`}
                                />
                                {offset === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white bg-black bg-opacity-50 px-3 py-1 rounded"
                                    >
                                        {slide.text}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full shadow"
            >
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
                    className="lucide lucide-circle-chevron-up-icon lucide-circle-chevron-up -rotate-90 hover:cursor-pointer"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 14 4-4 4 4" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full shadow"
            >
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
                    className="lucide lucide-circle-chevron-up-icon lucide-circle-chevron-up rotate-90 hover:cursor-pointer"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 14 4-4 4 4" />
                </svg>
            </button>
        </div>
    );
};

export default Productions;
