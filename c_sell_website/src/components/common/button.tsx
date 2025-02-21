
const CustomButton = ({ text, onClick, type = "button" }) => {


    return (
        <button
            className="w-[242px] h-[50px] text-neutral-50 bg-neutral-900 border-2 border-gray-500 text-xl cursor-pointer
                        hover:bg-neutral-200 hover:text-neutral-900 hover:border-neutral-950 transition"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;
