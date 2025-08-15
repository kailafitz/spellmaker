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
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setSparkles((prev) => [
            ...prev,
            {
                id: sparkleId++, // unique incremental ID
                x: e.clientX + (Math.random() * 10 - 5),
                y: e.clientY + (Math.random() * 10 - 5),
                size: Math.random() * 2 + 1,
                opacity: 1,
            },
        ]);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

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
