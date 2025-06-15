import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import SideNavBar from "./SideNavBar";

const NavBar = () => {
    const { pathname } = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const hambarger1 = useRef();
    const hambarger2 = useRef();
    const menuText1Ref = useRef();
    const menuText2Ref = useRef();

    const [menu, setmenu] = useState(false);
    const toggleMenu = () => {
        setmenu(!menu);
        setMenuOpen(!menuOpen);
    };
    // scroll to top when menu is open
    useEffect(() => {
        const timel = gsap.timeline();

        if (menu && menuOpen) {
            timel
                .to(
                    hambarger1.current,
                    { top: "50%", duration: 0.15, ease: "sine.out" },
                    "a"
                )
                .to(
                    hambarger2.current,
                    { top: "50%", duration: 0.15, ease: "sine.out" },
                    "a"
                )
                .to(
                    hambarger1.current,
                    {
                        delay: 0.1,
                        rotate: "45deg",
                        duration: 0.15,
                        ease: "sine.out",
                    },
                    "b"
                )
                .to(
                    hambarger2.current,
                    {
                        delay: 0.1,
                        rotate: "-45deg",
                        duration: 0.15,
                        ease: "sine.out",
                    },
                    "b"
                )
                .to(
                    menuText1Ref.current,
                    { y: "-20px", duration: 0.2, ease: "sine.out" },
                    "b"
                )
                .to(
                    menuText2Ref.current,
                    { y: "-20px", duration: 0.2, ease: "sine.out" },
                    "b"
                );
        } else {
            timel
                .to(
                    hambarger1.current,
                    { rotate: "0deg", duration: 0.15, ease: "sine.out" },
                    "a"
                )
                .to(
                    hambarger2.current,
                    { rotate: "0deg", duration: 0.15, ease: "sine.out" },
                    "a"
                )
                .to(
                    hambarger1.current,
                    {
                        delay: 0.1,
                        top: "0%",
                        duration: 0.15,
                        ease: "power1.inOut",
                    },
                    "b"
                )
                .to(
                    hambarger2.current,
                    {
                        delay: 0.1,
                        top: "100%",
                        duration: 0.15,
                        ease: "sine.out",
                    },
                    "b"
                )
                .to(
                    menuText1Ref.current,
                    { y: "0px", duration: 0.2, ease: "sine.out" },
                    "b"
                )
                .to(
                    menuText2Ref.current,
                    { y: "0px", duration: 0.2, ease: "sine.out" },
                    "b"
                );
        }
        return () => {
            timel.kill();
        };
    }, [menu, menuOpen, pathname]);

    return (
        <div className="relative">
            <div className="flex justify-between items-start absolute top-0 left-0 z-50 bg-transparent w-full px-4 sm:px-5 md:px-8 lg:px-10 xl:px-10 pt-5 sm:pt-6 md:pt-8">
                <div className="w-[75px] hidden sm:flex items-center gap-2 md:gap-3">
                    <div className="w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] cursor-pointer relative">
                        <img
                            className="w-full"
                            src="/Images/Icons/en.svg"
                            alt="logo"
                        />
                        <span className="block w-1.5 h-1.5 bg-[#ffffff] absolute -bottom-3.5 rounded-full left-1/2 -translate-x-1/2" />
                    </div>
                    <div className="w-[22px] sm:w-[24px] md:w-[26px] lg:w-[28px] xl:w-[30px] cursor-pointer relative">
                        <img
                            className="w-full"
                            src="/Images/Icons/pap.svg"
                            alt="logo"
                        />
                        {/* <span className="block w-1.5 h-1.5 bg-[#ffffff] absolute -bottom-3.5 rounded-full left-1/2 -translate-x-1/2" /> */}
                    </div>
                </div>
                <div className="w-auto sm:w-full flex justify-center">
                    <NavLink
                        to="/"
                        className="logo w-[110px] sm:w-[140px] md:w-[150px] lg:w-[160px] xl:w-[170px]"
                    >
                        <img
                            className="invert w-full"
                            src="/Images/Icons/Main-logo.svg"
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <div className="w-[75px]" />
            </div>
            <div
                onClick={() => {
                    toggleMenu();
                }}
                className="menu fixed top-0 right-0 bg-transparent px-4 sm:px-5 md:px-8 lg:px-10 xl:px-10 pt-5 sm:pt-6 md:pt-8 z-[60]"
            >
                <button
                    className={`px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-[#1E1E1E] border-[2px] border-[#1E1E1E] bg-[#FFFFFF] font-PoppinsBold uppercase rounded-[8px] md:rounded-[10px] flex justify-between items-center gap-[2px] md:gap-1 cursor-pointer group relative overflow-hidden ${
                        menuOpen ? "!bg-[#1E1E1E]" : "!bg-[#FFFFFF]"
                    }`}
                >
                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-44 h-44 bg-[#1E1E1E] scale-0 group-hover:scale-[1.1] transition-transform duration-[0.44s] ease-in-out rounded-full block z-0 pointer-events-none" />
                    <div className="flex flex-col text-sm sm:text-[15px] md:text-base lg:text-[17px] xl:text-lg leading-[20px] h-[20px] overflow-hidden">
                        <span
                            ref={menuText1Ref}
                            className={`block group-hover:text-[#FFFFFF] z-20 relative transition-colors ${
                                menuOpen ? "text-[#FFFFFF]" : "text-[#1E1E1E]"
                            }`}
                        >
                            menu
                        </span>
                        <span
                            ref={menuText2Ref}
                            className={`block group-hover:text-[#FFFFFF] z-20 relative transition-colors ${
                                menuOpen ? "text-[#FFFFFF]" : "text-[#1E1E1E]"
                            }`}
                        >
                            close
                        </span>
                    </div>
                    <div className="relative h-[6px] md:h-[8px] w-[17px] sm:w-[18px] md:w-[19px] lg:w-[20px] mb-[2px] lg:mb-1">
                        <span
                            ref={hambarger1}
                            className={`w-[17px] sm:w-[18px] md:w-[19px] lg:w-[20px] h-[2px] lg:h-[3px] bg-[#1E1E1E] block absolute top-0 left-0 group-hover:bg-[#FFFFFF] z-20 transition-colors ${
                                menuOpen ? "bg-[#FFFFFF]" : "bg-[#1E1E1E]"
                            }`}
                        />
                        <span
                            ref={hambarger2}
                            className={`w-[17px] sm:w-[18px] md:w-[19px] lg:w-[20px] h-[2px] lg:h-[3px] bg-[#1E1E1E] block absolute top-0 left-0 group-hover:bg-[#F1EAE2] z-20 transition-colors ${
                                menuOpen ? "bg-[#FFFFFF]" : "bg-[#1E1E1E]"
                            }`}
                        />
                    </div>
                </button>
            </div>
            {/* <SideBa\ */}
            <SideNavBar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                toggleMenu={toggleMenu}
            />
        </div>
    );
};

export default NavBar;
