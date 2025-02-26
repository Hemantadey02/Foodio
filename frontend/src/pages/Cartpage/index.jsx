// CartPage.jsx
import React, { useState } from "react";

const CartPage = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Pi Pizza Oven",
            description: "Estimated Ship Date: June 6th",
            price: 469.99,
            quantity: 1,
            src: 'images/img_pngegg.png'
        },
        {
            id: 2,
            name: "Grill Ultimate Bundle",
            description: "",
            price: 549.99,
            quantity: 1,
            src: 'images/img_pngegg.png'
        },
        {
            id: 3,
            name: "Starters (4 pack)",
            description: "",
            price: 0.0,
            quantity: 1,
            src: 'images/img_pngegg.png'
        },
        {
            id: 4,
            name: "Charcoal Grill Pack",
            description: "",
            price: 0.0,
            quantity: 1,
            src: 'images/img_pngegg.png'
        },
    ]);

    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [isCouponApplied, setIsCouponApplied] = useState(false);

    const updateQuantity = (id, amount) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            )
        );
    };

    const calculateSubtotal = () =>
        items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1; // Example: 10% tax
    const grandTotal = subtotal + tax - discount;

    const handleApplyCoupon = () => {
        if (couponCode === "DISCOUNT10" && !isCouponApplied) {
            setDiscount(100); // Apply a fixed $100 discount
            setIsCouponApplied(true);
            alert("Coupon applied successfully!");
        } else if (isCouponApplied) {
            alert("Coupon already applied.");
        } else {
            alert("Invalid coupon code.");
        }
    };

    const handleRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Your Cart ({items.length} items)</h1>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-center">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4">Item Image</th>
                            <th className="p-4">Item Description</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Quantity</th>
                            <th className="pr-12 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200">
                                <td className="p-2">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            className="w-16 h-16 items-center"
                                        />
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="font-semibold">{item.name}</p>
                                        {item.description && (
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                        )}
                                    </div>
                                </td>
                                <td className="p-4 text-center">${item.price.toFixed(2)}</td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 py-[4px] bg-gray-200 rounded-full hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 py-[4px] bg-gray-200 rounded-full hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-red-500 bg-gray-200 rounded-full px-2 py-1 hover:bg-red-100"
                                            title="Remove item"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end mt-6">
                <div className="text-right w-[30%] pr-12">
                    <div className="border-b border-gray-300 pb-2 mb-2 flex justify-between">
                        <p className="text-lg">Subtotal: </p>
                        <p className="text-lg">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="border-b border-gray-300 pb-2 mb-2 flex justify-between">
                        <p className="text-lg">Sales Tax: </p>
                        <p className="text-lg">${tax.toFixed(2)}</p>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="mt-4 border-b border-gray-300 pb-4 mb-2 flex">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 mb-2"
                        />
                        <button
                            onClick={handleApplyCoupon}
                            className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600"
                        >
                            Apply Coupon
                        </button>
                    </div>

                    {/* Display discount if applied */}
                    {discount > 0 && (
                        <div className="border-b border-gray-300 pb-2 mb-2 text-green-500 flex justify-between">
                            <p className="text-lg">Discount:</p>
                            <p className="text-lg">- ${discount.toFixed(2)}</p>
                        </div>
                    )}

                    <div className="border-b border-gray-300 pb-2 mb-2 flex justify-between">
                        <p className="text-lg font-bold">Grand Total: </p>
                        <p className="text-lg font-bold">${grandTotal.toFixed(2)}</p>
                    </div>
                    <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 w-full">
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
