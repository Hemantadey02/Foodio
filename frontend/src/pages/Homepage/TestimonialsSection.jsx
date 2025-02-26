import { Button, Img, Heading } from "../../components";
import React from "react";

export default function TestimonialsSection() {
    return (
        <>
            {/* testimonials section */}
            <div className="flex justify-center">
                <div className="container-xs flex justify-center px-14 md:px-5">
                    <div className="flex w-[78%] flex-col items-center gap-[42px] md:w-full">
                        <Heading size="heading4xl" as="h2" className="!font-['Open_Sans']">
                            What Our Customers Say
                        </Heading>
                        <div className="relative h-[394px] self-stretch">
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5">
                                <Button
                                    color="white_A700"
                                    shape="circle"
                                    className="w-[60px] rotate-[-180deg] !rounded-[30px] shadow-[0_4px_11px_0_#0a0a0a0f]"
                                >
                                    <Img src="images/img_arrow_down_gray_500.svg" />
                                </Button>
                                <Button
                                    color="white_A700"
                                    shape="circle"
                                    className="w-[60px] !rounded-[30px] shadow-[0_4px_11px_0_#ff38380f]"
                                >
                                    <Img src="images/img_arrow_left.svg" />
                                </Button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex items-center justify-center rounded-[16px] bg-[#ffffff]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}