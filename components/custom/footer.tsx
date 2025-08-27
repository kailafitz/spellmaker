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
import { Button } from "./button";
import Container from "./container";
import Instagram from "../icons/Instagram";
import Facebook from "../icons/Facebook";
import X from "../icons/X";
import Link from "next/link";

export default function FloatingDrawer() {
    const [open, setOpen] = useState(false);
    const year = new Date().getFullYear();

    return (
        <div className="fixed bottom-0 inset-x-0 flex justify-center">
            <motion.div
                className="pointer-events-auto z-20"
                animate={{ y: open ? -130 : -0 }}
                transition={{ type: "tween", stiffness: 200, damping: 20 }}
            >
                <Button
                    onMouseEnter={() => setOpen(!open)}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-wand-icon lucide-wand"
                        >
                            <path d="M15 4V2" />
                            <path d="M15 16v-2" />
                            <path d="M8 9h2" />
                            <path d="M20 9h2" />
                            <path d="M17.8 11.8 19 13" />
                            <path d="M15 9h.01" />
                            <path d="M17.8 6.2 19 5" />
                            <path d="m3 21 9-9" />
                            <path d="M12.2 6.2 11 5" />
                        </svg>
                    }
                    className="rounded-t-full rounded-b-none shadow-xl py-4 px-10 bg-indigo-950 hover:cursor-default"
                />
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed bottom-0 inset-x-0 h-[130px] bg-indigo-950/75 backdrop-blur-2xl shadow-2xl z-10"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "tween",
                            stiffness: 200,
                            damping: 25,
                        }}
                    >
                        <Container className="pt-7 flex flex-col flex-1 items-center justify-between text-center text-white">
                            <div className="flex flex-row items-center justify-between w-full">
                                <div className="text-left">
                                    {/* <h3 className="uppercase text-3xl">Spellmaker</h3> */}
                                    <p className="uppercase opacity-35">
                                        Let's make movie magic
                                    </p>
                                    <a href="mailto:info@spellmaker.ie">
                                        info@spellmaker.ie
                                    </a>
                                </div>
                                <div className="flex flex-row gap-6 opacity-50">
                                    <Link href="/">Link 1</Link>
                                    <Link href="/">Link 2</Link>
                                    <Link href="/">Link 3</Link>
                                </div>
                            </div>

                            <div className="text-white/15 flex flex-row justify-center gap-3 mb-2">
                                <Instagram className="w-5" />
                                <Facebook className="w-5" />
                                <X className="w-5" />
                            </div>
                            <p className="opacity-25 text-xs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copyright-icon lucide-copyright inline mr-1"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
                                </svg>
                                copyright {year} Spellmaker. All rights
                                reserved.
                            </p>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
