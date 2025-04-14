import React from "react";
import PageAnimation from "../Components/PageAnimation";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const GlobalPress = () => {
    document.title = "Global Press → Future Goals";
    const { pathname } = useLocation();
    return (
        <PageAnimation>
            <div className="bg-[#1E1E1E] min-h-screen text-[#F1EAE2] pt-16 sm:pt-44 md:pt-44 lg:pt-54 xl:pt-60 sm:px-5 md:px-8 lg:px-10 xl:px-10 pb-[8vw]">
                <motion.h2
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
                    className="text-center text-[13vw] leading-[13.5vw] sm:text-[55px] md:text-[60px] lg:text-[90px] xl:text-[115px] font-bold pt-28 font-BriceBold sm:leading-0 uppercase mb-12 sm:mb-32 lg:mb-40"
                >
                    Global Press
                </motion.h2>
                <div className="max-w-[1440px] w-full bg-[#F1EAE2] text-[#1E1E1E] font-PoppinsRegular rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-18 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] leading-[25px] sm:leading-[27px]">
                    <div className="">
                        <h3 className="font-BriceBold text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[38px] mb-8 sm:mb-10 lg:mb-18">
                            Europe
                        </h3>
                        <div className="">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                De Telegraaf
                            </h4>
                            <a
                                className="underline"
                                href="https://www.telegraaf.nl/sport/455753925/ajax-vist-plastic-uit-zee-en-maakt-voetbaldoeltjes-voor-scholen-op-curacao"
                                target="_blank"
                            >
                                Collaboration between Ajax, Sandals Resorts and
                                its Foundation at Curaçao
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Travelpro
                            </h4>
                            <a
                                className="underline"
                                href="https://www.travelpro.nl/samenwerking-tussen-ajax-sandals-resorts-en-haar-foundation-op-curacao/"
                                target="_blank"
                            >
                                Ajax is taking plastic from the sea and produces
                                football goals for Curaçao schools
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 md:mt-24 lg:mt-40">
                        <h3 className="font-BriceBold text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[38px] mb-12 lg:mb-18">
                            North America
                        </h3>
                        <div className="">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Forbes
                            </h4>
                            <a
                                className="underline"
                                href="https://www.forbes.com/sites/johannaread/2022/06/22/innovative-recycling-in-the-caribbean-turning-ghost-nets-into-soccer-nets/?sh=56a3096729ca"
                                target="_blank"
                            >
                                Innovative Recycling In The Caribbean: Turning
                                Ghost Nets Into Soccer Nets
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                New York Post
                            </h4>
                            <a
                                className="underline"
                                href="https://nypost.com/2022/07/01/curacao-warmly-welcomes-sandals-16th-property/"
                                target="_blank"
                            >
                                Curaçao welcomes a new ‘Sandals 2.0’ resort —
                                the brand’s 16th
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Breaking Travel News
                            </h4>
                            <a
                                className="underline"
                                href="https://www.breakingtravelnews.com/news/article/sandals-foundation-joins-forces-with-afc-ajax-to-empower-caribbean-youth-th/"
                                target="_blank"
                            >
                                Sandals teams up with Ajax to empower Caribbean
                                youth through soccer
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Travel Pulse
                            </h4>
                            <a
                                className="underline"
                                href="https://www.travelpulse.com/news/hotels-and-resorts/sandals-foundation-aims-to-inspire-caribbean-youth-through-soccer"
                                target="_blank"
                            >
                                Sandals Foundation Aims To Inspire Caribbean
                                Youth Through Soccer
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Travelweek
                            </h4>
                            <a
                                className="underline"
                                href="https://ct.moreover.com/?a=47947345558&p=5fi&v=1&x=KGed7Rm4B5yJVagVE-yzgg"
                                target="_blank"
                            >
                                Sandals and AFC Ajax team up to empower youth
                                through soccer
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Travelpress
                            </h4>
                            <a
                                className="underline"
                                href="https://ct.moreover.com/?a=47942741309&p=5fi&v=1&x=ZUzEuzmhbsVkZFdaeY0epQ"
                                target="_blank"
                            >
                                Sandals Resorts Launches Future Goals
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Travel Industry Today
                            </h4>
                            <a
                                className="underline"
                                href="https://travelindustrytoday.com/kicks-are-for-kids-sandals-foundation-helps-empower-youth-in-curacao/"
                                target="_blank"
                            >
                                Kicks Are For Kids: Sandals Foundation helps
                                empower youth in Curaçao
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Trazee Travel
                            </h4>
                            <a
                                className="underline"
                                href="https://www.trazeetravel.com/how-sandals-resorts-works-to-save-our-oceans/"
                                target="_blank"
                            >
                                How Sandals Resorts works to save our oceans
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 md:mt-24 lg:mt-40">
                        <h3 className="font-BriceBold text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[38px] mb-12 lg:mb-18">
                            South America
                        </h3>
                        <div className="">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Curacao Chronicle
                            </h4>
                            <a
                                className="underline"
                                href="https://www.curacaochronicle.com/post/local/from-fishing-nets-to-soccer-goals-sandals-resorts-foundation-joins-forces-with-afc-ajax-to-empower-caribbean-youth/"
                                target="_blank"
                            >
                                From fishing nets to soccer goals: Sandals
                                Resorts’ foundation joins forces with AFC Ajax
                                to empower Caribbean youth
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 md:mb-3">
                                Islands
                            </h4>
                            <a
                                className="underline"
                                href="https://www.islands.com/resorts/sandals-royal-curacao-grand-opening/"
                                target="_blank"
                            >
                                Sandals Finally Comes to Curaçao—and the Party
                                was Absolutely Out of this World
                            </a>
                        </div>
                        <div className="mt-7 lg:mt-12">
                            <h4 className="font-BriceSemiBold text-lg md:text-[22px] lg:text-[25px] xl:text-[28px] uppercase leading-[38px] mb-1 lg:mb-3">
                                Travel Courier
                            </h4>
                            <a
                                className="underline"
                                href="https://www.travelcourier.ca/future-goals-from-the-ocean-for-the-future/"
                                target="_blank"
                            >
                                Future Goals Helps Make Soccer Dreams Come True
                                in Curaçao
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default GlobalPress;
