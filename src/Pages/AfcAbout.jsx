import React from "react";
import CommonHero from "../Components/Common/CommonHero";
import PageAnimation from "../Components/PageAnimation";

const AfcAbout = ({ openCloseVideo, setOpenCloseVideo, setVideoSrc }) => {
    document.title = " About AFC Ajax → Future Goals";
    return (
        <PageAnimation>
            <div>
                <CommonHero
                    bg={"/Images/why-are-we-doing-this.jpg"}
                    title={"about"}
                    subTitle={"AFC Ajax"}
                />
                <div className="w-full bg-[#1E1E1E] pb-24 sm:pb-28 md:pb-36 sm:px-5 md:px-8 lg:px-10 xl:px-10">
                    <div className="max-w-[1440px] w-full -translate-y-0 sm:-translate-y-[100px] relative z-30 bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular  leading-[25px] sm:leading-[27px]">
                        <div className="">
                            <p className="font-BriceSemiBold text-xl md:text-2xl lg:text-3xl uppercase mb-2">
                                FOR THE FUTURE
                            </p>
                            <p>
                                Founded in 1900 in Amsterdam, Ajax is the
                                record-holding champion of Dutch football, with
                                four Champions League titles and 36 Dutch
                                championships, earning a name for themselves in
                                European football and beyond. Notorious for
                                their creative, brave and always forward
                                approach to the game, the team comprises young
                                talent from its academy and all over the world.
                            </p>
                            <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-video mt-8 sm:mt-10 md:mt-16 lg:mt-26">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/ajax-champions.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-10 md:mt-16 lg:mt-26">
                            <p>
                                Ajax has shaped some of the greatest players the
                                world has ever seen -- athletes like Johan
                                Cruijff, Luis Suarez and Zlatan Ibrahimovic, to
                                name a few – believing today’s youth are the
                                legends of tomorrow. The team’s academy is voted
                                number one over and over again, holding the
                                highest percentage of trained players who reach
                                professional football status. Each year, new
                                exceptional talent reaches Ajax 1, ultimately
                                earning their place among top European athletes
                                such as Matthijs de Ligt and Frenkie de Jong.
                            </p>
                            <p className="mt-8">
                                A trusted partner of the Dutch Caribbean island
                                of Curaçao since 2020, this season Ajax has
                                launched a “Three Little Birds” kit as a tribute
                                to the team’s connection with the beloved Bob
                                Marley song – reinforcing it’s one-of-a-kind
                                connection to the Caribbean islands. Ajax’s
                                for-the-future philosophy together with Sandals’
                                promise of giving back to the islands align
                                beautifully via Future Goals and its impact on
                                the Caribbean via youth sports.
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
                                    src="/Images/adidas.jpg"
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
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default AfcAbout;
