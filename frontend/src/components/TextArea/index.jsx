import React from "react";
import PropTypes from "prop-types";

// Define styles for different shapes
const shapes = {
    round: "rounded-lg", // Corrected shape style
};

// Define styles for different variants
const variants = {
    tarOutlineGray400: "!border-[#c4c4c4] border border-solid bg-[#ffffff]",
};

// Define sizes for the TextArea
const sizes = {
    sm: "h-[150px] p-4 text-[20px]",
    xs: "h-[130px] p-6 text-[16px]",
};

// TextArea component
const TextArea = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            shape,
            size = "xs",
            variant = "tarOutlineGray400",
            onChange,
            ...restProps
        },
        ref
    ) => {
        // Handle change events
        const handleChange = (e) => {
            if (onChange) {
                onChange(e?.target?.value);
            }
        };

        return (
            <textarea
                ref={ref}
                className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                {...restProps}
            />
        );
    }
);

// Define prop types for the TextArea component
TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    variant: PropTypes.oneOf(["tarOutlineGray400"]),
};

export { TextArea };