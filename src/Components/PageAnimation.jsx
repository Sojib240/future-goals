import { motion } from "framer-motion";
import React from "react";

const PageAnimation = ({ children }) => {
    const opacity = {
        initial: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        enter: {
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 0.6,
            },
        },
        exit: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };
    const scale = {
        initial: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        enter: {
            scale: 1.5,
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 0.6,
            },
        },
        exit: {
            scale: 1,
            opacity:1,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <div>
            <motion.div
                variants={opacity}
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full h-screen fixed top-0 left-0 z-[9999999] pointer-events-none select-none"
            >
                <img
                    className="w-full h-full object-cover"
                    src="/Images/gradient-square.jpg"
                    alt=""
                />
                <motion.div
                    variants={scale}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="w-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none invert"
                >
                    <img
                        className="w-full"
                        src="/Images/Icons/Main-logo.svg"
                        alt=""
                    />
                </motion.div>
            </motion.div>
            <div>{children}</div>
        </div>
    );
};

export default PageAnimation;
