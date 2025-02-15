import { useState, useEffect } from "react";

const CounterTextElement = ({ data }) => {
    const [counts, setCounts] = useState(data.map(() => 0));

    useEffect(() => {
        const intervals = data.map(({ title }, index) => {
            const number = parseInt(title.replace(/\D/g, ""), 10); 
            let current = 0;

            const interval = setInterval(() => {
                if (current >= number) {
                    clearInterval(interval);
                } else {
                    current += Math.ceil(number / 100); 
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = current;
                        return newCounts;
                    });
                }
            }, 30);

            return interval;
        });

        return () => intervals.forEach(clearInterval);
    }, [data]);

    return (
        <div className="grid grid-cols-3 gap-6 text-center bg-transparent m-[20px]">
            {data.map(({ id, title, subtitle }, index) => {
                const numberText = title.replace(/[0-9]/g, ""); 
                return (
                    <div key={id} className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-gray-950">
                            {counts[index]}{numberText}
                        </h1>
                        <p className="text-gray-950 text-2xl">{subtitle}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CounterTextElement;
