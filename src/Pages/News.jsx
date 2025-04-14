import React, { useContext } from "react";
import CommonHero2 from "../Components/Common/CommonHero2";
import { NewsContext } from "../Utils/Context";
import { Link } from "react-router-dom";
import PageAnimation from "../Components/PageAnimation";

const News = () => {
        document.title = "News → Future Goals";
    const [news] = useContext(NewsContext);
    return (
        <PageAnimation>
            <div>
                <CommonHero2
                    title="What’s going on?"
                    backgroundImage={"/Images/News/news-1c.jpg"}
                    subtitle={null}
                    bgColor={"bg-[#00000095]"}
                    margins={"mt-2 lg:mt-5 xl:mt-10"}
                    sizes={
                        "text-[12vw] leading-[12.5vw] sm:text-[55px] md:text-[60px] lg:text-[80px] xl:text-[90px] 2xl:text-[115px] text-[#F1EAE2] sm:leading-[120%]"
                    }
                    logo={null}
                    paddings={
                        "pb-38 sm:pb-38 md:pb-40 lg:pb-48 xl:pb-54 2xl:pb-64 pt-48 sm:pt-54 md:pt-60 lg:pt-64 xl:pt-72 2xl:pt-80"
                    }
                />
                <div className="bg-[#F1EAE2] px-4 sm:px-5 md:px-8 lg:px-10">
                    <div className="mx-auto max-w-[1600px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 xl:gap-6 2xl:gap-8 -translate-y-22 md:-translate-y-20 lg:-translate-y-26 xl:-translate-y-28 2xl:-translate-y-36 relative z-30">
                            {news.map(
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
                                                            {shortDescription}
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
                    </div>
                </div>
            </div>
        </PageAnimation>
    );
};

export default News;
