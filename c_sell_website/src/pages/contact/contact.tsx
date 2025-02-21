import Banner from "../../components/shared/banner/banner";
import ContactForm from "../../components/forms/contactForm/contact";

const Contact = () => {
    return (
        <div className="contact-page-container flex flex-col bg-black" >
            <Banner page_title={"Contact Us"} />
            <div className="flex flex-row justify-center items-center gap-4 px-4 flex-wrap">
                <img
                    src="/src/assets/4.jpg"
                    alt="image"
                    className="w-[50%] h-auto rounded-lg shadow-md"
                />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
