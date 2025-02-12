import './counter.style.scss';

const Counter = () => {
    return (
        <div className='counter-container'>
            <div className='svg-overlay'>
                {/* Include your SVG here */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="your-svg-class"
                >
                    {/* SVG content */}
                </svg>
            </div>
            {/* Additional content for the counter */}
        </div>
    );
};

export default Counter;
