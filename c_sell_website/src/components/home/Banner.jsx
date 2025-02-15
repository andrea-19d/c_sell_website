import Button from "../common/Button";
import Logo_Title from "../common/logo";
import TextBanner from "../common/text_banner";
import {BANNER_BG} from "../constants/constants";


const Banner = () => {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 bg-cover bg-blend-multiply"
            style={{backgroundImage: BANNER_BG}}>
            <Logo_Title/>

            {/* Text Banner */}

            <div className="my-[7%]">
                <TextBanner text={["BUILD YOUR DREAM AND", "STAND OUT FROM THE CROWD"]}/>
            </div>
            {/* Explore Button */}
            <Button text="EXPLORE"/>
        </div>
    );
};

export default Banner;
