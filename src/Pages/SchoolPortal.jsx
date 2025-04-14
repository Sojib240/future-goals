import React, { useRef } from "react";
import CommonHero2 from "../Components/Common/CommonHero2";
import PageAnimation from "../Components/PageAnimation";

const SchoolPortal = () => {
    document.title = "School Portal → Future Goals";
    const targetRef = useRef(null);

    const scrollToSection = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <PageAnimation>
            <div id="smooth">
                <CommonHero2
                    backgroundImage={"/Images/news-1b.jpg"}
                    title={"School Portal"}
                    subtitle={null}
                    bgColor={"bg-[#00000070]"}
                    margins={"mt-0"}
                    sizes={
                        "text-[13vw] leading-[13.5vw] sm:text-[55px] md:text-[60px] lg:text-[90px] xl:text-[115px] text-[#F1EAE2] sm:leading-[120%]"
                    }
                    logo={true}
                    paddings={
                        "pt-44 sm:pt-44 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-16 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-23 2xl:pb-26"
                    }
                />
                <div
                    ref={targetRef}
                    className="bg-[#F1EAE2] px-5 md:px-8 lg:px-10 xl:px-10 relative"
                >
                    <button
                        onClick={scrollToSection}
                        className={`z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 xl:w-15 xl:h-15 bg-[#1E1E1E] rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer absolute top-[-20px] sm:top-[-25px] xl:top-[-30px] left-1/2 -translate-x-1/2`}
                    >
                        <span className="block w-3.5 sm:w-4 md:w-auto">
                            <img
                                className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert-0 invert rotate-90"
                                src="/Images/Icons/arrow.svg"
                                alt="arrow Icon"
                            />
                        </span>
                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-white scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                    </button>
                    <div className="max-w-[1600px] w-full bg-[#F1EAE2] mx-auto pt-16 pb-20 sm:pt-20 sm:pb-28 md:py-24 lg:py-32">
                        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24">
                            <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/Images/00-about-future-goals.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[47.5%]">
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                    01
                                </p>
                                <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                    About Future Goals
                                </h4>
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                    Future Goals is a movement to encourage the
                                    next generation to play football. The
                                    program, which creatively turns plastic
                                    waste and fishing nets sourced from the
                                    ocean into colorful football goals,
                                    symbolizes today’s fun and tomorrow’s
                                    opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                            <div className="w-full md:w-[47.5%]">
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                    02
                                </p>
                                <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                    About the program
                                </h4>
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                    The program will focus on the power of
                                    football as a vehicle to equip children with
                                    life skills, while growing their awareness
                                    of the importance of taking care of their
                                    communities and the natural resources of
                                    their islands.
                                </p>
                            </div>
                            <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/Images/onenil-presseventajaxxsandals (2).jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                            <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/Images/onenil-presseventajaxxxsandals (2).jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[47.5%]">
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                    03
                                </p>
                                <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                    How it works
                                </h4>
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                    Primary schools in Curaçao have the
                                    opportunity to participate in an 8-week
                                    program taught by local Future Coaches – who
                                    are trained by Ajax coaches - concluding
                                    with an islandwide tournament.
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                            <div className="w-full md:w-[47.5%]">
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                    04
                                </p>
                                <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                    Good to know
                                </h4>
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                    All participating schools receive 2 Future
                                    Goals, 14 adidas balls and at least two
                                    Future Coaches, who will lead the lessons
                                    within the eight-week program designed by
                                    Ajax coaches.
                                </p>
                            </div>
                            <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/Images/onenil-presseventajaxxxsandals.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                            <div className="w-full md:w-[52.5%]  overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/Images/onenil-presseventajaxxsandals.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[47.5%]">
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                    05
                                </p>
                                <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                    Welcome to Future Goals
                                </h4>
                                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                    Let the fun begin! Get started by enrolling
                                    your school today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E1E1E] py-28 sm:py-30 md:py-36 px-5 md:px-8 lg:px-10 xl:px-10 relative">
                    <div className="max-w-[1600px] mx-auto flex flex-col justify-center">
                        <div className="">
                            <h4 className="font-BriceSemiBold text-[#F1EAE2] text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] w-full text-center mx-auto leading-[110%]">
                                Join the school program!
                            </h4>
                            <p className="font-PoppinsRegular text-sm sm:text-base lg:text-[17px] leading-[160%] mt-3 text-[#F1EAE2] text-center max-w-[950px] w-full mx-auto">
                                Thank you for your interest in Future Goals!
                                Please leave your details below and we will
                                contact you with further information
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative items-start">
                                <div className="col-span-1 pt-20 sm:pt-28 md:pt-28 lg:pt-24 xl:pt-28 2xl:pt-32">
                                    <p className="bg-[#F1EAE2] rounded-full max-w-8 w-full !max-h-8 !h-full text-center font-BriceRegular mb-6 lg:mb-8">
                                        1
                                    </p>
                                    <h4 className=" text-[23px] sm:text-[25px] md:text-[30px] lg:text-[30px] xl:text-[40px] uppercase leading-[130%] text-[#F1EAE2] font-BriceSemiBold">
                                        Please fill in your personal details
                                        below
                                    </h4>
                                    <div className="mt-6 sm:mt-10 lg:mt-8 w-full">
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full">
                                            <label
                                                htmlFor="name"
                                                className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#F1EAE2]"
                                            >
                                                What's the name of your school?
                                                And how many group 6 do you want
                                                to apply?
                                                <span className="text-[#F6404B] ml-1">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="outline-none w-full focus:border-[#F1EAE2] border-b-[2px] border-[#4E4C4B] pb-4 text-sm sm:textbase md:text-lg text-[#ffffff] font-PoppinsRegular"
                                                type="text"
                                                id="name"
                                                placeholder="School Name"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                            <label
                                                htmlFor="name"
                                                className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#F1EAE2]"
                                            >
                                                What's your name?{" "}
                                                <span className="text-[#F6404B] ml-1">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="outline-none w-full focus:border-[#F1EAE2] border-b-[2px] border-[#4E4C4B] pb-4 text-sm sm:text-base md:text-lg text-[#ffffff] font-PoppinsRegular"
                                                type="text"
                                                id="name"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                            <label
                                                htmlFor="company"
                                                className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#F1EAE2]"
                                            >
                                                What's your function title?
                                            </label>
                                            <label
                                                className="font-BriceSemiBold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase leading-[140%] mb-3 lg:mb-3 text-[#F6404B]"
                                                htmlFor=""
                                            >
                                                Be aware only (head)teachers can
                                                subscribe
                                            </label>
                                            <input
                                                className="outline-none w-full focus:border-[#F1EAE2] border-b-[2px] border-[#4E4C4B] pb-4 text-sm sm:textbase md:text-lg text-[#ffffff] font-PoppinsRegular"
                                                type="text"
                                                id="company"
                                                placeholder="Company Name, Job Title"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                            <label
                                                htmlFor="email"
                                                className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#F1EAE2]"
                                            >
                                                What's your email?
                                                <span className="text-[#F6404B] ml-1">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="outline-none w-full focus:border-[#F1EAE2] border-b-[2px] border-[#4E4C4B] pb-4 text-sm sm:textbase md:text-lg text-[#ffffff] font-PoppinsRegular"
                                                type="text"
                                                id="email"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                            <label
                                                htmlFor="phone"
                                                className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#F1EAE2]"
                                            >
                                                What's your phone number?
                                            </label>
                                            <input
                                                className="outline-none w-full focus:border-[#F1EAE2] border-b-[2px] border-[#4E4C4B] pb-4 text-sm sm:textbase md:text-lg text-[#ffffff] font-PoppinsRegular"
                                                type="text"
                                                id="phone"
                                                placeholder="+31 6 12 34 56 78"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 sm:gap-2 w-full mt-8 sm:mt-12 md:mt-16">
                                            <label
                                                htmlFor="message"
                                                className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#F1EAE2]"
                                            >
                                                How many group 6 will you apply?
                                                <span className="text-[#F6404B] ml-1">
                                                    *
                                                </span>
                                            </label>
                                            <textarea
                                                className="outline-none w-full focus:border-[#F1EAE2] border-b-[2px] resize-x-none h-[80px] h-sm:[100px] md:h-[150px] border-[#4E4C4B] text-[#ffffff] pb-4 text-sm sm:textbase md:text-lg"
                                                name=""
                                                id=""
                                                placeholder="X (amount)"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 static lg:sticky top-0 pt-5 lg:pt-24 xl:pt-28 2xl:pt-32">
                                    <p className="bg-[#F1EAE2] rounded-full max-w-8 w-full !max-h-8 !h-full flex items-center justify-center font-BriceRegular mb-6 lg:mb-8">
                                        2
                                    </p>
                                    <h4 className="text-[23px] sm:text-[25px] md:text-[30px] lg:text-[30px] xl:text-[40px] uppercase leading-[130%] text-[#F1EAE2] font-BriceSemiBold mb-14">
                                        Select the preferred time slot for your
                                        school (8 schoolweeks in total)
                                    </h4>
                                    <div className="flex flex-col gap-5">
                                        <div className="bg-[#F1EAE2] rounded-2xl sm:rounded-3xl p-5 hover:-rotate-2 transition-transform duration-300 ease-in-out cursor-pointer">
                                            <p className="text-sm sm:textbase md:text-lg text-[#1E1E1E] font-PoppinsBold mb-2">
                                                Slot A
                                            </p>
                                            <p className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#1E1E1E]">
                                                September - October 2024
                                            </p>
                                        </div>
                                        <div className="bg-transparent rounded-2xl sm:rounded-3xl p-5 cursor-pointer border-2 border-[#686868]">
                                            <p className="text-sm sm:textbase md:text-lg text-[#F0424D] font-PoppinsBold mb-2">
                                                Slot B
                                            </p>
                                            <p className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#686868]">
                                                November ('24) - January 2025
                                            </p>
                                        </div>
                                        <div className="bg-transparent rounded-2xl sm:rounded-3xl p-5 cursor-pointer border-2 border-[#686868]">
                                            <p className="text-sm sm:textbase md:text-lg text-[#F0424D] font-PoppinsBold mb-2">
                                                Slot C
                                            </p>
                                            <p className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#686868]">
                                                February - April 2025
                                            </p>
                                        </div>
                                        <div className="bg-[#F1EAE2] rounded-2xl sm:rounded-3xl p-5 hover:-rotate-2 transition-transform duration-300 ease-in-out cursor-pointer">
                                            <p className="text-sm sm:textbase md:text-lg text-[#1E1E1E] font-PoppinsBold mb-2">
                                                Slot D
                                            </p>
                                            <p className="font-BriceSemiBold text-lg md:text-[23px] lg:text-[23px] xl:text-[28px] uppercase leading-[140%] mb-0 lg:mb-3 block text-[#1E1E1E]">
                                                May - June 2025
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-16 sm:mt-20 md:mt-20 lg:mt-32">
                                <button className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-white text-[#1E1E1E] border-[#F1EAE2] relative overflow-hidden cursor-pointer w-full sm:w-auto">
                                    <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                        Submit your application
                                    </span>
                                    <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                        →
                                    </span>
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-[1.8] transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default SchoolPortal;
