import Container from "@/components/custom/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productions } from "@/data/productions";
import React from "react";

const Productions: React.FC = () => {
  return (
    <Container className="flex flex-1 flex-col justify-center">
      <Carousel orientation="vertical">
        <CarouselContent>
          {productions.map((production, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-center text-gray-100"
              >
                {/* <img
                  src={production.imageUrl}
                  alt={production.title}
                  className="w-full h-auto mb-4"
                /> */}
                <h2 className="text-xl font-medium mb-2">{production.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(production.releaseDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <p className="text-sm text-gray-100">
                  {production.description}
                </p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default Productions;
