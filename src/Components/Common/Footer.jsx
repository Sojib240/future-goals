import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const centerFooterImgRef = useRef(null);
    const footerBottomRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: centerFooterImgRef,
        offset: ["start end", "end end"],
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: footerBottomRef,
        offset: ["start end", "end end"],
    });
    const y = useTransform(scrollYProgress, [0, 0.8], ["-50px", "0px"]);
    const y2 = useTransform(scrollYProgress2, [0, 1], ["-100px", "0px"]);
    const { pathname } = useLocation();
    return (
        <div className="bg-[#F1EAE2]">
            <div className="footer-top relative z-20 overflow-hidden">
                <div className="h-[350px] md:h-[380px] lg:h-[420px] xl:h-[450px] relative overflow-hidden">
                    <div ref={centerFooterImgRef} className="w-full h-full">
                        <div className="overlay bg-[#00000060] w-full h-full absolute top-0 left-0 z-10" />
                        <motion.img
                            style={{ y }}
                            className="w-full h-full object-cover scale-[1.30]"
                            src="/Images/Footer/prefooter-img.jpg"
                            alt=""
                        />
                        <div className="flex flex-col gap-2 justify-center items-center text-[#F1EAE2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full sm:w-[80%] lg:w-[70%] xl:w-1/2 px-4 sm:px-5 md:px-8 lg:px-10 xl:px-10">
                            <h4 className="font-BriceSemiBold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase">
                                Get involved
                            </h4>
                            <p className="font-PoppinsRegular text-[17px] leading-[27px] mt-3">
                                Do you have a question about Future Goals? Want
                                to get involved? Or are you representing a
                                primary school and want to enroll? We would like
                                to hear from you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-center bg-[#1E1E1E] text-[#F1EAE2] rounded-b-4xl relative z-30 px-5 md:px-8 lg:px-10 xl:px-10">
                <div className="max-w-[1600px] w-full mx-auto">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 xl:gap-8 translate-y-[-50px] md:translate-y-[-60px] lg:translate-y-[-70px]  xl:translate-y-[-80px]">
                        {pathname === "/contact/" ? null : (
                            <Link
                                to="/contact/"
                                className="card bg-[#F1EAE2] text-[#1E1E1E] rounded-2xl sm:rounded-3xl flex gap-4 sm:gap-6 xl:gap-8 justify-between items-center flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row p-5 lg:p-6 xl:p-8 group"
                            >
                                <div className="w-full h-full lg:w-[58%] flex flex-col justify-between items-start">
                                    <div className="">
                                        <h4 className="font-BriceSemiBold text-2xl sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[35px] 2xl:text-[38px] uppercase leading-[38px]">
                                            How to reach <br /> us?
                                        </h4>
                                        <p className="font-PoppinsRegular text-base lg:text-lg leading-[27px] mt-2 mb-6">
                                            Interested to partner up? Or do you
                                            have a question or suggestion about
                                            our program?
                                        </p>
                                    </div>
                                    <button className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-white text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto md:w-full lg:w-auto">
                                        <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                            Contact us
                                        </span>
                                        <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                            →
                                        </span>
                                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                    </button>
                                </div>
                                <div className="rounded-lg overflow-hidden w-full h-full lg:w-[42%]">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-4 custom-transition scale-[1.01]"
                                        src="/Images/Footer/footer-img-1.jpg"
                                        alt=""
                                    />
                                </div>
                            </Link>
                        )}
                        <NavLink
                            to="/school-portal/"
                            className="card bg-[#F1EAE2] text-[#1E1E1E] rounded-2xl sm:rounded-3xl flex gap-4 sm:gap-6 xl:gap-8 justify-between items-center flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row p-5 lg:p-6 xl:p-8 group"
                        >
                            <div className="w-full h-full lg:w-[58%] flex flex-col justify-between items-start">
                                <div className="">
                                    <h4 className="font-BriceSemiBold text-2xl sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[35px] 2xl:text-[38px] uppercase leading-[38px]">
                                        How to enroll?
                                    </h4>
                                    <p className="font-PoppinsRegular text-base lg:text-lg leading-[27px] mt-2 mb-6">
                                        Check our school portal and learn how to
                                        join Future Goals.
                                    </p>
                                </div>
                                <button className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-white text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto md:w-full lg:w-auto">
                                    <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                        School portal
                                    </span>
                                    <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                        →
                                    </span>
                                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                </button>
                            </div>
                            <div className="rounded-lg overflow-hidden w-full lg:w-[42%] h-full">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-[1.15] origin-center-center group-hover:-rotate-4 custom-transition scale-[1.01]"
                                    src="/Images/Footer/footer-img-2.jpg"
                                    alt=""
                                />
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex justify-between flex-col sm:flex-row items-center gap-10 pt-6 sm:pt-8 md:pt-10 lg:pt-16 xl:pt-20 pb-14 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
                        <div className="text-[26px] sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl uppercase font-BriceSemiBold text-center sm:text-left">
                            <h4>
                                From the ocean, <br /> for the future
                            </h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <p className="font-BriceRegular text-sm md:text-base lg:text-lg xl:text-xl">
                                Initiated by
                            </p>
                            <div className="w-[120px] sm:w-[130px] md:w-[150px] lg:w-[180px] xl:w-[200px]">
                                <img
                                    className="invert"
                                    src="/Images/Footer/sandels.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                ref={footerBottomRef}
                style={{ y: y2 }}
                className="footer-bottom pb-8 pt-9 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#F1EAE2] px-4 sm:px-5 md:px-8 lg:px-10 xl:px-10 z-20"
            >
                <div className="max-w-[1600px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-7 md:gap-8 lg:gap-10 xl:gap-12">
                    <Link
                        to={"/"}
                        className="w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px] xl:w-[170px]"
                    >
                        <img
                            className="w-full"
                            src="/Images/Footer/footer-logo.svg"
                            alt=""
                        />
                    </Link>
                    <div className="font-BriceRegular text-base lg:text-lg flex flex-wrap gap-4 lg:gap-6 justify-center sm:justify-start text-center sm:text-right">
                        <NavLink to="/contact/">Contact</NavLink>
                        <NavLink to="/faq/">FAQ</NavLink>
                        <Link to="/privacy-policy/">Privacy Policy</Link>
                        <NavLink to="/global-press/">Global Press</NavLink>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Footer;
