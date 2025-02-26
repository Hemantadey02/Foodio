import { Button, Text, Heading, Img, GoogleMap, Input } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";

export default function Shippingaddress({ isOpen, ...props }) {
    const navigate = useNavigate();
    return (
        <ModalProvider
            {...props}
            appElement={document.getElementById("root")}
            isOpen={isOpen}
            className="min-w-[900px]"
        >
            <div className="container-xs flex min-w-[900px] flex-col items-center px-10 md:px-5">
                <div className="flex w-[84%] flex-col gap-[40px] rounded-[14px] bg-[#ffffff] py-[36px] md:w-full md:py-4 sm:gap-[20px]">
                    {/* shipping address form section */}
                    <div className="flex flex-col gap-[20px] px-10 md:px-5">
                        <div className="flex items-start justify-between gap-4">
                            <Text
                                size="text3xl"
                                as="p"
                                className="ml-[290px] self-center !font-medium !text-[#000000]"
                            >
                                Shipping address
                            </Text>
                            <a onClick={() => navigate(-1)} className="cursor-pointer">
                                <Img
                                    src="images/img_close.svg"
                                    alt="Close Image"
                                    className="mt-1.5 h-[18px] w-[18px]"
                                />
                            </a>
                        </div>

                        {/* shipping address details section */}
                        <div className="flex flex-col items-start">
                            <Heading size="textlg" as="h1">
                                Shipping address
                            </Heading>
                            <div className="mt-2 flex gap-3 self-stretch md:flex-col">
                                <Input
                                    shape="round"
                                    name="Address Input"
                                    placeholder="8502 Preston Rd. Inglewood, Maine 98380"
                                    className="flex-grow border border-solid border-[#c4c4c4] !text-[#311f09]"
                                />
                                <Button
                                    color="indigo_300"
                                    size="xl"
                                    className="min-w-[140px] rounded-lg"
                                >
                                    Search
                                </Button>
                            </div>

                            {/* location suggestion section */}
                            <div className="mt-3 flex items-center gap-3 self-stretch">
                                <Button size="xs" shape="square" className="w-[22px]">
                                    <img src="images/img_user_indigo_300.svg" alt="User Icon" />
                                </Button>
                                <Heading
                                    size="textlg"
                                    as="h1"
                                    className="!font-normal !text-[#739fe0]"
                                >
                                    Use your current location
                                </Heading>
                            </div>
                        </div>
                    </div>

                    {/* map view section */}
                    <div className="relative mb-2 h-[400px] content-center px-[40px] md:h-auto md:px-4">
                        <GoogleMap
                            showMarker={false}
                            className="mx-auto h-[400px] flex-1 rounded-[14px] opacity-90"
                        />
                        <div className="absolute left-0 right-0 top-[25%] m-auto flex flex-1 justify-center px-10 md:px-4">
                            <div className="flex w-[40%] items-center rounded-lg justify-center gap-2 md:w-full bg-white p-3">
                                <Img
                                    src="images/img_1.png"
                                    alt="Location Image"
                                    className="h-[140px] w-[35%] object-contain"
                                />
                                <div className="ml-1 flex flex-1 flex-col items-start self-end">
                                    <Heading
                                        size="headingxs"
                                        as="h2"
                                        className="!text-[15px]"
                                    >
                                        Highbridge House
                                    </Heading>
                                    <Text
                                        size="textxs"
                                        as="p"
                                        className="mt-1 w-full !text-[12px] leading-[150%] !text-[#311f09]"
                                    >
                                        1131 Ogden Ave, Bronx, NY 10452, USA
                                    </Text>
                                    <Text
                                        size="textxs"
                                        as="p"
                                        className="mt-1 !text-[12px] !text-[#311f09]"
                                    >
                                        40.885147, -73.9220459
                                    </Text>
                                    <Button
                                        color="red_500"
                                        size="md"
                                        className="mt-2 min-w-[160px] rounded-lg font-semibold"
                                    >
                                        Confirmation
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalProvider>
    );
}