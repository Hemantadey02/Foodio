import { useNavigate } from "react-router-dom";
import { Button, Text, Heading, Img } from "../../components";
import React from "react";

export default function FeaturesSection() {
    const navigate = useNavigate();
    return (
        <>
            {/* Features section */}
            <div>
                <div className="flex justify-center bg-[#e7f7ed] py-3.5">
                    <div className="container-xs flex items-start justify-center gap-3 md:flex-col md:px-5">
                        <div className="relative h-[646px] flex-1 self-center md:w-full md:flex-none md:self-stretch">
                            <div className="absolute bottom-[-0.02px] left-0 right-0 m-auto flex flex-1 flex-col items-center">
                                <div className="flex items-center self-stretch sm:flex-col">
                                    <Img
                                        src="images/img_kisspng_leaf_pe.png"
                                        alt="Leaf Image"
                                        className="relative z-[1] h-[174px] w-[22%] self-end object-contain sm:w-full sm:self-auto"
                                    />
                                    <Img
                                        src="images/img_kindpng_3443995.png"
                                        alt="Kindpng Image"
                                        className="relative ml-[-160px] h-[558px] w-[68%] object-contain sm:ml-0 sm:w-full"
                                    />
                                </div>
                                <Img
                                    src="images/img_kisspng_leaf_pe_116x110.png"
                                    alt="Small Leaf Image"
                                    className="relative mt-[-74px] h-[116px] w-[16%] object-contain"
                                />
                            </div>
                            <Img
                                src="images/img_kisspng_leaf_pe_158x154.png"
                                alt="Large Leaf Image"
                                className="absolute right-[0.26px] top-0 m-auto h-[158px] w-[22%] object-contain"
                            />
                        </div>
                        <div className="mt-[90px] flex w-[40%] flex-col items-start gap-[34px] md:w-full">
                            <div className="flex flex-col gap-4 self-stretch">
                                <Heading
                                    size="heading4xl"
                                    as="h2"
                                    className="w-[80%] !font-['Open_Sans'] leading-[110%] !text-[#f54748] md:w-full"
                                >
                                    <span className="leading-[70px] text-[#301e08]">
                                        Our Most <br /> Popular&nbsp;
                                    </span>
                                    <span className="text-[#f54748]">Dish.</span>
                                </Heading>
                                <Text as="p" className="leading-[200%]">
                                    This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
                                </Text>
                            </div>
                            <a onClick={() => navigate('/orderonline')} target="_blank">
                                <Button size="5xl" shape="round" className="min-w-[232px] font-semibold">
                                    Order now
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
