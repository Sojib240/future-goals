import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import CommonHero2 from "../Components/Common/CommonHero2";
import PageAnimation from "../Components/PageAnimation";

const sliderImages = [
    { id: 1, image: "/Images/01c-how.jpg" },
    { id: 2, image: "/Images/01d-how.jpg" },
    { id: 3, image: "/Images/01e-how.jpg" },
    { id: 4, image: "/Images/01a-how.jpg" },
    { id: 5, image: "/Images/news-3e.jpg" },
    { id: 6, image: "/Images/01b-how.jpg" },
];

const About = ({ openCloseVideo, setOpenCloseVideo, setVideoSrc }) => {
    document.title = "About → Future Goals";
    const targetRef2 = useRef(null);

    const scrollToSection = () => {
        targetRef2.current.scrollIntoView({ behavior: "smooth" });
    };

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(() => {
        const updateSwiperNavigation = () => {
            if (prevRef.current && nextRef.current) {
                return {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                };
            }
        };
        updateSwiperNavigation();
    }, []);

    return (
        <PageAnimation>
            <div>
                <CommonHero2
                    backgroundImage="/Images/header-a-edit.jpg"
                    title={
                        "‘We believe youth is the future and every child deserves to play’"
                    }
                    subtitle={"Edwin van der Sar, CEO Ajax"}
                    bgColor={"bg-[#00000095]"}
                    margins={"mt-2 lg:mt-5 xl:mt-10"}
                    sizes={
                        "text-[#F1EAE2] text-[7.8vw] leading-[9.5vw] sm:text-[44px] md:text-[50px] lg:text-[58px] xl:text-[65px] 2xl:text-[70px] sm:leading-[120%]"
                    }
                    logo={true}
                    paddings={
                        "pt-44 sm:pt-44 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-16 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-23 2xl:pb-26"
                    }
                />
                <div
                    ref={targetRef2}
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
                        <div className="">
                            {/* first section */}
                            <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24">
                                <button
                                    onClick={() => {
                                        setOpenCloseVideo(!openCloseVideo);
                                        setVideoSrc(
                                            "/Videos/Future Goals - From the ocean, for the future.mp4"
                                        );
                                    }}
                                    className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative group cursor-pointer"
                                >
                                    <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-4 custom-transition scale-[1.01]"
                                            src="/Images/why-are-we-doing-this.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="overlay h-full w-full absolute bottom-0 left-0 bg-[#1E1E1E40] group-hover:opacity-100 opacity-0 transition-all duration-500" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-13 sm:h-13 md:w-15 md:h-15 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                                        <img
                                            className="z-20 w-3 sm:w-3.5 md:w-4 relative transition-all duration-300 ease-in-out group-hover:invert"
                                            src="/Images/Icons/play.svg"
                                            alt="Play Icon"
                                        />
                                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                    </div>
                                </button>
                                <div className="w-full md:w-[47.5%]">
                                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                        01
                                    </p>
                                    <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px] font-BriceSemiBold uppercase">
                                        Why are we doing this?
                                    </h4>
                                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                        Youth is the future and every child
                                        deserves to play - and dream. This is
                                        what inspires us to do our part to shape
                                        the next generation with the fun and art
                                        of playing football.
                                    </p>
                                </div>
                            </div>
                            {/* second section */}
                            <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                                <div className="w-full md:w-[47.5%]">
                                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8 ">
                                        02
                                    </p>
                                    <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                        From the ocean, for the future
                                    </h4>
                                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                        It starts with the proper equipment. Our
                                        colorful Future Goals are creatively
                                        made from plastic waste and fishing nets
                                        sourced from the ocean, symbolizing
                                        today’s fun and tomorrow's
                                        opportunities. By facilitating football
                                        in a sustainable way, we aim to inspire
                                        children to take care of their
                                        communities and their precious islands.
                                    </p>
                                </div>
                                <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                    <div className="rounded-lg overflow-hidden w-full h-auto aspect-[3/2] relative">
                                        <Swiper
                                            className="z-10 h-full w-full"
                                            modules={[
                                                FreeMode,
                                                Navigation,
                                                Pagination,
                                            ]}
                                            loop={true}
                                            pagination={{
                                                clickable: true, // Makes pagination dots clickable
                                            }}
                                            onSwiper={(swiper) => {
                                                // Update navigation button elements
                                                setTimeout(() => {
                                                    swiper.params.navigation.prevEl =
                                                        prevRef.current;
                                                    swiper.params.navigation.nextEl =
                                                        nextRef.current;
                                                    swiper.navigation.update();
                                                });
                                            }}
                                            navigation={{
                                                prevEl: prevRef.current,
                                                nextEl: nextRef.current,
                                            }}
                                            grabCursor={true}
                                        >
                                            {sliderImages.map(
                                                ({ id, image }) => {
                                                    return (
                                                        <SwiperSlide
                                                            key={id}
                                                            className="select-none w-full h-full group"
                                                        >
                                                            <img
                                                                className="w-full h-full object-cover"
                                                                src={image}
                                                                alt=""
                                                            />
                                                        </SwiperSlide>
                                                    );
                                                }
                                            )}
                                        </Swiper>
                                        <button
                                            ref={prevRef}
                                            className="absolute top-1/2 left-[1.5vw] sm:left-[15px] lg:left-[20px] xl:left-[25px] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 xl:w-15 xl:h-15 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer"
                                        >
                                            <span className="block w-3.5 sm:w-4 md:w-auto">
                                                <img
                                                    className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert rotate-180"
                                                    src="/Images/Icons/arrow.svg"
                                                    alt="arrow Icon"
                                                />
                                            </span>
                                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                        </button>
                                        <button
                                            ref={nextRef}
                                            className="absolute top-1/2 right-[1.5vw] sm:right-[15px] lg:right-[20px] xl:right-[25px] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 xl:w-15 xl:h-15 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer"
                                        >
                                            <span className="block w-3.5 sm:w-4 md:w-auto">
                                                <img
                                                    className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert"
                                                    src="/Images/Icons/arrow.svg"
                                                    alt="arrow Icon"
                                                />
                                            </span>
                                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* third section */}
                            <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                                <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                                    <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="/Images/falsum-prod-day-2-exports.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-[47.5%]">
                                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                        03
                                    </p>
                                    <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                                        One island at a time
                                    </h4>
                                    <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                                        Our journey begins in Curaçao with the
                                        ultimately goal to scale Future Goals to
                                        other islands throughout the Caribbean,
                                        developing the program based on the
                                        unique scope and needs of each
                                        destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1E1E1E] px-5 md:px-8 lg:px-10 xl:px-10">
                    <div className="max-w-[1400px] w-full bg-[#1E1E1E] mx-auto py-20 sm:py-22 md:py-26 lg:py-36">
                        <div className="flex flex-col justify-center text-center">
                            <h2 className="font-BriceBold uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-4 text-[#F1EAE2]">
                                Our Partners
                            </h2>
                            <p className="text-[15px] sm:text-[17px] text-[#F1EAE2] font-PoppinsRegular  leading-[25px] sm:leading-[27px] max-w-[600px] w-full mx-auto">
                                Future Goals wouldn’t be possible without the
                                help of our amazing partners:
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 md:gap-10 justify-between w-full text-[15px] sm:text-[17px] text-[#F1EAE2] font-BriceRegular leading-[25px] sm:leading-[27px] mt-16 md:mt-20">
                            <div className="w-full md:w-[50%]">
                                <p className="text-center">Partners</p>
                                <div className="flex gap-x-20 gap-y-14 flex-wrap justify-center items-center mt-10">
                                    <div className="w-[80px] lg:w-[90px] xl:w-[100px]">
                                        <img
                                            className="invert"
                                            src="/Images/Icons/sandals.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[80px] lg:w-[90px] xl:w-[100px]">
                                        <img
                                            className="invert"
                                            src="/Images/Icons/adidas.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[130px] lg:w-[140px] xl:w-[150px]">
                                        <img
                                            className="invert"
                                            src="/Images/Icons/curaca.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[50%]">
                                <p className="text-center">Local Partners</p>
                                <div className="flex gap-20 justify-center items-center mt-10">
                                    <div className="w-[60px] lg:w-[70px] xl:w-[80px]">
                                        <img
                                            className="invert"
                                            src="/Images/Icons/favela.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[60px] lg:w-[70px] xl:w-[80px]">
                                        <img
                                            className="invert"
                                            src="/Images/Icons/limpi.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default About;
