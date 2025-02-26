import Button from "../common/button";

// @ts-ignore
const ProductCards = ({cards}) => {
    const {title, description, price, imageURL} = cards;

    return (
        <div
            className="w-[450px] h-[auto] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all
                        justify-center content-center">
            <img src={imageURL} alt={title} className=" bg-cover"/>
            <div className="p-5 mt-[24px] justify-self-center content-center ">
                <Button text="BUY" onClick={undefined}/>
            </div>
            <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <p className="mt-2 text-xl font-bold text-slate-600">{price}</p>
            </div>
        </div>
    );
};

export default ProductCards;
