import { WHITE_TO_BLACK } from "../constants/constants.jsx";

const VideoPrezentation = () => {
    return (
        <div
            className="w-screen h-screen flex items-center justify-center"
            style={{ backgroundImage: WHITE_TO_BLACK }}
        >
            {/* Video Container */}
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1-qwounu3yA?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0"
                title="YouTube Video Presentation"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPrezentation;
