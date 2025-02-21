import Banner from "../../components/shared/banner/banner";
import SignInForm from "../../components/forms/signInForm/signInForm";

const SignIn = () => {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <div className="flex-grow-0">
                <Banner page_title="Sign In Page"/>
            </div>
            <div className="flex-grow flex justify-center item-center">
                <div className="relative w-[40%] h-[20%]">
                    <img
                        src="src/assets/11.png"
                        alt="car-image"
                        className="w-full h-full rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        style={{
                            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 2%, rgba(0,0,0,0) 100%)',
                            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
                        }}
                    />
                </div>
                <SignInForm/>
            </div>
        </div>
    );
};

export default SignIn;
