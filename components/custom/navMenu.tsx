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
import { ShineBorder } from "@/components/magicui/shine-border";
import Link from "next/link";

const NavMenu = () => {
    return (
        <NavigationMenu className="z-20 pt-10">
            <Container>
                <NavigationMenuList>
                    {/* <ShineBorder
                        duration={10}
                        shineColor={"#05df72"}
                        borderWidth={1}
                    /> */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/about-us">About Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/productions">Productions</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/get-in-touch">Get in Touch</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </Container>
        </NavigationMenu>
    );
};

export default NavMenu;
