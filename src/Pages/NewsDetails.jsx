import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewsContext } from "../Utils/Context";
import CommonHero from "../Components/Common/CommonHero";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import PageAnimation from "../Components/PageAnimation";

const NewsDetails = ({ openCloseVideo, setOpenCloseVideo, setVideoSrc }) => {
    const sliderImages = [
        { id: 1, image: "/Images/News/1a-1440x-q72.jpg" },
        { id: 2, image: "/Images/01a-how.jpg" },
        { id: 3, image: "/Images/01b-how.jpg" },
        { id: 4, image: "/Images/01d-how.jpg" },
        { id: 5, image: "/Images/01e-how.jpg" },
        { id: 6, image: "/Images/Footer/footer-img-1.jpg" },
        { id: 7, image: "/Images/News/7a-1440x-q72.jpg" },
        { id: 8, image: "/Images/News/9-1440x-q72.jpg" },
    ];
    const [news] = useContext(NewsContext);
    const { slug } = useParams();
    const [newsDetails, setNewsDetails] = useState();
    document.title = `${newsDetails && newsDetails[0].title} → Future Goals`;
    // current index
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

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

    useEffect(() => {
        const newsDet =
            news &&
            news.filter((ne) => {
                return ne.slug === slug;
            });
        setNewsDetails(newsDet);
    }, [news, slug]);

    // current index
    useEffect(() => {
        newsDetails &&
            newsDetails.map((item) => {
                setCurrentIndex(item.id - 1);
            });
    }, [newsDetails, currentIndex]);
    // all index
    function getPrev() {
        if (currentIndex > 0) {
            const prev = news && news[currentIndex - 1].slug;
            navigate(`/news/${prev}/`);
        }
    }
    function getNext() {
        if (currentIndex < news.length) {
            const next = news && news[currentIndex + 1].slug;
            navigate(`/news/${next}/`);
        }
    }

    return (
        newsDetails &&
        newsDetails.map(({ id, title, publishedDate, image, pageContent }) => {
            return (
                <PageAnimation>
                    <div key={id}>
                        <CommonHero
                            bg={`${image}`}
                            title={`${publishedDate}`}
                            subTitle={`${title}`}
                            arrow={true}
                            getPrev={getPrev}
                            getNext={getNext}
                            currentIndex={currentIndex}
                        />
                        <div className="w-full bg-[#1E1E1E] sm:px-5 md:px-8 lg:px-10 xl:px-10 relative">
                            <div className="max-w-[1440px] w-full bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular leading-[25px] sm:leading-[27px] -translate-y-0 sm:-translate-y-[100px] relative z-30">
                                <div className="flex justify-center items-center gap-[3vw] sm:gap-5 md:gap-6 lg:gap-6 w-full absolute top-[-20px] md:top-[-23px] left-1/2 -translate-x-1/2 z-50">
                                    <button
                                        onClick={() => getPrev()}
                                        className={`z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer relative ${
                                            currentIndex == 0
                                                ? "hidden"
                                                : "block"
                                        }`}
                                    >
                                        <span className="block w-3.5 lg:w-4">
                                            <img
                                                className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert rotate-180"
                                                src="/Images/Icons/arrow.svg"
                                                alt="arrow Icon"
                                            />
                                        </span>
                                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-12 h-12 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                    </button>
                                    <button
                                        onClick={() => getNext()}
                                        className={`z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer relative ${
                                            currentIndex >= news.length - 1
                                                ? "hidden"
                                                : "block"
                                        }`}
                                    >
                                        <span className="block w-3.5 lg:w-4">
                                            <img
                                                className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert"
                                                src="/Images/Icons/arrow.svg"
                                                alt="arrow Icon"
                                            />
                                        </span>
                                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-12 h-12 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                    </button>
                                </div>
                                {id == 3 ? (
                                    <div className="">
                                        <div className="">
                                            <span className="italic">
                                                “Let’s create awareness and be
                                                creative at the same time”
                                            </span>
                                            . The first thought of two young
                                            entrepreneurs - Debrah Nijdam and
                                            Mitchell Lammering - when they
                                            visited the north coast of Curaçao
                                            and saw the rough waters throw
                                            plastic that was drifting in the
                                            ocean onto the shores. Both
                                            graduates from the study ‘Industrial
                                            Product Design’ and with a strong
                                            shared passion for innovation and
                                            design. It’s what made them decide
                                            to start Limpi - a local plastic
                                            recycling company with the mission
                                            to turn unwanted plastic into a
                                            thing of beauty while simultaneously
                                            keeping the island of Curaçao clean.
                                        </div>
                                        <div className="mt-8 sm:mt-10 md:mt-18 lg:mt-24 w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
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
                                                                        src={
                                                                            image
                                                                        }
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
                                        <p className="mt-4 text-xs">
                                            From fishing nets to football goals
                                        </p>
                                    </div>
                                ) : null}
                                <div className="">
                                    {pageContent(
                                        openCloseVideo,
                                        setOpenCloseVideo,
                                        setVideoSrc
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1E1E1E] pt-16 sm:pt-0 pb-20 sm:pb-20 md:pb-24 lg:pb-28 flex flex-col gap-2 lg:gap-3 xl:gap-4 sm:flex-row justify-center px-5 md:px-8 lg:px-10 xl:px-10">
                            <button
                                onClick={() => getPrev()}
                                className={`group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#1E1E1E] text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto ${
                                    currentIndex == 0 ? "hidden" : "block"
                                }`}
                            >
                                <span className="mr-1 group-hover:text-[#1E1E1E] text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                    ←
                                </span>
                                <span className="group-hover:text-[#1E1E1E] text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                    Previous Article
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-46 lg:h-46 bg-[#F1EAE2] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </button>
                            <button
                                onClick={() => getNext()}
                                className={`group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#F1EAE2] text-[#1E1E1E] border-[#F1EAE2] relative overflow-hidden cursor-pointer w-full sm:w-auto ${
                                    currentIndex >= news.length - 1
                                        ? "hidden"
                                        : "block"
                                }`}
                            >
                                <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                    Next Article
                                </span>
                                <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                    →
                                </span>
                                <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                            </button>
                        </div>
                    </div>
                </PageAnimation>
            );
        })
    );
};

export default NewsDetails;
