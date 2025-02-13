const Counter = () => {
    return (
        <div className="relative w-[300px] h-[300px] bg-white mx-auto my-5 shadow-md rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-[80%] h-auto opacity-50"
                >
                </svg>
            </div>
        </div>
    );
};

export default Counter;
