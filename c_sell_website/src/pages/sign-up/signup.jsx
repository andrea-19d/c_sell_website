import SignUpForm from "../../components/forms/signUp_form/signUpForm.jsx";
import Banner from "../../components/common/banner.jsx";

const Signup = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow-0">
                <Banner page_title="Sign Up Page" />
            </div>

            <div className="flex-grow flex justify-end items-center bg-black">
                <img src="src/assets/view-3d-car-model.jpg" alt="car-image"
                     className=" w-[30%] h-[auto] rounded-lg "/>
                <SignUpForm />
            </div>
        </div>
    );
};

export default Signup;
