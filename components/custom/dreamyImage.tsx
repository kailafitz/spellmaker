"use client";
import { motion } from "framer-motion";

export default function DualBlobMorph({
    src,
    blob1,
    blob2,
}: {
    src: string;
    blob1: string;
    blob2: string;
}) {
    return (
        <div className="relative w-[600px] h-[400px]">
            {/* Dreamy glow aura behind the blob */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-green-400 to-indigo-400 
                      rounded-full blur-3xl opacity-50 animate-pulse"
            />

            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 400"
            >
                <defs>
                    <mask id="blobMask">
                        <motion.path
                            fill="white"
                            initial={false}
                            animate={{ d: [blob1, blob2, blob1] }} // loop between blob1 and blob2
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </mask>
                </defs>

                <image
                    href={src}
                    width="600"
                    height="400"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#blobMask)"
                />
            </svg>
        </div>
    );
}
