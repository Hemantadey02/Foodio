import React, { Suspense } from "react";
import { Button, Radio, Heading, TextArea, Input, SelectBox, Img } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";

export default function MainContentSection() {
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
                    <div className="flex items-center">
                        <Img src={display.imgSrc} alt={`${display.code} flag`} className="h-[20px] w-[30px] mr-2" />
                        {`${display.callingCode} ${display.code}`}
                    </div>
                ),
            };
        });
    }, []);

    return (
        <>
            {/* Main Content Section */}
            <div className="flex justify-center">
                <div className="container-xs flex items-start gap-[99px] md:flex-col md:px-5">
                    <Button color="gray_900" size="lg" className="w-[50px] rounded-[24px]">
                        <Img src="images/img_arrow_left_white_a700.svg" alt="Back Arrow" />
                    </Button>
                    <div className="flex w-[80%] flex-col items-center gap-7 self-center rounded-[16px] bg-[#ffffff] p-11 shadow-[0_12px_10px_0_#00000007] md:w-full md:p-5">
                        <Heading size="heading2xl" as="h1" className="font-['Open_Sans']">
                            Checkout
                        </Heading>
                        <div className="flex flex-col items-start gap-2 self-stretch">
                            <Heading size="text-lg" as="h2">Shipping Address</Heading>
                            <div className="flex gap-4 self-stretch md:flex-col">
                                <Input
                                    shape="round"
                                    name="Address Input"
                                    placeholder={`8502 Preston Rd. Inglewood, Maine 98380`}
                                    className="flex-grow border border-solid border-[#c4c4c4] !text-[#311f09]"
                                />
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank" rel="noopener noreferrer">
                                    <Button color="indigo_300" size="xl" className="min-w-[166px] rounded-lg">
                                        Change
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[30px] self-stretch">
                            <div className="flex flex-col items-start gap-2.5">
                                <Heading size="textlg" as="h3">Order Data</Heading>
                                <div className="flex flex-col gap-6 self-stretch">
                                    <div className="flex gap-4 md:flex-col">
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="First Name Input"
                                            placeholder={`First name`}
                                            className="w-full border border-solid border-[#c4c4c4]"
                                        />
                                        <Input
                                            shape="round"
                                            type="text"
                                            name="Last Name Input"
                                            placeholder={`Last name`}
                                            className="w-full border border-solid border-[#c4c4c4]"
                                        />
                                    </div>
                                    <div className="flex gap-4 md:flex-col">
                                        <div className="flex h-[52px] w-full items-center justify-center rounded-lg border border-solid border-[#c4c4c4] bg-[#ffffff] px-1">
                                            <SelectBox
                                                options={countryOptions}
                                                defaultValue={countryOptions.find((option) => option.value === "IN")}
                                                className="max-h-[24px] flex-shrink-0 items-center justify-center bg-transparent pl-2.5"
                                            />
                                            <input
                                                type="tel"
                                                name="Phone Number Input"
                                                placeholder="Phone number"
                                                className="mx-2 flex h-[24px] flex-grow items-center justify-center pr-[34px] text-[16px] text-[#a0978c] sm:pr-5"
                                            />
                                        </div>
                                        <Input
                                            shape="round"
                                            type="email"
                                            name="Email Input"
                                            placeholder={`Email address`}
                                            className="w-full border border-solid border-[#c4c4c4]"
                                        />
                                    </div>
                                    <TextArea
                                        shape="round"
                                        name="Message TextArea"
                                        placeholder={`Message`}
                                        className="!border-[#c4c4c4] text-[#a0978c]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-start gap-2">
                                    <Heading size="textlg" as="h4">Payment Method</Heading>
                                    <div className="grid grid-cols-2 gap-4 self-stretch md:grid-cols-1">
                                        <Suspense fallback={<div>Loading payment options...</div>}>
                                            {[...Array(4)].map((_, index) => (
                                                <Radio
                                                    key={"paymentOptionsGrid" + index}
                                                    value="cashondelivery"
                                                    name="codoption"
                                                    label="Cash On Delivery"
                                                    className="w-full gap-2 rounded-lg bg-[#d0ccc719] pb-2.5 pr-[34px] pt-3.5 text-[18px] text-[#311f09] sm:pr-5"
                                                />
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                                <Button size="2xl" className="self-stretch rounded-[12px] font-medium">
                                    Order Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}