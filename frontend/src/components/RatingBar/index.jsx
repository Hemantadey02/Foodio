import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
    children,
    className,
    starCount = 1,
    color = "grey",
    activeColor = "red",
    isEditable = false,
    size,
    ...restProps
}) => {
    return (
        <div style={{ marginTop: "-4px" }}>
            <ReactStars
                size={size}
                edit={isEditable}
                classNames={className}
                count={starCount}
                isHalf={false}
                color={color}
                activeColor={activeColor}
                {...restProps}
                key={restProps.value || 1}
            />
            {children}
        </div>
    );
};

export { RatingBar };
