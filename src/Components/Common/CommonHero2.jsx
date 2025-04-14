import { delay, motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const CommonHero2 = ({
    backgroundImage,
    title,
    subtitle,
    bgColor,
    margins,
    sizes,
    logo,
    paddings,
}) => {
    const { pathname } = useLocation();
    return (
        <div className="bg-[#F1EAE2] relative">
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
                className="bg-cover bg-center bg-no-repeat w-full relative rounded-b-3xl lg:rounded-b-[40px] overflow-hidden"
            >
                {/* overlay */}
                <div
                    className={`overlay h-full w-full absolute bottom-0 left-0 ${bgColor} pointer-events-none select-none z-10`}
                />
                {/* content */}
                <div
                    className={`flex flex-col gap-4 justify-center items-center ${paddings} text-center relative z-20 px-5 md:px-8 lg:px-10 xl:px-10 max-w-[1700px] mx-auto`}
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
                        className={`text-[#F1EAE2] ${sizes} font-BriceSemiBold uppercase`}
                    >
                        {title}
                    </motion.h4>
                    {subtitle != null && (
                        <motion.p
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
                            className={`text-[#F1EAE2] font-BriceRegular mt-2 sm:mt-0 text-sm md:text-base lg:text-lg xl:text-xl`}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                    {logo != null && (
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
                                delay: subtitle == null ? 1.05 : 1.1,
                            }}
                            className={`flex items-center gap-6 ${margins}`}
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommonHero2;
