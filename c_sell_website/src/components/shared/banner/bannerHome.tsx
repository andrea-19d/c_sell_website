import TextBanner from "./textBanner";
import {BANNER_BG} from "../constants";
import {LOGO_ICON} from "../icons/logoIcon";
import CustomButton from "../../common/button";


const BannerHome = () => {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 bg-cover bg-blend-multiply"
            style={{backgroundImage: BANNER_BG}}>
            <LOGO_ICON width={200} />


            {/* Text BannerHome */}

            <div className="my-[7%]">
                <TextBanner page_title={"BUILD YOUR DREAM AND STAND OUT FROM THE CROWD"} />
            </div>

            {/* Explore Button */}
            {/*<CustomButton text="EXPLORE"/>*/}
        </div>
    );
};

export default BannerHome;
