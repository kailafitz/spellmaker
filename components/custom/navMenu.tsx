"use client";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Container from "./container";
import Link from "next/link";

const links = [
    { href: "/our-story", label: "Our Story" },
    { href: "/our-creations", label: "Our Creations" },
    { href: "/contact-us", label: "Contact Us" },
];

const NavMenu = () => {
    const createBubbles = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const link = e.currentTarget;
        for (let i = 0; i < 4; i++) {
            const bubble = document.createElement("span");
            bubble.className = "bubble";
            // Random left offset around 50%
            bubble.style.left = `${50 + Math.random() * 40 - 20}%`;
            // Random color: purple or green
            bubble.style.background =
                Math.random() > 0.5
                    ? "radial-gradient(circle, green 0%, purple 80%)"
                    : "radial-gradient(circle, purple 0%, green 80%)";
            bubble.style.animationDelay = `${i * 0.1}s`;
            link.appendChild(bubble);

            bubble.addEventListener("animationend", () => bubble.remove());
        }
    };

    return (
        <NavigationMenu className="z-20 pt-10">
            <Container>
                <NavigationMenuList>
                    {links.map((link) => {
                        return (
                            <NavigationMenuItem key={link.href}>
                                <NavigationMenuLink
                                    asChild
                                    className="relative bubble-link"
                                    onMouseEnter={createBubbles}
                                >
                                    <Link href={link.href}>{link.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </Container>
        </NavigationMenu>
    );
};

export default NavMenu;
