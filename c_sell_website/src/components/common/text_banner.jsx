const TextBanner = ({ text }) => {
    return (
        <div className="whitespace-pre-line flex flex-col items-center justify-center text-center text-5xl">
            {text.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
};

export default TextBanner;
