import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { NewsContext } from "../../Utils/Context";

const SideNavBar = ({ menuOpen, setMenuOpen, toggleMenu }) => {
    const [news] = useContext(NewsContext);
    const sideBarData = [
        { id: 1, title: "FAQ", direction: "/faq/" },
        { id: 2, title: "Contact", direction: "/contact/" },
        { id: 3, title: "Global Press", direction: "/global-press/" },
    ];
    return (
        <div>
            <div className="">
                <div
                    onClick={() => toggleMenu()}
                    className={`overlay h-screen w-full fixed top-0 left-0 bg-[#00000030] z-40 select-none transition-opacity duration-500 ${
                        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                />
                <div
                    className={`menu fixed top-0 right-0 z-50 bg-[#F1EAE2] max-w-[94%] sm:max-w-[550px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[800px] rounded-l-[30px] lg:rounded-l-[40px] xl:rounded-l-[60px] w-full h-screen p-10 sm:p-12 lg:p-14 xl:p-14  ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    }  custom-transition`}
                >
                    <div className="flex justify-between flex-col gap-10 h-full">
                        <div className="top block sm:hidden">
                            <div className="w-[75px] flex items-center gap-2">
                                <div className="w-[30px] relative">
                                    <img
                                        className="w-full"
                                        src="/Images/Icons/en.svg"
                                        alt="logo"
                                    />
                                    <span className="block w-1.5 h-1.5 bg-[#1E1E1E] absolute -bottom-3.5 rounded-full left-1/2 -translate-x-1/2" />
                                </div>
                                <div className="w-[30px] relative">
                                    <img
                                        className="w-full"
                                        src="/Images/Icons/pap.svg"
                                        alt="logo"
                                    />
                                    <span className="block w-1.5 h-1.5 bg-[#1E1E1E] absolute -bottom-3.5 rounded-full left-1/2 -translate-x-1/2" />
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block"></div>
                        <div className="center pl-0 md:pl-10">
                            <div className="flex items-center gap-2 group">
                                <NavLink
                                    to="/"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] leading-[56px] lg:leading-[70px] xl:leading-[75px] 2xl:leading-[95px] font-BriceBold uppercase nav-link"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="overflow-hidden nav-link hidden sm:block"
                                >
                                    <span className="group-hover:-translate-x-0 -translate-x-full transition-transform duration-[0.4s] origin-left text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] font-BriceBold block leading-none">
                                        →
                                    </span>
                                </NavLink>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <NavLink
                                    to="/about/"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] leading-[56px] lg:leading-[70px] xl:leading-[75px] 2xl:leading-[95px] font-BriceBold uppercase nav-link"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/about/"
                                    className="overflow-hidden nav-link hidden sm:block"
                                >
                                    <span className="group-hover:-translate-x-0 -translate-x-full transition-transform duration-[0.4s] origin-left text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] font-BriceBold block leading-none">
                                        →
                                    </span>
                                </NavLink>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <NavLink
                                    to="/school-portal/"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] leading-[56px] lg:leading-[70px] xl:leading-[75px] 2xl:leading-[95px] font-BriceBold uppercase nav-link"
                                >
                                    School
                                </NavLink>
                                <NavLink
                                    to="/school-portal/"
                                    className="overflow-hidden nav-link hidden sm:block"
                                >
                                    <span className="group-hover:-translate-x-0 -translate-x-full transition-transform duration-[0.4s] origin-left text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] font-BriceBold block leading-none">
                                        →
                                    </span>
                                </NavLink>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <NavLink
                                    to="/news/"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] leading-[56px] lg:leading-[70px] xl:leading-[75px] 2xl:leading-[95px] font-BriceBold uppercase nav-link flex"
                                >
                                    News
                                    <span className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                                        {news.length}
                                    </span>
                                </NavLink>
                                <NavLink
                                    to="/news/"
                                    className="overflow-hidden nav-link hidden sm:block"
                                >
                                    <span className="group-hover:-translate-x-0 -translate-x-full transition-transform duration-[0.4s] origin-left text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] font-BriceBold block nav-link leading-none">
                                        →
                                    </span>
                                </NavLink>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <a
                                    href="https://sandalsfoundation.org/donation"
                                    target="_blank"
                                    className="text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] leading-[56px] lg:leading-[70px] xl:leading-[75px] 2xl:leading-[95px] font-BriceBold uppercase"
                                >
                                    Donate
                                </a>
                                <div className="overflow-hidden hidden sm:block">
                                    <span className="group-hover:-translate-x-0 -translate-x-full transition-transform duration-[0.4s] origin-left text-[45px] lg:text-6xl xl:text-7xl 2xl:text-[90px] font-BriceBold block leading-none">
                                        →
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom flex items-center justify-between gap-2">
                            <div className="flex gap-2">
                                {sideBarData.map(({ title, id, direction }) => {
                                    return (
                                        <Link
                                            to={`${direction}`}
                                            onClick={() => setMenuOpen(false)}
                                            key={id}
                                            className="rounded-[8px] py-1.5 px-1 sm:px-2 font-BriceSemiBold text-[10px] sm:text-xs lg:text-sm uppercase bg-[#FCFCFC] text-[#1E1E1E] border-[#1E1E1E] border-2 relative overflow-hidden cursor-pointer group"
                                        >
                                            <span className="group-hover:text-[#FCFCFC] z-20 relative transition-colors duration-300">
                                                {title}
                                            </span>
                                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-32 h-32 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="hidden sm:block">
                                <p className="font-PoppinsRegular text-xs md:text-sm text-[#7c7a78]">
                                    Future Goals © 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavBar;
