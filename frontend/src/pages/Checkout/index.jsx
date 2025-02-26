import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContentSection from "./MainContentSection";

export default function CheckoutPage() {
    return (
        <>
            <Helmet>
                <title>Checkout - Secure and Easy Payment Options</title>
                <meta
                    name="description"
                    content="Complete your order with our secure checkout process. Choose from multiple payment methods and enjoy a hassle-free purchase. Order now for a swift delivery."
                />
            </Helmet>
            {/* Checkout Page Layout Section */}
            <div className="flex w-full flex-col items-center gap-[100px] bg-[#f9f9f9] md:gap-[75px] sm:gap-[50px]">
                {/* Header Section */}
                <div className="container-xs mt-[50px] md:px-5">
                    <Header />
                </div>
                <div className="flex flex-col gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]">
                    {/* Main Content Section */}
                    <MainContentSection />
                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        </>
    );
}