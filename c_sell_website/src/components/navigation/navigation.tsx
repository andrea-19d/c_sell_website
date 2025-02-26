    import { useState } from 'react';
import { Link, Outlet } from 'react-router'; // Import Outlet

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-5 right-5 p-2 text-gray-300 hover:text-gray-400 focus:outline-none z-[1100]"
            >
                ☰ {/* You can replace this with an icon */}
            </button>

            {/* Navigation Menu */}
            <nav
                className={`fixed top-0 right-0 h-screen w-[250px] bg-neutral-900/40 backdrop-blur-lg 
                justify-center text-neutral-50 p-4 box-border transition-transform duration-300 ease-in-out z-[1000] 
                flex flex-col items-center default: isOpen ${isOpen ? "translate-x-0" : "translate-x-[150%]"
                }`}
            >
                <div className="flex flex-col items-center">
                    <Link to="/" className="mb-4 text-xl hover:text-gray-400 hover:underline">
                        Home
                    </Link>
                    <Link to="/about" className="mb-4 text-xl hover:text-gray-400 hover:underline">
                        About
                    </Link>
                    <Link to="/contact" className="mb-4 text-xl hover:text-gray-400 hover:underline">
                        Contact
                    </Link>
                    <Link to="/order" className="mb-4 text-xl hover:text-gray-400 hover:underline">
                        Order
                    </Link>
                    <Link to="/SignIn" className="mb-4 text-xl hover:text-gray-400 hover:underline">
                        Sign in
                    </Link>
                    <Link to="/SignUp" className="mb-4 text-xl hover:text-gray-400 hover:underline">
                        Sign up
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
