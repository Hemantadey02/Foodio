import React, { useState } from "react";
import Header from "components/Header";
import { Button, Img, Input } from "components";
import { FaHome } from "react-icons/fa";

// Address and Payment Card Components
const AddressCard = ({ label, address, editAddress }) => (
    <div className="w-[45%] h-[20%] border border-gray-300 rounded-lg p-4 shadow-md flex flex-col justify-between">
        <div className="flex items-start space-x-3">
            {/* Icon */}
            <div className="text-blue-500">
                <FaHome size={20} />
            </div>

            {/* Address Info */}
            <div>
                <p className="text-gray-800 font-semibold">{label}</p>
                <p className="text-gray-600 text-sm mt-1">{address}</p>
                {/* Actions */}
                <div className="flex space-x-4 text-sm mt-2">
                    <button onClick={editAddress} className="text-blue-600 font-semibold hover:underline focus:outline-none">
                        EDIT
                    </button>
                    <button className="text-red-600 font-semibold hover:underline focus:outline-none">
                        DELETE
                    </button>
                </div>
            </div>
        </div>

    </div>
);

const PaymentCard = ({ method }) => (
    <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
        <p className="text-gray-700">{method}</p>
    </div>
);

// Main Profile Page Component
const ProfilePage = () => {
    const [selectedOption, setSelectedOption] = useState("Orders History");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);

    const renderContent = () => {
        switch (selectedOption) {
            case "Orders History":
                return <div className="flex justify-center items-center">Your orders will appear here.</div>;
            case "Addresses":
                return (
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold mb-4">Manage Addresses</h2>
                        <div className="flex gap-4 justify-around">
                            <AddressCard
                                editAddress={()=> setIsEditAddressModalOpen(true)}
                                label="Work"
                                address="N C Bose HALL, HOSTEL NO 3 (4th Year Hostel), Kharia, West Bengal 735102, India"
                            />
                            <AddressCard
                                editAddress={()=> setIsEditAddressModalOpen(true)}
                                label="Home"
                                address="123 Main Street, Kolkata, West Bengal 700001, India"
                            />
                        </div>
                        {/* Add more AddressCard components as needed */}
                    </div>
                );
            case "Payments":
                return (
                    <div>
                        <PaymentCard method="Visa ending in 1234" />
                        <PaymentCard method="Mastercard ending in 5678" />
                    </div>
                );
            case "Logout":
                return <div className="flex justify-center items-center">You have been logged out.</div>;
            default:
                return null;
        }
    };

    return (
        <div className={`flex w-full flex-col gap-32 bg-[#f9f9f9] md:gap-24 sm:gap-16 ${isEditModalOpen ? "" : ""}`}>
            {/* Header */}
            <div className="flex flex-col items-center gap-[70px] py-[50px] md:gap-[52px] md:py-5 sm:gap-[35px]">
                <div className="container-xs md:px-5">
                    <Header />
                </div>

                {/* Profile Info Section */}
                <div className="w-[64%] mx-auto p-6 bg-white shadow rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {/* Profile Image */}
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                            <Img src="images/img_picture_1.png" />
                        </div>
                        {/* Name and Email Info */}
                        <div>
                            <h2 className="text-xl font-semibold">HEMANTA DEY</h2>
                            <p className="text-gray-600">sample123@gmail.com</p>
                        </div>
                    </div>
                    {/* Edit Profile Button */}
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button
                            onClick={() => setIsEditModalOpen(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Edit Profile
                        </button>
                        <p className="text-gray-600">10 Orders</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-[64%] mx-auto flex">
                    {/* Sidebar */}
                    <div className="w-1/5 bg-white p-6 shadow rounded-lg mr-4">
                        <ul className="space-y-4">
                            {["Orders History", "Addresses", "Payments", "Logout"].map((option) => (
                                <li
                                    key={option}
                                    onClick={() => setSelectedOption(option)}
                                    className={`cursor-pointer p-2 rounded ${selectedOption === option ? "bg-red-200 font-semibold" : "text-gray-700"
                                        } hover:bg-red-100`}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Selected Content */}
                    <div className="w-4/5 bg-white p-6 shadow rounded-lg">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
                        <button
                            onClick={() => setIsEditModalOpen(false)}
                            className=" text-2xl absolute top-8 right-8 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                        <section>
                            <form action="">
                                <div className="space-y-4">
                                    <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="First Name Field"
                                            placeholder={`First name`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                    <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="Email Field"
                                            placeholder={`Email address`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                    <section>
                                        <Input
                                            shape="round"
                                            type="phone"
                                            name="Phone Number Field"
                                            placeholder={`Phone number`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                    <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="City Field"
                                            placeholder={`Type your city name`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        Save Changes
                                    </button>
                                    <button onClick={() => setIsEditModalOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            )}

            {/* Edit Address Modal */}
            {isEditAddressModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
                        <button
                            onClick={() => setIsEditAddressModalOpen(false)}
                            className=" text-2xl absolute top-8 right-8 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Edit Address</h2>
                        <section>
                            <form action="">
                                <div className="space-y-4">
                                    <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="Address Field"
                                            placeholder={`Address`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                    <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="Door/Flat No. Field"
                                            placeholder={`Door/Flat No.`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                    <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="Landmark Field"
                                            placeholder={`Landmark`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section>
                                    {/* <section>
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="City Field"
                                            placeholder={`Type your city name`}
                                            className="border border-solid border-[#c4c4c4]"
                                        />
                                    </section> */}
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        Save Address & Proceed
                                    </button>
                                    <button onClick={() => setIsEditAddressModalOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
