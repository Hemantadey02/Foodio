import React from "react";
import { Img, Text, Heading, RatingBar } from "..";

export default function UserProfile1({
    userImage = "images/img_kisspng_italian.png",
    userTitle = "Spaghetti",
    userDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat",
    userPrice = "$12.05",
    two = "2",
    ...props
}) {
    const [quantity, setQuantity] = React.useState(1);

    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full p-5 bg-[#ffffff] rounded-[44px]`}>
            <Img src={userImage} alt="Spaghetti Image" className="h-[172px] w-[172px] rounded-[86px] object-cover" />
            <Heading size="headingmd" as="h5" className="mt-5">
                {userTitle}
            </Heading>
            <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={14}
                className="mt-1 flex gap-2.5"
            />
            <Text size="textxs" as="p" className="mt-2.5 self-stretch text-center leading-[18px]">
                {userDescription}
            </Text>
            <Heading size="headings" as="h6" className="mt-[22px]">
                {userPrice}
            </Heading>
            <div className="ml-6 mr-[30px] mt-2.5 flex items-center justify-between gap-5 self-stretch rounded-[16px] bg-[#fafaf9]">
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                        setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1));
                    }}
                    className="flex cursor-pointer flex-col items-center justify-center rounded-[16px] bg-[#ffffff] px-2.5 py-3.5 shadow-[3.32px_3.32px_4px_0_#ff4e4e11]"
                >
                    <Img src="images/img_vector_25.svg" alt="Minus Icon" className="h-px" />
                </div>
                <Text size="textmd" as="p" className="!text-[16.62px] !text-[#311f09]">
                    {quantity}
                </Text>
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                        setQuantity((quantity) => quantity + 1);
                    }}
                    className="flex cursor-pointer flex-col items-center rounded-[16px] bg-[#ffffff] p-2.5 shadow-[3.32px_3.32px_4px_0_#3fc56d11]"
                >
                    <Img src="images/img_group_7721.svg" alt="Plus Icon" className="h-[10px] w-[10px]" />
                </div>
            </div>
        </div>
    );
}
