import { WHITE_TO_BLACK } from "../shared/constants.js";

const VideoPrezentation = () => {
    return (
        <div
            className="w-screen h-screen flex items-center justify-center"
            style={{ backgroundImage: WHITE_TO_BLACK }}
        >
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1-qwounu3yA?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=1-qwounu3yA"
                title="YouTube Video Presentation"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPrezentation;
