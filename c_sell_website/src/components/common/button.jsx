import { useNavigate } from 'react-router';

const Button = ({ text, onClick, to, type = "button" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to); // Redirect to the product page
        } else if (onClick) {
            onClick(); // Call the onClick function (like adding to cart)
        }
    };

    return (
        <button
            className="w-[242px] h-[50px] text-neutral-50 bg-neutral-900 border-2 border-gray-500 text-xl cursor-pointer
                        hover:bg-neutral-200 hover:text-neutral-900 hover:border-neutral-950 transition"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
