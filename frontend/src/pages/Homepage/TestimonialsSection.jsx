import ReviewCardSlider from "components/ReviewCardSlider";
import { Button, Img, Heading } from "../../components";
import React from "react";

export default function TestimonialsSection() {
    return (
        <>
            {/* testimonials section */}
            <div className="flex justify-center">
                <div className="container-xs flex justify-center px-14 md:px-5">
                    <div className="flex w-[84%] flex-col items-center gap-[42px] md:w-full">
                        <Heading size="heading4xl" as="h2" className="!font-['Open_Sans']">
                            What Our Customers Say
                        </Heading>
                        {/* <div className="flex justify-center items-center min-h-screen bg-gray-100"> */}
                            <ReviewCardSlider />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}