import Button from "../common/Button";
import TextBanner from "../common/text_banner";
import {BANNER_BG} from "../constants/constants";
import {LOGO_ICON} from "../constants/icons.jsx";


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
            <Button text="EXPLORE" to="/#"/>
        </div>
    );
};

export default BannerHome;
