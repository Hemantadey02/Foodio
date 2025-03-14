import React, { Suspense } from "react";
import { Img, Button, Heading } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import menuItems from "../../data/FoodData.js";
import UserProfile1 from "components/UserProfile1";

// Sample menu items data
const randomIndex = Math.floor(Math.random() * (menuItems.length - 6));

export default function PopularMenuSection() {
    return (
        <>
            {/* Popular menu section */}
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col items-center gap-[70px] md:gap-[52px] md:px-5 sm:gap-[35px]">
                    <Heading size="heading4xl" as="h2" className="!font-['Open_Sans']">
                        Some Popular Menu
                    </Heading>
                    <Tabs className="flex flex-col items-center gap-[50px] self-stretch" selectedTabClassName="!text-[#ffffff] font-semibold bg-[#f54748] rounded-[16px]" selectedTabPanelClassName="!relative tab-panel--selected">
                        <div className="flex flex-col items-center gap-12 self-stretch">
                            {[...Array(5)].map((_, index) => (
                                <TabPanel key={`tab-panel${index}`} className="absolute items-center self-stretch">
                                    <div className="w-full self-stretch">
                                        <div className="grid grid-cols-3 justify-center gap-[34px] md:grid-cols-2 sm:grid-cols-1">
                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                {menuItems.map((item, index) => (
                                                    <UserProfile1 product={item} key={"menuGrid" + index} />
                                                )).slice(randomIndex, randomIndex + 6)}
                                            </Suspense>
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    );
}