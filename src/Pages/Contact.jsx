import React from "react";
import CommonHero from "../Components/Common/CommonHero";
import PageAnimation from "../Components/PageAnimation";

const Contact = () => {
        document.title = "Contact → Future Goals";
    return (
        <PageAnimation>
            <div>
                <CommonHero
                    bg={"/Images/ContactHero.jpg"}
                    title={null}
                    subTitle={"Contact"}
                />
                <div className="w-full bg-[#1E1E1E] pb-24 sm:pb-28 md:pb-36 sm:px-5 md:px-8 lg:px-10 xl:px-10">
                    <div className="max-w-[1440px] w-full bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular -translate-y-0 sm:-translate-y-[100px] leading-[25px] sm:leading-[27px]">
                        <div className="">
                            <p className="font-BriceBold uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 text-[#1E1E1E]">
                                Get in touch
                            </p>
                            <p>
                                Do you have a question about Future Goals and
                                your answer could not be found in the frequently
                                asked questions section. Or do you want to
                                partner up? Please let us know.
                            </p>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-20 w-full">
                            <div className="flex flex-col gap-1 sm:gap-2 w-full">
                                <label
                                    htmlFor="name"
                                    className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-0 lg:mb-3 block"
                                >
                                    What's your name?{" "}
                                    <span className="text-[#F6404B] ml-1">
                                        *
                                    </span>
                                </label>
                                <input
                                    className="outline-none w-full focus:border-[#1E1E1E] border-b-[2px] border-[#BBB6B1] pb-4 text-sm sm:textbase md:text-lg"
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                <label
                                    htmlFor="company"
                                    className="font-BriceSemiBold text-base sm:text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-0 lg:mb-3"
                                >
                                    What's your company & function?
                                </label>
                                <input
                                    className="outline-none w-full focus:border-[#1E1E1E] border-b-[2px] border-[#BBB6B1] pb-4 text-sm sm:textbase md:text-lg"
                                    type="text"
                                    id="company"
                                    placeholder="Company Name, Job Title"
                                />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                <label
                                    htmlFor="email"
                                    className="font-BriceSemiBold text-base sm:text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-0 lg:mb-3"
                                >
                                    What's your email?
                                    <span className="text-[#F6404B] ml-1">
                                        *
                                    </span>
                                </label>
                                <input
                                    className="outline-none w-full focus:border-[#1E1E1E] border-b-[2px] border-[#BBB6B1] pb-4 text-sm sm:textbase md:text-lg"
                                    type="text"
                                    id="email"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                <label
                                    htmlFor="phone"
                                    className="font-BriceSemiBold text-base sm:text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-0 lg:mb-3"
                                >
                                    What's your phone number?
                                </label>
                                <input
                                    className="outline-none w-full focus:border-[#1E1E1E] border-b-[2px] border-[#BBB6B1] pb-4 text-sm sm:textbase md:text-lg"
                                    type="text"
                                    id="phone"
                                    placeholder="+31 6 12 34 56 78"
                                />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                <label
                                    htmlFor="message"
                                    className="font-BriceSemiBold text-base sm:text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-0 lg:mb-3"
                                >
                                    Your message
                                    <span className="text-[#F6404B] ml-1">
                                        *
                                    </span>
                                </label>
                                <textarea
                                    className="outline-none w-full focus:border-[#1E1E1E] border-b-[2px] resize-x-none h-[80px] h-sm:[100px] md:h-[150px] border-[#BBB6B1] pb-4 text-sm sm:textbase md:text-lg"
                                    name=""
                                    id="message"
                                    placeholder="Hello Future Goals..."
                                ></textarea>
                            </div>
                        </div>
                        <button className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm md:text-base lg:text-lg uppercase bg-white text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden inline-block mt-12 sm:mt-14 md:mt-16 cursor-pointer">
                            <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                Send message
                            </span>
                            <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                →
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-44 h-44 bg-black scale-0 group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                        </button>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default Contact;
