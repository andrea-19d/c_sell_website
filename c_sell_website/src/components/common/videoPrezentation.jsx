import {WHITE_TO_BLACK} from "../constants/constants.jsx";

const VideoPrezentation = () => {
    return (
        <div
            className="w-screen min-h-screen flex flex-col items-center justify-center"
            style={{ backgroundImage: WHITE_TO_BLACK }}
        >
            {/* Video Container */}
            <div className="w-full max-w-[1480px] h-[800px] mb-8">
                <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&controls=1"
                    title="YouTube Video Presentation"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default VideoPrezentation;
