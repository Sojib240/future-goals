import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoWatch = ({ openCloseVideo, setOpenCloseVideo, videoSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoPlayTime, setVideoPlayTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const playerRef = useRef(null);

    // ⏱ Format seconds into MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };
    const resetVideo = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0); // Reset video to the beginning
            setVideoPlayTime(0); // Reset the play time state
            setIsPlaying(false); // Pause the video
        }
    };

    return (
        <div
            className={`bg-[#F1EAE2] w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[9999999] ${
                openCloseVideo
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            } transition-all duration-500 ease-in-out`}
        >
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-[95%] md:w-[90%] lg:w-[88%] xl:w-[85%] aspect-[3/2] md:aspect-video relative z-[99] rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-4xl overflow-hidden ${
                    openCloseVideo ? "scale-100 rotate-0" : "scale-75 rotate-6"
                } transition-all duration-500 ease-in-out cursor-pointer`}
            >
                <ReactPlayer
                    ref={playerRef}
                    playing={isPlaying}
                    loop={true}
                    volume={0.5}
                    controls={false}
                    onProgress={(d) => {
                        setVideoPlayTime(Math.round(d.playedSeconds));
                    }}
                    onDuration={(d) => {
                        setVideoDuration(Math.round(d))
                    }}
                    width="100%"
                    height="100%"
                    className="react-player-cover"
                    url={videoSrc}
                />

                {/* ⏱ Timer */}
                <div className="">
                    <p className="absolute top-0 right-0 pt-3 sm:pt-4 lg:pt-6 pr-4 sm:pr-6 lg:pr-8 font-BriceSemiBold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl z-50 text-white">
                        {formatTime(videoPlayTime)}
                    </p>
                    <p className="absolute bottom-0 right-0 pb-3 sm:pb-4 lg:pb-6 pr-4 sm:pr-6 lg:pr-8 font-BriceSemiBold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl z-50 text-white">
                        {formatTime(videoDuration)}
                    </p>
                </div>

                {/* ▶️ Overlay Play Button */}
                <div
                    className={`overlay h-full w-full absolute bg-[#00000060] bottom-0 left-0 pointer-events-none select-none z-20 ${
                        isPlaying ? "opacity-0" : "opacity-100"
                    } transition-all duration-300 ease-in-out`}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-13 sm:h-13 md:w-15 md:h-15 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                        <img
                            className="z-20 w-3 sm:w-3.5 md:w-4 relative transition-all duration-300 ease-in-out group-hover:invert"
                            src="/Images/Icons/play.svg"
                            alt="Play Icon"
                        />
                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                    </div>
                </div>
            </button>

            {/* ❌ Close Button */}
            <div className="absolute top-0 right-0 pt-4 md:pt-6 xl:pt-8 pr-4 md:pr-6 xl:pr-8 z-30">
                <button
                    onClick={() => {
                        setOpenCloseVideo(!openCloseVideo), resetVideo();
                    }}
                    className="z-10 w-12 h-12 sm:w-13 sm:h-13 md:w-15 md:h-15 xl:w-18 xl:h-18 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer relative"
                >
                    <span className="block w-3 sm:w-3.5 md:w-4">
                        <img
                            className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert invert-0 rotate-90"
                            src="/Images/Icons/close.svg"
                            alt="Close Icon"
                        />
                    </span>
                    <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                </button>
            </div>
        </div>
    );
};

export default VideoWatch;
