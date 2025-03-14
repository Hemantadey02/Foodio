import { Button, Heading, RatingBar, Text, Img } from "..";
import React, { useEffect, useState } from "react";

export default function UserProfile({
    orderButton = "Add to cart",
    product = {
        userImage: "images/img_pngitem_41084.png",
        userName: "Spaghetti",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        userRating: 4.5,
    },
    addToCart,
    handleToast,
    ...props
}) {
    const { userImage, userName, userDescription, userPrice, userRating } = product;

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsEditModalOpen(false); // Hide popup on scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup
        };
    }, []);
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-full gap-[34px] px-[30px] py-9 sm:p-5 bg-[#ffffff] rounded-[40px]`}
        >
            <div className="flex flex-col gap-3 items-center self-stretch">
                <Img onClick={() => setIsEditModalOpen(true)} src={userImage} alt="Product Image" className="cursor-grab mx-2 h-[270px] w-[270px]" />
                <div className="flex items-center justify-between self-stretch">
                    <Heading as="h3">
                        {userName.length > 17 ? `${userName.slice(0, 14)}...` : userName}
                    </Heading>
                    <Heading size="headingmd" as="h4" className="text-green-500">₹{userPrice}</Heading>
                </div>
                <Text size="texts" as="p" className="text-left leading-[130%] !text-[#59442b]">
                    {userDescription.length > 90 ? `${userDescription.slice(0, 87)}...` : userDescription}
                </Text>
                <div className="flex justify-between gap-5 self-stretch">
                    <span className="flex justify-center items-center gap-1">
                        <RatingBar
                            // value={4.5}
                            isEditable={true}
                            color="#f54748"
                            activeColor="#f54748"
                            size={24}
                        /> {userRating}
                    </span>
                    <Button onClick={() => {
                        addToCart(product);
                        handleToast(userName);
                    }} size="sm" className="min-w-[150px] hover:bg-red-600 rounded-lg font-semibold">
                        {orderButton}
                    </Button>
                </div>
            </div>

            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full object-cover max-w-lg relative">
                        <Heading as="h3" className='mb-4 text-center'>{userName}</Heading>
                        <section>
                            {/* <form action=""> */}
                            <div className="space-y-4 p-2 flex flex-col items-center gap-3">
                                <Img src={userImage} alt="Product Image" className="mx-2 h-[320px] w-[420px]" />
                                <div className="flex flex-col gap-3 items-center self-stretch">
                                    <div className="flex items-center justify-between self-stretch">
                                        <Text size="textmd" as="p" className="text-center leading-[130%] !text-[#59442b]">
                                            {userDescription}
                                        </Text>
                                    </div>
                                    <div className="flex justify-between p-4 gap-5 self-stretch">
                                        <span className="flex justify-center text-lg items-center gap-1">
                                            <RatingBar
                                                value={userRating}
                                                starCount={5}
                                                isEditable={false}
                                                isHalf={true}
                                                color="grey"
                                                activeColor="#f54748"
                                                size={30}
                                            />({userRating})
                                        </span>
                                        <Heading size="headinglg" as="h4" className="text-green-500">₹{userPrice}</Heading>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 p-2">
                                <button onClick={() => setIsEditModalOpen(false)} className="w-[40%] mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                    Cancel
                                </button>
                                <button onClick={() => {
                                    addToCart(product);
                                    handleToast(userName);
                                    setIsEditModalOpen(false);
                                }} className="w-[40%] mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Add to cart
                                </button>
                            </div>
                            {/* </form> */}
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}