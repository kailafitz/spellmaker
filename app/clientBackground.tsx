import GradientCanvasClient from "@/components/custom/gradientCanvasClient";
import React from "react";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GradientCanvasClient />
            {children}
        </>
    );
}
