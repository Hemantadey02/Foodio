import React from "react";
import { NavLink } from "react-router-dom";
import { Text, Heading, Button, Img } from "..";

export default function Footer({ ...props }) {
    return (
        <footer
            {...props}
            className={`${props.className} flex self-stretch justify-center items-center py-[70px] md:py-5 bg-[#1b1919]`}
        >
            <div className="container-xs flex justify-center md:px-5">
                <div className="flex w-full flex-col items-center gap-[60px] sm:gap-[30px]">
                    <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                        <div className="flex w-[32%] flex-col gap-[42px] md:w-full">
                            <Img
                                src="images/img_footer_logo.png"
                                alt="Footer Logo"
                                className="h-[50px] w-[124px] object-contain"
                            />
                            <Text as="p" className="leading-[200%] !text-[#e3e1df]">
                                Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
                            </Text>
                            <div className="flex w-[68%] justify-between gap-5 md:w-full">
                                <Button color="gray_300" shape="circle" className="w-[60px] !rounded-[30px]">
                                    <Img src="images/img_twitter.png" />
                                </Button>
                                <Button color="blue_gray_100_01" shape="circle" className="w-[60px] !rounded-[30px]">
                                    <Img src="images/img_instagram.png" />
                                </Button>
                                <Button color="blue_gray_100_01" shape="circle" className="w-[60px] !rounded-[30px]">
                                    <Img src="images/img_facebook.png" />
                                </Button>
                            </div>
                        </div>
                        <div className="mt-1 flex w-[62%] items-start justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[28%] flex-col items-start gap-[30px] self-center md:w-full">
                                <Heading as="h4" className="!text-[#f54748]">
                                    Page
                                </Heading>
                                <ul className="flex flex-col items-start gap-5">
                                    <li>
                                        <NavLink to="/"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Home</Text>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/menu"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Menu</Text>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/orderonline"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Order online</Text>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catering"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Catering</Text>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/reservation"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Reservation</Text>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-[32%] flex-col items-start gap-[30px] md:w-full">
                                <Heading as="h4" className="!text-[#f54748]">Information</Heading>
                                <ul className="flex flex-col items-start gap-5">
                                    <li>
                                        <NavLink to="/aboutus"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">About us</Text>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/testimonial"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Testimonial</Text>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/event"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">Event</Text>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-[40%] flex-col items-start gap-[30px] md:w-full">
                                <Heading as="h4" className="!text-[#f54748]">Get in touch</Heading>
                                <ul className="flex flex-col items-start gap-5 self-stretch">
                                    <li>
                                        <a href="#" className="w-full leading-[153%]">
                                            <Text as="p" className="!text-[#e3e1df]">2972 Westheimer Rd. Santa Ana, Illinois 85486</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:abc@example.com"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">abc@example.com</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="telto:+12345678901"   rel="noreferrer">
                                            <Text as="p" className="!text-[#e3e1df]">+123 4567 8901</Text>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Text as="p" className="!text-[#e3e2e0]">
                        <span>Copyright&nbsp;</span>
                        <span>&copy; 2024</span>
                    </Text>
                </div>
            </div>
        </footer>
    );
}
