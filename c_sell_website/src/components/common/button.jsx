// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
    return (
        <button className="w-[242px] h-[50px] bg-neutral-900 border-2 border-gray-500 text-xl cursor-pointer hover:bg-gray-100 transition">
            {text}
        </button>
    );
};

export default Button;
