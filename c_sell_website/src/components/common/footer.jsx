import {FOOTER_BG} from "../constants/constants.jsx";
import {APP_STORE_ICON, LINKEDIN_ICON, TIK_TOK_ICON, X_LOGO_ICON} from "../constants/icons.jsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const icon_dimensions = {width: 24, height: 24, fill: "#a1a1a1"};

    return (
        <footer
            className="bg-cover bg-blend-multiply content-center text-neutral-50 py-5 h-[7vw]"
            style={{backgroundImage: FOOTER_BG}}
        >
            <div className="container mx-auto flex flex-row justify-between items-center space-y-2 text-center py-[15px]">
                {/* Copyright and Date */}
                <div className="text-sm text-neutral-400">
                    © {currentYear} C_RENT. All rights reserved.
                </div>

                {/* App Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Play"
                    >
                        <APP_STORE_ICON width={icon_dimensions.width} height={icon_dimensions.height}
                                        fill_color={icon_dimensions.fill}/>

                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="App Store"
                    >
                        <X_LOGO_ICON width={icon_dimensions.width} height={icon_dimensions.height}
                                     fill_color={icon_dimensions.fill}/>
                    </a>
                    <a
                        href="https://www.tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <TIK_TOK_ICON width={icon_dimensions.width} height={icon_dimensions.height}
                                      fill_color={icon_dimensions.fill}/>
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LINKEDIN_ICON width={icon_dimensions.width} height={icon_dimensions.height}
                                       fill_color={icon_dimensions.fill}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
