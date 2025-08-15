import React from "react";
import Container from "@/components/custom/container";
import { Mail, MapPin } from "lucide-react";
import Instagram from "@/components/icons/Instagram";
import Facebook from "@/components/icons/Facebook";
import X from "@/components/icons/X";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/custom/button";

const GetInTouch = () => {
    return (
        <Container className="flex flex-1 flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
                <div className="flex flex-col justify-between gap-y-10 md:gap-x-10">
                    <div className="flex flex-col justify-between gap-y-10">
                        <div>
                            <h1 className="text-large uppercase font-medium">
                                Get in Touch
                            </h1>
                            <h2 className="text-4xl font-medium font-subheading">
                                No Crystal Ball Needed—
                                <br />
                                Just Say Hello
                            </h2>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex flex-col gap-y-3">
                                <p className="flex flex-row gap-x-3 items-center font-body">
                                    <MapPin />
                                    Dublin, Ireland
                                </p>
                                <p className="flex flex-row gap-x-3 items-center font-body">
                                    <Mail />
                                    info@spellmaker.ie
                                </p>
                            </div>
                            <p className="uppercase font-medium">
                                Please note that we cannot accept unsolicited
                                scripts or materials.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-5">
                        <p className="text-large uppercase font-medium">
                            Follow us on social media
                        </p>
                        <div className="fill-white flex flex-row gap-x-5">
                            <Instagram className="w-8 h-auto fill-inherit" />
                            <Facebook className="w-8 h-auto fill-inherit" />
                            <X className="w-8 h-auto fill-inherit" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-7">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" />
                    <Textarea
                        placeholder="Message"
                        rows={100}
                        maxLength={350}
                        className="min-h-48"
                    />
                    <div>
                        <Button label="Dispatch Message" className="" href="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default GetInTouch;
