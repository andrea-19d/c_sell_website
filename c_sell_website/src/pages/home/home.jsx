import Counter from '../../components/common/counter/counter';

const Home = () => {
    return (
        <div className="home-page-container">
            {/* Main Banner */}
            <div
                className="min-h-screen flex flex-col items-center justify-center text-white p-8 bg-cover bg-blend-multiply"
                style={{ backgroundImage: "linear-gradient(180deg, #222222, #000), url('/src/assets/bg.svg')" }}
            >
                {/* Logo */}
                <h1 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-4xl z-50">
                    SESELL
                </h1>

                {/* Text Banner */}
                <div className="flex flex-col items-center justify-center text-center text-5xl">
                    <h2>BUILD YOUR DREAM</h2>
                    <span className="text-3xl">AND STAND OUT FROM THE CROWD</span>

                    {/* Explore Button */}
                    <button className="w-[242px] h-[50px] mt-24 bg-gray-900 border-2 border-gray-500 cursor-pointer hover:bg-gray-800 transition">
                        EXPLORE
                    </button>
                </div>

                {/* Debugging Text */}
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </div>

            {/* About Section */}
            <div
                className="h-[30vh] bg-cover bg-blend-multiply"
                style={{ backgroundImage: "url('/src/assets/vector-hero.svg')" }}
            ></div>

            <Counter />
        </div>
    );
};

export default Home;
