import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import UserProfile from "../../components/UserProfile";

// Example menu data
const menuItems = [
    {
        userImage: "images/img_pngitem_41084.png",
        userName: "Spaghetti",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        orderButton: "Order now"
    },
    {
        userImage: "images/img_pngitem_1447549.png",
        userName: "Gnocchi",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        orderButton: "Order now"
    },
    {
        userImage: "images/img_pngegg.png",
        userName: "Ravioli",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        orderButton: "Order now"
    },
    {
        userImage: "images/img_pngwing_270x270.png",
        userName: "Penne Alla Vodka",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        orderButton: "Order now"
    },
    {
        userImage: "images/img_pngitem_5290903.png",
        userName: "Risotto",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        orderButton: "Order now"
    },
    {
        userImage: "images/img_pngwing_270x270.png",
        userName: "Splitza Signature",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        orderButton: "Order now"
    }
];

export default function MenuPage() {
    return (
        <>
            <Helmet>
                <title>Explore Our Popular Menu - Order Delicious Meals Online</title>
                <meta name="description" content="Dive into our popular menu featuring Spaghetti, Gnocchi, Ravioli, and more. Enjoy exquisite Italian cuisine with easy online ordering. Perfect for lunch, dinner, or drinks." />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[138px] bg-[#f9f9f9] md:gap-[103px] sm:gap-[69px]">
                <div className="container-xs mt-[50px] md:px-5">
                    {/* Navigation section */}
                    <div className="flex flex-col gap-[92px] md:gap-[69px] sm:gap-[46px]">
                        {/* Header Section */}
                        <Header />
                        {/* Menu section */}
                        <Tabs className="flex flex-col gap-[50px]" selectedTabClassName="!text-[#ffffff] font-semibold bg-[#f54748] rounded-[16px]" selectedTabPanelClassName="!relative tab-panel--selected">
                            <div className="flex flex-col items-center gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                <Heading size="heading4xl" as="h1" className="!font-['Open Sans']">Our Popular Menu</Heading>
                                <TabList className="flex flex-wrap gap-11 md:flex-col">
                                    <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">All Categories</Tab>
                                    <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:px-5 sm:p-5">Lunch</Tab>
                                    <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:px-5 sm:p-5">Dinner</Tab>
                                    <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:px-5 sm:p-5">Dessert</Tab>
                                    <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:px-5 sm:p-5">Drink</Tab>
                                </TabList>
                            </div>
                            {/* Menu tab content section */}
                            <div className="flex flex-col items-center gap-12">
                                {[...Array(5)].map((_, index) => (
                                    <TabPanel key={`tab-panel${index}`} className="absolute items-center self-stretch">
                                        <div className="w-full self-stretch">
                                            {/* Menu grid section */}
                                            <div className="grid grid-cols-3 justify-center gap-[34px] md:grid-cols-2 sm:grid-cols-1">
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {menuItems.map((item, index) => (
                                                        <UserProfile {...item} key={`menuGrid1${index}`} />
                                                    ))}
                                                </Suspense>
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))}
                                {/* Pagination controls section */}
                                <div className="flex w-[20%] items-center justify-center gap-2.5 md:w-full">
                                    <Img src="images/img_arrow_left_black_900.svg" alt="Left Arrow" className="h-[14px] w-[14px]" />
                                    <div className="flex flex-1 justify-center gap-2.5">
                                        <Button color="gray_900" size="sm" className="min-w-[34px] rounded font-['Inter'] font-semibold tracking-[-0.50px]">1</Button>
                                        <Button color="gray_200" size="sm" className="min-w-[34px] rounded font-['Inter'] font-semibold tracking-[-0.50px]">2</Button>
                                        <Button color="gray_200" size="sm" className="min-w-[34px] rounded font-['Inter'] font-semibold tracking-[-0.50px]">3</Button>
                                        <Img src="images/img_grid.svg" alt="Grid Icon" className="h-[34px] w-[34px]" />
                                    </div>
                                    <Img src="images/img_arrow_right.svg" alt="Right Arrow" className="h-[14px] w-[14px]" />
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>

                {/* Footer section */}
                <Footer className="self-stretch" />
            </div>
        </>
    );
}