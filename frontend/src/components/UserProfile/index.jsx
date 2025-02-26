import { Button, Heading, RatingBar, Text, Img } from "..";
import React from "react";

export default function UserProfile({
    userImage = "images/img_pngitem_41084.png",
    userName = "Spaghetti",
    userDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    userPrice = "$12.05",
    orderButton = "Order now",
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-full gap-[34px] px-[30px] py-9 sm:p-5 bg-[#ffffff] rounded-[40px]`}
        >
            <Img src={userImage} alt="Product Image" className="mx-2 h-[270px] w-[270px] object-cover" />
            <div className="flex flex-col items-center self-stretch">
                <div className="flex flex-col items-center gap-2.5 self-stretch">
                    <Heading size="headingxl" as="h3">
                        {userName}
                    </Heading>
                    <Text size="texts" as="p" className="self-stretch text-center leading-[200%] !text-[#59442b]">
                        {userDescription}
                    </Text>
                </div>
                <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f54748"
                    activeColor="#f54748"
                    size={24}
                    className="mt-3 flex gap-2.5"
                />
                <div className="mx-2 mt-[30px] flex items-center justify-between gap-5 self-stretch">
                    <Heading as="h4">{userPrice}</Heading>
                    <Button size="xl" className="min-w-[158px] rounded-lg font-semibold">
                        {orderButton}
                    </Button>
                </div>
            </div>
        </div>
    );
}