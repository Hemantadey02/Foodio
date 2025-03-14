import React, { Suspense, useContext, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Input, Img } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import UserProfile from "../../components/UserProfile";
import menuItems from "../../data/FoodData.js";
import { CartContext } from "context/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";
import { SearchContext } from "context/SearchContext";
// import SearchIcon from "../../../public/images/Search_Icon.gif";



// Example menu data
// const menuItems = [
//     {
//         userImage: "images/img_pngitem_41084.png",
//         userName: "Spaghetti",
//         userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
//         userPrice: "$12.05",
//         orderButton: "Add to cart",
//         userRating: 4.5
//     },
//     {
//         userImage: "images/img_pngitem_1447549.png",
//         userName: "Gnocchi",
//         userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
//         userPrice: "$12.05",
//         orderButton: "Add to cart",
//         userRating: 4.5
//     },
//     {
//         userImage: "images/img_pngegg.png",
//         userName: "Ravioli",
//         userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
//         userPrice: "$12.05",
//         orderButton: "Add to cart",
//         userRating: 4.5
//     },
//     {
//         userImage: "images/img_pngwing_270x270.png",
//         userName: "Penne Alla Vodka",
//         userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
//         userPrice: "$12.05",
//         orderButton: "Add to cart",
//         userRating: 4.5
//     },
//     {
//         userImage: "images/img_pngitem_5290903.png",
//         userName: "Risotto",
//         userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
//         userPrice: "$12.05",
//         orderButton: "Add to cart",
//         userRating: 4.5
//     },
//     {
//         userImage: "images/img_pngwing_270x270.png",
//         userName: "Splitza Signature",
//         userDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
//         userPrice: "$12.05",
//         orderButton: "Add to cart",
//         userRating: 4.5
//     }
// ];

export default function MenuPage() {
    const { addToCart } = useContext(CartContext);
    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const categories = useMemo(() => {
        const allCategories = menuItems.map(item => item.category);
        return ["All Categories", ...new Set(allCategories)]; // Add "All" as default option
    }, [menuItems]);

    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const filteredMenu = useMemo(() => {
        let items = selectedCategory === "All Categories" ? menuItems : menuItems.filter(item => item.category === selectedCategory);
        return searchQuery ? items.filter(item => item.userName.toLowerCase().includes(searchQuery.toLowerCase())) : items;
    }, [selectedCategory, searchQuery]);

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredMenu.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredMenu, currentPage]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const [filteredItems, setFilteredItems] = useState(filteredMenu);
    // Function to handle search

    // Function to clear search
    const clearSearch = () => {
        setSearchQuery("");
        setSearchOpen(false);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    const handleToast = (name) => {
        toast.success(`Added ${name}`, {
            className: 'border-none shadow-none px-6 py-2 font-bold rounded-lg border-1 border-solid border-gray-400 text-gray-900'
        });
    }

    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Explore Our Popular Menu - Order Delicious Meals Online</title>
                <meta name="description" content="Dive into our popular menu featuring Spaghetti, Gnocchi, Ravioli, and more. Enjoy exquisite Italian cuisine with easy online ordering. Perfect for lunch, dinner, or drinks." />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[138px] bg-[#f9f9f9] md:gap-[103px] sm:gap-[69px]">
                <div className="container-xs mt-[50px] md:px-5">
                    {/* Navigation section */}
                    <div className="flex flex-col gap-[92px] md:gap-[69px] sm:gap-[46px]">
                        {/* Header Section */}
                        <Header />
                        {/* Menu section */}
                        <Tabs className="flex flex-col gap-[50px]" selectedTabClassName="!text-[#ffffff] font-semibold bg-[#f54748] rounded-[16px]" selectedTabPanelClassName="!relative tab-panel--selected">
                            <div className="flex flex-col items-center gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                <Heading size="heading4xl" as="h1" className="!font-['Open Sans']">Our Popular Menu</Heading>
                                <div className="flex relative items-center gap-8 md:gap-5">
                                    <TabList className="flex flex-nowrap gap-8 md:flex-col">
                                        {categories.map((category, index) => (
                                            <Tab
                                                key={index}
                                                className=" px-8 py-4 text-[20px] font-normal leading-[200%] text-[#311f09] md:px-5 sm:p-5"
                                                onClick={() => handleCategoryChange(category)}
                                            >
                                                {category}
                                            </Tab>
                                        ))}
                                    </TabList>
                                    {!searchOpen ? (<Img
                                        onClick={() => setSearchOpen(!searchOpen)}
                                        src='/images/Search_Icon.gif'
                                        alt="Search Icon"
                                        className="bg-[#f9f9f9] h-[40px] w-[40px] cursor-pointer"
                                    />) : (<div className="absolute right-0 top-0 rounded-lg w-full bg-[#f9f9f9] shadow-lg p-4 z-50 flex items-center justify-between">
                                        <input
                                            type="search"
                                            value={searchQuery}
                                            onChange={(e) => {
                                                setCurrentPage(1);
                                                setSearchQuery(e.target.value)
                                            }}
                                            placeholder="Search for a dish..."
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f54748] text-lg"
                                        />
                                        <Img
                                            onClick={() => {
                                                setSearchOpen(!searchOpen);
                                                clearSearch();
                                            }}
                                            src='/images/Search_Icon.gif'
                                            alt="Search Icon"
                                            className="bg-[#f9f9f9] h-[40px] w-[40px] cursor-pointer"
                                        />
                                    </div>)}
                                </div>
                            </div>
                            {/* Menu tab content section */}
                            <div className="flex flex-col items-center gap-12">
                                {[...Array(5)].map((_, index) => (
                                    <TabPanel key={`tab-panel${index}`} className="absolute items-center self-stretch">
                                        <div className="w-full self-stretch">
                                            {/* Menu grid section */}
                                            <div className="grid grid-cols-3 justify-center gap-[34px] md:grid-cols-2 sm:grid-cols-1">
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {paginatedItems.length > 0 ? (
                                                        paginatedItems.map((item, index) => (
                                                            <>
                                                                <Toaster position="top-center" reverseOrder={false} />
                                                                <UserProfile
                                                                    key={`menuGrid1${index}`}
                                                                    product={item}
                                                                    addToCart={addToCart}
                                                                    handleToast={handleToast}
                                                                />
                                                            </>
                                                        ))
                                                    ) : (
                                                        <>
                                                            <div></div>
                                                            <div className="flex items-center justify-center w-full h-[300px]">
                                                                <Heading size="heading4xl" as="h2" className="">No items found</Heading>
                                                            </div>
                                                            <div></div>
                                                        </>
                                                    )}
                                                </Suspense>
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))}

                                {/* Pagination controls section */}
                                {paginatedItems.length > 0 && (
                                    <div className="flex items-center justify-center gap-4 mt-6">
                                        <Img
                                            src="images/img_arrow_left_black_900.svg"
                                            alt="Left Arrow"
                                            // className=""
                                            onClick={handlePrevPage}
                                            disabled={currentPage === 1}
                                            className={`h-[24px] w-[24px] rounded-full cursor-pointer ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#f54748] text-white"}`}
                                        />

                                        <span className="text-lg font-semibold text-gray-700">
                                            Page {currentPage} of {totalPages}
                                        </span>

                                        <Img
                                            src="images/img_arrow_right.svg"
                                            alt="Right Arrow"
                                            onClick={handleNextPage}
                                            disabled={currentPage === totalPages}
                                            className={`h-[24px] w-[24px] rounded-full cursor-pointer ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#f54748] text-white"}`}
                                        />
                                    </div>
                                )}

                            </div>
                        </Tabs>
                    </div>
                </div>

                {/* Footer section */}
                <Footer className="self-stretch" />
            </div>
        </>
    );
}