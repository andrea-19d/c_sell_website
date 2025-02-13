import './counter.style.scss';

const Counter = () => {
    return (
        <div className='counter-container'>
            <div className='svg-overlay'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="your-svg-class"
                >
                </svg>
            </div>
        </div>
    );
};

export default Counter;
