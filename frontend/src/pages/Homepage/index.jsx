import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToActionSection from "./CallToActionSection";
import FeaturesSection from "./FeaturesSection";
import HomepageRowbestrestaura from "./HomepageRowbestrestaura";
import OurChefsSection from "./OurChefsSection";
import PopularMenuSection from "./PopularMenuSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomepagePage() {
    return (
        <>
            <Helmet>
                <title>Best Restaurant in Town - Delicious Menu and Reservations</title>
                <meta
                    name="description"
                    content="Discover our popular dishes like Spaghetti, Gnocchi, and Penne Alla Vodka. Enjoy the best food in town with convenient home delivery and dine-in services. Make a reservation today!"
                />
            </Helmet>

            {/* header section */}
            <div className="flex w-full flex-col gap-32 bg-[#f9f9f9] md:gap-24 sm:gap-16">
                {/* hero section */}
                <div className="flex flex-col items-center gap-[70px] bg-gradient-to-b from-[#f447482b] to-[#f5474800] py-[50px] md:gap-[52px] md:py-5 sm:gap-[35px]">
                    <div className="container-xs md:px-5">
                        <Header />
                    </div>
                    <HomepageRowbestrestaura />
                </div>

                {/* features section */}
                <FeaturesSection />

                {/* popular menu section */}
                <PopularMenuSection />

                {/* our chefs section */}
                <OurChefsSection />

                {/* testimonials section */}
                <TestimonialsSection />

                {/* call to action section */}
                <CallToActionSection />

                {/* footer section */}
                <Footer />
            </div>
        </>
    );
}