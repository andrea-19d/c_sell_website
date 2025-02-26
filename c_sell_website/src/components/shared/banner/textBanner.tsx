// eslint-disable-next-line react/prop-types
const TextBanner = ({ page_title }:BannerProps) => {
    return (
        <div className="text-balance flex flex-col items-center justify-center text-center text-5xl">
            <p className="w-[75vh]">{page_title}</p>
        </div>
    );
};

export default TextBanner;
