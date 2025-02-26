import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const CounterTextElement = ({ data }: {data:any}) => {
    // State to hold the current count for each item, initialized with 0
    const [counts, setCounts] = useState(() =>
        data.reduce((acc, { id }) => ({ ...acc, [id]: 0 }), {})
    );

    useEffect(() => {
        // Function to handle counting logic
        const startCounting = (title, id) => {
            const targetNumber = parseInt(title.replace(/\D/g, ""), 10);
            let current = 0;

            // Set an interval to update the count
            const interval = setInterval(() => {
                if (current >= targetNumber) {
                    clearInterval(interval);
                } else {
                    current += Math.ceil(targetNumber / 100); // Increment by a fraction to simulate smooth counting
                    setCounts((prevCounts) => ({ ...prevCounts, [id]: current }));
                }
            }, 30); // Update every 30ms for a smooth animation

            return interval;
        };

        // Start counting for each data item
        const intervals = data.map(({ title, id }) => startCounting(title, id));

        // Cleanup on component unmount
        return () => intervals.forEach(clearInterval);
    }, [data]);

    return (
        <div className="grid grid-cols-3 gap-6 text-center bg-transparent m-[20px]">
            {data.map(({ id, title, subtitle }) => {
                const numberText = title.replace(/[0-9]/g, ""); // Extract non-number part of the title
                return (
                    <div key={id} className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-gray-950">
                            {counts[id]}{numberText}
                        </h1>
                        <p className="text-gray-950 text-2xl">{subtitle}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CounterTextElement;
