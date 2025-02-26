import { Button, Img, Text, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";

export default function CancelReservation({ isOpen, ...props }) {
    const navigate = useNavigate();
    return (
        <ModalProvider
            {...props}
            appElement={document.getElementById("root")}
            isOpen={isOpen}
            className="min-w-[1114px]"
        >
            {/* reservation confirmation section */}
            <div className="container-xs min-w-[1114px] md:px-5">
                {/* reservation details section */}
                <div className="rounded-[16px] bg-[#ffffff] py-8 sm:py-5">
                    {/* reservation Image section */}
                    <div className="mb-[30px] flex flex-col gap-12">
                        {/* reservation summary section */}
                        <div className="flex flex-col gap-11">
                            <div className="mx-[58px] flex items-center justify-between gap-5 md:mx-0">
                                <Heading
                                    size="heading2xl"
                                    as="h1"
                                    className="ml-[390px] !font-['Open_Sans']"
                                >
                                    Reservation
                                </Heading>
                                <Img
                                    src="images/img_close.svg"
                                    alt="Close Image"
                                    className="h-[24px] w-[24px]"
                                />
                            </div>
                            {/* confirmation message section */}
                            <div className="h-[232px] bg-[url(/public/images/img_reservation_has_orange_600.png)] bg-cover bg-no-repeat p-10 md:h-auto sm:p-5">
                                <div className="flex flex-col gap-[26px]">
                                    <Heading
                                        size="heading3xl"
                                        as="h2"
                                        className="w-[66%] leading-[110%] !text-[#ffffff] md:w-full"
                                    >
                                        Are you sure you want to cancel the reservation?
                                    </Heading>
                                    <div className="flex gap-4">
                                        <Img
                                            src="images/img_user.svg"
                                            alt="User Image"
                                            className="h-[30px] w-[30px]"
                                        />
                                        <Text as="p" className="!text-[#ffffff]">
                                            Booking ID: #123456
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* reservation additional info section */}
                        <div className="flex items-center gap-[34px] px-8 md:flex-col sm:px-5">
                            <div className="w-[32%] rounded-[164px] bg-[#e1c29e19] p-8 md:w-full sm:p-5">
                                <div className="rounded-[132px] bg-[#e1c29e33] p-[26px] sm:p-5">
                                    <Img
                                        src="images/img_unsplash.png"
                                        alt="Unsplash Image"
                                        className="h-[210px] w-[210px] rounded-[104px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* reservation action buttons section */}
                            <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
                                <div className="flex flex-1 flex-col items-start gap-[30px] md:self-stretch">
                                    <Heading as="h3">Reservation detail</Heading>
                                    <div className="flex flex-col gap-[18px] self-stretch">
                                        <div className="flex items-center gap-5">
                                            <Img
                                                src="images/img_thumbs_up.svg"
                                                alt="Thumbs Up Image"
                                                className="h-[34px] w-[34px]"
                                            />
                                            <Text as="p" className="self-end">Saturday, 28 February 2024</Text>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <Img
                                                src="images/img_clock.svg"
                                                alt="Clock Image"
                                                className="h-[34px] w-[34px]"
                                            />
                                            <Text as="p" className="self-end">04:30 pm</Text>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <Img
                                                src="images/img_lock.svg"
                                                alt="Lock Image"
                                                className="h-[34px] w-[34px]"
                                            />
                                            <Text as="p">2 people (Standard seating)</Text>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-1 flex flex-col items-end gap-[30px] self-end md:self-auto">
                                    <Button
                                        size="6xl"
                                        rightIcon={
                                            <Img
                                                src="images/img_close_white_a700.svg"
                                                alt="Close"
                                                className="h-[20px] w-[20px]"
                                            />
                                        }
                                        className="min-w-[246px] gap-5 rounded-[20px]"
                                    >
                                        Cancel
                                    </Button>

                                    {/* <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank"> */}
                                    <Button onClick={() => navigate(-1)} color="gray_400_19" size="6xl" className="hover:bg-cyan-200 min-w-[246px] rounded-[20px]">
                                        Go Back
                                    </Button>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalProvider>
    );
}