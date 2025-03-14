import { useNavigate } from "react-router-dom";
import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function HomepageRowbestrestaura() {
    const navigate = useNavigate();
    return (
        <div className="mb-5 flex items-center justify-center self-stretch px-14 md:flex-col md:px-5">
            <div className="flex w-[48%] flex-col gap-9 md:w-full">
                <div className="flex flex-col items-start gap-3.5">
                    <Heading
                        size="heading5xl"
                        as="h1"
                        className="!font-[Open_Sans] leading-[95px] !text-[#301e08]"
                    >
                        <span className="text-[#301e08]">
                            <>
                                Best Restaurant
                                <br />
                                In&nbsp;
                            </>
                        </span>
                        <span className="text-[#f54748]">Town.</span>
                    </Heading>
                    <Text
                        as="p"
                        className="w-[80%] leading-[200%] !text-[#5c4429] md:w-full"
                    >
                        We provide best food in town, we provide home delivery and dine-in services.
                    </Text>
                </div>
                <div className="flex gap-6">
                    <Button
                        onClick={() => navigate('/orderonline')}
                        size="5xl"
                        shape="round"
                        className="min-w-[232px] font-semibold"
                    >
                        Order now
                    </Button>
                    <a onClick={() => navigate('/reservation')} target="_blank">
                        <Button
                            color="red_400_19"
                            size="5xl"
                            shape="round"
                            className="min-w-[232px] font-semibold"
                        >
                            Reservation
                        </Button>
                    </a>
                </div>
            </div>
            <img
                src="images/img_illustration.svg"
                alt="Illustration Image"
                className="h-[502px] w-[44%] bounce-smooth object-contain md:w-full"
            />
        </div>
    );
}