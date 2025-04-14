import { motion } from "framer-motion";
import gsap from "gsap";
import React from "react";
import { useLocation } from "react-router-dom";

const CommonHero = ({ bg, title, subTitle, arrow }) => {
    document.title = `Contact → Future Goals`;
    const { pathname } = useLocation();
    return (
        <div className="">
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover bg-center-center bg-no-repeat w-full relative"
            >
                {/* overlay */}
                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-gradient-to-b from-[#F1EAE210] to-[#1E1E1E] via-[#F1EAE210]" />
                {/* content */}
                <div className="flex flex-col gap-0 sm:gap-4 justify-center items-center pt-44 sm:pt-44 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-14 sm:pb-38 md:pb-38 lg:pb-42 xl:pb-46 2xl:pb-50 text-center relative z-20 px-4 sm:px-5 md:px-8 lg:px-10 mx-auto max-w-[1700px]">
                    {title == null ? null : (
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
                                delay: 1,
                            }}
                            className={`text-[#F1EAE2] bg-[#1E1E1E] font-PoppinsBold uppercase px-4 pb-1 pt-1 sm:pt-2 inline-block rounded-[5px] md:rounded-[10px] mb-5 sm:mb-2 text-[10px] md:text-[12px] lg:text-sm xl:text-base`}
                        >
                            {title}
                        </motion.p>
                    )}
                    <motion.h4
                        key={pathname}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            bounce: 0.5,
                            stiffness: 150,
                            damping: 16,
                            delay: title == null ? 1 : 1.05,
                        }}
                        className="text-[#F1EAE2] text-[9vw] leading-[9.5vw] sm:text-[55px] md:text-[60px] lg:text-[72px] xl:text-[78px] 2xl:text-[85px] sm:leading-[110%] font-BriceBold uppercase mt-1 md:mt-4 lg:mt-5 xl:mt-14"
                    >
                        {subTitle}
                    </motion.h4>
                </div>
            </div>
        </div>
    );
};

export default CommonHero;
