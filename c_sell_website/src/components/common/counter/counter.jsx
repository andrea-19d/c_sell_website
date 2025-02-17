import { COUNTER_BG } from "../../constants/constants";
import CounterTextElement from "./counter-elements";

const counterData = [
    { id: 1, title: "+100 mil", subtitle: "Happy users" },
    { id: 2, title: "+60 mil", subtitle: "In revenue" },
    { id: 3, title: "+25 K", subtitle: "Employees in despair" },
];

const Counter = () => {
    return (
        <div className="relative w-[90%] h-[300px] bg-white mx-auto flex-row gap-[20px] 
                                border-2 border-gray-700 my-[5%] rounded-lg items-center 
                                justify-center bg-cover overflow-hidden content-center text-center "
            style={{ backgroundImage: COUNTER_BG }}>

            <h1 className="font-bold text-gray-950 text-4xl ">We do things differently...</h1>
            <p className="overflow-auto whitespace-pre text-gray-950 text-sm m-[20px]">We focus on the details of everything we do. All to help businesses around  the world focus on <br /> what’s most important to them. We take pride in this.</p>

            <CounterTextElement data={counterData} />
        </div>
    );
};

export default Counter;
