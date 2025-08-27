// import React from "react";
// import {
//     Drawer,
//     DrawerClose,
//     DrawerContent,
//     DrawerDescription,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
// } from "@/components/ui/drawer";
// import Container from "./container";
// import Instagram from "../icons/Instagram";
// import Facebook from "../icons/Facebook";
// import X from "../icons/X";
// import Link from "next/link";

// const Footer = () => {
//     const year = new Date().getFullYear();
//     return (
//         <Drawer>
//             <DrawerContent>
//                 <DrawerTrigger
//                     style={{
//                         position: "absolute",
//                         zIndex: "100",
//                         color: "#fff",
//                         top: "-40px",
//                     }}
//                 >
//                     Summon Us
//                 </DrawerTrigger>
//                 <Container>
//                     <DrawerHeader>
//                         <DrawerTitle className="text-left">
//                             Summon Us
//                         </DrawerTitle>
//                     </DrawerHeader>
//                     <div className="text-white/15 flex flex-row justify-center gap-3 mb-2">
//                         <Instagram className="w-6" />
//                         <Facebook className="w-6" />
//                         <X className="w-6" />
//                     </div>
//                     <DrawerFooter>
//                         <p className="mx-auto text-white/30 text-xs">
//                             copyright {year}
//                         </p>
//                     </DrawerFooter>
//                 </Container>
//             </DrawerContent>
//         </Drawer>
//     );
// };

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FloatingDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-0 inset-x-0 flex justify-center pointer-events-none">
            <motion.div
                className="pointer-events-auto z-20"
                animate={{ y: open ? -220 : -0 }} // button lifts with panel
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <Button
                    onClick={() => setOpen(!open)}
                    className="rounded-t-2xl shadow-xl"
                >
                    {open ? "Close" : "Summon us"}
                </Button>
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed bottom-0 inset-x-0 h-[220px] bg-white rounded-t-2xl shadow-2xl z-10"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                        }}
                    >
                        <div className="p-6">Drawer content goes here...</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
