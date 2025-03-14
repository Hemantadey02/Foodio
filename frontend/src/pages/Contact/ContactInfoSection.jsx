import React from "react";
import { Button, TextArea, Input, Img, GoogleMap, Heading } from "../../components";

export default function ContactInfoSection() {
    return (
        <>
            {/* Contact info section */}
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col gap-[50px] md:px-5">
                    <div className="mx-[70px] flex flex-col items-center gap-4 md:mx-0">
                        <a href="#">
                            <Heading size="heading6xl" as="h1" className="!font-['Open_Sans']">
                                Contact Us
                            </Heading>
                        </a>
                        <Heading
                            size="text2xl"
                            as="h2"
                            className="self-stretch text-center !font-normal leading-[37px] !text-[#5c4529]"
                        >
                            We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
                        </Heading>
                    </div>
                    <div className="flex gap-10 md:flex-col">
                        <div className="relative h-[550px] w-full content-center md:h-auto">
                            <GoogleMap
                                showMarker={false}
                                className="mx-auto h-[550px] flex-1 rounded-[24px] opacity-90"
                            />
                            <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin Image"
                                className="absolute bottom-[39%] left-0 right-0 m-auto h-[60px] w-[8%] object-contain"
                            />
                        </div>
                        {/* Form Inputs */}
                        <div className="flex w-full flex-col gap-9">
                            <div className="flex flex-col gap-6">
                                <Input
                                    shape="round"
                                    type="text"
                                    name="First Name Field"
                                    placeholder={`First name`}
                                    className="border border-solid border-[#c4c4c4]"
                                />
                                <Input
                                    shape="round"
                                    type="text"
                                    name="Last Name Field"
                                    placeholder={`Last name`}
                                    className="border border-solid border-[#c4c4c4]"
                                />
                                <Input
                                    shape="round"
                                    type="email"
                                    name="Email Field"
                                    placeholder={`Email address`}
                                    className="border border-solid border-[#c4c4c4]"
                                />
                                <Input
                                    shape="round"
                                    type="text"
                                    name="Subject Field"
                                    placeholder={`Subject`}
                                    className="border border-solid border-[#c4c4c4]"
                                />
                                <TextArea
                                    shape="round"
                                    name="Message Area"
                                    placeholder={`Message`}
                                    className="!border-[#c4c4c4] text-[#a0978c]"
                                />
                            </div>
                            <Button
                                size="7xl"
                                className="self-stretch rounded-[12px]"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
