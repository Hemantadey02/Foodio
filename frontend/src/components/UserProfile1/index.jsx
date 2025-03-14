import { useNavigate } from "react-router-dom";
import { Button, Heading, RatingBar, Text, Img } from "..";
import { FaArrowRight } from "react-icons/fa";

export default function UserProfile1({
    orderButton = "Order Now",
    product = {
        userImage: "images/img_pngitem_41084.png",
        userName: "Spaghetti",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        userPrice: "$12.05",
        userRating: 4.5,
    },
    ...props
}) {
    const navigate = useNavigate();
    const { userImage, userName, userDescription, userPrice, userRating } = product;
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-full gap-[34px] px-[30px] py-9 sm:p-5 bg-[#ffffff] rounded-[40px] hover:shadow-md hover:scale-105 transition-all ease-in duration-400`}
        >
            <div className="flex flex-col gap-3 items-center self-stretch">
                <Img src={userImage} alt="Product Image" className="mx-2 h-[270px] w-[270px]" />
                <div className="flex items-center justify-between self-stretch">
                    <span className="flex justify-center text-lg items-center gap-1">
                        <RatingBar
                            value={userRating}
                            starCount={5}
                            isEditable={false}
                            isHalf={true}
                            color="grey"
                            activeColor="#f54748"
                            size={26}
                            className={"mr-25"}
                        />({userRating})
                    </span>
                </div>
                <div className="flex items-center justify-between self-stretch">
                    <Heading as="h3">
                        {userName.length > 17 ? `${userName.slice(0, 14)}...` : userName}
                    </Heading>
                </div>

                <Text size="texts" as="p" className="text-left leading-[130%] !text-[#59442b]">
                    {userDescription.length > 90 ? `${userDescription.slice(0, 87)}...` : userDescription}
                </Text>
                <div className="flex justify-between gap-5 self-stretch">
                    <Heading size="headingmd" as="h4" className="text-green-500">₹{userPrice}</Heading>
                    <Button color="white" onClick={() => navigate('/menu')} size="sm" className="bg-[#e8e6e6] rounded-full text-red-500 transition-all ease-in duration-400 hover:bg-red-500 hover:text-white font-semibold">
                        <FaArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}