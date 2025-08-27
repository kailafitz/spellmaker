"use client";

import * as React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function MagicalShadcnDrawer() {
    return (
        <Drawer>
            {/* Trigger button that “pulls” the drawer */}
            <DrawerTrigger asChild>
                <motion.div
                    whileTap={{ y: -5, scale: 1.05 }}
                    className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-50"
                >
                    <Button className="px-6 py-2 rounded-full shadow-lg bg-purple-700 hover:bg-purple-800 text-white">
                        🔮 Summon
                    </Button>
                </motion.div>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent
                className="
                    h-[20vh] 
                    rounded-t-2xl 
                    border-t border-purple-500/30 
                    bg-gradient-to-t from-purple-900/95 to-green-700/90
                    shadow-[0_-8px_30px_rgba(0,0,0,0.5)]
                    overflow-hidden
                "
            >
                <div className="p-4 text-center text-purple-100">
                    <p className="text-lg font-semibold">Summoned Content ✨</p>
                    <p className="text-sm opacity-80">
                        This drawer floats like magic.
                    </p>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
