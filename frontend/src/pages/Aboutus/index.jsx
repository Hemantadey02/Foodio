import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChefSection from "./ChefSection";
import { useNavigate } from "react-router-dom";

export default function AboutusPage() {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>About Our Restaurant: Discover Our Story and Culinary Delights</title>
                <meta
                    name="description"
                    content="Learn about our restaurant's journey, our commitment to flavor and nutrition, and meet Ismail Marzuki, our esteemed Executive Chef. Experience culinary excellence with us."
                />
            </Helmet>

            <div className="flex w-full flex-col items-center gap-[78px] bg-[#f9f9f9] md:gap-[58px] sm:gap-[39px]">
                {/* Header Section */}
                <div className="container-xs mt-[50px] md:px-5">
                    <Header />
                </div>

                {/* Hero Section */}
                <div className="flex flex-col gap-[104px] self-stretch md:gap-[78px] sm:gap-[52px]">
                    <div className="flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
                        <div className="container-xs md:px-5">
                            <div className="flex flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
                                <div className="flex items-center justify-between gap-5 md:flex-col">
                                    <div className="w-[48%] rounded-[270px] bg-[#d0ccc719] p-[52px] md:w-full md:p-5">
                                        <div className="rounded-[218px] bg-[#d0ccc733] p-11 md:p-5">
                                            <Img
                                                src="../../../images/img_unsplash_ebmyh7oo5wy.png"
                                                alt="Featured Image"
                                                className="h-[346px] w-[346px] rounded-[172px] object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-[38%] flex-col items-start gap-[34px] md:w-full">
                                        <div className="flex flex-col gap-4 self-stretch">
                                            <Heading
                                                size="heading4xl"
                                                as="h1"
                                                className="!font-[Open_Sans] leading-[110%] !text-[#f54748]"
                                            >
                                                <span className="text-[#301e08]">
                                                    About Our <br />
                                                </span>
                                                <span className="text-[#f54748]">Restaurant</span>
                                            </Heading>
                                            <Text
                                                as="p"
                                                className="leading-[200%]"
                                            >
                                                This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
                                            </Text>
                                            <Button
                                                onClick={() =>navigate('/orderonline')}
                                                size="5xl"
                                                shape="round"
                                                color="red_500"
                                                className="max-w-[50%] font-semibold"
                                            >
                                                Order now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {/* Additional Content */}
                                <div className="flex items-center justify-between gap-5 md:flex-col">
                                    <Text
                                        as="p"
                                        className="w-[40%] leading-[200%] md:w-full"
                                    >
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                    </Text>
                                    <div className="w-[50%] rounded-[280px] bg-[#d0ccc719] p-14 md:w-full md:p-5">
                                        <div className="rounded-[222px] bg-[#d0ccc733] p-11 md:p-5">
                                            <Img
                                                src="../../../images/img_unsplash_5dszncvdhde.png"
                                                alt="Secondary Image"
                                                className="h-[354px] w-[354px] rounded-[176px] object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chef Section */}
                        <ChefSection />
                    </div>

                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        </>
    );
}