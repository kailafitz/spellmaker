import { LinkButton } from "@/components/custom/button";
import Container from "@/components/custom/container";
import React from "react";

const News = () => {
    return (
        <Container topSectionPadding className="text-foreground font-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-20 items-end">
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
                        News
                    </h1>
                    <h2 className="text-5xl font-medium">
                        Updates, Announcements & Enchanting Insights.
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
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 py-20 gap-8">
                {[
                    {
                        title: "Filming begins in Dublin and Meath on supernatural action comedy Kung Fu Deadly",
                        date: "February 10th 2025",
                        source: "Screen Ireland",
                    },
                    {
                        title: "YouTuber Steven He Leading Cast In Martial Arts Comedy ‘Kung Fu Deadly’, Filming Underway In Ireland",
                        date: "May 21st 2025",
                        source: "Deadline",
                    },
                    {
                        title: "Filming begins in Dublin and Meath on supernatural action comedy Kung Fu Deadly",
                        date: "February 10th 2025",
                        source: "Screen Ireland",
                    },
                    {
                        title: "YouTuber Steven He Leading Cast In Martial Arts Comedy ‘Kung Fu Deadly’, Filming Underway In Ireland",
                        date: "May 21st 2025",
                        source: "Deadline",
                    },
                    {
                        title: "Filming begins in Dublin and Meath on supernatural action comedy Kung Fu Deadly",
                        date: "February 10th 2025",
                        source: "Screen Ireland",
                    },
                    {
                        title: "YouTuber Steven He Leading Cast In Martial Arts Comedy ‘Kung Fu Deadly’, Filming Underway In Ireland",
                        date: "May 21st 2025",
                        source: "Deadline",
                    },
                ].map((article, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-white min-h-64 rounded-lg p-10 text-indigo-950 flex flex-col justify-between gap-10"
                        >
                            <div className="flex flex-col gap-5">
                                <p className="text-xl font-semibold">
                                    {article.source}
                                </p>
                                <h3 className="font-heading text-2xl">
                                    {article.title}
                                </h3>
                            </div>
                            <p className="text-sm opacity-40">{article.date}</p>
                        </div>
                    );
                })}
            </div>
            <div className="w-full md:w-1/3 justify-self-end flex flex-col gap-y-5 pb-32">
                <h2 className="text-4xl font-medium">
                    No Crystal Ball Needed—
                    <br />
                    Just Say Hello
                </h2>
                <p>
                    From the spark of imagination to the final frame, get in
                    touch and let’s create something truly spellbinding
                    together.
                </p>
                <div className="text-right">
                    <LinkButton label="Summon Us" href="/summon-us" />
                </div>
            </div>
        </Container>
    );
};

export default News;
