import { Button, Heading } from "../../components";
import React from "react";

export default function OrderonlineColumn() {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col items-center gap-[68px] md:px-5 sm:gap-[34px]">
                <Heading size="heading6xl" as="h1" className="!font-['Open_Sans']">Menu</Heading>
                <div className="flex justify-center gap-7 self-stretch md:flex-col">
                    <Button color="gray_400_19_01" size="5xl" shape="round" className="flex-1 md:self-stretch">All Categories</Button>
                    <Button size="5xl" shape="round" className="min-w-[232px] font-semibold">Pasta</Button>
                    <Button color="gray_400_19_01" size="5xl" shape="round" className="flex-1 md:self-stretch">Pizza</Button>
                    <Button color="gray_400_19_01" size="5xl" shape="round" className="flex-1 md:self-stretch">Dessert</Button>
                    <Button color="gray_400_19_01" size="5xl" shape="round" className="flex-1 md:self-stretch">Drink</Button>
                </div>
            </div>
        </div>
    );
}
