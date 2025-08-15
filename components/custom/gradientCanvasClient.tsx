"use client";
import { createGradientBlobs } from "@/public/gradientCanvas";
import { useEffect, useRef } from "react";

export default function GradientCanvasClient() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const cleanup = createGradientBlobs(containerRef.current);
        return () => cleanup();
    }, []);
    return (
        <>
            <div className="absolute h-full w-full top-0 left-0 -z-10 backdrop-blur-xl bg-violet-950/10"></div>
            <div
                ref={containerRef}
                className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none opacity-60"
            />
        </>
    );
}
