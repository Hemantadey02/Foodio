import { useLocation, useNavigate } from "react-router-dom";
import { Button, Img, Text } from "..";
import React, { useContext } from "react";
import { CartContext } from "context/CartContext";

export default function Header({ ...props }) {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About us", path: "/aboutus" },
        { name: "Order online", path: "/orderonline" },
        { name: "Reservation", path: "/reservation" },
        { name: "Contact us", path: "/contact" },
    ];
    return (
        <header
            {...props}
            className={`${props.className} flex sm:flex-col justify-between items-center gap-5`}
        >
            <Img
                src="images/img_header_logo.svg"
                alt="Header Logo"
                className="h-[50px] w-[124px] object-contain"
            />
            <ul className="!mt-2 flex items-start gap-[30px] self-start sm:flex-col sm:self-auto">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <a onClick={() => navigate(link.path)} className="cursor-pointer relative group">
                            <Text
                                size="textmd"
                                as="p"
                                className={`!font-['Open_Sans'] ${location.pathname === link.path ? "!text-[#f54748] font-bold" : "!text-[#311f09cc] hover:!text-[#f54748]"}`}
                            >
                                {link.name}
                            </Text>
                            <div className={`absolute left-0 bottom-0 bg-[#f54748] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full h-[1px]'}`} />
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex gap-6">
                <a className="relative ">
                    <Button onClick={() => navigate('/cart')} color="white_A700" size="lg" className={`w-[50px] rounded-[24px] ${cart.length > 0 && 'animate-pulse delay-500 transition-all'}`}>
                        <Img src="images/img_cart.svg" />
                    </Button>
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </span>
                    )}
                </a>
                <a>
                    <Button onClick={() => navigate('/login')} color="red_A700_19" size="md" shape="round" className="min-w-[112px] font-semibold">
                        Log in
                    </Button>
                </a>
            </div>
        </header>
    );
}