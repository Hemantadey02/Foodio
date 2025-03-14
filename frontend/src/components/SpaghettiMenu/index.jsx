import React from "react";
import { Heading, Img, Text } from "..";

export default function SpaghettiMenu({
    spaghettiTitle = "Spaghetti",
    quantityText = "2",
    priceText = "$24.1",
    ...props
}) {
    const [quantity, setQuantity] = React.useState(1);

    return (
        <div {...props} className={`${props.className} flex flex-col items-center gap-[30px] flex-1`}>
            <div className="flex items-start justify-center self-stretch">
                
                    <Heading as="h4" className="self-center !text-[#000000]">
                        {spaghettiTitle}
                    </Heading>
                    <div className="flex flex-1 flex-col items-end">
                        <Img src="images/img_thumbs_up_red_500.svg" alt="Thumbs Up Image" className="h-[24px] w-[24px]" />
                    </div>
            </div>
            <div className="flex items-center justify-between gap-5 self-stretch">
                <div className="flex w-[42%] items-center justify-between gap-5 self-start rounded-[16px] bg-[#fafaf9]">
                    <div
                        onClick={(event) => {
                            event.stopPropagation();
                            setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1 ));
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
                <Heading size="text2xl" as="p">
                    {priceText}
                </Heading>
            </div>
        </div>
    );
}
