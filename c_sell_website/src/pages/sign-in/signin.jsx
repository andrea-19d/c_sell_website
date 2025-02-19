import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../../components/common/button.jsx";
import Banner from "../../components/common/banner.jsx";

const SignIn = () => {
    const handleGoogleSignIn = async () => {
        try {
            // Sign in the user with Google Popup
            const { user } = await signInWithGooglePopup();

            // Create or update the user document in Firestore
            await createUserDocumentFromAuth(user);

            console.log("User signed in and document created:", user);
        } catch (error) {
            console.error("Error during sign-in:", error.message);
        }
    };

    return (
        <div>
            <Banner page_title="Sign In Page"/>
            <Button onClick={handleGoogleSignIn} text="SIGN IN" />
        </div>
    );
};

export default SignIn;
