import { Button, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const chefProfilesList = [
    { userImage: "images/img_image_1.png", userName: "Betran Komar", userTitle: "Head chef" },
    { userImage: "images/img_image_3.png", userName: "Ferry Sauwi", userTitle: "Chef" },
    { userImage: "images/img_image_2.png", userName: "Iswan Dracho", userTitle: "Chef" },
];

export default function OurChefsSection() {
    return (
        <>
            {/* our chefs section */}
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col items-center gap-[88px] md:gap-[66px] md:px-5 sm:gap-11">
                    <div className="flex flex-col items-center gap-[52px] self-stretch sm:gap-[26px]">
                        <Heading size="heading4xl" as="h2" className="!font-['Open_Sans']">
                            Our Popular Chef
                        </Heading>
                        <div className="flex gap-10 self-stretch md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {chefProfilesList.map((d, index) => (
                                    <UserProfile2 {...d} key={"chefList" + index} />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                    <Button size="5xl" shape="round" className="min-w-[234px] font-semibold">
                        View all
                    </Button>
                </div>
            </div>
        </>
    );
}
