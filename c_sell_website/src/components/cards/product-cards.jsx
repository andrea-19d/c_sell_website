import React from "react";
import Button from "../common/Button";

const ProductCards = ({ cards }) => {
    const { title, description, price, imageURL } = cards;

    return (
        <div className="w-[250px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all">
            <img
                src={imageURL}
                alt={title}
                className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <p className="mt-2 text-xl font-bold text-red-500">{price}</p>
                <div className="mt-4">
                    <Button text="BUY" />
                </div>
            </div>
        </div>
    );
};

export default ProductCards;
