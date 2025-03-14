import { Helmet } from "react-helmet";
import { Button, Heading, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SpaghettiMenu from "../../components/SpaghettiMenu";
import UserProfile1 from "../../components/UserProfile1";
import OrderonlineColumn from "./OrderonlineColumn";
import React, { Suspense } from "react";

const orderGrid = [
    {
        userImage: "images/img_kisspng_italian.png",
        userTitle: "Spaghetti",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "2"
    },
    {
        userImage: "images/img_picture.png",
        userTitle: "Linguine",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "2"
    },
    {
        userImage: "images/img_picture_174x174.png",
        userTitle: "Capellini",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "2"
    },
    {
        userImage: "images/img_picture_174x174.png",
        userTitle: "Fettuccine",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "8"
    },
    {
        userImage: "images/img_kisspng_italian.png",
        userTitle: "Spaghetti",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "2"
    },
    {
        userImage: "images/img_picture_1.png",
        userTitle: "Capellini",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "0"
    },
    {
        userImage: "images/img_picture_174x174.png",
        userTitle: "Fusilli",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "0"
    },
    {
        userImage: "images/img_picture.png",
        userTitle: "Farfalle",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "0"
    },
    {
        userImage: "images/img_picture_gray_400.png",
        userTitle: "Penne Alla Vodak",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
        userPrice: "$12.05",
        two: "0"
    },
];
const orderList = [
    {
        spaghettiTitle: "Spaghetti",
        quantityText: "2",
        priceText: "$24.10"
    },
    {
        spaghettiTitle: "Linguine",
        quantityText: "2",
        priceText: "$35.70"
    },
    {
        spaghettiTitle: "Capellini",
        quantityText: "2",
        priceText: "$18.50"
    }
];

export default function OrderonlinePage() {
    return (
        <>
            <Helmet>
                <title>Order Online - Delicious Pasta, Pizza, and More</title>
                <meta
                    name="description"
                    content="Indulge in our mouth-watering menu with a variety of pasta, pizza, and desserts. Order online now for a delectable dining experience at your convenience."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[102px] bg-[#f9f9f9] md:gap-[76px] sm:gap-[51px]">
                {/* Header Section */}
                <div className="container-xs mt-[50px] md:px-5">
                    <Header />
                </div>

                <div className="flex flex-col gap-[138px] self-stretch md:gap-[103px] sm:gap-[69px]">
                    {/* Menu Section */}
                    <div className="flex flex-col items-center gap-[68px] sm:gap-[34px]">
                        <OrderonlineColumn />

                        {/* Featured Dishes Section */}
                        <div className="container-xs md:px-5">
                            <div className="flex items-center gap-[46px] md:flex-col">
                                <div className="flex flex-1 flex-col items-center gap-[50px] md:self-stretch">
                                    <div className="flex flex-col gap-12 self-stretch">
                                        <div className="flex flex-col items-start gap-2.5">
                                            <Heading size="headingxl" as="h2">PASTA</Heading>
                                            <div className="h-[2px] w-[18%] bg-[#f54748]" />
                                        </div>
                                        <div className="grid grid-cols-3 justify-center gap-[30px] gap-y-6 md:grid-cols-2 sm:grid-cols-1">
                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                {orderGrid.map((d, index) => (
                                                    <UserProfile1 {...d} key={"onlineGrid" + index} />
                                                ))}
                                            </Suspense>
                                        </div>
                                    </div>
                                    <div className="flex w-[30%] items-center justify-center gap-2.5 md:w-full">
                                        <Img src="images/img_arrow_left_black_900.svg" alt="Left Arrow" className="h-[14px] w-[14px]" />
                                        <div className="flex flex-1 justify-center gap-2.5">
                                            <Button color="gray_900" size="sm" className="min-w-[34px] rounded font-['Inter'] font-semibold tracking-[-0.50px]">
                                                1
                                            </Button>
                                            <Button color="gray_200" size="sm" className="min-w-[34px] rounded font-['Inter'] font-semibold tracking-[-0.50px]">
                                                2
                                            </Button>
                                            <Button color="gray_200" size="sm" className="min-w-[34px] rounded font-['Inter'] font-semibold tracking-[-0.50px]">
                                                3
                                            </Button>
                                            <Img src="images/img_grid.svg" alt="Grid Icon" className="h-[34px] w-[34px]" />
                                        </div>
                                        <Img src="images/img_arrow_right.svg" alt="Right Arrow" className="h-[14px] w-[14px]" />
                                    </div>
                                    </div>

                                    {/* Order Summary Section */}
                                    <div className="w-[32%] md:w-full">
                                        <div className="flex flex-col gap-[50px] rounded-[20px] bg-[#ffffff] py-11 shadow-[0_4px_29px_0_#60676933] md:py-5">
                                            <div className="flex flex-col items-center gap-[46px]">
                                                <Heading size="headingxl" as="h3">Order List</Heading>
                                                <div className="h-px w-full self-stretch bg-[#d1cccc]" />
                                            </div>
                                            {/* Order List Items */}
                                            <div className="mx-[30px] flex flex-col gap-16 md:mx-0">
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {orderList.map((d, index) => (
                                                        <SpaghettiMenu {...d} key={"orderItems" + index} />
                                                    ))}
                                                </Suspense>
                                            </div>

                                            {/* Voucher Code Section */}
                                            <div className="flex flex-col gap-11">
                                                <div className="flex flex-col gap-6">
                                                    <div className="h-[0.5px] bg-[#d0cbc6]" />
                                                    <div className="mx-[30px] flex flex-col items-start gap-5 md:mx-0">
                                                        <Heading as="h4" className="!text-[#000000]">Voucher Code</Heading>
                                                        <div className="flex gap-[22px] self-stretch">
                                                            <Input color="gray_50_01" size="xl" name="Voucher Input" placeholder={`FREETOEAT`} className="flex-grow rounded-[14px]" />
                                                            <Button color="blue_400" className="w-[60px] rounded-[14px]">
                                                                <Img src="images/img_plus.svg" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                

                                                {/* Divider */}
                                                <div className="h-[0.5px] bg-[#d0cbc6]" />
                                            </div>

                                            {/* Order Summary */}
                                            <div className="mx-[30px] flex flex-col gap-16 md:mx-0 sm:gap-8">
                                                <div className="flex flex-col gap-[26px]">
                                                    <div className="flex flex-wrap justify-between gap-5">
                                                        <Heading as="h5" className="!text-[#000000]">Subtotal</Heading>
                                                        <Heading size="text2xl" as="h6">$78.30</Heading>
                                                    </div>
                                                    <div className="flex flex-wrap justify-between gap-5">
                                                        <Heading as="h4" className="!text-[#000000]">Tax Fee</Heading>
                                                        <Heading size="text2xl" as="p">$3.50</Heading>
                                                    </div>
                                                    <div className="flex flex-wrap justify-between gap-5">
                                                        <Heading as="h4" className="!text-[#000000]">Voucher</Heading>
                                                        <Heading size="text2xl" as="p">$5.00</Heading>
                                                    </div>
                                                    <div className="flex flex-wrap justify-between gap-5">
                                                        <Heading as="h4" className="!text-[#000000]">Total</Heading>
                                                        <Heading size="text2xl" as="p">$76.80</Heading>
                                                    </div>
                                                </div>
                                                {/* Checkout Button */}
                                                <a href="https://www.youtube.com/embed/bv8FxkBsz71" target="_blank">
                                                    <Button size="3xl" className="self-stretch rounded-[14px] font-semibold">Checkout</Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        </>
    );
}