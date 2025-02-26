import { Text, Heading, Img, Button, TextArea, SelectBox, Input } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";

const dropDownOptions = [
    { label: "Birthday", value: "birthday" },
    { label: "Anniversary", value: "anniversary" },
    { label: "Romantic Dinner", value: "romanticDinner" },
    { label: "Business Meeting", value: "businessMeeting" },
    { label: "Family Gathering", value: "familyGathering" },
    { label: "Casual Dining", value: "casualDining" },
];

export default function EnterDetailsReservation({ isOpen, ...props }) {
    const countryOptions = React.useMemo(() => {
        return Object.entries(metadata.countries).map(([code, data]) => {
            const callingCode = `${data[0]}`;
            const display = {
                code,
                callingCode: `+${callingCode}`,
                imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
            };
            return {
                value: code,
                label: (
                    <div className="flex items-center gap-1">
                        <img src={display.imgSrc} alt={`${code} Flag`} className="h-2 w-3" />
                        {display.callingCode}
                    </div>
                ),
            };
        });
    }, []);
    const navigate = useNavigate();

    return (
        <ModalProvider
            {...props}
            appElement={document.getElementById("root")}
            isOpen={isOpen}
            className="min-w-[600px]"  // Further reduced the min width
        >
            {/* Reservation Header Section */}
            <div className="container-xs min-w-[600px] md:px-3">
                {/* Reservation Content Section */}
                <div className="flex flex-col gap-[20px] rounded-[10px] bg-[#ffffff] py-5 sm:py-3">
                    {/* Reservation Close Section */}
                    <div className="flex flex-col items-center px-8 md:px-3">
                        <a onClick={() => navigate(-1)} className="cursor-pointer relative z-[1] self-end">
                            <Img
                                src="images/img_close.svg"
                                alt="Close Image"
                                className="h-[16px] w-[16px]"
                            />
                        </a>
                        <Heading size="heading2xl" as="h1" className="relative mt-[-4px] text-[22px] !font-['Open_Sans']">
                            Reservation
                        </Heading>
                        <Text
                            as="p"
                            className="mt-[15px] flex items-center justify-center rounded-[14px] bg-[#8ae9ff66] px-[20px] py-2 !text-[#000000] sm:px-3"
                        >
                            <span className="text-[#5c4529]">Due to limited availability, we can hold this table for you for</span>
                            <span className="text-[#000000]">&nbsp;</span>
                            <span className="font-semibold text-[#311f09]">5:00 minutes</span>
                        </Text>
                    </div>

                    {/* Reservation Form Section */}
                    <div className="mx-[30px] mb-3 flex items-start md:mx-0 md:flex-col">
                        {/* Customer Data Form Section */}
                        <div className="flex flex-1 flex-col items-start gap-3 self-center md:self-stretch">
                            <Heading as="h2" className="!text-[#000000] text-[18px]">Data Order</Heading>

                            {/* Form Fields */}
                            <div className="flex flex-col items-start gap-3 self-stretch">
                                <Input
                                    size="md"
                                    shape="round"
                                    type="text"
                                    name="First Name Field"
                                    placeholder={`First name`}
                                    className="w-[84%] border border-solid border-[#c4c4c4]"
                                />
                                <Input
                                    size="md"
                                    shape="round"
                                    type="text"
                                    name="Last Name Field"
                                    placeholder={`Last name`}
                                    className="w-[84%] border border-solid border-[#c4c4c4]"
                                />
                                <div className="flex h-[40px] w-[84%] items-center justify-center rounded-lg border border-solid border-[#c4c4c4] bg-[#ffffff] px-1">
                                    <SelectBox
                                        options={countryOptions}
                                        defaultValue={countryOptions.find((option) => option.value === "IN")}
                                        className="max-h-[18px] flex-shrink-0 items-center justify-center bg-transparent pl-2"
                                    />
                                    <input
                                        type="tel"
                                        name="Phone Number Field"
                                        placeholder="Phone number"
                                        className="ml-3 flex h-[26px] flex-grow items-center justify-center pr-[26px] text-[16px] text-[#a0978c] sm:pr-4"
                                    />
                                </div>
                                <Input
                                    size="md"
                                    shape="round"
                                    type="email"
                                    name="Email Field"
                                    placeholder={`Email address`}
                                    className="w-[84%] border border-solid border-[#c4c4c4]"
                                />
                                <SelectBox
                                    size="sm"
                                    indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />}
                                    name="Occasion Selector"
                                    placeholder={`Select an occasion`}
                                    options={dropDownOptions}
                                    className="w-[84%] rounded-lg border border-solid border-[#c4c4c4]"
                                />
                                <TextArea
                                    size="sm"
                                    shape="round"
                                    name="Special Request"
                                    placeholder={`Add a special request`}
                                    className="w-[84%] !border-[#c4c4c4] text-[#a0978c]"
                                />
                            </div>

                            {/* Reservation Confirmation Button */}
                            <a href="https://www.youtube.com/embed/bv8Fxk@sz71" target="_blank">
                                <Button size="md" className="min-w-[300px] rounded-lg">
                                    Confirm reservation
                                </Button>
                            </a>
                        </div>

                        {/* Reservation Details Section */}
                        <div className="flex w-[34%] flex-col gap-6 md:w-full">
                            {/* Reservation Summary Section */}
                            <div className="flex flex-col items-start gap-6 rounded-[14px] bg-[#d0ccc719] p-[24px] sm:p-4">
                                <Heading as="h3" className="ml-1 md:ml-0 text-[18px]">Reservation detail</Heading>

                                {/* Reservation Info */}
                                <div className="flex flex-col gap-4 self-stretch">
                                    <div className="flex items-center gap-5">
                                        <Img src="images/img_thumbs_up.svg" alt="Thumbs Up Image" className="h-[28px] w-[28px]" />
                                        <Text as="p" className="mr-4 self-end text-[16px]">Saturday, 28 February 2024</Text>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <Img src="images/img_clock.svg" alt="Clock Image" className="h-[28px] w-[28px]" />
                                        <Text as="p" className="self-end text-[16px]">04:30 pm</Text>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <Img src="images/img_lock.svg" alt="Lock Image" className="h-[28px] w-[28px]" />
                                        <Text as="p" className="mr-[10px] text-[16px]">2 people (Standard seating)</Text>
                                    </div>
                                </div>
                            </div>

                            {/* Restaurant Information Section */}
                            <div className="flex flex-col items-start gap-6">
                                <Heading as="h4" className="!text-[#000000] text-[18px]">Restaurant information</Heading>
                                <Text as="p" className="w-[96%] leading-[26px] text-[16px] md:w-full">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalProvider>
    );
}
