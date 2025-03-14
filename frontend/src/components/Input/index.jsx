import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-lg",
};

const variants = {
    fill: {
        gray_50_01: "bg-[#fafaf9] text-[#0874c3]",
        white_A700: "bg-[#ffffff] text-[#a0978c]",
    },
};

const sizes = {
    sm: "h-[30px] pr-[34px] text-[20px]",
    xl: "h-[60px] px-[34px] text-[20px]",
    xs: "h-[24px] pr-[34px] text-[16px]",
    lg: "h-[52px] pl-4 pr-[34px] text-[20px]",
    md: "h-[52px] p-6 pr-[34px] text-[16px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name="",
            placeholder = "",
            value,
            type = "text",
            label="",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "md",
            color = "white_A700",
            ...restProps
        },
        ref
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                {!!suffix && suffix}
            </label>
        );
    }
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["sm", "xl", "xs", "lg", "md"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["gray_50_01", "white_A700"]),
};

export { Input };