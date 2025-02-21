import TextBanner from "../../common/textBanner";
import {BANNER_BG} from "../constants";
import {LOGO_ICON} from "../icons/logoIcon";


const Banner = ({page_title}) => {
    return (
        <div
            className="relative font-bold h-[20%] flex flex-col items-center justify-center text-white p-8 bg-cover bg-blend-multiply"
            style={{backgroundImage: BANNER_BG}}>
            <LOGO_ICON width={100} />

            {/* Text BannerHome */}
            <div className="my-[7%]">
                <TextBanner text={page_title} />
            </div>
        </div>
    );
};

export default Banner;
