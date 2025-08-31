"use client";
import React, { useEffect, useState } from "react";

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
}

const MagicCursor: React.FC = () => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {

            setSparkles((prev) => [
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    x: e.clientX + (Math.random() * 10 - 5),
                    y: e.clientY + (Math.random() * 10 - 5),
                    size: Math.random() * 2 + 1,
                    opacity: 1,
                },
            ]);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSparkles((prev) =>
                prev
                    .map((s) => ({ ...s, opacity: s.opacity - 0.05 }))
                    .filter((s) => s.opacity > 0)
            );
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {sparkles.map((s) => (
                <div
                    key={s.id}
                    className="fixed bg-white rounded-full pointer-events-none z-40"
                    style={{
                        left: s.x,
                        top: s.y,
                        width: s.size,
                        height: s.size,
                        opacity: s.opacity,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </>
    );
};

export default MagicCursor;
