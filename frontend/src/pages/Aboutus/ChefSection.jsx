import React from "react";
import { Heading, Text, Img } from "../../components";

export default function ChefSection() {
    return (
        <>
            {/* Chef Section */}
            <div className="flex justify-center self-stretch">
                <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
                    <Img
                        src="../../../images/img_unsplash_lrawct7uwhy.png"
                        alt="Unsplash Image"
                        className="h-[628px] w-[40%] object-contain md:w-full"
                    />
                    <div className="flex w-[48%] flex-col gap-[34px] md:w-full">
                        <div className="flex flex-col items-start gap-1.5">
                            <Heading
                                size="heading4xl"
                                as="h2"
                                className="w-full !font-['Open_Sans'] leading-[140%]"
                            >
                                <span className="text-[#f54748]">Owner</span>
                                <span className="text-[#ff8900]">&nbsp;</span>
                                <span className="text-[#311f09]">& Executive Chef</span>
                            </Heading>
                            <Text
                                size="text4xl"
                                as="p"
                            >
                                Ismail Marzuki
                            </Text>
                        </div>
                        <div className="flex w-[90%] flex-col items-end md:w-full">
                            <div className="relative h-[308px] self-stretch">
                                <Text
                                    size="text3xl"
                                    as="p"
                                    className="absolute bottom-[-0.11px] left-[35px] right-0 m-auto w-full leading-[200%]"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Text>
                                <Heading
                                    size="heading6xl"
                                    as="h3"
                                    className="absolute left-0 top-0 m-auto !font-['Tinos'] !text-[#ff8c0033]"
                                >
                                    “
                                </Heading>
                                {/* <div> */}
                                    <Heading
                                        size="heading6xl"
                                        as="h4"
                                        className="absolute right-0 bottom-[-50px] !font-['Tinos'] !text-[#ff8c0033]"
                                    >
                                        ”
                                    </Heading>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}