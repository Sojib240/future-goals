import React, { useState } from "react";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import Footer from "./Components/Common/Footer";
import GlobalPress from "./Pages/GlobalPress";
import FAQ from "./Pages/FAQ";
import AboutSandals from "./Pages/AboutSandals";
import AfcAbout from "./Pages/AfcAbout";
import Contact from "./Pages/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import About from "./Pages/About";
import SchoolPortal from "./Pages/SchoolPortal";
import News from "./Pages/News";
import Noise from "./Components/Noise";
import ScrollToTop from "./Components/ScrollToTop";
import NewsDetails from "./Pages/NewsDetails";
import HomePage from "./Pages/HomePage";
import { AnimatePresence } from "framer-motion";
import VideoWatch from "./Components/Common/VideoWatch";
const App = () => {
    const location = useLocation();
    const [openCloseVideo, setOpenCloseVideo] = useState(false);
    const [videoSrc, setVideoSrc] = useState(
        "/Videos/Future Goals - From the ocean, for the future.mp4"
    );

    return (
        <div className="relative">
            <div className="w-full h-screen fixed px-[18px] z-[9999999] pointer-events-none select-none">
                <Noise />
            </div>
            <LenisSmoothScroll />
            <NavBar />
            <ScrollToTop />
            <VideoWatch
                openCloseVideo={openCloseVideo}
                setOpenCloseVideo={setOpenCloseVideo}
                videoSrc={videoSrc}
            />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                openCloseVideo={openCloseVideo}
                                setOpenCloseVideo={setOpenCloseVideo}
                                setVideoSrc={setVideoSrc}
                            />
                        }
                    />
                    <Route
                        path="/about-sandals/"
                        element={
                            <AboutSandals
                                openCloseVideo={openCloseVideo}
                                setOpenCloseVideo={setOpenCloseVideo}
                                setVideoSrc={setVideoSrc}
                            />
                        }
                    />
                    <Route
                        path="/afc-about/"
                        element={
                            <AfcAbout
                                penCloseVideo={openCloseVideo}
                                setOpenCloseVideo={setOpenCloseVideo}
                                setVideoSrc={setVideoSrc}
                            />
                        }
                    />
                    <Route
                        path="/about/"
                        element={
                            <About
                                openCloseVideo={openCloseVideo}
                                setOpenCloseVideo={setOpenCloseVideo}
                                setVideoSrc={setVideoSrc}
                            />
                        }
                    />
                    <Route path="/school-portal/" element={<SchoolPortal />} />
                    <Route path="/global-press/" element={<GlobalPress />} />
                    <Route path="/faq/" element={<FAQ />} />
                    <Route
                        path="/privacy-policy/"
                        element={<PrivacyPolicy />}
                    />
                    <Route path="/contact/" element={<Contact />} />
                    <Route path="/news/" element={<News />} />
                    <Route
                        path="/news/:slug/"
                        element={
                            <NewsDetails
                                openCloseVideo={openCloseVideo}
                                setOpenCloseVideo={setOpenCloseVideo}
                                setVideoSrc={setVideoSrc}
                            />
                        }
                    />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default App;
