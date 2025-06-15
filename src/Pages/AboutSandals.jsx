import React from "react";
import CommonHero from "../Components/Common/CommonHero";
import PageAnimation from "../Components/PageAnimation";
const AboutSandals = ({ openCloseVideo, setOpenCloseVideo, setVideoSrc }) => {
    document.title = "About sandals Resorts → Future Goals";
    return (
        <PageAnimation>
            <div>
                <CommonHero
                    bg={"/Images/AboutHero1.jpg"}
                    title={"about"}
                    subTitle={"Sandals Resorts"}
                />
                <div className="w-full bg-[#1E1E1E] pb-24 sm:pb-28 md:pb-36 sm:px-5 md:px-8 lg:px-10 xl:px-10">
                    <div className="max-w-[1440px] w-full bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular leading-[25px] sm:leading-[27px] -translate-y-0 sm:-translate-y-[100px] relative z-30">
                        <div className="">
                            <p className="font-PoppinsBold">Sandals Resorts</p>
                            <p>
                                Sandals Resorts Since its inception in 1981, by
                                the late Jamaican entrepreneur Gordon "Butch"
                                Stewart, Sandals Resorts International (SRI) is
                                the parent company of some of travel's most
                                recognizable vacation brands. The company
                                operates 24 properties throughout the Caribbean
                                under four separate brands including: Sandals®
                                Resorts, the Luxury Included® brand for adult
                                couples with locations in Jamaica, Antigua, the
                                Bahamas, Grenada, Barbados, St. Lucia and a
                                resort opening in Curaçao on June 1st; Beaches®
                                Resorts, the Luxury Included® concept designed
                                for everyone but especially families, with
                                properties in Turks & Caicos and Jamaica, and
                                another opening in St. Vincent and the
                                Grenadines; private island Fowl Cay Resort; and
                                the private homes of Your Jamaican Villas.
                            </p>
                            <button
                                onClick={() => {
                                    setOpenCloseVideo(!openCloseVideo);
                                    setVideoSrc(
                                        "/Videos/Ajax-x-adidas-Kit-launch.mp4"
                                    );
                                }}
                                className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-video mt-8 sm:mt-10 md:mt-16 lg:mt-26 relative group cursor-pointer"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/sandals-curacao.jpg"
                                    alt=""
                                />
                                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-[#1E1E1E40] group-hover:opacity-100 opacity-0 transition-all duration-500"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                                    <img
                                        className="z-20 w-2 sm:w-3 md:w-auto relative transition-all duration-300 ease-in-out group-hover:invert"
                                        src="/Images/Icons/play.svg"
                                        alt="Play Icon"
                                    />
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                </div>
                            </button>
                        </div>
                        <div className="mt-8 sm:mt-10 md:mt-16 lg:mt-26">
                            <p className="font-PoppinsBold">
                                Sandals Foundation
                            </p>
                            <p>
                                Sandals Resorts International has taken an
                                unparalleled approach to supporting the
                                communities where it operates. Through its
                                philanthropic arm, the Sandals Foundation, the
                                luxury all-inclusive resort company began its
                                local outreach in Curaçao – Sandals Resorts’
                                eighth and newest Caribbean island – far ahead
                                of Sandals Royal Curaçao’s opening. This
                                includes supporting local artisans, such as
                                Limpi, to whom the Sandals Foundation has
                                provided the necessary equipment needed to
                                increase their production levels.
                            </p>
                            <p>
                                Future Goals is one of the many projects
                                underway on the island of Curaçao including
                                beach cleanups that have helped rid the planet
                                of over 400,000 kilograms trash to date and the
                                development of a digital hiking app in
                                partnership with IVN Tiny Forest the Netherlands
                                to make the magic of the island’s natural
                                resources more accessible to visitors and
                                locals.
                            </p>
                            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-video mt-8 sm:mt-10 md:mt-16 lg:mt-26">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/about-img-beach.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default AboutSandals;
