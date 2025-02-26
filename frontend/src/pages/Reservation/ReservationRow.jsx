import React from "react";
import { Button, SelectBox, Heading, Img } from "../../components";

// Dropdown options for date, time, and party size
const generateDateOptions = () => {
    const options = [];
    const today = new Date();

    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);

        const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const year = date.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        options.push({ label: formattedDate, value: formattedDate });
    }

    return options;
};
const dateDropDownOptions = generateDateOptions();


const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) { // 30-minute intervals
            const period = hour < 12 ? "AM" : "PM";
            const formattedHour = ((hour % 12) || 12).toString().padStart(2, "0"); // Convert to 12-hour format
            const formattedMinute = minute.toString().padStart(2, "0");

            const formattedTime = `${formattedHour}:${formattedMinute} ${period}`;
            options.push({ label: formattedTime, value: formattedTime });
        }
    }
    return options;
};
const timeDropDownOptions = generateTimeOptions();


const partySizeDropDownOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `${i + 1} ${i + 1 === 1 ? "Person" : "People"}`,
    value: i + 1,
}));


export default function ReservationRow() {
    return (
        <div className="flex justify-center">
            <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
                <div className="flex flex-1 flex-col items-start md:self-stretch">
                    <Img
                        src="images/img_rectangle_150.png"
                        alt="Restaurant Image"
                        className="h-[656px] w-[86%] rounded-[20px] object-contain"
                    />
                </div>

                <div className="flex w-[42%] flex-col items-start gap-12 md:w-full">
                    <Heading size="heading5xl" as="h1" className="!font-['Open_Sans']">
                        Book a table
                    </Heading>

                    <div className="flex flex-col gap-10 self-stretch">
                        <div className="flex flex-col gap-10">
                            <SelectBox
                                shape="round"
                                name="Date Dropdown"
                                placeholder={`Date`}
                                options={dateDropDownOptions}
                                className="border border-solid border-[#c4c4c4] sm:py-5"
                            />

                            <SelectBox
                                shape="round"
                                name="Time Dropdown"
                                placeholder={`Time`}
                                options={timeDropDownOptions}
                                className="border border-solid border-[#c4c4c4] sm:py-5"
                            />

                            <SelectBox
                                shape="round"
                                name="Party Size Dropdown"
                                placeholder={`Party Size`}
                                options={partySizeDropDownOptions}
                                className="border border-solid border-[#c4c4c4] sm:py-5"
                            />
                        </div>

                        <a
                            href="#"
                            target="_blank">
                            <Button
                                size="8xl"
                                className="w-[100%] self-stretch rounded-[20px] font-semibold"
                            >
                                Book now
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
