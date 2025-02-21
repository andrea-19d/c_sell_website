import TextBanner from "../common/textBanner";
import {BANNER_BG} from "../shared/constants";
import {LOGO_ICON} from "../shared/icons/logoIcon.js";
import CustomButton from "../common/button";


const BannerHome = () => {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 bg-cover bg-blend-multiply"
            style={{backgroundImage: BANNER_BG}}>
            <LOGO_ICON width={200} />


            {/* Text BannerHome */}

            <div className="my-[7%]">
                <TextBanner text={"BUILD YOUR DREAM AND STAND OUT FROM THE CROWD"} />
            </div>

            {/* Explore Button */}
            {/*<CustomButton text="EXPLORE"/>*/}
        </div>
    );
};

export default BannerHome;
