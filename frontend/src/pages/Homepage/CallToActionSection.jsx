import { useNavigate } from "react-router-dom";
import { Button, Heading } from "../../components";
import React from "react";

export default function CallToActionSection() {
    const navigate = useNavigate();
    return (
        <>
            {/* Call to action section */}
            <div className="flex justify-center">
                <div className="container-xs flex justify-center md:px-5">
                    <div className="flex w-full flex-col items-center justify-center gap-10 rounded-[24px] bg-[#fdd9d9] px-14 py-[92px] md:p-5">
                        <Heading size="heading4xl" as="h2" className="mt-1.5 !font-['Open_Sans']">
                            Hungry? We are open now..
                        </Heading>
                        <div className="flex gap-6">
                            <a onClick={()=> navigate('/orderonline')} target="_blank">
                                <Button size="5xl" shape="round" className="min-w-[232px] font-semibold">
                                    Order now
                                </Button>
                            </a>
                            <a onClick={()=> navigate('/reservation')} target="_blank">
                                <Button color="white_A700_7f" size="5xl" shape="round" className="min-w-[232px] font-semibold">
                                    Reservation
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
