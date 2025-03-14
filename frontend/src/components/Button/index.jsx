import React from "react";
import PropTypes from "prop-types";

// Define shape styles
const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[16px]",
    circle: "rounded-[50%]"
};

// Define variant styles
const variants = {
    fill: {
        light_blue_A700_33: "bg-[#0074ff33] text-[#123968]",
        red_A700_19: "bg-[#ff000019] text-[#ea1010]",
        gray_400_19: "bg-[#c4c4c419] text-[#311f09]",
        blue_400: "bg-[#53a5e0]",
        red_500: "bg-[#ff3838] text-[#ffffff]",
        red_400_19: "bg-[#f5474819] text-[#f54748]",
        white_A700: "bg-[#ffffff]",
        white_A700_7f: "bg-[#ffffff7f] text-[#f54748]",
        indigo_300: "bg-[#739fe0] text-[#ffffff]",
        gray_900: "bg-[#311f09] text-[#ffffff]",
        gray_400_19_01: "bg-[#d0c7c719] text-[#311f09]",
        gray_200: "bg-[#ececec] text-[#000000]",
        gray_300: "bg-[#e3e2e0]",
        blue_gray_100_01: "bg-[#ddd4d4]",
        red_400: "bg-[#f54748] text-[#ffffff]"
    }
};

// Define size classes
const sizes = {
    "8xl": "h-[100px] px-8 text-[25px]",
    "7xl": "h-[80px] px-[34px] text-[25px]",
    "6xl": "h-[80px] px-[34px] text-[20px]",
    "5xl": "h-[74px] px-[34px] text-[20px]",
    "4xl": "h-[60px] px-3.5",
    "3xl": "h-[60px] px-[34px] text-[25px]",
    "2xl": "h-[60px] px-[34px] text-[20px]",
    xl: "h-[54px] px-[34px] text-[16px]",
    md: "h-[50px] px-[34px] text-[14px]",
    sm: "h-[38px] px-3.5 text-[14px]",
    xs: "h-[24px] px-0.5",
    lg: "h-[50px] px-3"
};

// Button component
const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "4xl",
    color = "red_400",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]} `}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};
Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round", "circle"]),
    size: PropTypes.oneOf([
        "8xl", "7xl", "6xl", "5xl", "4xl", "3xl", "2xl", "md", "sm", "xs", "lg", "xl"
    ]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf([
        "light_blue_A700_33", "red_A700_19", "gray_400_19", "blue_400",
        "red_500", "red_400_19", "white_A700", "white_A700_7f", "indigo_300",
        "gray_900", "gray_400_19_01", "gray_200", "gray_300", "blue_gray_100_01",
        "red_400"
    ])
};

// Button.defaultProps = {
//     className: "",
//     shape: "square",
//     variant: "blue_400",
//     size: "4xl",
//     leftIcon: null,
//     rightIcon: null,
//     color: "blue_400"
// };

export { Button };