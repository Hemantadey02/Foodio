import { Button, Img, Text, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";

export default function Reservationhasbeenconfirmed({ isOpen, ...props }) {
    const navigate = useNavigate();
    return (
        <ModalProvider
            {...props}
            appElement={document.getElementById("root")}
            isOpen={isOpen}
            className="min-w-[1000px]"
        >
            {/* reservation status section */}
            <div className="container-xs min-w-[1000px] md:px-5">
                {/* reservation details section */}
                <div className="rounded-[14px] bg-[#ffffff] py-7 sm:py-5">
                    {/* reservation summary section */}
                    <div className="mb-[24px] flex flex-col gap-8">
                        {/* reservation close section */}
                        <div className="flex flex-col gap-8">
                            <div className="mx-[50px] flex items-center justify-between gap-5 md:mx-0">
                                <Heading
                                    size="heading2xl"
                                    as="h1"
                                    className="ml-[320px] !font-['Open_Sans']"
                                >
                                    Reservation
                                </Heading>
                                <a onClick={()=>navigate(-1)} className="cursor-pointer">
                                <Img
                                    src="images/img_close.svg"
                                    alt="Close Image"
                                    className="h-[22px] w-[22px]"
                                />
                                </a>
                            </div>

                            {/* reservation confirmation section */}
                            <div className="h-[200px] bg-[url(/public/images/img_reservation_has.png)] bg-cover bg-no-repeat p-[28px] md:h-auto sm:p-4">
                                <div className="mb-1.5 flex flex-col items-start gap-4">
                                    <Heading
                                        size="heading3xl"
                                        as="h2"
                                        className="!text-[#ffffff]"
                                    >
                                        Reservation has been confirmed
                                    </Heading>
                                    <div className="flex flex-col gap-2.5 self-stretch">
                                        <div className="flex gap-4 sm:flex-col">
                                            <Img
                                                src="images/img_checkmark.svg"
                                                alt="Checkmark Image"
                                                className="h-[26px] w-[26px] sm:w-full"
                                            />
                                            <Text as="p" className="!text-[#ffffff]">
                                                The confirmation result has been sent to your email
                                            </Text>
                                        </div>
                                        <div className="flex gap-4">
                                            <Img
                                                src="images/img_user.svg"
                                                alt="User Image"
                                                className="h-[26px] w-[26px]"
                                            />
                                            <Text as="p" className="!text-[#ffffff]">
                                                Booking ID: #123456
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* reservation image section */}
                        <div className="flex items-center gap-[28px] px-6 md:flex-col sm:px-4">
                            <div className="w-[28%] rounded-[164px] bg-[#e1c29e19] p-8 md:w-full sm:p-5">
                                <div className="rounded-[132px] bg-[#e1c29e33] p-[26px] sm:p-5">
                                    <Img
                                        src="images/img_unsplash.png"
                                        alt="Unsplash Image"
                                        className="h-[180px] w-[180px] rounded-[90px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* reservation info section */}
                            <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
                                <div className="flex flex-1 flex-col items-start gap-[24px] md:self-stretch">
                                    <Heading as="h3">Reservation detail</Heading>
                                    <div className="flex flex-col gap-[14px] self-stretch">
                                        <div className="flex items-center gap-5">
                                            <Img
                                                src="images/img_thumbs_up.svg"
                                                alt="Thumbs Up Image"
                                                className="h-[30px] w-[30px]"
                                            />
                                            <Text as="p" className="self-end">
                                                Saturday, 28 February 2024
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <Img
                                                src="images/img_clock.svg"
                                                alt="Clock Image"
                                                className="h-[30px] w-[30px]"
                                            />
                                            <Text as="p" className="self-end">
                                                04:30 pm
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <Img
                                                src="images/img_lock.svg"
                                                alt="Lock Image"
                                                className="h-[30px] w-[30px]"
                                            />
                                            <Text as="p">2 people (Standard seating)</Text>
                                        </div>
                                    </div>
                                </div>

                                {/* reservation actions section */}
                                <div className="flex flex-col items-end gap-5">
                                    <Button
                                        color="light_blue_A700_33"
                                        size="6xl"
                                        rightIcon={<Img src="images/img_edit.svg" alt="Edit" className="h-[34px] w-[34px]" />}
                                        className="min-w-[220px] gap-5 rounded-[18px]"
                                    >
                                        Modify
                                    </Button>
                                    <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="blank">
                                        <Button
                                            color="red_A700_19"
                                            size="6xl"
                                            rightIcon={<Img src="images/img_close_red_a700_01.svg" alt="Close" className="h-[34px] w-[34px]" />}
                                            className="min-w-[220px] gap-5 rounded-[18px]"
                                        >
                                            Cancel
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalProvider>
    );
}