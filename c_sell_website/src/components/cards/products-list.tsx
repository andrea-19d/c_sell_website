import ProductCards from "./product-cards";

// eslint-disable-next-line react/prop-types
const ProductCardsList = ({ displayCount }: {displayCount?:any}) => {
    // Temporarily using hardcoded data until connected to a database
    // and creating an admin
    const products = [
        {
            id: 1,
            title: "1971 Plymouth GTX",
            description: "Classic American muscle car with a powerful V8 engine.",
            price: "45,000",
            currency: "USD",
            imageURL: "/src/assets/product-images/aut-22-bk0439-01p.jpg ",
        },
        {
            id: 2,
            title: "Ford Mustang 1967",
            description: "An iconic car with a timeless design and strong performance.",
            price: "55,000",
            currency: "USD",
            imageURL: "/src/assets/product-images/aut-22-bk0124-01p.jpg",
        },
        {
            id: 3,
            title: "Ford Mustang 1967",
            description: "An iconic car with a timeless design and strong performance.",
            price: "55,000",
            currency: "USD",
            imageURL: "/src/assets/product-images/aut-23-rk3385-01p.jpg",
        },
        {
            id: 4,
            title: "Ford Mustang 1967",
            description: "An iconic car with a timeless design and strong performance.",
            price: "55,000",
            currency: "USD",
            imageURL: "/src/assets/product-images/aut-23-rk3385-01p.jpg",
        },
        {
            id: 5,
            title: "Ford Mustang 1967",
            description: "An iconic car with a timeless design and strong performance.",
            price: "55,000",
            currency: "USD",
            imageURL: "/src/assets/product-images/aut-22-bk0124-01p.jpg",
        },
    ];

    // Slice the products array to only include the first `displayCount` items
    const displayedProducts = products.slice(0, displayCount);

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {displayedProducts.map((product) => (
                <ProductCards key={product.id} cards={product} />
            ))}
        </div>
    );
};

export default ProductCardsList;
