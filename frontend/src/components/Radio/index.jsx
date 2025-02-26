import React from "react";
import PropTypes from "prop-types";

// Define CSS classes for different variants and sizes
const variants = {
    primary: "border-[#311f09] border border-solid checked:border-[#311f09] checked:border-[3px] checked:border-solid checked:focus:border-[#311f09]",
};

const sizes = {
    xs: "h-[16px] w-[16px]",
    sm: "h-[24px] w-[24px]"
};

// Radio component definition
const Radio = React.forwardRef(
    (
        {
            className = "",
            name = "",
            label = "",
            id = "radio_id",
            variant = "primary",
            size = "xs",
            ...restProps
        },
        ref
    ) => {
        return (
            <label className={`flex items-center gap-[5px] cursor-pointer ${className}`}>
                <input
                    className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                    ref={ref}
                    type="radio"
                    name={name}
                    {...restProps}
                    id={id}
                />
                <span>{label}</span>
            </label>
        );
    }
);

// Define PropTypes for the component
Radio.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
