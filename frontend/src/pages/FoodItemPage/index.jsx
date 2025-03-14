import { Heading, Img, Text, RatingBar } from '../../components';
import React, { useState } from 'react';


const FoodItemPage = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(true);
    const menuItems = {
        id: 2,
        userImage: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
        userName: "Margherita Pizza",
        userPrice: 130,
        userDescription: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
        category: "Lunch",
        userRating: 4.2,
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full object-cover max-w-lg relative">
                <Heading as="h3" className='mb-4 text-center'>{menuItems.userName}</Heading>
                <section>
                    <form action="">
                        <div className="space-y-4 p-2 flex flex-col items-center gap-3">
                            <Img src={menuItems.userImage} alt="Product Image" className="mx-2 h-[320px] w-[420px]" />
                            <div className="flex flex-col gap-3 items-center self-stretch">
                                <div className="flex items-center justify-between self-stretch">
                                    <Text size="textmd" as="p" className="text-center leading-[130%] !text-[#59442b]">
                                        {menuItems.userDescription}
                                    </Text>
                                </div>
                                <div className="flex justify-between p-4 gap-5 self-stretch">
                                    <span className="flex justify-center text-lg items-center gap-1">
                                        <RatingBar
                                            // value={4.5}
                                            isEditable={true}
                                            color="#f54748"
                                            activeColor="#f54748"
                                            size={24}
                                        /> {menuItems.userRating}
                                    </span>
                                    <Heading size="headinglg" as="h4" className="text-green-500">${menuItems.userPrice}</Heading>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Add to cart
                            </button>
                            <button onClick={() => setIsEditModalOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default FoodItemPage
