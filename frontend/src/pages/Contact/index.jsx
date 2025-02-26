import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactInfoSection from "./ContactInfoSection";

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact Us - Share Your Experience or Ask Questions</title>
                <meta
                    name="description"
                    content="Get in touch with us for any queries or feedback. Our team at 2972 Westheimer Rd. is eager to hear from you. Contact us today to enhance your experience."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[102px] bg-[#f9f9f9] md:gap-[76px] sm:gap-[51px]">
                {/* Navigation section */}
                <div className="container-xs mt-[50px] md:px-5">
                    <Header />
                </div>

                <div className="flex flex-col gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]">
                    {/* Contact info section */}
                    <ContactInfoSection />

                    {/* Footer section */}
                    <Footer />
                </div>
            </div>
        </>
    );
}
