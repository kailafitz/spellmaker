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
                        <NavigationMenuLink href="/about-us">
                            About Us
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/productions">
                            Productions
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/get-in-touch">
                            Get in Touch
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </Container>
        </NavigationMenu>
    );
};

export default NavMenu;
