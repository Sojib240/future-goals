import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import CountUp from "react-countup";
import { Link, useLocation } from "react-router-dom";
import { NewsContext } from "../Utils/Context";
import PageAnimation from "../Components/PageAnimation";
// import VideoWatch from "../Components/Common/VideoWatch";

const HomePage = ({ openCloseVideo, setOpenCloseVideo, setVideoSrc }) => {
    document.title = "Future Goals → From the ocean, for the future";
    const [news] = useContext(NewsContext);
    const { pathname } = useLocation();
    const curacaoData = [
        {
            id: 1,
            title: "96",
            description: "Future Goals",
            src: "/Images/Icons/icon-2.svg",
        },
        {
            id: 2,
            title: "20",
            description: "Future Coaches",
            src: "/Images/Icons/icon-4.svg",
        },
        {
            id: 3,
            title: "48",
            description: "Participating schools",
            src: "/Images/Icons/icon-5.svg",
        },
        {
            id: 4,
            title: "5000",
            description: "Happy Children",
            src: "/Images/Icons/icon-3.svg",
        },
        {
            id: 5,
            title: "1250",
            description: "Fishing nets",
            src: "/Images/Icons/icon-1.svg",
        },
        {
            id: 6,
            title: "4000",
            description: "Plastic waste",
            src: "/Images/Icons/icon-6.svg",
        },
    ];
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <PageAnimation>
            <div className="">
                <div className="bg-[#F1EAE2] relative">
                    <div className="w-full min-h-auto lg:min-h-[95vh] relative rounded-b-3xl lg:rounded-b-[40px] overflow-hidden flex justify-center items-center">
                        {/* overlay */}
                        <div
                            className={`overlay h-full w-full absolute bg-[#00000080] bottom-0 left-0 pointer-events-none select-none z-20`}
                        />
                        {/* video */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                src="/Videos/home-video.mp4"
                            ></video>
                        </div>

                        {/* content */}
                        <div
                            className={`flex flex-col gap-4 justify-center items-center text-center relative z-20 px-5 md:px-8 lg:px-10 xl:px-10 max-w-[1700px] mx-auto pt-46 sm:pt-48 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-40 sm:pb-40 md:pb-40 lg:py-44 xl:pb-44 2xl:pb-44`}
                        >
                            <motion.h4
                                key={pathname}
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                    stiffness: 150,
                                    damping: 16,
                                    delay: 1,
                                }}
                                className={`text-[#F1EAE2] font-BriceBold uppercase text-[8.8vw] leading-[10vw] sm:text-[50px] md:text-[55px] lg:text-[70px] xl:text-[90px] 2xl:text-[115px] sm:leading-[100%]`}
                            >
                                From the ocean,
                                <br /> for the future
                            </motion.h4>
                            <motion.div
                                key={pathname}
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                    stiffness: 150,
                                    damping: 16,
                                    delay: 1.05,
                                }}
                                className={`flex items-center gap-6`}
                            >
                                <p className="font-BriceRegular text-sm md:text-base lg:text-lg xl:text-xl text-[#F1EAE2]">
                                    Initiated by
                                </p>
                                <div className="w-[120px] sm:w-[130px] md:w-[150px] lg:w-[180px] xl:w-[200px]">
                                    <img
                                        className="invert"
                                        src="/Images/Footer/sandels.svg"
                                        alt=""
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="px-5 md:px-8 lg:px-10 xl:px-10 bg-[#F1EAE2]">
                    <div className="max-w-[1600px] w-full mx-auto rounded-3xl overflow-hidden relative -translate-y-[60px] sm:-translate-y-[80px] z-30">
                        <div className="p-5 md:p-10 lg:p-14 xl:p-16 2xl:p-24 flex items-center flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-16 2xl:gap-24 relative z-10">
                            <button
                                onClick={() => {
                                    setOpenCloseVideo(!openCloseVideo);
                                    setVideoSrc(
                                        "/Videos/Future-Goals-Home.mp4"
                                    );
                                }}
                                className="w-full lg:w-[55%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative group cursor-pointer"
                            >
                                <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-4 custom-transition scale-[1.01]"
                                        src="/Images/this-is-future-goals.jpg"
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
                            <div className="w-full lg:w-[45%] text-white">
                                <p className="font-BriceSemiBold text-base xl:text-lg">
                                    Welcome
                                </p>
                                <h4 className="font-BriceSemiBold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase mt-3 xl:mt-6 mb-2 text-white">
                                    This is Future Goals
                                </h4>
                                <p className="font-PoppinsRegular text-sm md:text-sm text-white xl:text-base mb-5">
                                    A Caribbean wide program that encourages
                                    children to enjoy and play football,
                                    starting in Curaçao. Future Goals turns
                                    fishing nets sourced from the ocean and
                                    plastic waste into colorful football goals.
                                </p>
                                <Link
                                    to={"/about/"}
                                    className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-white text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto inline-block text-center"
                                >
                                    <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                        More info
                                    </span>
                                    <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                        →
                                    </span>
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-full scale-[2.7] absolute top-0 z-0">
                            <motion.img
                                initial={{ rotateZ: 0 }}
                                animate={{ rotateZ: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 15,
                                    ease: "linear",
                                }}
                                className="w-full h-full object-cover"
                                src="/Images/gradient-square.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-18 pb-5 sm:pb-8 md:pb-10 lg:pb-16 text-center bg-[#F1EAE2] px-5 md:px-8 lg:px-10 xl:px-10">
                    <div className="max-w-[1600px] mx-auto">
                        <h4 className="text-[#1E1E1E] text-[32px] leading-[110%] sm:text-[44px] md:text-[50px] lg:text-[58px] xl:text-[65px] 2xl:text-[70px] sm:leading-[110%] font-BriceSemiBold uppercase max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto">
                            Our goals for the future in Curacao
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-y-12 mt-12 md:mt-14 lg:mt-20">
                            {curacaoData.map((item) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    onViewportEnter={() => setHasAnimated(true)}
                                    key={item.id}
                                    className="flex flex-col gap-2 md:gap-5 items-center justify-center col-span-1"
                                >
                                    <div className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[120px]">
                                        <img src={item.src} alt="" />
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <div className="text-[#1E1E1E] font-BriceSemiBold text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] leading-none">
                                            {hasAnimated && (
                                                <CountUp
                                                    start={0}
                                                    end={item.title}
                                                    duration={2}
                                                />
                                            )}
                                        </div>
                                        <p className="font-BriceSemiBold text-sm md:text-base lg:text-lg xl:text-xl text-[#1E1E1E] leading-none">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 sm:flex-row justify-center px-5 md:px-8 lg:px-10 xl:px-10 mt-20 sm:mt-24 lg:mt-28 mb-14 sm:mb-18 lg:mb-20">
                            <a
                                href="https://sandalsfoundation.org/donation"
                                target="_blank"
                                className={`group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#ffffff] text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto`}
                            >
                                <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-[0.44s]">
                                    Make a donation
                                </span>
                                <span className="ml-1 group-hover:text-[#ffffff] z-20 relative transition-colors duration-[0.44s] custom-transition">
                                    →
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </a>
                            <Link
                                to={"/contact/"}
                                className={`group rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-transparent text-[#1E1E1E]  relative overflow-hidden cursor-pointer w-full sm:w-auto`}
                            >
                                <span className="mr-1 group-hover:text-[#ffffff] text-[#1E1E1E]  z-20 relative transition-colors duration-[0.44s]">
                                    or get in touch
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-46 lg:h-46 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F1EAE2] pb-24 md:pb-28 lg:pb-30 xl:pb-36">
                    <div className="max-w-[1600px] mx-auto overflow-hidden relative flex flex-col md:flex-row gap-5 md:gap-8 px-5 md:px-8 lg:px-10">
                        <Link
                            to={"/afc-about/"}
                            className="group w-full md:w-1/2 bg-white p-5 md:p-6 lg:p-8 rounded-3xl overflow-hidden"
                        >
                            <div className="overflow-hidden rounded-2xl aspect-[3/2] relative">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-2 custom-transition scale-[1.01]"
                                    src="/Images/why-are-we-doing-this.jpg"
                                    alt=""
                                />
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2  w-16 sm:w-30 md:w-20 lg:w-30 xl:w-40 invert z-20">
                                    <img
                                        className="w-full"
                                        src="/Images/Icons/download (1).svg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={`overlay h-full w-full absolute bottom-0 left-0 bg-[#00000020] pointer-events-none select-none z-10 group-hover:bg-[#00000060] transition-all duration-300`}
                                />
                            </div>
                            <button
                                className={`border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#ffffff] text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full mt-5 md:mt-8`}
                            >
                                <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-[0.44s]">
                                    AFC AJAX
                                </span>
                                <span className="ml-1 group-hover:text-[#ffffff] z-20 relative transition-colors duration-[0.44s] custom-transition">
                                    →
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-96 h-96 bg-[#1E1E1E] scale-0 group-hover:scale-200 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </button>
                        </Link>
                        <Link
                            to={"/about-sandals/"}
                            className="group w-full md:w-1/2 bg-white p-5 md:p-6 lg:p-8 rounded-3xl overflow-hidden"
                        >
                            <div className="rounded-2xl overflow-hidden transition-all duration-300 relative">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-2 custom-transition scale-[1.01]"
                                    src="/Images/whatsapp-image-2024-06-12-at-11-46-59-2-1080x-q72.jpg"
                                    alt=""
                                />
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-24 sm:w-40 md:w-30 lg:w-50 xl:w-60 invert z-20">
                                    <img
                                        className="w-full"
                                        src="/Images/Icons/download.svg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={`overlay h-full w-full absolute bottom-0 left-0 bg-[#00000020] pointer-events-none select-none z-10 group-hover:bg-[#00000060] transition-all duration-300`}
                                />
                            </div>
                            <button
                                className={`border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#ffffff] text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full mt-5 md:mt-8`}
                            >
                                <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-[0.44s]">
                                    Sandals Resorts
                                </span>
                                <span className="ml-1 group-hover:text-[#ffffff] z-20 relative transition-colors duration-[0.44s] custom-transition">
                                    →
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-96 h-96 bg-[#1E1E1E] scale-0 group-hover:scale-200 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-[#F1EAE2] pb-20 md:pb-28 lg:pb-30 xl:pb-36">
                    <div className="max-w-[1600px] mx-auto overflow-hidden relative px-5 md:px-8 lg:px-10">
                        <h4 className="text-[#1E1E1E] text-[32px] leading-[110%] sm:text-[44px] md:text-[50px] lg:text-[58px] xl:text-[65px] 2xl:text-[70px] sm:leading-[110%] font-BriceSemiBold uppercase max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]   text-center mx-auto">
                            Get the latest news updates
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 xl:gap-6 2xl:gap-8 relative z-30 mt-10 md:mt-14">
                            {news
                                .slice(0, 3)
                                .map(
                                    ({
                                        id,
                                        title,
                                        shortDescription,
                                        publishedDate,
                                        image,
                                        slug,
                                    }) => {
                                        return (
                                            <Link
                                                to={`/news/${slug}`}
                                                key={id}
                                                className="cards col-span-1 p-5 md:p-6 lg:p-6 xl:p-6 bg-[#FCFCFC] rounded-3xl md:rounded-4xl flex flex-col sm:flex-row lg:flex-col group gap-0 sm:gap-6 lg:gap-0"
                                            >
                                                <div className="img overflow-hidden rounded-2xl aspect-[3/2] w-full sm:w-[47%] lg:w-auto mb-5 sm:mb-0 lg:mb-4 xl:mb-4 2xl:mb-6">
                                                    <img
                                                        className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-4 custom-transition scale-[1.01]"
                                                        src={image}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="overflow-hidden flex flex-col flex-1">
                                                    <div className="flex flex-col justify-between flex-1 lg:mb-[-60px] mt-0  lg:group-hover:mt-[-47px] xl:group-hover:mt-[-50px] 2xl:group-hover:mt-[-60px] group-hover:mb-0 custom-transition">
                                                        {/* Top Section */}
                                                        <div>
                                                            <p className="px-3 lg:px-4 py-1 bg-[#F1EAE2] text-[#1E1E1E] rounded-[10px] lg:rounded-lg font-BriceRegular inline-block uppercase text-[12px] xl:text-sm 2xl:text-base leading-[18px] xl:leading-[23px] 2xl:leading-[27px]">
                                                                {publishedDate}
                                                            </p>
                                                            <h3 className="font-BriceSemiBold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[26px] 2xl:text-[33px] leading-[23px] sm:leading-[27px] md:leading-[27px] lg:leading-[31px] xl:leading-[29px] 2xl:leading-[36px] uppercase mt-5 sm:mt-4 md:mt-5 2xl:mt-6 mb-1 md:mb-2 2xl:mb-4">
                                                                {title}
                                                            </h3>
                                                        </div>
                                                        {/* Bottom Section */}
                                                        <div className="mt-auto">
                                                            <p className="font-PoppinsRegular text-sm sm:text-base 2xl:text-lg sm:leading-[27px] mb-4 lg:mb-4 xl:mb-5 2xl:mb-6">
                                                                {
                                                                    shortDescription
                                                                }
                                                            </p>
                                                            <button className="border-[2px] lg:border-1 rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#1E1E1E] lg:bg-[#FCFCFC] text-[#FCFCFC] lg:text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full">
                                                                <span className="group-hover:text-[#1E1E1E] lg:group-hover:text-[#FCFCFC] z-20 relative transition-colors duration-300">
                                                                    full article
                                                                </span>
                                                                <span className="ml-1 group-hover:text-[#1E1E1E] lg:group-hover:text-[#FCFCFC] z-20 relative transition-colors duration-300">
                                                                    →
                                                                </span>
                                                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-60 lg:w-80 xl:w-60 h-80 sm:h-60 lg:h-80 xl:h-60 bg-[#FCFCFC] lg:bg-[#1E1E1E] scale-0 group-hover:scale-200 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    }
                                )}
                        </div>
                        <div className="flex justify-center text-center">
                            <Link
                                to={"/news/"}
                                className={`group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#ffffff] text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto inline-block mt-10 md:mt-14`}
                            >
                                <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-[0.44s]">
                                    see more
                                </span>
                                <span className="ml-1 group-hover:text-[#ffffff] z-20 relative transition-colors duration-[0.44s] custom-transition">
                                    →
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default HomePage;
