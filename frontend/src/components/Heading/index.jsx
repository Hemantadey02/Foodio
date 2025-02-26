import React from "react";

const sizes = {
    textlg: "text-[18px] font-medium",
    text2xl: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
    headingxs: "text-[16px] font-semibold",
    headings: "text-[18px] font-semibold",
    headingmd: "text-[20px] font-semibold",
    headinglg: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
    headingxl: "text-[30px] font-semibold md:text-[28px] sm:text-[26px]",
    heading2xl: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
    heading3xl: "text-[40px] font-semibold md:text-[38px] sm:text-[36px]",
    heading4xl: "text-[52px] font-bold md:text-[44px] sm:text-[38px]",
    heading5xl: "text-[70px] font-bold md:text-[48px]",
    heading6xl: "text-[80px] font-bold md:text-[48px]",
};

const Heading = ({
    children,
    className = "",
    size = "headinglg",
    as,
    ...restProps
}) => {
    const Component = as || "h6";
    return (
        <Component
            className={`text-[#311f09] font-['Poppins'] ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };